import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Router } from "react-router";
import StreamCreate from "../components/streams/StreamCreate";
import StreamEdit from "../components/streams/StreamEdit";
import StreamDelete from "../components/streams/StreamDelete";
import StreamList from "../components/streams/StreamList";
import StreamShow from "../components/streams/StreamShow";
import Header from "./Header";
import history from "../history";

export default function App() {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<StreamList />} />
            <Route path="/streams/new" element={<StreamCreate />} />
            <Route path="/streams/edit" element={<StreamEdit />} />
            <Route path="/streams/delete" element={<StreamDelete />} />
            <Route path="/streams/show" element={<StreamShow />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
