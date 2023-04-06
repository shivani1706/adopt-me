import React from "react";

function Col3() {
  return (
    <>
      <div className="pl-8 text-left">
        <h1 className="text-white font-semibold  text-2xl my-6 ">
          SOCIAL UPDATES
        </h1>
        
        <div class="grid flex justify-center grid-cols-4 space-x-2 ">
          <div className=" cursor-pointer ">
            <i class="fab fa-twitter fa-2x "></i>
          </div>
          <div className=" cursor-pointer ">
            <i class="fab fa-linkedin-in fa-2x"></i>
          </div>
          <div className=" cursor-pointer ">
            <i class="fab fa-youtube fa-2x"></i>
          </div>
          <div className=" cursor-pointer ">
            <i class="fab fa-facebook-f fa-2x"></i>
          </div>
        </div>
      </div>
    </>
  );
}
export default Col3;
