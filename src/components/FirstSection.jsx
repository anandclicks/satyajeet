import React from "react";

const FirstSection = () => {
  return (
    <div className="h-[85vh] w-full flex items-center pe-3 ">
      {/* left  */}
      <div className="left h-full lg:w-[50%] lg:h-[100%] flex flex-col justify-center items-center">
        <div className="text-white">
          <p className="text-2xl m-0 leading-0">Hii, it's me</p>
          <h1 className="primaryColor text-8xl m-0 font-bold my-1">
            Satyajeet
          </h1>
          <p className="capitalize text-2xl tracking-wider">
            Grapics Designer and video editor
          </p>
        </div>
        {/* underline div  */}
        <div className="undarlineDiv h-[1px] w-[400px] bg-stone-300 mt-3 relative">
          <div className="undarlineOVerlay primaryBg h-[4px] w-[100%] absolute bottom-0 rounded-4xl"></div>
        </div>
        {/* ct  */}
        <div className="text-white mt-16 h-[200px] w-[300px] ">
          {/* circle img  */}
          <img className="absolute ct" src="/ct.png" alt="" />
          <div className="relative">
            <img src="/circle.png" alt="" />
            <div className="absolute top-28">
              <img
                className="absolute unfogetablePng ms-9"
                src="/-Unforgettable.png"
                alt=""
              />
              <h3 className="curveText-creation text-5xl primaryColor ">
                Creations
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* right  */}
      <div className="right h-full lg:w-[50%] lg:h-[100%] flex flex-col justify-center items-end">
        <div className="wrapperOfLensBlur relative">
          <div className="lensBlur h-[140px] w-[140px] bg-amber-600 blur-3xl z-0 absolute right-[140px]"></div>
          <div className="lensBlur lensBlue2 h-[140px] w-[140px] bg-amber-600 blur-3xl z-0 absolute right-[140px]"></div>
          <div className="outerCircle h-[400px] w-[400px] border-white border-[1px] rounded-full flex items-center justify-center">
            <div className="innerCircel  h-[370px] w-[370px] rounded-full bg-transparent border-[65px] primaryBorder flex justify-center relative">
              <div className="overlayTwo">
                <img
                  className="rotate-90 w-[30px] absolute imgeAero"
                  src="/aero.png"
                  alt=""
                />
              </div>
              <img
                className="scall scale-[235%] mb-7"
                src="/person.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* curve design  */}
      <div className="h-[20vh] overflow-hidden absolute bottom-0 start-[270px]">
        <img className=" " src="/homeCurvedesign.png" alt="" />
      </div>
    </div>
  );
};

export default FirstSection;
