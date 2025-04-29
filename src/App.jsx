import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <div className="font-sans min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
      <Header />
      <Home />
    </div>
  );
}

export default App;
