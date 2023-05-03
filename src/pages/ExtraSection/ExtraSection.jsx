import React from "react";

const ExtraSection = () => {
  return (
    <div
      className="hero min-h-screen mb-20"
      style={{
        backgroundImage: `url("https://img.freepik.com/free-photo/blurry-dining-tables_1203-666.jpg?size=626&ext=jpg&ga=GA1.1.1886416881.1678857576&semt=ais")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className=" flex gap-32">
          <div className="flex flex-col">
            <h2 className="text-7xl font-semibold">43</h2>
            <p className="text-2xl font-semibold text-warning">Most Delicious Dishes</p>
          </div>
          <div>
            <h2 className="text-7xl font-semibold">7</h2>
            <p className="text-2xl font-semibold text-warning">Years Of Experience</p>
          </div>
          <div>
            <h2 className="text-7xl font-semibold">9</h2>
            <p className="text-2xl font-semibold text-warning">Deserved Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
