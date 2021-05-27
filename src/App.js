import "./App.css";
import React from "react";

function App() {
  const [clicked, setClicked] = React.useState(false);
  const parts = [
    { id: 1, position: "0px 0px" },
    { id: 2, position: "28% 0%" },
    { id: 3, position: "54.7% 0%" },
    { id: 4, position: "81.4% 0%" },
    { id: 5, position: "0px 28%" },
    { id: 6, position: "28% 28%" },
    { id: 7, position: "54.7% 28%" },
    { id: 8, position: "81.4% 28%" },
    { id: 9, position: "0px 54.7%" },
    { id: 10, position: "28% 54.7%" },
    { id: 11, position: "54.7% 54.7%" },
    { id: 12, position: "81.4% 54.7%" },
    { id: 13, position: "0px 81.4%" },
    { id: 14, position: "28% 81.4%" },
    { id: 15, position: "54.7% 81.4%" },
    { id: 16, position: "81.4% 81.4%" },
  ];
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div className="App">
      <div className="top">
        <button className="breakButton" onClick={handleClick}>
          Break Image
        </button>
      </div>
      <div className={clicked ? "clickedimageDiv" : "imageDiv"}>
        <img
          src="squirrel.gif"
          alt="imageLogo"
          className={clicked ? "clicked" : "reactImage"}
        />
      </div>
      <div className={clicked ? "girdImage-div" : "clicked"}>
        {parts.map((part) => {
          return (
            <div
              className="gridImage"
              style={{
                background: "url('squirrel.gif')",
                backgroundPosition: `${part.position}`,
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
