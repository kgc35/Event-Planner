class CreateFavArtists < ActiveRecord::Migration[6.1]
  def change
    create_table :fav_artists do |t|
      t.string :artist_name
      t.integer :user_id
      t.integer :artist_id

      t.timestamps
    end
  end
end
