import React, { useState } from "react";
import Navbar from "./component/Navbar";
import MenuPage from "./component/MenuPage";
import LoginModal from "./component/LoginModal";
import SearchBar from "./component/SearchBar";
import CompareModal from "./component/CompareModal";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCuisine, setFilterCuisine] = useState("");
  const [showCompare, setShowCompare] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowModal(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const requireLogin = () => {
    if (!isLoggedIn) {
      setShowModal(true);
    }
  };

  const handleCompare = () => {
  if (!isLoggedIn) {
    setShowModal(true);
  } else {
    setShowCompare(true);
  }
};

  return (
    <div>
      <Navbar
        isLoggedIn={isLoggedIn}
        handleLogin={() => setShowModal(true)}
        handleLogout={handleLogout}
      />
      {showModal && (
        <LoginModal
          onClose={() => setShowModal(false)}
          onLogin={handleLogin}
        />
      )}
      <SearchBar
        onSearch={setSearchTerm}
        onFilter={setFilterCuisine}
        onCompare={handleCompare}
      />
      <MenuPage
        searchTerm={searchTerm}
        filterCuisine={filterCuisine}
        requireLogin={requireLogin}
      />
      {showCompare && <CompareModal onClose={() => setShowCompare(false)} />}

    </div>
  );
};

export default App;
