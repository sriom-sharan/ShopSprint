import { useRouteError } from "react-router-dom";

 const Error = () => {
    const err = useRouteError();
    console.log(err)
  return (
    <div className="error">
        <h1 className="f-light">{err.status} &nbsp;</h1>
        <h1> Something went wrong..!</h1>
        <h6>{err.data}</h6>
    </div>
  )
}
export default Error;
