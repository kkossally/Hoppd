json.extract! beer, :id, :name, :style, :abv, :ibu, :description
json.logoURL url_for(beer.logo)
json.brewery beer.brewery.name