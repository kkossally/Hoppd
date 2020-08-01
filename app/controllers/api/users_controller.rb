class Api::UsersController < ApplicationController
  
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: [@user.errors.full_messages.sort.first], status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :f_name, :l_name, :birthday)
  end

end