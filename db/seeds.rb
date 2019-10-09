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
Brewery.create!(name: 'Yesfolk Tonics', brewery_type: 'Nano Brewery', locale: 'Troy, NY United States')
Brewery.create!(name: 'Charm City Meadworks', brewery_type: 'Meadery', locale: 'Baltimore, MD United States')
Brewery.create!(name: 'Stone Brewing', brewery_type: 'Regional Brewery', locale: 'Escondido, CA United States')
Brewery.create!(name: 'Guinness', brewery_type: 'Macro Brewery', locale: 'Saint James\' Gate, Leinster Ireland')
Brewery.create!(name: 'Lagunitas Brewing Company', brewery_type: 'Macro Brewery', locale: 'Petaluma, CA United States')
Brewery.create!(name: 'Tree House Brewing Company', brewery_type: 'Regional Brewery', locale: 'Charlton, MA United States')
Brewery.create!(name: 'Samuel Smith', brewery_type: 'Micro Brewery', locale: 'Tadcaster, North Yorkshire England')

beer1 = Beer.create!(
  name: 'Goose IPA', 
  style: 'IPA - English', 
  abv: 5.9, 
  ibu: 55, 
  description: "Goose Island’s flagship IPA.", 
  brewery_id: Brewery.find_by(name: 'Goose Island Beer Co.').id
)

beer2 = Beer.create!(
  name: 'Delirium Tremens', 
  style: 'Belgian Strong Golden Ale', 
  abv: 8.5, ibu: 26, 
  description: "The allusion to pink elephants and the choice of names is not due to chance.", 
  brewery_id: Brewery.find_by(name: 'Huyghe Brewery').id
)

beer3 = Beer.create!(
  name: '#9', 
  style: 'Pale Ale - American', 
  abv: 5.1, ibu: 20, 
  description: "A beer cloaked in secrecy.", 
  brewery_id: Brewery.find_by(name: 'Magic Hat Brewing Company').id
)

beer4 = Beer.create!(
  name: 'Yaupon', 
  style: 'Kombucha', 
  abv: 0.5, 
  description: "Smooth and wild with cucumber, guava + mint notes. Made with wild yaupon holly sustainably hand-harvested in Texas. Fermented in locally crafted American Oak Barrels.", 
  brewery_id: Brewery.find_by(name: 'Yesfolk Tonics').id
)

beer5 = Beer.create!(
  name: 'Elderberry', 
  style: 'Mead - Melomel', 
  abv: 6.9, 
  description: "Bitter red berry and warm honey comprise this beautifully colored honey wine. Cheers to the fruit you'd rather drink than eat! ", 
  brewery_id: Brewery.find_by(name: 'Charm City Meadworks').id
)

beer6 = Beer.create!(
  name: 'Stone IPA', 
  style: 'IPA - American', 
  abv: 6.9, 
  ibu: 71, 
  description: "This golden beauty explodes with citrusy flavor and hop aromas, all perfectly balanced by a subtle malt character.", 
  brewery_id: Brewery.find_by(name: 'Stone Brewing').id 
)

beer7 = Beer.create!(
  name: 'Guinness Draught', 
  style: 'Stout - Irish Dry', 
  abv: 4.2, 
  ibu: 45, 
  description: "Swirling clouds tumble as the storm begins to calm. Settle. Breathe in the moment, then break through the smooth, light head to the bittersweet reward.", 
  brewery_id: Brewery.find_by(name: 'Guinness').id
)

beer8 = Beer.create!(
  name: 'IPA', 
  style: 'IPA - American', 
  abv: 6.2, 
  ibu: 52, 
  description: "Lagunitas IPA was our first seasonal way back in 1995. The recipe was formulated with malt and hops working together to balance it all out on your ‘buds so you can knock back more than one without wearing yourself out. Big on the aroma with a hoppy-sweet finish that’ll leave you wantin’ another sip.", 
  brewery_id: Brewery.find_by(name: 'Lagunitas Brewing Company').id
)

beer9 = Beer.create!(
  name: 'Haze', 
  style: 'IPA - Imperial / Double', 
  abv: 8.2, 
  ibu: 90, 
  description: "Our Double IPA! We smell a ton of peach on the nose, with complimentary notes of orange and passionfruit. The flavor is similar with a blast of citrus fruit & peach quickly followed by a bounty of tropical fruit. A lingering and pleasant saturated hop oil finish awaits. . . . A real juice bomb of a beer! ", 
  brewery_id: Brewery.find_by(name: 'Tree House Brewing Company').id
)

