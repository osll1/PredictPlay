
//best
// import React, { useEffect, useState } from "react";
// import axios from "axios"; // Import axios for HTTP requests
// import { useNavigate } from "react-router-dom";
// import {
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Avatar,
// } from "@mui/material";

// const Participants = () => {
//   const navigate = useNavigate(); // שימוש ב-useNavigate עבור ניווט
//   const [participants, setParticipants] = useState([]);

//   useEffect(() => {
//     const fetchParticipants = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/participants");
//         setParticipants(response.data);
//       } catch (error) {
//         console.error("Error fetching participants:", error);
//       }
//     };

//     fetchParticipants();
//   }, []);

//   const handleGuessGames = (id) => {
//     navigate(`/predictions/${id}`); // נווט לדף ניחושים לפי ID המשתתף
//   };

//   return (
//     <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px" }}>
//       <h2>ניהול משתתפים</h2>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>מספר משתתף</TableCell>
//               <TableCell>שם משתמש</TableCell>
//               <TableCell>מלך שערים</TableCell>
//               <TableCell>קבוצה מנצחת</TableCell>
//               <TableCell>נקודות</TableCell>
//               <TableCell>פעולות</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {participants.map((participant, index) => (
//               <TableRow key={participant._id}>
//                 <TableCell>{index + 1}</TableCell>
//                 <TableCell>{participant.userName}</TableCell>
//                 <TableCell>
//                   <Avatar
//                     src={`http://localhost:5000/${participant.scorerImage}`}
//                     alt="Top Scorer"
//                     sx={{ width: 56, height: 56 }}
//                   />
//                 </TableCell>
//                 <TableCell>
//                   <Avatar
//                     src={`http://localhost:5000/${participant.winnerImage}`}
//                     alt="Winner Team"
//                     sx={{ width: 56, height: 56 }}
//                   />
//                 </TableCell>
//                 <TableCell>{participant.points}</TableCell>
//                 <TableCell>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={() => handleGuessGames(participant._id)} // מעבר לניחוש משחקים
//                     sx={{ marginRight: 1 }}
//                   >
//                     נחש משחקים
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default Participants;







//bestt
// import React, { useEffect, useState } from "react";
// import axios from "axios"; // Import axios for HTTP requests
// import { useNavigate } from "react-router-dom";
// import {
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Avatar,
// } from "@mui/material";
// import {jwtDecode} from "jwt-decode"; // Import jwtDecode to decode the token

// const Participants = () => {
//   const navigate = useNavigate(); // שימוש ב-useNavigate עבור ניווט
//   const [participants, setParticipants] = useState([]);
//   const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {
//     // בדיקה האם המשתמש מחובר
//     const token = localStorage.getItem("token");
//     if (token) {
//       const decodedToken = jwtDecode(token);
//       setCurrentUser(decodedToken);
//     }

//     const fetchParticipants = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/participants");
//         setParticipants(response.data);
//       } catch (error) {
//         console.error("Error fetching participants:", error);
//       }
//     };

//     fetchParticipants();
//   }, []);

//   const handleGuessGames = (id) => {
//     navigate(`/predictions/${id}`); // נווט לדף ניחושים לפי ID המשתתף
//   };

//   return (
//     <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px" , marginBottom:"70px" }}>
//       <h2>ניהול משתתפים</h2>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>מספר משתתף</TableCell>
//               <TableCell>שם משתמש</TableCell>
//               <TableCell>מלך שערים</TableCell>
//               <TableCell>קבוצה מנצחת</TableCell>
//               <TableCell>נקודות</TableCell>
//               <TableCell>פעולות</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {participants.map((participant, index) => (
//               <TableRow key={participant._id}>
//                 <TableCell>{index + 1}</TableCell>
//                 <TableCell>{participant.userName}</TableCell>
//                 <TableCell>
//                   <Avatar
//                     src={`http://localhost:5000/${participant.scorerImage}`}
//                     alt="Top Scorer"
//                     sx={{ width: 56, height: 56 }}
//                   />
//                 </TableCell>
//                 <TableCell>
//                   <Avatar
//                     src={`http://localhost:5000/${participant.winnerImage}`}
//                     alt="Winner Team"
//                     sx={{ width: 56, height: 56 }}
//                   />
//                 </TableCell>
//                 <TableCell>{participant.points}</TableCell>
//                 <TableCell>
//                   {(currentUser?.role === "admin" || currentUser?.id === participant._id) && (
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       onClick={() => handleGuessGames(participant._id)} // מעבר לניחוש משחקים
//                       sx={{ marginRight: 1 }}
//                     >
//                       נחש משחקים
//                     </Button>
//                   )}
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default Participants;









//best!!
// import React, { useEffect, useState } from "react";
// import axios from "axios"; // Import axios for HTTP requests
// import { useNavigate } from "react-router-dom";
// import {
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Avatar,
//   IconButton,
// } from "@mui/material";
// import { jwtDecode } from "jwt-decode"; // Import jwtDecode to decode the token
// import DeleteIcon from "@mui/icons-material/Delete"; // Import the Delete Icon

