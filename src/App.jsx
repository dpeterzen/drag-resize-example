import React, { useState, useRef } from "react";
import Tile from "./components/Tiles/Tile";
import DragDropUploader from "./components/DragDropUploader/DragDropUploader";

const App = () => {
  const [highestZIndex, setHighestZIndex] = useState(1);
  const [zIndices, setZIndices] = useState({
    div1: 1,
    div2: 1,
    div3: 1,
  });
  const containerRef = useRef(null);

  const bringToFront = (id) => {
    setHighestZIndex((prev) => prev + 1);
    setZIndices((prev) => ({
      ...prev,
      [id]: highestZIndex + 1,
    }));
  };

  return (
    <>
      <DragDropUploader />
      <div
        ref={containerRef}
        style={{ width: "100vw", height: "100vh", position: "relative" }}
        className="p-4"
      >
        <Tile
          id="div1"
          containerRef={containerRef}
          zIndex={zIndices.div1}
          onClick={() => bringToFront("div1")}
        >
          <div
            style={{
              backgroundColor: "lightblue",
              width: "100%",
              height: "100%",
            }}
          >
            Div 1
          </div>
        </Tile>
        <Tile
          id="div2"
          containerRef={containerRef}
          zIndex={zIndices.div2}
          onClick={() => bringToFront("div2")}
        >
          <div
            style={{
              backgroundColor: "lightgreen",
              width: "100%",
              height: "100%",
            }}
          >
            Div 2
          </div>
        </Tile>
        <Tile
          id="div3"
          containerRef={containerRef}
          zIndex={zIndices.div3}
          onClick={() => bringToFront("div3")}
        >
          <div
            style={{
              backgroundColor: "lightcoral",
              width: "100%",
              height: "100%",
            }}
          >
            Div 3
          </div>
        </Tile>
      </div>
    </>
  );
};

export default App;