beer10 = Beer.create!(
  name: 'Oatmeal Stout', 
  style: 'Stout - Oatmeal', 
  abv: 5, 
  ibu: 32, 
  description: "Brewed with well water (the original well at the Old Brewery, sunk in 1758, is still in use, with the hard well water being drawn from 85 feet underground); fermented in ‘stone Yorkshire squares’ to create an almost opaque, wonderfully silky and smooth textured ale with a complex medium dry palate and bittersweet finish.", 
  brewery_id: Brewery.find_by(name: 'Samuel Smith').id
)

# photo1 = open("https://hoppd-aa-dev.s3.us-east-2.amazonaws.com/goose_ipa_logo.jpeg")
# photo2 = open("https://hoppd-aa-dev.s3.us-east-2.amazonaws.com/2QwvYACxxUgiUZtKCcXwwhSU")
# photo3 = open("https://hoppd-aa-dev.s3.us-east-2.amazonaws.com/no_9_logo.jpeg")
# photo4 = open("https://hoppd-aa-dev.s3.us-east-2.amazonaws.com/default_logo.png")
# photo5 = open("https://hoppd-aa-dev.s3.us-east-2.amazonaws.com/elderberry_logo.jpeg")
# photo6 = open("https://hoppd-aa-dev.s3.us-east-2.amazonaws.com/stone_ipa_logo.jpeg")
# photo7 = open("https://hoppd-aa-dev.s3.us-east-2.amazonaws.com/guinness_draught_logo.jpeg")
# photo8 = open("https://hoppd-aa-dev.s3.us-east-2.amazonaws.com/lagunitas_ipa_logo.jpeg")
# photo9 = open("https://hoppd-aa-dev.s3.us-east-2.amazonaws.com/haze_logo.jpeg")
# photo10 = open("https://hoppd-aa-dev.s3.us-east-2.amazonaws.com/oatmeal_logo.jpeg")

# beer1.photo.attach(io: photo1, filename: "logo1.jpg")
# beer2.photo.attach(io: photo2, filename: "logo2.jpg")
# beer3.photo.attach(io: photo3, filename: "logo3.jpg")
# beer4.photo.attach(io: photo4, filename: "logo4.jpg")
# beer5.photo.attach(io: photo5, filename: "logo5.jpg")
# beer6.photo.attach(io: photo6, filename: "logo6.jpg")
# beer7.photo.attach(io: photo7, filename: "logo7.jpg")
# beer8.photo.attach(io: photo8, filename: "logo8.jpg")
# beer9.photo.attach(io: photo9, filename: "logo9.jpg")
# beer10.photo.attach(io: photo10, filename: "logo10.jpg")

beer1.logo.attach(io: File.open("/Users/aa/Desktop/logos/goose_ipa_logo.jpeg"), filename: "goose_ipa_logo.jpeg")
beer2.logo.attach(io: File.open("/Users/aa/Desktop/logos/tremens_logo.jpeg"), filename: "tremens_logo.jpeg")
beer3.logo.attach(io: File.open("/Users/aa/Desktop/logos/no_9_logo.jpeg"), filename: "no_9_logo.jpeg")
beer4.logo.attach(io: File.open("/Users/aa/Desktop/logos/default_logo.png"), filename: "default_logo.png")
beer5.logo.attach(io: File.open("/Users/aa/Desktop/logos/elderberry_logo.jpeg"), filename: "elderberry_logo.jpeg")
beer6.logo.attach(io: File.open("/Users/aa/Desktop/logos/stone_ipa_logo.jpeg"), filename: "stone_ipa_logo.jpeg")
beer7.logo.attach(io: File.open("/Users/aa/Desktop/logos/guinness_draught_logo.jpeg"), filename: "guinness_draught_logo.jpeg")
beer8.logo.attach(io: File.open("/Users/aa/Desktop/logos/lagunitas_ipa_logo.jpeg"), filename: "lagunitas_ipa_logo.jpeg")
beer9.logo.attach(io: File.open("/Users/aa/Desktop/logos/haze_logo.jpeg"), filename: "haze_logo.jpeg")
beer10.logo.attach(io: File.open("/Users/aa/Desktop/logos/oatmeal_logo.jpeg"), filename: "oatmeal_logo.jpeg")