class RsvpsController < ApplicationController
  def create
    rsvp = Rsvp.new(rsvp_params)

    if rsvp.valid?
      rsvp.save
      render(json: rsvp, status: 201)
    else
      render(json: { errors: rsvp.errors.full_messages })
    end
  end

  def destroy
    rsvp = Rsvp.find(params[:id])

    if rsvp
      rsvp.destroy
      render(json: {}, status: 204)
    else
      render(json: { error: 'RSVP not found' }, status: 404)
    end
  end

  private

  def rsvp_params
    params.permit(:user_id, :event_id, :boolean)
  end
end
