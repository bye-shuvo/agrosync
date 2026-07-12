import React, { useState, useRef , useEffect} from 'react';
import CropDropDown from './CropDropDown';
import UnitDropDown from './UnitDropDown';
import Navbar from '../Home/Navbar';
import ImageSlider from './ImageSlider';

const SeedCalculator = () => {
  const [selectedCrop, setSelectedCrop] = useState("");
  const [selectedUnit, setSelectedUnit] = useState("");
  const [cropCategory, setCropCategory] = useState("");
  const [inputValue, setInputValue] = useState(0);
  const [seedQuantity, setSeedQuantity] = useState(0);
  const [selectedUnitValue, setSelectedUnitValue] = useState(0);
  const [selectedSeedValue , setSelectedSeedValue] = useState(0);
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value >= 0) {
      setInputValue(parseFloat(value));
    } else {
      alert("Land area cannot be negative.");
    }
  };
  
  const handleCropQuantityChange = (value) => {
    setSelectedSeedValue(value);
  };

  const handleCropTypeChange = (value) => {
    setSelectedCrop(value);
  }

  const handleCropCatagoryChange = (value) => {
    setCropCategory(value);
  };

  const handleUnitValueChange = (value) => {
    setSelectedUnitValue(value);
  };

  const handleUnitTypeChange = (value) => {
    setSelectedUnit(value);
  }

  const calculateSeedQuantity = () => {
    if (
      inputValue &&
      selectedUnitValue &&
      selectedSeedValue
    ) {
      setSeedQuantity(Math.round((inputValue * selectedSeedValue * selectedUnitValue)*100)/100);
    } else {
      setSeedQuantity(0);
      <div className="alert alert-danger" role="alert"></div>
    }
  };

  const clearForm = () => {
    inputRef.current.value = "";
    setInputValue(0);
    setSeedQuantity(0);
    setSelectedCrop("");
    setSelectedUnit("");
    setSelectedSeedValue(0);
    setSelectedUnitValue(0);
  };

  useEffect(() => {
    if(seedQuantity > 0){
      calculateSeedQuantity();
    }
  },[selectedUnitValue , selectedSeedValue , inputValue]);

  return (
    <div className='flex flex-col items-center justify-center'>
      <Navbar />
      <header id="seedCalulator-header" className="flex flex-col items-center justify-center h-64 w-full bg-[url(/src/images/Calculator_title_bg.jpg)] bg-cover bg-center text-white text-center py-4 bg-green-600">
        <h1 className="headline text-3xl md:text-5xl font-bold">SEED CALCULATOR</h1>
        <p className="sub-header md:text-xl mt-2">Accurately calculate the seeds you need for your land in seconds—quick, easy, and reliable!</p>
      </header>
      <div className='flex flex-col md:flex-row items-start justify-space-between w-full md:w-[80%] md:h-[28rem] mt-4'>
      <div id="calculator-container" className="w-full md:w-[45%] h-auto md:h-full bg-white shadow-md rounded-lg p-6">
        <form id="calculator-form" onSubmit={(e) => e.preventDefault()}>
          <h3 className="text-3xl font-semibold">SEED CALCULATOR</h3>
          <p className="mt-2 mb-4 md:text-lg">Enter your land size and get instant results tailored to your crop.</p>

          <label htmlFor="landArea" className="block font-medium">Land Area</label>
          <input
            ref={inputRef}
            id="landArea"
            type="number"
            className="w-full mt-2 p-2 py-[3%] border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter land area"
            onChange={handleInputChange}
            required
          />
          <UnitDropDown handleValue= {handleUnitValueChange} handleType={handleUnitTypeChange} selectedValue = {selectedUnitValue}/>
          <CropDropDown handleValue= {handleCropQuantityChange} handleType={handleCropTypeChange} handleCategory={handleCropCatagoryChange} selectedValue = {selectedSeedValue}/>
          <div className="flex gap-4 mt-2 justify-between">
            <button
              className="bg-green-500 text-white py-[3%] w-[50%] rounded-lg hover:bg-green-600"
              onClick={calculateSeedQuantity}
              type="submit"
            >
              Calculate
            </button>
            <button
              className="bg-gray-500 text-white py-[3%] w-[50%] rounded-lg hover:bg-gray-600"
              type="button"
              onClick={clearForm}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
      <ImageSlider seedQuantity={seedQuantity} selectedCrop={selectedCrop} inputValue={inputValue} selectedUnit={selectedUnit} cropCategory={cropCategory} />
      </div>
    </div>
  );
};

export default SeedCalculator;