// const Participants = () => {
//   const navigate = useNavigate(); // שימוש ב-useNavigate עבור ניווט
//   const [participants, setParticipants] = useState([]);
//   const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {
//     // בדיקה האם המשתמש מחובר
//     const token = localStorage.getItem("token");
//     if (token) {
//       const decodedToken = jwtDecode(token);
//       setCurrentUser(decodedToken);
//     }

//     const fetchParticipants = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/participants");
//         setParticipants(response.data);
//       } catch (error) {
//         console.error("Error fetching participants:", error);
//       }
//     };

//     fetchParticipants();
//   }, []);

//   const handleGuessGames = (id) => {
//     navigate(`/predictions/${id}`); // נווט לדף ניחושים לפי ID המשתתף
//   };

//   const handleDeleteParticipant = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/participants/${id}`);
//       setParticipants(participants.filter((participant) => participant._id !== id)); // עדכון רשימת המשתתפים לאחר מחיקה
//       alert("המשתתף נמחק בהצלחה!");
//     } catch (error) {
//       console.error("Error deleting participant:", error);
//       alert("לא ניתן למחוק את המשתתף. אנא נסה שנית.");
//     }
//   };

//   return (
//     <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px", marginBottom: "70px" }}>
//       <h2>ניהול משתתפים</h2>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>מספר משתתף</TableCell>
//               <TableCell>שם משתמש</TableCell>
//               <TableCell>מלך שערים</TableCell>
//               <TableCell>קבוצה מנצחת</TableCell>
//               <TableCell>נקודות</TableCell>
//               <TableCell>פעולות</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {participants.map((participant, index) => (
//               <TableRow key={participant._id}>
//                 <TableCell>{index + 1}</TableCell>
//                 <TableCell>{participant.userName}</TableCell>
//                 <TableCell>
//                   <Avatar
//                     src={`http://localhost:5000/${participant.scorerImage}`}
//                     alt="Top Scorer"
//                     sx={{ width: 56, height: 56 }}
//                   />
//                 </TableCell>
//                 <TableCell>
//                   <Avatar
//                     src={`http://localhost:5000/${participant.winnerImage}`}
//                     alt="Winner Team"
//                     sx={{ width: 56, height: 56 }}
//                   />
//                 </TableCell>
//                 <TableCell>{participant.points}</TableCell>
//                 <TableCell>
//                   {(currentUser?.role === "admin" || currentUser?.id === participant._id) && (
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       onClick={() => handleGuessGames(participant._id)} // מעבר לניחוש משחקים
//                       sx={{ marginRight: 1 }}
//                     >
//                       נחש משחקים
//                     </Button>
//                   )}
//                   {currentUser?.role === "admin" && (
//                     <IconButton
//                       color="error"
//                       onClick={() => handleDeleteParticipant(participant._id)} // מחיקת משתתף
//                       sx={{ marginLeft: 1 }}
//                     >
//                       <DeleteIcon />
//                     </IconButton>
//                   )}
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default Participants;










// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import {
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Avatar,
//   IconButton,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   Snackbar,
//   Alert,
// } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { jwtDecode } from "jwt-decode";

// const Participants = () => {
//   const navigate = useNavigate();
//   const [participants, setParticipants] = useState([]);
//   const [currentUser, setCurrentUser] = useState(null);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [selectedParticipant, setSelectedParticipant] = useState(null);
//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState("");
//   const [snackbarSeverity, setSnackbarSeverity] = useState("success");

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       const decodedToken = jwtDecode(token);
//       setCurrentUser(decodedToken);
//     }

//     fetchParticipants();
//   }, []);

//   const fetchParticipants = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/participants");
//       setParticipants(response.data);
//     } catch (error) {
//       console.error("Error fetching participants:", error);
//     }
//   };

//   const handleGuessGames = (id) => {
//     navigate(`/predictions/${id}`);
//   };

//   const handleDeleteClick = (participant) => {
//     setSelectedParticipant(participant);
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//     setSelectedParticipant(null);
//   };

//   const handleDeleteParticipant = async () => {
//     try {
//       await axios.delete(`http://localhost:5000/participants/${selectedParticipant._id}`);
//       setParticipants(participants.filter((p) => p._id !== selectedParticipant._id));
//       handleCloseDialog();
//       setSnackbarMessage("משתמש נמחק בהצלחה!");
//       setSnackbarSeverity("success");
//       setSnackbarOpen(true);
//     } catch (error) {
//       console.error("Error deleting participant:", error);
//       setSnackbarMessage("שגיאה במחיקת המשתמש. נסה שוב.");
//       setSnackbarSeverity("error");
//       setSnackbarOpen(true);
//     }
//   };

//   const handleCloseSnackbar = () => {
//     setSnackbarOpen(false);
//   };

