import React from "react";
import { Route, Routes } from "react-router-dom";
import Todolist from "./components/Todolist";
import NavBar from "./components/NavBar";
import AddTodo from "./components/AddTodo";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Todolist />} />
        <Route path="/add" element={<AddTodo />} />
      </Routes>
    </>
  );
};

export default App;
