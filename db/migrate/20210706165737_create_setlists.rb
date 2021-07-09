class CreateSetlists < ActiveRecord::Migration[6.1]
  def change
    create_table :setlists do |t|
      t.string :artist_name
      t.integer :artist_id
      t.string :setlistId

      t.timestamps
    end
  end
end
