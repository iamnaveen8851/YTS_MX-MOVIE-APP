import { Routes, Route } from "react-router-dom";

// Local imports
import Home from "../Pages/Home";
import SingleMovie from "../Pages/SingleMovie";
import MovieData from "../Pages/MovieData";
import PrivateRoute from "./PrivateRoute";
function AllRoutes() {
  return (
    <Routes>
      <Route
        path="/movie/:title"
        element={
          <PrivateRoute>
            <SingleMovie />
          </PrivateRoute>
        }
      />
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<MovieData />} />
      <Route path="/browse" element={<MovieData />} />
      <Route path="/4k" element={<MovieData />} />
      <Route path="/trending" element={<MovieData />} />
    </Routes>
  );
}

export default AllRoutes;
