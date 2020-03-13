class AddQuantityToFormBoutique < ActiveRecord::Migration[5.1]
  def self.up
    add_column :form_boutiques, :quantity, :integer
    add_column :form_boutiques, :size, :string
    add_column :form_boutiques, :product, :string
  end
end
