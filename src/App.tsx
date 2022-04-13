import React from "react";
import { Route, Routes } from "react-router-dom";

import { AppBar } from "@/components";
import { Listings } from "@/pages";
import { Checkout } from "@/pages";

const App: React.FC = () => {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<Listings />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/checkout/:title" element={<Checkout />} />
      </Routes>
    </>
  );
};

export default App;
