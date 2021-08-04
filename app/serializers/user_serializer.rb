class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :profile_img, :hosted_event_ids
  has_many :rsvps
  # has_many :hosted_events
end
