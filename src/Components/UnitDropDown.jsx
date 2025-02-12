import React from "react";
import { useState, useRef, useEffect } from "react";

const UnitDropDown = ({handleValue , handleType , selectedValue }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState("");
  const [selectedUnitAcer, setSelectedUnitAcer] = useState(0);
  const [units, setUnits] = useState([]);
  const dropdownRef = useRef(null);

  //Fetching Units data
  const fetchUnits = async () => {
    // https://seed-calculator.vercel.app/api/units
    const response = await fetch("");
    const data = await response.json();
    setUnits(data.units);
  };

  // Toggle the main dropdown
  const handleDropdownToggle = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle option selection at the last level
  const handleOptionClick = (value) => {
    setSelectedUnit(value.name); // Store selected value
    setIsDropdownOpen(false); // Close the dropdown
    setSelectedUnitAcer(value.acres); // Store selected value
    handleValue(value.acres); // Call back function for the parent component
    handleType(value.name); // Call back function for the parent component
  };

  //Call back function for the parent component
  useEffect(() => {
    handleValue(selectedUnitAcer);
  }, [selectedUnitAcer]);

  // Close dropdown when clicking outside
  useEffect(() => {
    fetchUnits();
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if(selectedValue === 0){
      setSelectedUnit("");
    }
  }, [selectedValue]);

  return (
    <div className="relative block text-left mt-2" ref={dropdownRef}>
      {/* Main Dropdown Button */}
      <button
        onClick={handleDropdownToggle}
        className="bg-green-500 text-white w-full py-[3%] rounded hover:bg-green-600"
      >
        {selectedUnit || "Select an Unit"}
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute mt-2 bg-white border border-gray-200 rounded shadow-lg w-44 z-10">
          <ul className="py-2 text-sm text-gray-700">
            {units.map((unit , index) => {
              return (
                <li key={index}>
                  <button
                    key={unit.name}
                    onClick={() => handleOptionClick(unit)}
                    className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100"
                  >
                    {unit.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UnitDropDown;
