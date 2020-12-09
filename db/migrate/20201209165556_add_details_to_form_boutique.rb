class AddDetailsToFormBoutique < ActiveRecord::Migration[5.2]
  def self.up
    add_column :form_boutiques, :size_l, :string
    add_column :form_boutiques, :size_s, :string
    add_column :form_boutiques, :color_s, :string
  end
end
