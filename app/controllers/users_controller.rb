class UsersController < ApplicationController
  def index
    users = User.all
    render(json: users)
  end

  def show
    user = User.find(params[:id])

    if user
      render(json: user)
    else
      render(json: { error: 'User not found' }, status: 404)
    end
  end

  def create
    user = User.new(user_params)

    if user.valid?
      user.save
      render(json: user, status: 201)
    else
      render(json: { errors: user.errors.full_messages })
    end
  end

  def update
    user = User.find(params[:id])

    if user
      user.update(user_params)
      render(json: user)
    else
      render(json: { errors: user.errors.full_messages })
    end
  end

  def destroy
    user = User.find(params[:id])

    if user
      user.destroy
      render(json: {}, status: 204)
    else
      render(json: { error: 'User not found' }, status: 404)
    end
  end

  private

  def user_params
    params.permit(:username, :email, :password, :profile_img)
  end
end
