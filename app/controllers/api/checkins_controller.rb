class Api::CheckinsController < ApplicationController

  def create
    @checkin = Checkin.new(checkin_params)
    @checkin.author_id = current_user.id
    if @checkin.save
      render :show
    else
      render json: @checkin.errors.full_messages, status: 422
    end
  end

  def index
    @checkins = Checkin.all
  end

  def show
    @checkin = Checkin.find_by(id: params[:id])
    if @checkin
      render :show
    else
      render json: 'Checkin not found', status: 404
    end
  end

  def destroy
    checkin = Checkin.find_by(id: params[:id])
    if checkin
      checkin.destroy
      render json: {}
    else
      render json: 'Checkin not found', status: 404
    end
  end

  private

  def checkin_params
    params.require(:checkin).permit(:id, :body, :rating, :author_id, :beer_id)
  end

end
