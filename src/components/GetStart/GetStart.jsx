import { Link } from "react-router-dom";
import "./GetStart.css"; //import css
import getstartedIMG from "../../assets/img/Getstarted-img.svg";

//component below

const GetStart = () => {
  return (
    <div className="--desktop">
      <section className="flex">
        <figure className="2xl:w-3/5 xl:w-3/6 lg:d-none md:d-none sm:d-none h-screen bg-banner">
          {/* <img className="bg-banner" src={getstartedbanner} alt="banner" /> */}
        </figure>
        <aside className="2xl:w-2/5 xl:w-3/6 lg:w-full md:w-full w-full  h-screen justify-center flex flex-col items-center">
          <div className="getStarted_desktop">
            <img
              className="z-10 object-cover rounded-full get-Started_IMG"
              src={getstartedIMG}
              alt=""
            />
            <div className="set-spin_desktop flex-block">
              <article className="NeonPink" />
              <article className="NeonIndigo" />
            </div>
          </div>
          <aside className="w-full justify-center bg-main flex flex-col items-center">
            <h1 className="z-10	text-white font-semibold mt-4 text-4xl px-2">
              Welcome To Workout
            </h1>
            <h1 className="z-10	text-white font-semibold mt-4 text-4xl">
              start your journey
            </h1>
            <p className="z-10	text-white mt-4 mb-10">
              Create a workout planto stay fit{" "}
            </p>
            <Link to="/login" className="btn-color flex justify-center items-center text-white text-xl w-[60%] my-4 h-10 px-2">
          
            
              Get Stared !
              
            
            </Link>
          </aside>
        </aside>
      </section>
    </div>
  );
};

export default GetStart;
