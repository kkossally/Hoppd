class Api::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: errorMapper(@user.errors.full_messages), status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :f_name, :l_name, :birthday)
  end

   def errorMapper(errors)
    errors = @user.errors.full_messages.map do |error|
        if error == "F name can't be blank"
          error = "Please enter your first name."
        elsif error == "L name can't be blank"
          error = "Please enter your last name."
        elsif error == "Password is too short (minimum is 5 characters)"
          error = "Please enter a password of at least 5 characters."
        elsif error == "Password confirmation can't be blank"
          error = "Please confirm your password."
        elsif error == "Username can't be blank"
          error = "Please enter a unique username."
        elsif error == "Email can't be blank"
          error = "Please enter a valid email address."
        elsif error == "Birthday can't be blank"
          error = "Please enter your full birthday."
        else
        end
      end
  end

end