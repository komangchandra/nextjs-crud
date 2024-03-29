import Link from "next/link";
import Navbar from "./navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="">
        <div className="container mx-auto flex items-center py-20">
          <div className="mx-auto">
            <h1 className="font-bold text-5xl">Hello🚀😊</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
