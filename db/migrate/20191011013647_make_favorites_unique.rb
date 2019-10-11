class MakeFavoritesUnique < ActiveRecord::Migration[5.2]
  def change
    add_index :favorites, [:user_id, :beer_id], unique: true
  end
end
