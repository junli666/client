import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StreamCreate from "../components/streams/StreamCreate";
import StreamEdit from "../components/streams/StreamEdit";
import StreamDelete from "../components/streams/StreamDelete";
import StreamList from "../components/streams/StreamList";
import StreamShow from "../components/streams/StreamShow";

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
          <Route path="/" element={<StreamList />} />
          <Route path="/streams/new" element={<StreamCreate />} />
          <Route path="/streams/edit" element={<StreamEdit />} />
          <Route path="/streams/delete" element={<StreamDelete />} />
          <Route path="/streams/show" element={<StreamShow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
