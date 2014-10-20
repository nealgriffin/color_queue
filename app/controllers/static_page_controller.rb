class StaticPageController < ApplicationController
  def home
  end

  def push_color
  	new_color = Color.new(color_params)
  	new_color.save
  	@pulled_color = Color.first.destroy
  	respond_to do |format|
  		format.js
  	end
  end
  private
  	def color_params
  		params.permit(:color_one, :color_two, :color_three)
  	end
end
