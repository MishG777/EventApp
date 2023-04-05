import React, { Suspense } from "react";
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail");

  const { event, events } = data;

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventDetailPage;
//---------------------------------------------------------------------------
async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json({ message: "Could not fetch event ID!" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.event;
  }
}
//---------------------------------------------------------------------------
async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "Could not fetch events!" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

//---------------------------------------------------------------MAIN LOADER
export const loader = async ({ request, params }) => {
  const id = params.eventId;
  return defer({
    event: await loadEvent(id),
    events: loadEvents(),
  });
};
//---------------------------------------------------------------------DELETE
export async function action({ params, request }) {
  //code for deleting the event
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`,
    {
      method: request.method,
    }
  );

  if (!response.ok) {
    throw json({ message: "Could not DELETE event!" }, { status: 500 });
  }

  return redirect("/events");
}
