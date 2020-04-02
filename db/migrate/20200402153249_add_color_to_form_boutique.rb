class AddColorToFormBoutique < ActiveRecord::Migration[5.1]
  def change
    def self.up
      add_column :form_boutiques, :color, :string
    end
  end
end
