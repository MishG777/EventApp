import { useLoaderData, json } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();
  const { events } = data;
  // console.log(data);

  // if (data.isError) {
  //   //can access isError from data because anything
  //   //we return from loader can be accessed by useLoaderData()
  //   return <p>{data.message}</p>;
  // }

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch!" };
    // throw new Error({ message: "Could not fetch events!" });
    // throw new Response(JSON.stringify({ message: "Could not fetch events!" }), {
    //   status: 500,
    // });
    throw json({ message: "Could not fetch events!" }, { status: 500 });
  } else {
    return response;
  }
};
