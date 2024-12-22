import React, { useEffect, useState } from "react";
import Heart from "react-heart"




export default function Grid() {
  const [level, setLevel] = useState(1);
  const [gridSize, setGridSize] = useState(2);
  const [gridData, setGridData] = useState([]);
  const [selected, setSelected] = useState([]); // Tracks currently clicked cards
  const [matched, setMatched] = useState([]); // Tracks matched cards
  const [active,setActive] =useState(true)
  const [lives,setlives] = useState(3);
  const [isAnimating,setIsAnimating] =useState(false);


  const handlelives = () =>{
    let newlive = lives -1;
    setlives(newlive);
  }
  const generateGridData = (size) => {
    const numPairs = Math.floor((size * size) / 2);
    const numbers = [...Array(numPairs).keys()].map((n) => n + 1);
    const fullSet = [...numbers, ...numbers];
    return shuffleArray(fullSet);
  };

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleNextLevel = () => {
    const newLevel = level + 1;
    const newSize = Math.min(newLevel + 1, 8);
    const newlive = newSize*newSize-2;
    console.log(newlive)
    setLevel(newLevel);
    setGridSize(newSize);
    setlives(newlive)
  };

  const handlerestart = () =>{
    isAnimating()
    setLevel(1);
    setGridSize(2);
    setlives(3);
  }

  const handleClick = (index) => {
    if (matched.includes(index) || selected.length === 2 || selected.includes(index)) return;

    const newSelected = [...selected, index];
    setSelected(newSelected);
    
   

    if (newSelected.length === 2) {
    
      const [first, second] = newSelected;
      if (gridData[first] === gridData[second]) {
        setMatched([...matched, first, second]);
      }
      else{
        handlelives();
      }
      
      setTimeout(() => setSelected([]), 1000);
    }
  };

  const handleReset = () => {
    setIsAnimating(true)
    setTimeout(() =>{
        setGridData(generateGridData(gridSize));
        setSelected([]);
        setMatched([]);
        setIsAnimating(false)
    },800)
  
   
  };

  useEffect(() => {
    setGridData(generateGridData(gridSize));
    setSelected([]);
    setMatched([]);
  }, [level, gridSize]);

  const hasWon = matched.length === gridData.length && gridData.length > 0;
  const hasLost = lives <= 0 && gridData.length > 0;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h3 className="text-2xl font-bold mb-4">Level: {level}</h3>
      <div className="flex gap-1 ">
      {Array.from({ length: `${lives}` }, (_, index) => (
          <div key={index} style={{ width: "2rem" }}>
            <Heart isActive={active} onClick={() => setActive(!active)}/>
          </div>
        ))}
    </div>
      <div
        className="grid gap-2"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
        }}
      >
        {gridData.map((value, index) => (
          <div
            key={index}
            className={` ${ isAnimating ? "animate-ping" : "" } grid-item w-20 h-20 sm:w-24 sm:h-24 bg-white-200 rounded-md flex justify-center items-center cursor-pointer transform transition-all duration-300  ${
              matched.includes(index) ? "bg-green-500" : selected.includes(index) ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => handleClick(index)}
          >
            <span
              className={`text-2xl font-bold ${
                selected.includes(index) || matched.includes(index) ? "opacity-1" : "opacity-0"
              }`}
            >
              {selected.includes(index) || matched.includes(index) ? value : "?"}
            </span>
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-6">
        <button
          onClick={handleNextLevel}
          disabled={!hasWon}
          className={`px-6 py-2 text-xl rounded-md text-white ${
            hasWon ? "bg-green-600 hover:bg-green-400" : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Next Level
        </button>
        <button
          onClick={handleReset}
          className="px-6 py-2 text-xl rounded-md text-white bg-red-600 hover:bg-red-400"
        >
          Reset
        </button>
      </div>
      {hasWon && (
        <div className="mt-4 text-2xl text-green-600 font-bold animate-pulse">
          Congratulations! You've completed Level {level}.
        </div>
      )}
      {hasLost && (
        <div className="mt-4 text-2xl text-red-600 font-bold animate-pulse">
          Game Over! You've lost.
          <button
       onClick={handlerestart}
       className="px-6 py-2 text-xl rounded-md text-white bg-red-600 hover:bg-red-400"
     >
       Rstart
     </button>
        </div>
       
    
      )}
    </div>
  );
}
