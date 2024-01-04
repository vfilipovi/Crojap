import { Divider } from "@nextui-org/react";
import { FC } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import HomePageJobCard from "../components/HomePageJobCard";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import IconHolder from "../components/UtilComponents/IconHolder";

const HomePage: FC = () => {
  const handleSearchButtonHover = () => {};
  return (
    <>
      <div className="flex flex-col place-content-center mb-12 mt-6">
        <div className="flex justify-around">
          <Link
            to={"/search"}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            className="group w-2/6 h-44 rounded-3xl flex items-center justify-center bg-gray-200  hover:bg-theme-blue-500 transition duration-500 ease-in-out"
          >
            <div
              className="flex flex-col justify-center items-center"
              onMouseEnter={handleSearchButtonHover}
            >
              <h3 className="text-4xl text-black group-hover:text-white">
                Pretraži poslove
              </h3>
              <div className="mt-3" style={{ width: "80px", height: "auto" }}>
                <IconHolder
                  Icon={BiSearchAlt}
                  size={90}
                  className="group-hover:text-white"
                />
              </div>
            </div>
          </Link>
          <Link
            to={"/submit-new-ad"}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            className="group w-2/6 h-44 rounded-3xl flex items-center justify-center bg-gray-200 hover:bg-theme-blue-500 transition duration-400 ease-in-out"
          >
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-4xl group-hover:text-white">Predaj oglas</h3>
              <div className="mt-3" style={{ width: "80px", height: "auto" }}>
                <IconHolder
                  Icon={IoMdAddCircleOutline}
                  size={90}
                  className="group-hover:text-white text-black"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="mt-5 flex flex-col place-items-start">
        <h2 className="text-6xl mt-12 mb-1">Izdvojeni oglasi</h2>
        <Divider className="mb-12" />
        <Link to="/IT" className="text-3xl text-black">
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
      <Divider />
      <div className="mt-5 flex flex-col place-items-start">
        <Link to="/IT" className="text-3xl text-black">
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
        <Link to="/IT" className="text-3xl text-black">
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
        <Link to="/IT" className="text-3xl text-black">
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
