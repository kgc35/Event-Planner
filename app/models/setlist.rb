class Setlist < ApplicationRecord
  belongs_to :artist

  def create
    setlist = Setlist.new(setlist_params)

    if setlist.valid?
      setlist.save
      render(json: setlist)
    else
      render(json: { errors: setlist.errors.full_messages })
    end
  end

  def destroy
    setlist = Setlist.find(params[:id])

    if setlist
      setlist.destroy
      render(json: {}, status: 204)
    else
      render(json: { error: 'Setlist not found' }, status: 404)
    end
  end

  private

  def setlist_params
    params.permit(:artist_name, :artist_id, :setlistId)
  end
end
