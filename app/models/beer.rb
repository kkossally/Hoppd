# == Schema Information
#
# Table name: beers
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  style       :string           not null
#  abv         :float            not null
#  ibu         :integer          not null
#  description :text             not null
#  brewery_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Beer < ApplicationRecord
  validates :name, :style, :abv, :ibu, :description, :brewery_id, presence: true
  validates :name, uniqueness: { scope: :brewery_id, message: "breweries cannot have duplicate beer names"}

  belongs_to :brewery
end
