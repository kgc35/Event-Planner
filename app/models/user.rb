class User < ApplicationRecord
  has_many :fav_artists
  has_many :artists, through: :fav_artists

  validates :username, :email, uniqueness: true
  validates :username, :email, :password, presence: true
end
