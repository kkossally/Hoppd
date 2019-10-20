json.extract! beer, :id, :name, :style, :abv, :ibu, :description, :checkins
if beer.logo.attached?
  json.logoURL url_for(beer.logo)
end
json.brewery beer.brewery.name