import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { EditTodoPage } from "../pages/EditTodoPage";
import { HomePage } from "../pages/HomePages";
import { NotFound } from "../pages/NotFound";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit/:id" element={<EditTodoPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export { App };
