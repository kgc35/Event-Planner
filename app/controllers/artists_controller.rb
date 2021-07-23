class ArtistsController < ApplicationController
  def index
    artists = Artist.all
    render(json: artists)
  end

  def show
    artist = Artist.find(params[:id])

    if artist
      render(json: artist)
    else
      render(json: { error: 'Artist not found' }, status: 404)
    end
  end

  def create
    artist = Artist.new(artist_params)

    if artist.valid?
      artist.save
      render(json: artist, status: 201)
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
