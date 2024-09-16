import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
function Error() {
    const error = useRouteError();
    console.log(error)
  
    return (
        
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="font-extrabold">
          {error.statusText || error.message}
        </p>
      <Link to="/"><button className="hover:scale-110 border-white bg-gray-300 shadow-lg p-2 rounded-lg mt-6">Home page</button></Link>  
      </div>
    );
  }
  
  export default Error;