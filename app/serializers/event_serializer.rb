class EventSerializer < ActiveModel::Serializer
  attributes :id,
             :name,
             :nice_timestamp,
             :location,
             :description,
             :cost,
             :public,
             :event_img,
             :user_id,
             :attending_users
end
