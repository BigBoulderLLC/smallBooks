Rails.application.routes.draw do

	root 'pages#app'
	match '*path', to: 'pages#app', via: :all
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
