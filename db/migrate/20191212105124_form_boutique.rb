class FormBoutique < ActiveRecord::Migration[5.1]
  def change
    create_table :form_boutiques do |t|
      t.string :status
      t.string :name
      t.string :email
      t.string :phone
      t.string :message

      t.timestamps null: false
    end
  end
end
