# == Schema Information
#
# Table name: checkins
#
#  id         :bigint           not null, primary key
#  body       :text
#  rating     :float            not null
#  author_id  :integer          not null
#  beer_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Checkin < ApplicationRecord

  validates :rating, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: :User

  belongs_to :beer,
    foreign_key: :beer_id,
    primary_key: :id,
    class_name: :Beer

end
