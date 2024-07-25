import "./App.css";

import Login from "./pages/login/Login";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Signup from "./pages/signup/Signup";
import AddItem from "./pages/dashboard/AddItem";
import ViewSingleItem from "./pages/dashboard/ViewSingleItem";
import EditItem from "./pages/dashboard/EditItem";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/items" element={<Dashboard />} />
        <Route path="/items/additems" element={<AddItem />} />
        <Route path="/items/:itemId" element={<ViewSingleItem />} />
        <Route path="/items/edititem/:itemId" element={<EditItem />} />
      </Routes>
    </>
  );
}

export default App;
