class Artist < ApplicationRecord
  has_many :fav_artists
  has_many :users, through: :fav_artists
  has_many :setlists
end
