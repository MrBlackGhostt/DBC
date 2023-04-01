import React from "react";
import "./App.css";
import Blog from "./component/Blog";
import ClientArea from "./component/ClientArea";
 import Footer from "./component/Footer";
 import NewsLetter from "./component/NewsLetter";
 import Partner from "./component/Partner";
function App() {
  return (
    <>
    <Blog/>
    <ClientArea/>
      <Partner />
      <NewsLetter />
      <Footer />
   
    </>
  );
}

export default App;
