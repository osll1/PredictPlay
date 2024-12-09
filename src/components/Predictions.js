import React, { useState, useEffect } from "react"; // ייבוא React ו-hooks לניהול מצבים ואפקטים.
import { useParams } from "react-router-dom"; // ייבוא useParams לקריאת מזהים מה-URL.
import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
} from "@mui/material"; // ייבוא רכיבי Material UI לעיצוב.
import axios from "axios"; // ייבוא axios לשליחת בקשות HTTP.

const Predictions = () => {
  const { userId } = useParams(); // שליפת ה-userId מה-URL כדי לזהות את המשתמש.
  const [predictions, setPredictions] = useState({}); // שמירת הניחושים של המשתמש.
  const [games, setGames] = useState([]); // שמירת המשחקים.

  const API_URL = process.env.REACT_APP_API_URL; // כתובת ה-API נלקחת מתוך משתני הסביבה.

  useEffect(() => {
    // קריאת המשחקים מהשרת.
    const fetchGames = async () => {
      try {
        const response = await axios.get(`${API_URL}/games`); // בקשת GET לקבלת רשימת המשחקים.
        setGames(response.data); // עדכון המשחקים במצב.
      } catch (error) {
        console.error("Error fetching games:", error); // טיפול בשגיאות.
      }
    };

    // קריאת הניחושים של המשתמש מהשרת.
    const fetchPredictions = async () => {
      try {
        const response = await axios.get(`${API_URL}/${userId}/predictions`); // בקשת GET לקבלת הניחושים של המשתמש.
        const predictionsMap = {}; // יצירת מיפוי של ניחושים לפי מזהה המשחק.
        response.data.forEach((prediction) => {
          predictionsMap[prediction.gameId] = {
            home: prediction.homeScore, // שמירת הניחוש של תוצאת הבית.
            away: prediction.awayScore, // שמירת הניחוש של תוצאת החוץ.
          };
        });
        setPredictions(predictionsMap); // עדכון הניחושים במצב.
      } catch (error) {
        console.error("Error fetching predictions:", error); // טיפול בשגיאות.
      }
    };

    fetchGames(); // קריאה לפונקציית המשחקים.
    fetchPredictions(); // קריאה לפונקציית הניחושים.
  }, [userId]); // אפקט תלוי במזהה המשתמש.

  // פונקציה לחישוב הניקוד על בסיס הניחוש והתוצאה בפועל.
  const calculatePoints = (game, prediction) => {
    const actualHomeScore = game.homeScore; // התוצאה בפועל של הקבוצה הביתית.
    const actualAwayScore = game.awayScore; // התוצאה בפועל של הקבוצה האורחת.

    if (!prediction) return 0; // אם אין ניחוש, הניקוד הוא אפס.

    if (prediction.home == actualHomeScore && prediction.away == actualAwayScore) {
      return 3; // ניחוש מדויק מזכה ב-3 נקודות.
    } else if (
      actualHomeScore - actualAwayScore === prediction.home - prediction.away
    ) {
      return 1; // ניחוש על תוצאה שוות ערך מזכה בנקודה אחת.
    } else {
      return 0; // ניחוש שגוי לא מזכה בניקוד.
    }
  };

  return (
    <Container>
      {/* כותרת דף הניחושים */}
      <Typography variant="h4" gutterBottom align="center">
        הניחושים שלך לטורניר
      </Typography>
      {/* טבלת הניחושים */}
      <TableContainer sx={{ mt: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">תאריך</TableCell> {/* עמודת התאריך */}
              <TableCell align="center">משחק</TableCell> {/* עמודת המשחק */}
              <TableCell align="center">ניחוש</TableCell> {/* עמודת הניחוש */}
              <TableCell align="center">תוצאה בפועל</TableCell> {/* עמודת התוצאה */}
              <TableCell align="center">ניקוד</TableCell> {/* עמודת הניקוד */}
            </TableRow>
          </TableHead>
          <TableBody>
            {/* מיפוי המשחקים להצגה בטבלה */}
            {games.map((game) => {
              const prediction = predictions[game._id]; // קבלת הניחוש עבור המשחק הנוכחי.
              const points = calculatePoints(game, prediction); // חישוב הניקוד עבור הניחוש.
              return (
                <TableRow key={game._id}>
                  <TableCell align="center">{new Date(game.date).toLocaleDateString()}</TableCell>
                  {/* הצגת פרטי המשחק */}
                  <TableCell align="center">
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Avatar
                        alt={game.homeTeam}
                        src={game.homeTeamImage}
                        sx={{ width: 30, height: 30, mr: 1 }}
                      />
                      <Typography>{game.homeTeam}</Typography>
                      <Typography sx={{ mx: 1 }}>נגד</Typography>
                      <Typography>{game.awayTeam}</Typography>
                      <Avatar
                        alt={game.awayTeam}
                        src={game.awayTeamImage}
                        sx={{ width: 30, height: 30, ml: 1 }}
                      />
                    </Box>
                  </TableCell>
                  {/* הצגת הניחוש */}
                  <TableCell align="center">
                    {prediction ? `${prediction.home} : ${prediction.away}` : "לא ניחש"}
                  </TableCell>
                  {/* הצגת התוצאה בפועל */}
                  <TableCell align="center">
                    {game.homeScore !== undefined && game.awayScore !== undefined
                      ? `${game.homeScore} : ${game.awayScore}`
                      : "טרם הוכרע"}
                  </TableCell>
                  {/* הצגת הניקוד */}
                  <TableCell align="center">
                    {game.homeScore !== undefined && game.awayScore !== undefined ? points : "-"}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Predictions;


