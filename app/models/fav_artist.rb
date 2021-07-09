class FavArtist < ApplicationRecord
  belongs_to :artist
  belongs_to :user

  def create
    fav_artist = FavArtist.new(fav_artist_params)

    if fav_artist.valid?
      fav_artist.save
      render(json: fav_artist)
    else
      render(json: { errors: fav_artist.errors.full_messages })
    end
  end

  def destroy
    fav_artist = FavArtist.find(params[:id])

    if fav_artist
      fav_artist.destroy
      render(json: {}, status: 204)
    else
      render(json: { error: 'User not found' }, status: 404)
    end
  end

  private

  def fav_artist_params
    params.permit(:artist_name, :user_id, :artist_id)
  end
end
