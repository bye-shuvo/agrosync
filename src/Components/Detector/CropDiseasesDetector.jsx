import React, { useState } from "react";
import Navbar from "../Home/Navbar";
import { GoogleGenAI } from "@google/genai";
import leafImage from "../../images/rice-leaf.jpeg";

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
      console.log(response);
    } else {
      alert(
        "Please select an image with a minimum size of 1024 * 1024 pixels.",
      );
    }
  };

  // Initialize Google Generative AI
  const genAI = new GoogleGenAI({
    apiKey: import.meta.env.VITE_RICE_DISEASES_KEY,
  });

  // Function to analyze the image
  const promptGeneration = async (file) => {
    try {
      const base64ImageString = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => resolve(reader.result.split(",")[1]);
        reader.onerror = reject;
      });

      //schema object
      const riceLeafSchema = {
        type: "OBJECT",
        properties: {
          is_rice_leaf: { type: "STRING", enum: ["Yes", "No"] },
          rice_leaf_type: { type: "STRING", enum: ["Healthy", "Diseased"] },
          disease_detected: { type: "STRING", enum: ["Yes", "No"] },
          confidence: { type: "NUMBER" },
          diseased_area_percentage: { type: "NUMBER" },
          disease_description: { type: "STRING" },
        },
        required: [
          "is_rice_leaf",
          "rice_leaf_type",
          "disease_detected",
          "confidence",
          "diseased_area_percentage",
          "disease_description",
        ],
      };

      //Tuning according to the usecase
      const customPersona = `You are an expert, empathetic Agricultural Scientist representing [Your Name/Company]. 
      Your tone should be professional yet encouraging to farmers. 
      When writing descriptions, speak from the first-person perspective ("We detected...", "In our analysis...") 
      and provide actionable, safe treatment suggestions instead of just naming the disease.`;

      const interaction = await genAI.interactions.create({
        model: "gemini-3.5-flash",
        input: [
          {
            type: "text",
            text: "Analyze this crop image for diseases and suggest treatments.",
          },
          {
            type: "image",
            data: base64ImageString, // Just the raw base64 string (omit the data:image/jpeg;base64, prefix)
            mime_type: "image/jpeg", // Match your uploaded file type
          },
        ],
        response_format: riceLeafSchema,
        system_instruction: customPersona,
      });

      // Extract JSON from AI response
      const jsonStart = interaction.output_text.indexOf("{");
      const jsonEnd = interaction.output_text.lastIndexOf("}");
      if (jsonStart !== -1 && jsonEnd !== -1) {
        // console.log(JSON.parse(responseText.substring(jsonStart, jsonEnd + 1)));
        return JSON.parse(
          interaction.output_text.substring(jsonStart, jsonEnd + 1),
        );
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
              src={`${image ? image : leafImage}`}
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
        <label className="flex justify-center items-center min-w-56 md:min-w-56 md:h-20 md:p-4 mt-2 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg border-2 border-dashed border-gray-300 cursor-pointer">
          <input
            type="file"
            accept="image/*"
            name="image"
            className="hidden"
            onChange={handleImageUpload}
          />
          <div className="text-center md:p-4 p-2">
            <i className="fas fa-cloud-upload-alt text-2xl md:text-4xl"></i>
            <p className="md:mt-1 md:text-xl">
              📤 {fileName || "Click to Upload"}
            </p>
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
          ) : diseaseInfo && !diseaseInfo.error ? (
            <div
              className={`p-6 max-w-full max-h-[100%] border rounded-lg shadow-md mt-6 overflow-y-scroll no-scrollbar ${
                diseaseInfo.is_rice_leaf === "No"
                  ? "bg-red-200 border-red-400"
                  : diseaseInfo.disease_detected === "Yes"
                    ? "bg-red-200 border-red-400"
                    : "bg-green-200 border-green-400"
              }`}
            >
              {diseaseInfo.is_rice_leaf === "Yes" && (
                <>
                  <h2
                    className={`text-2xl font-semibold ${
                      diseaseInfo.disease_detected === "Yes"
                        ? "text-red-800"
                        : "text-green-800"
                    }`}
                  >
                    Crop Status:{" "}
                    {diseaseInfo.disease_detected === "Yes"
                      ? "❌ Diseased"
                      : "✅ Healthy"}
                  </h2>
                  <p className="text-lg text-gray-700 mt-2">
                    <b>Leaf Type:</b> {diseaseInfo.rice_leaf_type}
                  </p>
                  <p className="text-lg text-gray-700 mt-2">
                    <b>Confidence:</b> {Number(diseaseInfo.confidence) * 100}%
                  </p>
                  <p className="text-lg text-gray-700 mt-2">
                    <b>Affected Area:</b> {diseaseInfo.diseased_area_percentage}
                    %
                  </p>
                  <p className="text-lg text-gray-700 mt-2">
                    <b>Overall Info:</b> {diseaseInfo.disease_description}
                  </p>
                </>
              )}

              {diseaseInfo.is_rice_leaf === "No" && (
                <p className="text-lg text-red-700 mt-4 font-semibold">
                  ⚠️ This is not a rice leaf image! Please upload a valid image.
                </p>
              )}
            </div>
          ) : (
            <div className="p-6 max-w-full max-h-[100%] border rounded-lg shadow-md">
              Image could not be recognized!{" "}
              <p className="text-red-600">Server Error!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CropDiseaseDetector;
