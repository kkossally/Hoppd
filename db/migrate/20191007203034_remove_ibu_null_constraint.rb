class RemoveIbuNullConstraint < ActiveRecord::Migration[5.2]
  def change
    change_column :beers, :ibu, :integer, :null => true
  end
end
