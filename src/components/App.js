import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const PageOne = () => {
  return <div>page one</div>;
};

const PageTwo = () => {
  return <div>page two</div>;
};

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<PageOne />} />
          <Route path="/pageTwo" element={<PageTwo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
