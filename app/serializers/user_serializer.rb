class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :profile_img
  has_many :rsvps
  has_many :hosted_events
end
