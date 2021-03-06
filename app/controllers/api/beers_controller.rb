class Api::BeersController < ApplicationController

  def create
    @beer = Beer.new(beer_params)
    @beer.logo.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'default_logo.png')), filename: 'default-logo.png', content_type: 'image/png')
    if @beer.save
      render :show
    else
      render json: errorMapper(@beer.errors.full_messages), status: 422
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
      render json: errorMapper(@beer.errors.full_messages), status: 422
    end
  end

  def destroy
    beer = Beer.find_by(id: params[:id])
    if beer
      beer.destroy
      render json: {}
    else
      render json: 'Beer not found', status: 404
    end
  end

  private

  def beer_params
    params.require(:beer).permit(:name, :style, :abv, :ibu, :description, :brewery, :brewery_id)
  end

  def errorMapper(errors)
    errors.map do |error|
      if error == "Name can't be blank"
        error = "Please enter a name."
      elsif error == "Style can't be blank"
        error = "Please choose a style."
      elsif error == "Abv can't be blank"
        error = "Please enter an ABV."
      elsif error == "Description can't be blank"
        error = "Please enter a description."
      elsif error == "Brewery can't be blank"
        error = "Please enter an exitsting brewery."
      else
      end
    end
  end

end
