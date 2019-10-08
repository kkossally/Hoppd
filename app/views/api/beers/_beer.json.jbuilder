json.extract! beer, :id, :name, :style, :abv, :ibu, :description, :brewery_id
json.logoURL url_for(beer.logo)
