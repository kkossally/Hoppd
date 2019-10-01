class RemoveStringColumnBreweriesTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :breweries, :string
  end
end
