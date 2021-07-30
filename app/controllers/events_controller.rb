class EventsController < ApplicationController
  def index
    events = Event.all
    render(json: events)
  end

  def show
    events = Event.find(params[:id])

    if events
      render(json: events)
    else
      render(json: { error: 'Event not found' }, status: 404)
    end
  end

  def create
    event = Event.new(event_params)

    if event.valid?
      event.save
      Rsvp.create(user_id: event_params[:user_id], event_id: event.id, accepted: true)

      render(json: event, status: 201)
    else
      render(json: { errors: event.errors.full_messages })
    end
  end

  def update
    event = Event.find(params[:id])

    if event
      event.update(event_params)
      render(json: event)
    else
      render(json: { errors: event.errors.full_messages })
    end
  end

  def destroy
    event = Event.find(params[:id])

    if event
      event.destroy
      render(json: {}, status: 204)
    else
      render(json: { error: 'Event not found' }, status: 404)
    end
  end

  private

  def event_params
    params.permit(:name, :time, :location, :description, :cost, :public, :event_img, :user_id)
  end
end
