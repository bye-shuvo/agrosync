import React, { useState } from "react";
import Navbar from "./Navbar";
import { GoogleGenerativeAI } from "@google/generative-ai";

const CropDiseaseDetector = () => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("");
  const [diseaseInfo, setDiseaseInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (e) => {
    //.files field of the file type input element
    // returns a list object(array of objects) containing the selected files.
    const file = e.target.files[0]; //getting the first file from the list
    if (file.size < 5 * 1024 * 1024) {
      setFileName(file.name);
      setImage(URL.createObjectURL(file));

      setLoading(true); // Start loading
      const response = await promptGeneration(file); // Wait for AI response
      setDiseaseInfo(response);
      setLoading(false); // Stop loading
    } else {
      alert(
        "Please select an image with a minimum size of 1024 * 1024 pixels."
      );
    }
  };

  // Initialize Google Generative AI
  const genAI = new GoogleGenerativeAI(
    import.meta.env.VITE_RICE_DISEASES_KEY
  );
  const model = genAI.getGenerativeModel({ model: "models/gemini-2.0-flash" });
  // Function to analyze the image
  const promptGeneration = async (file) => {
    try {
      const base64Data = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => resolve(reader.result.split(",")[1]);
        reader.onerror = reject;
      });

      const result = await model.generateContent([
        {
          inlineData: {
            data: base64Data,
            mimeType: file.type,
          },
        },
        `Analyze this image and return a JSON response in this exact format:
      {
        "is_rice_leaf": "Yes" or "No",
        "rice_leaf_type": "Healthy" or "Diseased" (if applicable),
        "disease_detected": "Yes" or "No" (if applicable),
        "confidence": "XX%",
        "diseased_area_percentage": "XX%",
        "disease_description": "Provide a 5-line description of the disease if detected. If healthy, return 'This is a healthy rice leaf. No disease detected.'. If not a rice leaf, return 'Upload a valid rice leaf image for disease detection.'"
      }`,
      ]);

      const responseText = result.response.text();

      // Extract JSON from AI response
      const jsonStart = responseText.indexOf("{");
      const jsonEnd = responseText.lastIndexOf("}");
      if (jsonStart !== -1 && jsonEnd !== -1) {
        // console.log(JSON.parse(responseText.substring(jsonStart, jsonEnd + 1)));
        return JSON.parse(responseText.substring(jsonStart, jsonEnd + 1));
      } else {
        throw new Error("Invalid JSON format received from AI.");
      }
    } catch (error) {
      console.error("Error:", error);
      return { error: "An error occurred while processing the image." };
    }
  };

  return (
    <div
      id="detector"
      className="bg-[url(/src/images/diseases-detection-bg.jpeg)] bg-fixed bg-cover h-screen w-screen flex flex-col md:flex-row items-center md:items-start md:justify-evenly min-h-screen bg-gray-100"
    >
      <Navbar />
      <div
        id="header-section"
        className="z-10 h-screen md:w-[45%] flex flex-col items-center justify-start"
      >
        <div
          id="leaf-image"
          className="flex md:items-center md:justify-center p-2 bg-white bg-opacity-20 max-w-full mt-28 mb-4 rounded-lg shadow-lg overflow-hidden"
        >
          <div className="rounded-lg p-2 border-2 border-dashed border-slate-800">
            <img
              className="w-full h-64 object-cover rounded-xl"
              src={`${image ? image : "/src/images/rice-leaf.jpeg"}`}
              alt="Rice-leaf"
            />
          </div>
        </div>
        <div id="text">
          <h2 className="headline text-3xl md:text-7xl text-[#FFD700] font-extrabold md:font-bold text-center">
            Crop Disease Detector
          </h2>
          <p className="text-center sub-header md:text-3xl text-white mt-2">
            Upload a leaf image to detect diseases in seconds.
          </p>
        </div>
      </div>
      <div
        id="image-uploader"
        className="z-10 h-screen w-[45%] flex flex-col items-center md:justify-center"
      >
        {/*Image file uploader input field*/}
        <label className="flex justify-center items-center min-w-56 md:min-w-56 h-14 md:h-20 md:p-4 mt-2 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg border-2 border-dashed border-gray-300 cursor-pointer">
          <input
            type="file"
            accept="image/*"
            name="image"
            className="hidden"
            onChange={handleImageUpload}
          />
          <div className="text-center md:p-4">
            <i className="fas fa-cloud-upload-alt text-2xl md:text-4xl"></i>
            <p className="md:mt-1 md:text-xl">📤 {fileName || "Click to Upload"}</p>
          </div>
        </label>

        <div className="mt-2 md:mt-4 bg-white bg-opacity-30 p-2 w-[14rem] md:w-auto md:p-4 rounded-lg">
          {!fileName && !loading && !diseaseInfo ? (
            // Show this initially before an image is uploaded
            <p className="md:text-lg text-white">
              📷 Upload an image to continue
            </p>
          ) : loading ? (
            <p className="text-lg text-white">🔄 Analyzing Image...</p>
          ) : (
            diseaseInfo && (
              <div
                className={`p-6 max-w-full max-h-[100%] border rounded-lg shadow-md mt-6 overflow-scroll ${
                  diseaseInfo.disease_detected === "Yes"
                    ? "bg-red-50 border-red-300"
                    : "bg-green-50 border-green-300"
                }`}
              >
                {diseaseInfo.is_rice_leaf === "Yes" && (
                  <h2
                    className={`text-2xl font-semibold ${
                      diseaseInfo.disease_detected === "Yes"
                        ? "text-red-800"
                        : "text-green-800"
                    }`}
                  >
                    Disease Status:{" "}
                    {diseaseInfo.disease_detected === "Yes"
                      ? "❌ Diseased"
                      : "✅ Healthy"}
                  </h2>
                )}
                {diseaseInfo.is_rice_leaf === "Yes" && (
                  <>
                    <p className="text-lg text-gray-700 mt-2">
                      <b>Leaf Type:</b> {diseaseInfo.rice_leaf_type}
                    </p>
                    <p className="text-lg text-gray-700 mt-2">
                      <b>Confidence:</b> {diseaseInfo.confidence}
                    </p>
                  </>
                )}

                {diseaseInfo.disease_detected === "Yes" && (
                  <>
                    <p className="text-lg text-gray-700 mt-2">
                      <b>Affected Area:</b>{" "}
                      {diseaseInfo.diseased_area_percentage}
                    </p>
                    <p className="text-lg text-gray-700 mt-2">
                      <b>Disease Info:</b> {diseaseInfo.disease_description}
                    </p>
                  </>
                )}

                {diseaseInfo.is_rice_leaf === "No" && (
                  <p className="text-lg text-red-700 mt-4 font-semibold">
                    ⚠️ This is not a rice leaf! Please upload a valid image.
                  </p>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default CropDiseaseDetector;
