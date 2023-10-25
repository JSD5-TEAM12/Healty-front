import React from "react";

const Height = ({ setHeight, height }) => {
  return (
    <main className={`flex flex-col gap-[5.8rem] md:gap-7 overflow-hidden`}>
      <header className=" ">
        <h2 className="text-white text-center text-3xl md:text-5xl">
          What’s your height?
        </h2>
        <p className="text-zinc-500 text-center text-xl  md:text-2xl">
          This helps us create your personalized plan
        </p>
      </header>
      <section className="overflow-hidden flex text-center my-[1.9rem] md:my-0">
        <div className=" range_show_numer ">
          <p className="text-2xl md:text-4xl  text-zinc-500/30"> {height - -3} </p>
          <p className="text-4xl md:text-6xl text-zinc-500/60 "> {height - -2} </p>
          <p className="text-6xl md:text-8xl  text-zinc-500 "> {height - -1} </p>
          <aside className="flex flex-row items-center justify-center gap-2 current_age">
            <p className="md:text-[8rem] text-8xl text-white "> {" "}{height}{" "}</p><span className="text-3xl">CM</span>           
          </aside>
          <p className="text-6xl md:text-8xl  text-zinc-500 "> {height - 1} </p>          
          <p className="text-4xl md:text-6xl text-zinc-500/60 "> {height - 2} </p>            
          <p className="text-2xl md:text-4xl  text-zinc-500/30"> {height - 3} </p>

        </div>

        <input
          type="range"
          min="100"
          max="200"
          className="range_bar"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </section>
      {/* <div className=' relative bg-zinc-800  rounded-md top-20 mx-5 bg-btn'>
          <button className='text-2xl font-bold text-white text-center  bg-zinc-800 relative  btn'>Next</button>
        </div> */}
    </main>
  );
};

export default Height;
