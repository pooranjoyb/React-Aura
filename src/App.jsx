// import React from "react"
import GlassNavbar from "./Components/Navbars/GlassNavbar/GlassNavbar";
import Sidebar from "./Components/Sidebar";
import Star from "./Components/Ratings/Star";
import CustomizedRating from "./Components/Ratings/Heart";

function App() {
  return (
    <>
      <GlassNavbar />
      <Sidebar />
      {/* <Star /> */}
      <CustomizedRating />
    </>
  );
}

export default App;
