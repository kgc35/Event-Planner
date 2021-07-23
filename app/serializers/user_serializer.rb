class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password, :fav_artists
end
