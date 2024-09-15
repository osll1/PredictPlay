// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import {
//   Button,
//   Container,
//   Typography,
//   TextField,
//   Box,
//   Grid,
//   Card,
//   CardContent,
//   Avatar,
//   Divider,
// } from "@mui/material";
// import axios from "axios";
// import { calculatePredictionResult, renderPointsBadge } from "../utils/utils";

// const ParticipantPredictions = () => {
//   const { id } = useParams(); // קבלת ה-id של המשתמש מהנתיב
//   const [predictions, setPredictions] = useState({});
//   const [games, setGames] = useState([]); // הוספת מצב לאחסון המשחקים מהמסד נתונים
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchPredictions = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/participants/${id}`);
//         const participant = response.data;
//         const predictionsMap = {};
//         participant.predictions.forEach((prediction) => {
//           predictionsMap[prediction.gameId] = {
//             homeScore: prediction.homeScore,
//             awayScore: prediction.awayScore,
//           };
//         });
//         setPredictions(predictionsMap);
//       } catch (error) {
//         console.error("Error fetching predictions:", error);
//       }
//     };

//     const fetchGames = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/games");
//         setGames(response.data);
//       } catch (error) {
//         console.error("Error fetching games:", error);
//       }
//     };

//     fetchPredictions();
//     fetchGames();
//   }, [id]);

//   const handlePredictionChange = (gameId, homeScore, awayScore) => {
//     const updatedPredictions = { ...predictions, [gameId]: { homeScore, awayScore } };
//     setPredictions(updatedPredictions);
//   };

//   const handleSavePrediction = async (gameId) => {
//     const prediction = predictions[gameId];
//     try {
//       await axios.put(`http://localhost:5000/participants/predictions/${id}`, {
//         gameId,
//         homeScore: prediction.homeScore,
//         awayScore: prediction.awayScore,
//       });
//       alert("Prediction saved successfully!");
//     } catch (error) {
//       console.error("Error saving prediction:", error);
//       alert("Failed to save prediction.");
//     }
//   };

//   const hasGameStarted = (gameDate) => {
//     return new Date() >= new Date(gameDate);
//   };

//   const hasGameEnded = (gameDate) => {
//     const gameEndTime = new Date(gameDate);
//     gameEndTime.setHours(gameEndTime.getHours() + 2); // הוסף 2 שעות למשחק
//     return new Date() > gameEndTime;
//   };

//   const calculatePoints = (game) => {
//     const prediction = predictions[game._id];
//     if (!prediction) return 0;

//     const color = calculatePredictionResult(
//       game.homeScore,
//       game.awayScore,
//       parseInt(prediction.homeScore, 10),
//       parseInt(prediction.awayScore, 10)
//     );

//     return color === "green" ? 3 : color === "yellow" ? 1 : 0;
//   };

//   return (
//     <Container sx={{ mt: 4 }}>
//       <Typography variant="h4" gutterBottom align="center">
//         נחש את תוצאות המשחקים
//       </Typography>
//       <Grid container spacing={3}>
//         {games.map((game) => (
//           <Grid item xs={12} sm={6} md={4} key={game._id}>
//             <Card sx={{ boxShadow: 3, borderRadius: "12px", height: "100%" }}>
//               <CardContent sx={{ padding: "16px" }}>
//                 <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 2 }}>
//                   <Avatar alt={game.homeTeam} src={game.homeTeamImage} sx={{ width: 60, height: 60, marginRight: 1 }} />
//                   <Typography variant="body1" sx={{ fontWeight: "bold", mx: 1 }}>
//                     {game.homeTeam}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary" sx={{ mx: 1 }}>
//                     נגד
//                   </Typography>
//                   <Typography variant="body1" sx={{ fontWeight: "bold", mx: 1 }}>
//                     {game.awayTeam}
//                   </Typography>
//                   <Avatar alt={game.awayTeam} src={game.awayTeamImage} sx={{ width: 60, height: 60, marginLeft: 1 }} />
//                 </Box>
//                 <Typography variant="body2" color="textSecondary" align="center" sx={{ mb: 2 }}>
//                   תאריך ושעה: {new Date(game.date).toLocaleString()}
//                 </Typography>
//                 <Divider sx={{ mb: 2 }} />
//                 <Grid container spacing={1} justifyContent="center">
//                   <Grid item>
//                     <TextField
//                       label={`${game.homeTeam} תוצאה`}
//                       variant="outlined"
//                       value={predictions[game._id]?.homeScore || ""}
//                       onChange={(e) =>
//                         handlePredictionChange(game._id, e.target.value, predictions[game._id]?.awayScore || "")
//                       }
//                       sx={{ width: "80px", "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
//                       disabled={hasGameEnded(game.date)}
//                     />
//                   </Grid>
//                   <Grid item>
//                     <TextField
//                       label={`${game.awayTeam} תוצאה`}
//                       variant="outlined"
//                       value={predictions[game._id]?.awayScore || ""}
//                       onChange={(e) =>
//                         handlePredictionChange(game._id, predictions[game._id]?.homeScore || "", e.target.value)
//                       }
//                       sx={{ width: "80px", "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
//                       disabled={hasGameEnded(game.date)}
//                     />
//                   </Grid>
//                 </Grid>

