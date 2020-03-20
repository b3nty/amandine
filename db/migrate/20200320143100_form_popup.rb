class FormPopup < ActiveRecord::Migration[5.1]
  def change
    create_table :form_popups do |t|
      t.string :email

      t.timestamps null: false
    end
  end
end
