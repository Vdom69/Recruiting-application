import React, { useState } from "react";

const MultiVlueInput = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOptions(selectedOptions.filter((item) => item !== option));
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      setSelectedOptions([...selectedOptions, inputValue]);
      setInputValue("");
    }
  };

  const handleAddOptionClick = () => {
    if (!inputValue.trim()) {
      return;
    }

    setSelectedOptions([...selectedOptions, inputValue]);
    setInputValue("");
  };

  return (
    <div className="w-full">
      <div className="relative w-30 mx-60 py-2 rounded-md bg-white border-2 border-blue-800">
        <div className="flex justify-center">
          {selectedOptions.length === 0 ? (
            <div className="px-4 py-2 text-blue-800 ">Select options</div>
          ) : (
            selectedOptions.map((option) => (
              <div
                key={option}
                className="  w-40 m-2 ml-2 py-1 rounded-md border-2 border-blue-800 text-blue-800 text-sm"
              >
                <span className="mr-1 text-blue-800 text-center">{option}</span>
                <button
                  className="text-blue-800 hover:text-blue-800"
                  onClick={() => handleOptionClick(option)}
                >
                  &times;
                </button>
              </div>
            ))
          )}
        </div>
        <div className="flex justify-between items-center px-4 py-2 text-blue-800 ">
          <input
            type="text"
            className="w-full px-2 py-1 text-sm text-blue-800 placeholder-blue-200"
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            value={inputValue}
            placeholder="Add new option"
          />
          <button
            className="px-4 py-1 text-sm text-blue-300  bg-blue-800 rounded-md ml-2 hover:bg-blue-600"
            onClick={handleAddOptionClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiVlueInput;
