// src/utils/utils.js

// פונקציה לבדוק אם המשחק התחיל
// export const isGameLive = (gameDate, gameTime) => {
//     const currentDate = new Date();
//     const gameDateTime = new Date(`${gameDate}T${gameTime}`);
//     return currentDate >= gameDateTime;
//   };
  
  // פונקציה לחישוב תוצאות הניחושים
  // utils.js
import {Box} from "@mui/material";
export const calculatePredictionResult = (liveHome, liveAway, predictedHome, predictedAway) => {
    if (liveHome === predictedHome && liveAway === predictedAway) {
      return "green"; // תוצאה מדויקת
    } else if (
      (liveHome > liveAway && predictedHome > predictedAway) ||
      (liveHome < liveAway && predictedHome < predictedAway) ||
      (liveHome === liveAway && predictedHome === predictedAway)
    ) {
      return "yellow"; // כיוון נכון
    } else {
      return "red"; // לא מדויקת
    }
  };

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
  
  
  
export const calculateGameMinute = (gameDate) => {
  if (!gameDate) {
      return "נתונים לא זמינים";
  }

  const gameStart = new Date(gameDate);
  const now = new Date();
  const diff = now - gameStart; // הפרש בזמן במילישניות
  const diffMinutes = Math.floor(diff / 1000 / 60); // המרה לדקות

  if (diffMinutes < 0) {
      return "משחק עוד לא התחיל";
  } else if (diffMinutes <= 45) {
      return diffMinutes; // מחצית ראשונה
  } else if (diffMinutes > 45 && diffMinutes <= 60) {
      return "מחצית"; // בהפסקה
  } else if (diffMinutes > 60 && diffMinutes <= 105) {
      return diffMinutes - 15; // מחצית שניה אחרי הפסקה
  } else {
      return "המשחק הסתיים"; // אם המשחק עבר את דקה 105
  }
};




export const calculatePoints = (game, prediction) => {
  // השווה את תוצאת המשחק לניחוש
  if (game.homeScore === prediction.homeScore && game.awayScore === prediction.awayScore) {
      // אם הניחוש מדויק, החזר 3 נקודות
      return 3;
  } else if (
      (game.homeScore > game.awayScore && prediction.homeScore > prediction.awayScore) ||
      (game.homeScore < game.awayScore && prediction.homeScore < prediction.awayScore) ||
      (game.homeScore === game.awayScore && prediction.homeScore === prediction.awayScore)
  ) {
      // אם הניחוש נכון מבחינת התוצאה (מי ניצח או תיקו), החזר 1 נקודה
      return 1;
  } else {
      // אם הניחוש לא נכון, החזר 0 נקודות
      return 0;
  }
};