//                 {!hasGameStarted(game.date) && (
//                   <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       onClick={() => handleSavePrediction(game._id)}
//                     >
//                       שמור ניחוש
//                     </Button>
//                   </Box>
//                 )}

//                 {hasGameStarted(game.date) && !hasGameEnded(game.date) && (
//                   <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       onClick={() => navigate(`/live-game/${game._id}`)}
//                     >
//                       עבור ללייב
//                     </Button>
//                   </Box>
//                 )}

//                 {hasGameEnded(game.date) && (
//                   <>
//                     <Box sx={{ display: "flex", justifyContent: "center", mb: 2, mt: 2 }}>
//                       {renderPointsBadge(
//                         calculatePredictionResult(
//                           JSON.parse(localStorage.getItem(`gameResult_${game._id}`))?.homeScore,
//                           JSON.parse(localStorage.getItem(`gameResult_${game._id}`))?.awayScore
//                         ),
//                         calculatePoints(game)
//                       )}
//                     </Box>
//                     <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
//                       <Button
//                         variant="contained"
//                         color="secondary"
//                         onClick={() => navigate(`/live-game/${game._id}`)}
//                       >
//                         הצג תוצאה
//                       </Button>
//                     </Box>
//                   </>
//                 )}
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default ParticipantPredictions;



// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import {
//   Container,
//   Typography,
//   Box,
//   Avatar,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   TextField,
//   Button,
// } from "@mui/material";
// import { calculatePredictionResult, calculateGameMinute } from "../utils/utils";

// const LiveGame = () => {
//   const { id } = useParams();
//   const [game, setGame] = useState(null);
//   const [liveScores, setLiveScores] = useState({ home: 0, away: 0 });
//   const [newScores, setNewScores] = useState({ home: "", away: "" });
//   const [participants, setParticipants] = useState([]);

//   useEffect(() => {
//     const fetchGame = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/games/${id}`);
//         const gameData = response.data;
//         setGame(gameData);
//         setLiveScores({ home: gameData.homeScore || 0, away: gameData.awayScore || 0 });
//       } catch (error) {
//         console.error("Error fetching game:", error);
//       }
//     };

//     const fetchParticipants = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/participants");
//         setParticipants(response.data);
//       } catch (error) {
//         console.error("Error fetching participants:", error);
//       }
//     };

//     fetchGame();
//     fetchParticipants();
//   }, [id]);

//   const handleScoreChange = (team, value) => {
//     setNewScores({ ...newScores, [team]: value });
//   };

//   const updateScores = async () => {
//     const home = parseInt(newScores.home, 10);
//     const away = parseInt(newScores.away, 10);

//     if (!isNaN(home) && !isNaN(away)) {
//       setLiveScores({ home, away });

//       try {
//         await axios.put(`http://localhost:5000/games/${id}`, {
//           homeScore: home,
//           awayScore: away,
//         });

//         const updatedParticipants = participants.map((participant) => {
//           const prediction = getPrediction(participant._id, game._id);
//           let newPoints = participant.points;

//           if (prediction) {
//             const currentColor = calculatePredictionResult(
//               liveScores.home,
//               liveScores.away,
//               parseInt(prediction.homeScore, 10),
//               parseInt(prediction.awayScore, 10)
//             );

//             const newColor = calculatePredictionResult(
//               home,
//               away,
//               parseInt(prediction.homeScore, 10),
//               parseInt(prediction.awayScore, 10)
//             );

