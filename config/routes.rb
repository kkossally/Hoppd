Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :beers, only: [:index, :show, :create, :update, :destroy]
    resources :breweries, only: [:index]
    resources :checkins, only: [:index, :show, :create, :destroy]
    resources :favorites, only: [:create, :destroy]
  end

  root "static_pages#root"
end
