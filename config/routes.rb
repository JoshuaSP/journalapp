Rails.application.routes.draw do
  root to: 'static_pages#root'
  resources :posts, only: [:index, :create, :destroy, :update, :show], default: 'json'
end
