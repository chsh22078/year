import React, { useState, useEffect } from "react";
import "./App.css";
import YakuList from "./components/YakuList";
import YakuDetail from "./components/YakuDetail";

const App = () => {
  const [yakuList, setYakuList] = useState([]);
  const [selectedYaku, setSelectedYaku] = useState(null);

  useEffect(() => {
    fetch("/data/yakuList.json")
      .then((response) => response.json())
      .then((data) => setYakuList(data))
      .catch((error) => console.error("Error loading yaku list:", error));
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>麻雀の役紹介</h1>
        <p>麻雀の基本ルールと代表的な役を学びましょう。</p>
      </header>

      {selectedYaku ? (
        <YakuDetail yaku={selectedYaku} onBack={() => setSelectedYaku(null)} />
      ) : (
        <YakuList yakuList={yakuList} onSelect={setSelectedYaku} />
      )}

      <footer className="footer">
        <p>&copy; 2025 麻雀学習サイト</p>
      </footer>
    </div>
  );
};

export default App;
