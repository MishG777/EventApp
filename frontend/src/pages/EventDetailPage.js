import React from "react";
import { useRouteLoaderData, json, redirect } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail");

  const { event } = data;

  return <EventItem event={event} />;
};

export default EventDetailPage;

export const loader = async ({ request, params }) => {
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`
  );

  if (!response.ok) {
    throw json({ message: "Could not fetch event ID!" }, { status: 500 });
  } else {
    return response;
  }
};

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
