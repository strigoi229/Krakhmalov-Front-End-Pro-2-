import { RouterProvider } from "react-router-dom";
import { router } from "./components/Router";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
