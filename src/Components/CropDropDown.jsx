import React from "react";
import { useState, useRef, useEffect } from "react";

const CropDropDown = ({ handleValue, handleType, handleCategory , selectedValue }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null); // Tracks which submenu is open
  const [openInnerSubmenu, setOpenInnerSubmenu] = useState(null); // Tracks which inner submenu is open
  const [selectedCrop, setSelectedCrop] = useState("");
  const dropdownRef = useRef(null);
  const [crops, setCrops] = useState([]);
  const [selectedCropQuantity, setSelectedCropQuantity] = useState(0);

  //Fetching Crops data
  const fetchCrops = async () => {
    // https://seed-calculator.vercel.app/api/crops
    const response = await fetch("");
    const data = await response.json();
    setCrops(data.crops);
  };

  // Toggle the main dropdown
  const handleDropdownToggle = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
    setOpenSubmenu(null); // Close all submenus when toggling main menu
    setOpenInnerSubmenu(null); // Close all inner submenus when toggling main menu
  };

  // Toggle a specific submenu
  const handleSubmenuToggle = (submenu) => {
    setOpenSubmenu((prev) => (prev === submenu) ? null : submenu);
  };

  //Toggle a specific Inner sunmenu
  const handleInnerSubmenuToggle = (innerSubmenu) => {
    setOpenInnerSubmenu((prev) =>
      (prev === innerSubmenu) ? null : innerSubmenu
    );
  };

  //Handle string
  const handleString = (value) => {
    const char = "-";
    const index = value.indexOf(char);
    const result = value.substring(0, index - 1);
    return result.trim();
  };

  // Handle option selection at the last level
  const handleOptionClick = (value) => {
    setSelectedCrop(value.name); // Store selected crop name
    setIsDropdownOpen(false); // Close the dropdown
    setOpenSubmenu(null); // Reset submenu
    setOpenInnerSubmenu(null); // Reset inner submenu
    const QuantityObject = value.quantityPerAcre; // Get the quantity object
    const QuantityArray = Object.keys(QuantityObject); // Get the keys of the quantity object
    if (JSON.stringify(QuantityArray) === JSON.stringify(["seeds"])) {
      handleCategory(QuantityArray[0]); // Call back function for the parent component to handle the catagory of the crop
      setSelectedCropQuantity(parseFloat(handleString(QuantityObject.seeds)));
      handleValue(parseFloat(handleString(QuantityObject.seeds))); // Call back function for the parent component
    } else if (
      JSON.stringify(QuantityArray) === JSON.stringify(["seedlings"])
    ) {
      setSelectedCropQuantity(parseFloat(handleString(QuantityObject.seedlings)));
      handleCategory(QuantityArray[0]); // Call back function for the parent component to handle the catagory of the crop
      handleValue(parseFloat(handleString(QuantityObject.seedlings))); // Call back function for the parent component
    } else if (
      JSON.stringify(QuantityArray) === JSON.stringify(["plants"])
    ) {
      handleCategory(QuantityArray[0]); // Call back function for the parent component to handle the catagory of the crop
      setSelectedCropQuantity(QuantityObject.plants);
      handleValue(QuantityObject.plants); // Call back function for the parent component
    } else {
      alert("Internal Error");
    }
    handleType(value.name); // Call back function for the parent component
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    fetchCrops();
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setOpenSubmenu(null);
        setOpenInnerSubmenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (selectedValue === 0) {
      setSelectedCrop("");
    }
  }, [selectedValue]);

  return (
    <div className="relative block text-left mt-2" ref={dropdownRef}>
      {/* Main Dropdown Button */}
      <button
        onClick={handleDropdownToggle}
        className="bg-green-500 text-white w-full py-[3%] rounded hover:bg-green-600"
      >
        {selectedCrop || "Select Your Crop"}
        {/*Dispaly selected crop if any avilable or display default text*/}
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute mt-2 bg-white border border-gray-200 rounded shadow-lg w-36 md:w-44 z-20">
          <ul className="py-2 text-sm text-gray-700">
            {crops.map((cropType, index) => {
              return (
                <li key={index}>
                  <button
                    key={cropType.type}
                    onMouseEnter={() => handleSubmenuToggle(index)}
                    className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100"
                  >
                    {cropType.type}
                    <svg
                      className="w-4 h-4 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>

                  {/* Submenus */}
                  {openSubmenu === index && (
                    <div className={`absolute left-full ${(index === 0) ? "top-0" : "bottom-0"} ml-1 bg-white border border-gray-200 rounded shadow-lg w-40 md:w-44 z-10`}>
                      <ul className="py-2 text-sm text-gray-700">
                        {cropType.category.map((category, index) => {
                          return (
                            <li key={index}>
                              <button
                                key={category.name}
                                onMouseEnter={() =>
                                  handleInnerSubmenuToggle(index)
                                }
                                className="block px-4 py-2 w-full text-left hover:bg-gray-100"
                              >
                                {category.name}
                              </button>

                              {/*Inner Submenu*/}

                              {openInnerSubmenu === index && (
                                <div className={`absolute left-[-0.3rem] md:left-full bottom-full md:bottom-0 max-h-[20rem] overflow-y-scroll ml-1 bg-white border border-gray-200 rounded shadow-lg w-40 md:w-44 z-10`}>
                                  <ul className="py-2 text-sm text-gray-700">
                                    {category.crops.map((crop, index) => {
                                      return (
                                        <li key={index}>
                                          <button
                                            key={crop.name}
                                            onClick={() =>
                                              handleOptionClick(crop)
                                            }
                                            className="block px-4 py-2 w-full text-left hover:bg-gray-100"
                                          >
                                            {crop.name}
                                          </button>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CropDropDown;
