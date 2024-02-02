import React from "react";
import Footer from "../Footer";

function Layout({ children }) {
  return (
    <div className="flex flex-col mt-20 items-center">
      {children}
      <Footer></Footer>
    </div>
  );
}

export default Layout;