//             const currentPoints = currentColor === "green" ? 3 : currentColor === "yellow" ? 1 : 0;
//             const futurePoints = newColor === "green" ? 3 : newColor === "yellow" ? 1 : 0;

//             newPoints = newPoints - currentPoints + futurePoints; // עדכון הנקודות בצורה נכונה
//           }

//           return {
//             ...participant,
//             points: newPoints,
//           };
//         });

//         updatedParticipants.sort((a, b) => b.points - a.points);
//         setParticipants(updatedParticipants);

//         await Promise.all(
//           updatedParticipants.map((participant) =>
//             axios.put(`http://localhost:5000/participants/${participant._id}`, {
//               points: participant.points,
//             })
//           )
//         );
//       } catch (error) {
//         console.error("Error updating participant points:", error);
//       }
//     }
//   };

//   const getPrediction = (userId, gameId) => {
//     const participant = participants.find((p) => p._id === userId);
//     if (!participant) return null;

//     return participant.predictions.find((pred) => pred.gameId === gameId) || null;
//   };

//   const renderPointsBadge = (color, points) => {
//     const colorMap = {
//       green: "success",
//       yellow: "warning",
//       red: "error",
//     };

//     return (
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           bgcolor: `${colorMap[color]}.main`,
//           width: 30,
//           height: 30,
//           borderRadius: "50%",
//           color: "white",
//           fontWeight: "bold",
//         }}
//       >
//         {points}
//       </Box>
//     );
//   };

//   const renderScoreBadge = (color, score) => {
//     const colorMap = {
//       green: "success",
//       yellow: "warning",
//       red: "error",
//     };

//     return (
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           bgcolor: `${colorMap[color]}.main`,
//           width: 40,
//           height: 25,
//           borderRadius: "10px",
//           color: "white",
//           fontWeight: "bold",
//         }}
//       >
//         {score}
//       </Box>
//     );
//   };

//   const gameMinute = game ? calculateGameMinute(game.date) : "00:00";
//   const isGameOver = gameMinute === "המשחק הסתיים";

//   const sortedParticipants = participants
//     .map((participant) => {
//       const userPrediction = getPrediction(participant._id, id);
//       if (!userPrediction) return participant;

//       const color = calculatePredictionResult(
//         liveScores.home,
//         liveScores.away,
//         parseInt(userPrediction.homeScore, 10),
//         parseInt(userPrediction.awayScore, 10)
//       );
//       const points = color === "green" ? 3 : color === "yellow" ? 1 : 0;

//       return {
//         ...participant,
//         userPrediction,
//         color,
//         points,
//       };
//     })
//     .sort((a, b) => b.points - a.points);

//   return (
//     <Container sx={{ mt: 4 }}>
//       {game && (
//         <>
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               mb: 2,
//             }}
//           >
//             <Avatar
//               src={game.homeTeamImage}
//               sx={{ width: 60, height: 60, mx: 1 }}
//             />
//             <Typography variant="h6" sx={{ mx: 1 }}>
//               {game.homeTeam}
//             </Typography>
//             <Typography variant="h6" sx={{ mx: 1 }}>
//               {liveScores.home} : {liveScores.away}
//             </Typography>
//             <Typography variant="h6" sx={{ mx: 1 }}>
//               {game.awayTeam}
//             </Typography>
//             <Avatar
//               src={game.awayTeamImage}
//               sx={{ width: 60, height: 60, mx: 1 }}
//             />
//           </Box>
//           <Typography variant="body1" align="center" sx={{ mb: 4 }}>
//             תאריך ושעה: {new Date(game.date).toLocaleString()}
//           </Typography>
//           <Typography variant="h6" align="center" sx={{ mb: 4 }}>
//             דקה: {gameMinute}
//           </Typography>

