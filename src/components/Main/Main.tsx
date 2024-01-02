import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import SearchPage from "../../pages/SearchPage";
import NewAd from "../../pages/NewAd";

const Main: FC = () => {
  return (
    // <main className="container mx-auto mt-4 p-4 flex-1 ">
    <main
      className="flex-1 w-screen mx-auto mt-4 p-4"
      style={{ width: "95.5%" }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/submit-new-ad" element={<NewAd />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default Main;
