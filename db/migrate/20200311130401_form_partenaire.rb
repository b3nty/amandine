class FormPartenaire < ActiveRecord::Migration[5.1]
  def change
    create_table :form_Partenaires do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :company_name
      t.string :phone
      t.string :message

      t.timestamps null: false
    end
  end
end
