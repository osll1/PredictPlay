// utils/helpers.js

import { Box } from "@mui/material";

// פונקציה לחישוב תג הציון
export const renderPointsBadge = (color, points) => {
  const colorMap = {
    green: "success",
    yellow: "warning",
    red: "error",
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: `${colorMap[color]}.main`,
        width: 30,
        height: 30,
        borderRadius: "50%",
        color: "white",
        fontWeight: "bold",
      }}
    >
      {points}
    </Box>
  );
};

// פונקציה לחישוב תג התוצאה
export const renderScoreBadge = (color, score) => {
  const colorMap = {
    green: "success",
    yellow: "warning",
    red: "error",
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: `${colorMap[color]}.main`,
        width: 40,
        height: 25,
        borderRadius: "10px",
        color: "white",
        fontWeight: "bold",
      }}
    >
      {score}
    </Box>
  );
};

// פונקציה לקבלת הניחוש
export const getPrediction = (participants, userId, gameId) => {
  const participant = participants.find((p) => p._id === userId);
  if (!participant) return null;

  return (
    participant.predictions.find((pred) => pred.gameId === gameId) || null
  );
};
