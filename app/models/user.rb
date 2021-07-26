class User < ApplicationRecord
  has_many :rsvps
  has_many :events, through: :rsvps
  has_many :hosted_events, class_name: 'Event'
  has_secure_password

  validates :username, :email, uniqueness: true
  validates :username, :email, :password, presence: true
end
