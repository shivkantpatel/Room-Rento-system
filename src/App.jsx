import { Outlet, NavLink } from "react-router-dom";
import NavContainer from "./component/NavBar/NavContainer";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      {/* Navigation bar */}
      <div>
        <NavContainer />
      </div>


      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

      {/* Main content area */}
      <div className="w-full h-[91vh] flex justify-between">
        {/* Left panel with NavLink */}
        <div className=" w-[15%] p-4 bg-red-50">
          <h1>hello</h1>
        </div>

        {/* Right panel for child routes */}
        <div className=" w-[85%] ">
          <Outlet />
          
        </div>
      </div>
    </>
  );
}

export default App;


