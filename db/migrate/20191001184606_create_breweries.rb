class CreateBreweries < ActiveRecord::Migration[5.2]
  def change
    create_table :breweries do |t|
      t.string :name, null: false
      t.string :string, null: false
      t.string :type, null: false
      t.string :locale, null: false
      
      t.timestamps
    end
    add_index :breweries, :name, unique: true
  end
end
