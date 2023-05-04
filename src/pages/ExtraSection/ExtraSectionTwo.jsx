import React from "react";

const ExtraSectionTwo = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-10">Our Top Clients</h1>
      <div className="carousel w-full lg:w-2/4 lg:h-96 mx-auto mb-20">
        <div id="slide1" className="carousel-item relative w-full">
          <img className=""
            src="https://hospitality-on.com/sites/default/files/2022-09/16256-122237-f66996306_3xl.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1638026152689-efccf1dbfe60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGhkJTIwaG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGhkJTIwaG90ZWwlMjBiZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1551709645-9f36f95aacd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhkJTIwaG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSectionTwo;
