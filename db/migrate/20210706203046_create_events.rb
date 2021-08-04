class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table(:events) do |t|
      t.string(:name)
      t.datetime(:time)
      t.string(:location)
      t.text(:description)
      t.integer(:cost)
      t.boolean(:public)
      t.string(:event_img)
      t.integer(:user_id)

      t.timestamps
    end
  end
end
