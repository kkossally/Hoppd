json.extract! beer, :id, :name, :style, :abv, :ibu, :description, :checkins
# debugger
if beer.logo.attached?
  json.logoURL url_for(beer.logo)
end
json.brewery beer.brewery.name