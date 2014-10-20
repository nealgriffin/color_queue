class CreateColors < ActiveRecord::Migration
  def change
    create_table :colors do |t|
      t.string :color_one
      t.string :color_two
      t.string :color_three

      t.timestamps null: false
    end
  end
end
