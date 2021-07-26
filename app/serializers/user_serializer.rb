class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password, :profile_img, :rsvps
end
