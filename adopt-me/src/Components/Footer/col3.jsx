import React from "react";

function Col3() {
  return (
    <>
      <div className="pl-8 text-left">
        <h1 className="text-white font-semibold  text-2xl my-6 ">
          SOCIAL UPDATES
        </h1>
        
        <div className="grid flex justify-center grid-cols-4 space-x-2 ">
          <div className=" cursor-pointer ">
            <a href=""><i className="fab fa-twitter fa-2x "></i></a>
          </div>
          <div className=" cursor-pointer ">
          <a href="https://www.linkedin.com/in/shivani-saraswat-0a35a6201/"><i  className="fab fa-linkedin-in fa-2x"></i></a>
          </div>
          <div className=" cursor-pointer ">
          <a href="https://www.youtube.com/channel/UCpSwgaykeCn6zrpQzrHF6Kw"><i className="fab fa-youtube fa-2x"></i></a>
          </div>
          <div className=" cursor-pointer ">
          <a href="https://www.facebook.com/profile.php?id=100010669330421"><i className="fab fa-facebook-f fa-2x"></i></a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Col3;
