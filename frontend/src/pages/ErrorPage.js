import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";

//component which we use in errorElement --> App.js
function Error() {
  const error = useRouteError();
  console.log(error);

  let title = "An error occured!";
  let message = "Something went wrong here!";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Page Not Found!";
    message = error.data;
  }

  return (
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
  );
}

export default Error;