//   return (
//     <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px", marginBottom: "130px" }}>
//       <h2>ניהול משתתפים</h2>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>מספר משתתף</TableCell>
//               <TableCell>שם משתמש</TableCell>
//               <TableCell>מלך שערים</TableCell>
//               <TableCell>קבוצה מנצחת</TableCell>
//               <TableCell>נקודות</TableCell>
//               <TableCell>פעולות</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {participants.map((participant, index) => (
//               <TableRow key={participant._id}>
//                 <TableCell>{index + 1}</TableCell>
//                 <TableCell>{participant.userName}</TableCell>
//                 <TableCell>
//                   <Avatar
//                     src={`http://localhost:5000/${participant.scorerImage}`}
//                     alt="Top Scorer"
//                     sx={{ width: 56, height: 56 }}
//                   />
//                 </TableCell>
//                 <TableCell>
//                   <Avatar
//                     src={`http://localhost:5000/${participant.winnerImage}`}
//                     alt="Winner Team"
//                     sx={{ width: 56, height: 56 }}
//                   />
//                 </TableCell>
//                 <TableCell>{participant.points}</TableCell>
//                 <TableCell>
//                   {(currentUser?.role === "admin" || currentUser?.id === participant._id) && (
//                     <>
//                       <Button
//                         variant="contained"
//                         color="primary"
//                         onClick={() => handleGuessGames(participant._id)}
//                         sx={{ marginRight: 1 }}
//                       >
//                         נחש משחקים
//                       </Button>
//                       <IconButton
//                         color="error"
//                         onClick={() => handleDeleteClick(participant)}
//                       >
//                         <DeleteIcon />
//                       </IconButton>
//                     </>
//                   )}
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* חלון אישור למחיקה */}
//       <Dialog
//         open={openDialog}
//         onClose={handleCloseDialog}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title">{"אישור מחיקה"}</DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//             האם אתה בטוח שברצונך למחוק את המשתמש {selectedParticipant?.userName}?
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog} color="primary">
//             ביטול
//           </Button>
//           <Button onClick={handleDeleteParticipant} color="secondary" autoFocus>
//             מחק
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* הודעות חטף (Snackbar) */}
//       <Snackbar
//         open={snackbarOpen}
//         autoHideDuration={6000}
//         onClose={handleCloseSnackbar}
//       >
//         <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
//           {snackbarMessage}
//         </Alert>
//       </Snackbar>
//     </div>
//   );
// };

// export default Participants;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
  Alert,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { jwtDecode } from "jwt-decode";

const Participants = () => {
  const navigate = useNavigate();
  const [participants, setParticipants] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedParticipant, setSelectedParticipant] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      setCurrentUser(decodedToken);
    }

    fetchParticipants();
  }, []);

  const fetchParticipants = async () => {
    try {
      const response = await axios.get("http://localhost:5000/participants");
      setParticipants(response.data);
    } catch (error) {
      console.error("Error fetching participants:", error);
    }
  };

  const handleGuessGames = (id) => {
    navigate(`/predictions/${id}`);
  };

  const handleDeleteClick = (participant) => {
    setSelectedParticipant(participant);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedParticipant(null);
  };

  const handleDeleteParticipant = async () => {
    try {
      await axios.delete(`http://localhost:5000/participants/${selectedParticipant._id}`);
      setParticipants(participants.filter((p) => p._id !== selectedParticipant._id));
      handleCloseDialog();
      setSnackbarMessage("משתמש נמחק בהצלחה!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
    } catch (error) {
      console.error("Error deleting participant:", error);
      setSnackbarMessage("שגיאה במחיקת המשתמש. נסה שוב.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px", marginBottom: "130px" }}>
      <h2>ניהול משתתפים</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>מספר משתתף</TableCell>
              <TableCell>שם משתמש</TableCell>
              <TableCell>מלך שערים</TableCell>
              <TableCell>קבוצה מנצחת</TableCell>
              <TableCell>נקודות</TableCell>
              <TableCell>פעולות</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {participants.map((participant, index) => (
              <TableRow key={participant._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{participant.userName}</TableCell>
                <TableCell>
                  <Avatar
                    src={`http://localhost:5000/${participant.scorerImage}`}
                    alt="Top Scorer"
                    sx={{ width: 56, height: 56 }}
                  />
                </TableCell>
                <TableCell>
                  <Avatar
                    src={`http://localhost:5000/${participant.winnerImage}`}
                    alt="Winner Team"
                    sx={{ width: 56, height: 56 }}
                  />
                </TableCell>
                <TableCell>{participant.points}</TableCell>
                <TableCell>
                  {/* כפתור נחש משחקים עבור מנהל או משתמש המחובר עצמו */}
                  {(currentUser?.role === "admin" || currentUser?.id === participant._id) && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleGuessGames(participant._id)}
                      sx={{ marginRight: 1 }}
                    >
                      נחש משחקים
                    </Button>
                  )}
                  {/* אייקון הפח מופיע רק עבור מנהל */}
                  {currentUser?.role === "admin" && (
                    <IconButton
                      color="error"
                      onClick={() => handleDeleteClick(participant)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* חלון אישור למחיקה */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"אישור מחיקה"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            האם אתה בטוח שברצונך למחוק את המשתמש {selectedParticipant?.userName}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            ביטול
          </Button>
          <Button onClick={handleDeleteParticipant} color="secondary" autoFocus>
            מחק
          </Button>
        </DialogActions>
      </Dialog>

      {/* הודעות חטף (Snackbar) */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Participants;

