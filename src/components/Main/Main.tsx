import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import SearchPage from "../../pages/SearchPage";

const Main: FC = () => {
  return (
    <main className="container mx-auto mt-4 p-4 flex-1 ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pretraživanje" element={<SearchPage />} />
          {/* <Route path="/live" element={<Live />} />
        <Route path="/contact" element={<Contact />} />  */}
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default Main;
