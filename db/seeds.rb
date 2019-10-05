# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Brewery.delete_all
Beer.delete_all

User.create!(username: 'jbarnes', email: 'jbarnes@example.com', password:'hiphop', f_name: 'Julian', l_name: 'Barnes', birthday: "19460119")
User.create!(username: 'gbrooks', email: 'gbrooks@example.com', password:'hiphop', f_name: 'Gwendolyn', l_name: 'brooks', birthday: "19170607")
User.create!(username: 'ngeiman', email: 'ngaiman@example.com', password:'hiphop', f_name: 'Neil', l_name: 'Gaiman', birthday: "19601110")

Brewery.create!(name: 'Huyghe Brewery', brewery_type: 'Micro Brewery', locale: 'Melle, Vlaanderen Belgium')
Brewery.create!(name: 'Magic Hat Brewing Company', brewery_type: 'Regional Brewery', locale: 'South Burlington, VT United States')
Brewery.create!(name: 'Goose Island Beer Co.', brewery_type: 'Macro Brewery', locale: 'Chicago, IL United States')

Beer.create!(name: 'Goose IPA', style: 'IPA - English', abv: 5.9, ibu: 55, description: "Goose Island’s flagship IPA.", brewery_id: Brewery.find_by(name: 'Goose Island Beer Co.').id )
Beer.create!(name: 'Delirium Tremens', style: 'Belgian Strong Golden Ale', abv: 8.5, ibu: 26, description: "The allusion to pink elephants and the choice of names is not due to chance.", brewery_id: Brewery.find_by(name: 'Huyghe Brewery').id )
Beer.create!(name: '#9', style: 'Pale Ale - American', abv: 5.1, ibu: 20, description: "A beer cloaked in secrecy", brewery_id: Brewery.find_by(name: 'Magic Hat Brewing Company').id )