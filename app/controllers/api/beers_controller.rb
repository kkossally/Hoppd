class Api::BeersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def edit
    
  end

  def create
    @beer = Beer.new(beer_params)
    if @beer.save
      render :show
    else
      render json: @beer.errors.full_messages, status: 422
    end
  end

  def index
    @beers = Beer.all
  end

  def show
    @beer = Beer.find_by(id: params[:id])
    if @beer
      render :show
    else
      render json: 'Beer not found', status: 404
    end 
  end

  def update
    @beer = Beer.find_by(id: params[:id])
    if @beer.update(beer_params)
      render :show
    else
      render json: @beer.errors.full_messages, status: 422
    end
  end

  def destroy
    beer = Beer.find_by(id: params[:id])
    if beer
      beer.destroy
      redirect_to 'api/beers/'
    else
      render json: 'Beer not found', status: 404
    end
  end

  private

  def beer_params
    params.require(:beer).permit(:name, :style, :abv, :ibu, :description, :brewery_id)
  end

end
