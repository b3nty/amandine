class AddAddressToFormBoutique < ActiveRecord::Migration[5.1]
  def self.up
    add_column :form_boutiques, :address, :string
    add_column :form_boutiques, :city, :string
    add_column :form_boutiques, :cp, :string
  end
end
