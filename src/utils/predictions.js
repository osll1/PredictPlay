// src/utils/predictions.js

// Function to save a user's prediction
export const savePrediction = (userId, gameId, homeScore, awayScore) => {
    const predictions = JSON.parse(localStorage.getItem("predictions")) || {};
  
    // Ensure there's a structure to hold predictions for each user
    if (!predictions[userId]) {
      predictions[userId] = {};
    }
  
    // Save the prediction for the specific game
    predictions[userId][gameId] = { homeScore, awayScore };
  
    // Store updated predictions back to localStorage
    localStorage.setItem("predictions", JSON.stringify(predictions));
  };
  
  // Function to get a user's prediction
  export const getPrediction = (userId, gameId) => {
    const predictions = JSON.parse(localStorage.getItem("predictions")) || {};
  
    // Retrieve the specific prediction for the user and game
    return predictions[userId]?.[gameId] || { homeScore: 0, awayScore: 0 };
  };
  