//           {!isGameOver ? (
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 mb: 2,
//               }}
//             >
//               <TextField
//                 label={`${game.homeTeam} תוצאה`}
//                 type="number"
//                 value={newScores.home}
//                 onChange={(e) => handleScoreChange("home", e.target.value)}
//                 sx={{ mx: 1, width: 100 }}
//               />
//               <TextField
//                 label={`${game.awayTeam} תוצאה`}
//                 type="number"
//                 value={newScores.away}
//                 onChange={(e) => handleScoreChange("away", e.target.value)}
//                 sx={{ mx: 1, width: 100 }}
//               />
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={updateScores}
//                 sx={{ mx: 1 }}
//               >
//                 עדכן תוצאה
//               </Button>
//             </Box>
//           ) : (
//             <Typography
//               variant="h6"
//               align="center"
//               color="error"
//               sx={{ mb: 4 }}
//             >
//               המשחק הסתיים - לא ניתן לעדכן את התוצאה
//             </Typography>
//           )}

//           <Typography variant="h5" gutterBottom align="center">
//             דירוג משתתפים
//           </Typography>
//           <TableContainer component={Paper}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>מיקום</TableCell>
//                   <TableCell>שם משתמש</TableCell>
//                   <TableCell>ניחוש</TableCell>
//                   <TableCell>נקודות</TableCell>
//                   <TableCell>סה"כ נקודות</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {sortedParticipants.map((participant, index) => (
//                   <TableRow key={participant._id}>
//                     <TableCell>{index + 1}</TableCell>
//                     <TableCell>{participant.userName}</TableCell>
//                     <TableCell>
//                       {renderScoreBadge(
//                         participant.color,
//                         `${participant.userPrediction?.homeScore} : ${participant.userPrediction?.awayScore}`
//                       )}
//                     </TableCell>
//                     <TableCell>
//                       {renderPointsBadge(participant.color, participant.points)}
//                     </TableCell>
//                     <TableCell>{participant.points}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </>
//       )}
//     </Container>
//   );
// };

// export default LiveGame;


















// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

// const participantSchema = new mongoose.Schema({
//   userName: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: { type: String, enum: ["user", "admin"], default: "user" }, // הוספת שדה role
//   scorerImage: { type: String, required: true },
//   winnerImage: { type: String, required: true },
//   points: { type: Number, default: 0 },
//   predictions: [
//     {
//       gameId: String,
//       homeScore: Number,
//       awayScore: Number,
//     },
//   ],
// });

// // הצפנת הסיסמה לפני שמירה
// participantSchema.pre("save", async function (next) {
//   if (this.isModified("password")) {
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//   }
//   next();
// });

// // יצירת המודל Participant
// const Participant = mongoose.model("Participant", participantSchema);

// module.exports = Participant;




// const express = require("express");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const Participant = require("../models/Participant");

// const router = express.Router();

// router.post("/register", async (req, res) => {
//   try {
//     const { userName, email, password, scorerImage, winnerImage } = req.body;

//     // בדיקה אם המשתמש כבר קיים
//     const existingUser = await Participant.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     // יצירת משתמש חדש ושמירתו
//     const newUser = new Participant({
//       userName,
//       email,
//       password,
//       scorerImage,
//       winnerImage,
//     });

//     await newUser.save();

//     res.status(201).json({ message: "User registered successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;






// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // בדיקה אם המשתמש קיים
//     const user = await Participant.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: "Invalid email or password" });
//     }

//     // בדיקה אם הסיסמה נכונה
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid email or password" });
//     }

//     // יצירת JWT
//     const token = jwt.sign(
//       { id: user._id, role: user.role },
//       "your_jwt_secret", // יש להחליף במפתח סודי חזק
//       { expiresIn: "1h" }
//     );

//     res.status(200).json({ token, role: user.role });
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;












// const jwt = require("jsonwebtoken");

// const auth = (role) => {
//   return (req, res, next) => {
//     const token = req.header("x-auth-token");
//     if (!token) return res.status(401).json({ message: "No token, authorization denied" });

//     try {
//       const decoded = jwt.verify(token, "your_jwt_secret"); // יש להחליף במפתח סודי חזק
//       req.user = decoded;

//       if (role && req.user.role !== role) {
//         return res.status(403).json({ message: "Forbidden: Access is denied" });
//       }

//       next();
//     } catch (error) {
//       res.status(400).json({ message: "Token is not valid" });
//     }
//   };
// };

// module.exports = auth;










// const express = require("express");
// const auth = require("../middleware/auth");

// const router = express.Router();

// router.post("/add-user", auth("admin"), async (req, res) => {
//   // קוד להוספת משתמש חדש
// });

// router.post("/add-game", auth("admin"), async (req, res) => {
//   // קוד להוספת משחק חדש
// });

// module.exports = router;
