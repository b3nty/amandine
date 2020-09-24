class AddNumberToFormPopup < ActiveRecord::Migration[5.2]
  def self.up
    add_column :form_popups, :phone_number, :string
  end
end
