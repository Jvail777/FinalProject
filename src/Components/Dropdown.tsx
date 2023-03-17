import React, { useState } from "react";
import '../css/DropDown.css'

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="Dropdown">
      <select className="Categories" value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select A Category</option>
        <option value="option1">Music</option>
        <option value="option2">History</option>
        <option value="option3">Film & TV</option>
        <option value="option4">General Knowledge</option>
        <option value="option5">Society & Culture</option>
        <option value="option6">Sports & Leisure</option>
      </select>

      <select className="Difficulty" value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select Your Difficulty</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
    </div>
  );
};

export default Dropdown;