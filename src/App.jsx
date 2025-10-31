import { Outlet, NavLink } from "react-router-dom";
import NavContainer from "./component/NavBar/NavContainer";

function App() {
  return (
    <>
      {/* Navigation bar */}
      <div>
        <NavContainer />
      </div>

      {/* Main content area */}
      <div className="w-full h-[91vh] flex justify-between">
        {/* Left panel with NavLink */}
        <div className="bg-red-100 w-[15%] p-4">
          <h1>hello</h1>
        </div>

        {/* Right panel for child routes */}
        <div className="bg-green-100 w-[85%] p-4">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
