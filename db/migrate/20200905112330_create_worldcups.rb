class CreateWorldcups < ActiveRecord::Migration[6.0]
  def change
    create_table :worldcups do |t|
      t.string :country
      t.integer :won
      t.integer :final

      t.timestamps
    end
  end
end
