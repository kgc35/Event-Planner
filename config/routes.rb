Rails.application.routes.draw do
  resources :events, only: %i[index show create update destroy]
  resources :rsvps, only: %i[index create destroy]
  resources :users, only: %i[index show create update destroy]
  post '/login', to: 'users#login'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
