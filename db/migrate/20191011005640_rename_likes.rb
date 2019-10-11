class RenameLikes < ActiveRecord::Migration[5.2]
  def change
    rename_table :lists, :favorites
  end
end
