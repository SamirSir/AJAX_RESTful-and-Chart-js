Rails.application.routes.draw do
  
  root "orders#home"
  get "contact/btn_panel"
  get "chart/chart", as: 'chart'

  resources :orders
  get "home", to: "orders#home"
  post "orders/new_order"
  put "demo/orders/:id" => "orders#update_order"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
	