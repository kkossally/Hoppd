# == Schema Information
#
# Table name: breweries
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  brewery_type :string           not null
#  locale       :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Brewery < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :brewery_type, :locale, presence: true

  has_many :beers
end
