class AddFormToFormPopup < ActiveRecord::Migration[5.2]
  def self.up
    add_column :form_popups, :name, :string
    add_column :form_popups, :sport, :string
    add_column :form_popups, :number, :string
    add_column :form_popups, :creneau, :string
  end
end
