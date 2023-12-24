import { Button, Divider } from "@nextui-org/react";
import { FC } from "react";
import img from "../assets/zoom.png";
import plusSignImg from "../assets/add-plus-sign.png";
import HomePageJobCard from "../components/HomePageJobCard";
import { Link } from "react-router-dom";

const HomePage: FC = () => {
  return (
    <>
      <div className="flex flex-col place-content-center mb-12 mt-6">
        <div className="flex justify-around">
          <Link
            to={"/pretraživanje"}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            className="w-2/6 h-44 rounded-3xl flex items-center justify-center bg-gray-200"
          >
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-4xl text-black">Pretraži poslove</h3>
              <div className="mt-3" style={{ width: "80px", height: "auto" }}>
                <img src={img} alt="my image" />
              </div>
            </div>
          </Link>
          <Button
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            className="w-2/6 h-44 rounded-3xl flex items-center justify-center bg-gray-200"
          >
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-4xl">Predaj oglas</h3>
              <div className="mt-3" style={{ width: "80px", height: "auto" }}>
                <img src={plusSignImg} alt="plusSignImg" />
              </div>
            </div>
          </Button>
        </div>
      </div>
      <div className="mt-5 flex flex-col place-items-start">
        <Link href="IT" underline="hover" className="text-3xl text-black">
          IT i Telekomunikacije
        </Link>
        <div className="flex w-full overflow-x-auto p-5">
          <HomePageJobCard />
          <HomePageJobCard />
          <HomePageJobCard />
          <HomePageJobCard />
          <HomePageJobCard />
          <HomePageJobCard />
          <HomePageJobCard />
        </div>
      </div>
      {/* <Divider /> */}
      <div className="mt-5 flex flex-col place-items-start">
        <Link href="IT" underline="hover" className="text-3xl text-black">
          Ugostiteljstvo
        </Link>
        <div className="flex w-full overflow-x-auto p-5">
          <HomePageJobCard />
          <HomePageJobCard />
          <HomePageJobCard />
          <HomePageJobCard />
          <HomePageJobCard />
          <HomePageJobCard />
          <HomePageJobCard />
        </div>
      </div>
      <Divider />
      <div className="mt-5 flex flex-col place-items-start">
        <Link href="IT" underline="hover" className="text-3xl text-black">
          Građevinarstvo
        </Link>
        <div className="flex w-full overflow-x-auto p-5">
          <HomePageJobCard />
          <HomePageJobCard />
          <HomePageJobCard />
          <HomePageJobCard />
          <HomePageJobCard />
          <HomePageJobCard />
          <HomePageJobCard />
        </div>
      </div>
      <Divider />
      <div className="mt-5 flex flex-col place-items-start">
        <Link href="IT" underline="hover" className="text-3xl text-black">
          Prodaja
        </Link>
        <div className="flex w-full overflow-x-auto p-5">
          <HomePageJobCard />
          <HomePageJobCard />
          <HomePageJobCard />
          <HomePageJobCard />
          <HomePageJobCard />
          <HomePageJobCard />
          <HomePageJobCard />
        </div>
      </div>
    </>
  );
};

export default HomePage;
