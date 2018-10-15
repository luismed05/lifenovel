Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :index] do
      resources :user_relationships, only: [:create, :update, :destroy]
    end
    resources :posts, only: [:index, :create, :update, :destroy] do
      resources :comments, only: [:create]
    end
    resources :comments, only: [:update, :destroy]
  end
end
