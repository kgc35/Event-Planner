class Artist < ApplicationRecord
  has_many :fav_artists
  has_many :users, through: :fav_artists
  has_many :setlists

  def create
    artist = Artist.new(artist_params)

    if artist.valid?
      artist.save
      render(json: artist)
    else
      render(json: { errors: artist.errors.full_messages })
    end
  end

  def destroy
    artist = Artist.find(params[:id])

    if artist
      artist.destroy
      render(json: {}, status: 204)
    else
      render(json: { error: 'Artist not found' }, status: 404)
    end
  end

  private

  def artist_params
    params.permit(:name, :mbid)
  end
end
