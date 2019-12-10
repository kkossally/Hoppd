class Api::BreweriesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @breweries = Brewery.all
  end

end