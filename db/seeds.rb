# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: 'kent', email: 'kent@gmail.com', password: 'abc123', profile_img: 'img')
Event.create(name: 'Birthday Party', user_id: User.first.id, time: Time.now)
Event.create(name: 'Picnic', user_id: User.first.id, time: Time.now)
Rsvp.create(user_id: User.first.id, event_id: Event.first.id, accepted: true)
