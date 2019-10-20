json.extract! checkin, :id, :body, :rating
json.author checkin.author.f_name
json.beer do
  json.id checkin.beer.id
  json.name checkin.beer.name
  json.brewery checkin.beer.brewery.name
  # json.logoURL url_for(checkin.beer.logo)
end