class Event < ApplicationRecord
  has_many :rsvps
  has_many :users, through: :rsvps
  belongs_to :user
end
