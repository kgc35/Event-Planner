class User < ApplicationRecord
  has_many :rsvps
  has_many :events, through: :rsvps
  has_many :hosted_events, class_name: 'Event'
  has_secure_password

  validates :username, :email, uniqueness: { case_sensitive: false }
  validates :username, :email, :profile_img, presence: true
end
