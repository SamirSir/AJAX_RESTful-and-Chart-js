class CreateGrades < ActiveRecord::Migration[6.0]
  def change
    create_table :grades do |t|
      t.string :name
      t.integer :students

      t.timestamps
    end
  end
end
