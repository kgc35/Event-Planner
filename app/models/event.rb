class Event < ApplicationRecord
  has_many :rsvps
  has_many :users, through: :rsvps
  belongs_to :user

  validates :name, :time, :location, :description, :cost, :public, :event_img, :user_id, presence: true

  def attending_users
    users.map { |user| { username: user.username, profile_img: user.profile_img } }
  end

  def nice_timestamp
    time.strftime('%m-%d-%Y %I:%M%p')
  end
end
