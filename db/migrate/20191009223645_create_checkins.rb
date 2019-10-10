class CreateCheckins < ActiveRecord::Migration[5.2]
  def change
    create_table :checkins do |t|
      t.text :body
      t.float :rating, null: false
      t.integer :author_id, null: false
      t.integer :beer_id, null: false

      t.timestamps
    end
    add_index :checkins, :author_id
    add_index :checkins, :beer_id
  end
end