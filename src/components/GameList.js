



import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Avatar,
  Snackbar,
  Alert,
  IconButton,
  Grid,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const GameList = ({ games, setGames }) => {
  const [newGame, setNewGame] = useState({
    date: "",
    time: "",
    homeTeam: "",
    homeTeamImage: "",
    awayTeam: "",
    awayTeamImage: "",
  });
  const [error, setError] = useState(""); // מצב הודעות שגיאה
  const [success, setSuccess] = useState(false); // מצב הודעת הצלחה
  const API_URL = process.env.REACT_APP_API_URL;

  const token = localStorage.getItem("token");
  let userRole = null;

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      userRole = decodedToken.role;
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  }

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get(`${API_URL}/games`);
        setGames(response.data);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchGames();
  }, [setGames]);

  const handleImageUpload = (e, team) => {
    const file = e.target.files[0];
    if (file) {
      const filePath = `/images/teams/${file.name}`;
      setNewGame((prevState) => ({
        ...prevState,
        [`${team}Image`]: filePath, // שמירת הנתיב במקום הקובץ עצמו
      }));
    }
  };

  const addGame = async () => {
    try {
      const localDateTime = new Date(`${newGame.date}T${newGame.time}:00`);
      const response = await axios.post(`${API_URL}/games`, {
        ...newGame,
        date: localDateTime,
      });

      setGames([...games, response.data]);
      setNewGame({
        date: "",
        time: "",
        homeTeam: "",
        homeTeamImage: "",
        awayTeam: "",
        awayTeamImage: "",
      });
      setSuccess(true); // הצגת הודעת הצלחה
    } catch (error) {
      console.error("Error adding game:", error.response?.data || error.message);
      setError("Failed to add game. Please try again.");
    }
  };

  const deleteGame = async (id) => {
    try {
      await axios.delete(`${API_URL}/games/${id}`);
      setGames(games.filter((game) => game._id !== id));
      setSuccess(true); // הצגת הודעת הצלחה למחיקה
    } catch (error) {
      console.error("Error deleting game:", error);
      setError("Failed to delete game. Please try again.");
    }
  };

  return (
    <Box p={2}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          color: "#1976d2",
          fontWeight: "bold",
          textShadow: "1px 1px 4px rgba(0,0,0,0.3)",
        }}
      >
        ניהול משחקים
      </Typography>
      {userRole === "admin" && (
        <Grid
          container
          spacing={2}
          sx={{
            mb: 3,
            bgcolor: "#f9f9f9",
            p: 2,
            borderRadius: "12px",
            boxShadow: 3,
          }}
        >
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="תאריך"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={newGame.date}
              onChange={(e) => setNewGame({ ...newGame, date: e.target.value })}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="שעה"
              type="time"
              InputLabelProps={{ shrink: true }}
              value={newGame.time}
              onChange={(e) => setNewGame({ ...newGame, time: e.target.value })}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="קבוצה א'"
              value={newGame.homeTeam}
              onChange={(e) => setNewGame({ ...newGame, homeTeam: e.target.value })}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              variant="outlined"
              component="label"
              fullWidth
              startIcon={<UploadFileIcon />}
            >
              העלה תמונה א'
              <input
                type="file"
                hidden
                onChange={(e) => handleImageUpload(e, "homeTeam")}
                accept="image/*"
              />
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="קבוצה ב'"
              value={newGame.awayTeam}
              onChange={(e) => setNewGame({ ...newGame, awayTeam: e.target.value })}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              variant="outlined"
              component="label"
              fullWidth
              startIcon={<UploadFileIcon />}
            >
              העלה תמונה ב'
              <input
                type="file"
                hidden
                onChange={(e) => handleImageUpload(e, "awayTeam")}
                accept="image/*"
              />
            </Button>
          </Grid>
          <Grid item xs={12} md={3}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={addGame}
              startIcon={<AddCircleIcon />}
              sx={{
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              הוסף משחק
            </Button>
          </Grid>
        </Grid>
      )}
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: "12px",
          boxShadow: 3,
          overflow: "hidden",
          mb: 4,
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#1976d2" }}>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>תאריך ושעה</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>קבוצה א'</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>תמונה א'</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>קבוצה ב'</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>תמונה ב'</TableCell>
              {userRole === "admin" && (
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>פעולות</TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {games.map((game) => (
              <TableRow
                key={game._id}
                sx={{
                  "&:hover": {
                    bgcolor: "#f1f1f1",
                  },
                }}
              >
                <TableCell>{new Date(game.date).toLocaleString()}</TableCell>
                <TableCell>{game.homeTeam}</TableCell>
                <TableCell>
                  <Avatar
                    src={game.homeTeamImage}
                    alt={game.homeTeam}
                    sx={{
                      width: 50,
                      height: 50,
                      border: "2px solid #1976d2",
                    }}
                  />
                </TableCell>
                <TableCell>{game.awayTeam}</TableCell>
                <TableCell>
                  <Avatar
                    src={game.awayTeamImage}
                    alt={game.awayTeam}
                    sx={{
                      width: 50,
                      height: 50,
                      border: "2px solid #1976d2",
                    }}
                  />
                </TableCell>
                {userRole === "admin" && (
                  <TableCell>
                    <IconButton
                      color="error"
                      onClick={() => deleteGame(game._id)}
                      sx={{
                        color: "red",
                        transition: "transform 0.3s ease",
                        "&:hover": { transform: "scale(1.2)" },
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* הודעות שגיאה והצלחה */}
      {error && (
        <Snackbar
          open={Boolean(error)}
          autoHideDuration={6000}
          onClose={() => setError("")}
        >
          <Alert onClose={() => setError("")} severity="error">
            {error}
          </Alert>
        </Snackbar>
      )}
      {success && (
        <Snackbar
          open={success}
          autoHideDuration={6000}
          onClose={() => setSuccess(false)}
        >
          <Alert onClose={() => setSuccess(false)} severity="success">
            הפעולה הושלמה בהצלחה!
          </Alert>
        </Snackbar>
      )}
    </Box>
  );
};

export default GameList;
