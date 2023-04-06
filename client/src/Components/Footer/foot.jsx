import React from "react";

import Col1 from "./col1";
import Col2 from "./col2";
import Col3 from "./col3";

function Footer() {
  return (
    <>
      <div
        id="contact"
        className="grid grid-cols-1 gap-4 py-10 h-4/5  bg-slate-900 lg:grid-cols-3 md:grid-cols-3"
      >
        <Col1 />
        <Col2 />
        <Col3 />
      </div>
      <div className="bg-slate-900 pb-8 pt-4 text-center">
        <hr className="text-white bg-white  "></hr>
        <h1 className="text-white mt-2 ">Copyright © 2022 by Shivani Saraswat</h1>
      </div>
    </>
  );
}

export default Footer;
