class UpdateUsersBirthdayDataType < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :birthday, :date, using: 'birthday::date', null: false
  end
end
