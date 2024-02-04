import Dashboard from "dashboard/Dashboard";
import Root from "./dashboard/Root";
// import Root from "./dashboard/Root";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, createHashRouter } from "react-router-dom";
import Login from "dashboard/Login";




const router = createHashRouter(
  createRoutesFromElements(
    <><Route path="/" element={<Root />}>

      <Route index element={< Dashboard />}></Route>
      
      
      

      {/* ... etc.*/}

    </Route>
    <Route path="login" element={<Login />}></Route>
    </>
    

    
    
  )
);

function App() {
  return (
    <RouterProvider router={router} />

  );
}

export default App;
