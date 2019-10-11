class Api::FavoritesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @favorite = Favorite.new(favorite_params)
    @favorite.user_id = current_user.id
    if @favorite.save
      render json: {}
    else
      render json: @favorite.errors.full_messages, status: 422
    end
  end

  def destroy
    favorite = Favorite.find_by(id: params[:id])
    if favorite
      favorite.destroy
      render json: {}
    else
      render json: 'Favorite not found', status: 404
    end
  end

  private

  def favorite_params
    params.require(:favorite).permit(:user_id, :beer_id)
  end

end
