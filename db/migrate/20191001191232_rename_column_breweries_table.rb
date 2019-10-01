class RenameColumnBreweriesTable < ActiveRecord::Migration[5.2]
  def change
    rename_column :breweries, :type, :brewery_type
  end
end
