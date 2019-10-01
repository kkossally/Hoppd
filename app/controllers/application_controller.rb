class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?

  private

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end
  
  def login(user)
    session[:session_token] = user.reset_session_token!
  end

  def ensure_logged_in
    unless current_user
      render json: ["Please login"], status: 401
    end
  end

end