
// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Container,
//   Typography,
//   TextField,
//   Button,
//   Grid,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemSecondaryAction,
//   IconButton,
//   Snackbar,
//   Alert,
//   Divider,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Checkbox,
//   ListItemIcon,
// } from "@mui/material";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import DeleteIcon from "@mui/icons-material/Delete";
// import ShareIcon from "@mui/icons-material/Share";
// import EditIcon from "@mui/icons-material/Edit";
// import axios from "axios";

// const PrivateLeagues = () => {
//   const [leagueName, setLeagueName] = useState("");
//   const [participants, setParticipants] = useState([]);
//   const [newParticipant, setNewParticipant] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const [userLeagues, setUserLeagues] = useState([]);
//   const [editDialogOpen, setEditDialogOpen] = useState(false);
//   const [currentLeague, setCurrentLeague] = useState(null);
//   const [selectedParticipants, setSelectedParticipants] = useState([]);
//   const API_URL = process.env.REACT_APP_API_URL;
//   const userId = localStorage.getItem("userId");

//   useEffect(() => {
//     const fetchLeagues = async () => {
//       try {
//         const response = await axios.get(`${API_URL}/leagues/${userId}`);
//         setUserLeagues(response.data);
//       } catch (error) {
//         console.error("Error fetching leagues:", error);
//       }
//     };

//     fetchLeagues();
//   }, [API_URL, userId]);

//   const handleAddParticipant = () => {
//     if (newParticipant && !participants.includes(newParticipant)) {
//       setParticipants([...participants, newParticipant]);
//       setNewParticipant("");
//     }
//   };

//   const handleRemoveParticipant = (participant) => {
//     setParticipants((prevParticipants) =>
//       prevParticipants.filter((p) => p !== participant)
//     );
//   };

//   const handleCreateLeague = async () => {
//     if (!leagueName) {
//       setSuccessMessage("אנא הזן שם לקבוצה.");
//       return;
//     }
//     if (participants.length < 2) {
//       setSuccessMessage("עליך להוסיף לפחות 2 משתתפים.");
//       return;
//     }

//     try {
//       const response = await axios.post(`${API_URL}/leagues`, {
//         leagueName,
//         participants,
//         userId,
//       });

//       setSuccessMessage("הקבוצה נוצרה בהצלחה!");
//       setUserLeagues([...userLeagues, response.data]);
//       setLeagueName("");
//       setParticipants([]);
//     } catch (error) {
//       console.error("Error creating league:", error);
//       setSuccessMessage("שגיאה ביצירת הקבוצה.");
//     }
//   };

//   const handleEditLeague = (league) => {
//     setCurrentLeague(league);
//     setSelectedParticipants(league.participants);
//     setEditDialogOpen(true);
//   };

//   const handleSaveEdit = async () => {
//     try {
//       const response = await axios.put(
//         `${API_URL}/leagues/${currentLeague._id}`,
//         { participants: selectedParticipants }
//       );

//       setUserLeagues((prevLeagues) =>
//         prevLeagues.map((league) =>
//           league._id === response.data._id ? response.data : league
//         )
//       );

//       setEditDialogOpen(false);
//       setSuccessMessage("הקבוצה עודכנה בהצלחה!");
//     } catch (error) {
//       console.error("Error updating league:", error);
//       setSuccessMessage("שגיאה בעדכון הקבוצה.");
//     }
//   };

//   const handleShareLeague = (league) => {
//     navigator.clipboard.writeText(
//       `${window.location.origin}/invite/${league._id}`
//     );
//     setSuccessMessage("הלינק לקבוצה הועתק!");
//   };

//   return (
//     <Container sx={{ mt: 4, mb: 8 }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         יצירת קבוצות פרטיות
//       </Typography>
//       <Box
//         sx={{
//           bgcolor: "background.paper",
//           boxShadow: 3,
//           borderRadius: "12px",
//           p: 4,
//         }}
//       >
//         <Grid container spacing={2} sx={{ mb: 3 }}>
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="שם הקבוצה"
//               value={leagueName}
//               onChange={(e) => setLeagueName(e.target.value)}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="הוסף משתתף"
//               value={newParticipant}
//               onChange={(e) => setNewParticipant(e.target.value)}
//             />
//           </Grid>
//         </Grid>
//         <Button
//           variant="contained"
//           startIcon={<PersonAddIcon />}
//           sx={{ mb: 3 }}
//           onClick={handleAddParticipant}
//         >
//           הוסף משתתף
//         </Button>
//         <List>
//           {participants.map((participant, index) => (
//             <ListItem key={index}>
//               <ListItemText primary={participant} />
//               <ListItemSecondaryAction>
//                 <IconButton
//                   edge="end"
//                   onClick={() => handleRemoveParticipant(participant)}
//                 >
//                   <DeleteIcon color="error" />
//                 </IconButton>
//               </ListItemSecondaryAction>
//             </ListItem>
//           ))}
//         </List>
//         <Button
//           variant="contained"
//           color="primary"
//           startIcon={<AddCircleOutlineIcon />}
//           sx={{ mt: 3 }}
//           onClick={handleCreateLeague}
//         >
//           צור קבוצה
//         </Button>
//       </Box>

//       <Divider sx={{ my: 4 }} />

//       <Typography variant="h5" gutterBottom>
//         הקבוצות שלך
//       </Typography>
//       <List>
//         {userLeagues.map((league, index) => (
//           <ListItem key={index}>
//             <ListItemText
//               primary={league.leagueName}
//               secondary={`משתתפים: ${league.participants.join(", ")}`}
//             />
//             <ListItemSecondaryAction>
//               <IconButton
//                 edge="end"
//                 onClick={() => handleEditLeague(league)}
//                 sx={{ mr: 1 }}
//               >
//                 <EditIcon color="primary" />
//               </IconButton>
//               <IconButton
//                 edge="end"
//                 onClick={() => handleShareLeague(league)}
//                 sx={{ mr: 1 }}
//               >
//                 <ShareIcon color="primary" />
//               </IconButton>
//             </ListItemSecondaryAction>
//           </ListItem>
//         ))}
//       </List>

//       <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
//         <DialogTitle>עריכת קבוצה</DialogTitle>
//         <DialogContent>
//           <List>
//             {participants.map((participant, index) => (
//               <ListItem key={index} button>
//                 <ListItemIcon>
//                   <Checkbox
//                     checked={selectedParticipants.includes(participant)}
//                     onChange={(e) => {
//                       if (e.target.checked) {
//                         setSelectedParticipants((prev) => [
//                           ...prev,
//                           participant,
//                         ]);
//                       } else {
//                         setSelectedParticipants((prev) =>
//                           prev.filter((p) => p !== participant)
//                         );
//                       }
//                     }}
//                   />
//                 </ListItemIcon>
//                 <ListItemText primary={participant} />
//               </ListItem>
//             ))}
//           </List>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleSaveEdit} color="primary">
//             שמור
//           </Button>
//           <Button onClick={() => setEditDialogOpen(false)}>ביטול</Button>
//         </DialogActions>
//       </Dialog>

//       {successMessage && (
//         <Snackbar
//           open={Boolean(successMessage)}
//           autoHideDuration={6000}
//           onClose={() => setSuccessMessage("")}
//         >
//           <Alert
//             onClose={() => setSuccessMessage("")}
//             severity="success"
//             sx={{ width: "100%" }}
//           >
//             {successMessage}
//           </Alert>
//         </Snackbar>
//       )}
//     </Container>
//   );
// };

// export default PrivateLeagues;



// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Container,
//   Typography,
//   TextField,
//   Button,
//   Grid,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemSecondaryAction,
//   IconButton,
//   Snackbar,
//   Alert,
//   Divider,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Checkbox,
//   ListItemIcon,
// } from "@mui/material";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import DeleteIcon from "@mui/icons-material/Delete";
// import ShareIcon from "@mui/icons-material/Share";
// import EditIcon from "@mui/icons-material/Edit";
// import axios from "axios";

// const PrivateLeagues = () => {
//   const [leagueName, setLeagueName] = useState("");
//   const [participants, setParticipants] = useState([]);
//   const [newParticipant, setNewParticipant] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const [userLeagues, setUserLeagues] = useState([]);
//   const [editDialogOpen, setEditDialogOpen] = useState(false);
//   const [currentLeague, setCurrentLeague] = useState(null);
//   const [selectedParticipants, setSelectedParticipants] = useState([]);
//   const API_URL = process.env.REACT_APP_API_URL;
//   const userId = localStorage.getItem("userId");

//   useEffect(() => {
//     const fetchLeagues = async () => {
//       try {
//         const response = await axios.get(`${API_URL}/leagues/${userId}`);
//         setUserLeagues(response.data);
//       } catch (error) {
//         console.error("Error fetching leagues:", error);
//       }
//     };

//     fetchLeagues();
//   }, [API_URL, userId]);

//   const handleAddParticipant = () => {
//     if (newParticipant && !participants.includes(newParticipant)) {
//       setParticipants([...participants, newParticipant]);
//       setNewParticipant("");
//     }
//   };

//   const handleRemoveParticipant = (participant) => {
//     setParticipants((prevParticipants) =>
//       prevParticipants.filter((p) => p !== participant)
//     );
//   };

//   const handleCreateLeague = async () => {
//     if (!leagueName) {
//       setSuccessMessage("אנא הזן שם לקבוצה.");
//       return;
//     }
//     if (participants.length < 2) {
//       setSuccessMessage("עליך להוסיף לפחות 2 משתתפים.");
//       return;
//     }

//     try {
//       const response = await axios.post(`${API_URL}/leagues`, {
//         leagueName,
//         participants,
//         userId,
//       });

//       setSuccessMessage("הקבוצה נוצרה בהצלחה!");
//       setUserLeagues([...userLeagues, response.data]);
//       setLeagueName("");
//       setParticipants([]);
//     } catch (error) {
//       console.error("Error creating league:", error);
//       setSuccessMessage("שגיאה ביצירת הקבוצה.");
//     }
//   };

//   const handleEditLeague = (league) => {
//     setCurrentLeague(league);
//     setSelectedParticipants(league.participants);
//     setEditDialogOpen(true);
//   };

//   const handleSaveEdit = async () => {
//     try {
//       const response = await axios.put(
//         `${API_URL}/leagues/${currentLeague._id}`,
//         { participants: selectedParticipants }
//       );

//       setUserLeagues((prevLeagues) =>
//         prevLeagues.map((league) =>
//           league._id === response.data._id ? response.data : league
//         )
//       );

//       setEditDialogOpen(false);
//       setSuccessMessage("הקבוצה עודכנה בהצלחה!");
//     } catch (error) {
//       console.error("Error updating league:", error);
//       setSuccessMessage("שגיאה בעדכון הקבוצה.");
//     }
//   };

//   const handleShareLeague = (league) => {
//     navigator.clipboard.writeText(
//       `${window.location.origin}/invite/${league._id}`
//     );
//     setSuccessMessage("הלינק לקבוצה הועתק!");
//   };

//   return (
//     <Container sx={{ mt: 4, mb: 8 }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         יצירת קבוצות פרטיות
//       </Typography>
//       <Box
//         sx={{
//           bgcolor: "background.paper",
//           boxShadow: 3,
//           borderRadius: "12px",
//           p: 4,
//         }}
//       >
//         <Grid container spacing={2} sx={{ mb: 3 }}>
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="שם הקבוצה"
//               value={leagueName}
//               onChange={(e) => setLeagueName(e.target.value)}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="הוסף משתתף"
//               value={newParticipant}
//               onChange={(e) => setNewParticipant(e.target.value)}
//             />
//           </Grid>
//         </Grid>
//         <Button
//           variant="contained"
//           startIcon={<PersonAddIcon />}
//           sx={{ mb: 3 }}
//           onClick={handleAddParticipant}
//         >
//           הוסף משתתף
//         </Button>
//         <List>
//           {participants.map((participant, index) => (
//             <ListItem key={index}>
//               <ListItemText primary={participant} />
//               <ListItemSecondaryAction>
//                 <IconButton
//                   edge="end"
//                   onClick={() => handleRemoveParticipant(participant)}
//                 >
//                   <DeleteIcon color="error" />
//                 </IconButton>
//               </ListItemSecondaryAction>
//             </ListItem>
//           ))}
//         </List>
//         <Button
//           variant="contained"
//           color="primary"
//           startIcon={<AddCircleOutlineIcon />}
//           sx={{ mt: 3 }}
//           onClick={handleCreateLeague}
//         >
//           צור קבוצה
//         </Button>
//       </Box>

//       <Divider sx={{ my: 4 }} />

//       <Typography variant="h5" gutterBottom>
//         הקבוצות שלך
//       </Typography>
//       <List>
//         {userLeagues.map((league, index) => (
//           <ListItem key={index}>
//             <ListItemText
//               primary={league.leagueName}
//               secondary={`משתתפים: ${league.participants.join(", ")}`}
//             />
//             <ListItemSecondaryAction>
//               <IconButton
//                 edge="end"
//                 onClick={() => handleEditLeague(league)}
//                 sx={{ mr: 1 }}
//               >
//                 <EditIcon color="primary" />
//               </IconButton>
//               <IconButton
//                 edge="end"
//                 onClick={() => handleShareLeague(league)}
//                 sx={{ mr: 1 }}
//               >
//                 <ShareIcon color="primary" />
//               </IconButton>
//             </ListItemSecondaryAction>
//           </ListItem>
//         ))}
//       </List>

//       <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
//         <DialogTitle>עריכת קבוצה</DialogTitle>
//         <DialogContent>
//           <List>
//             {participants.map((participant, index) => (
//               <ListItem key={index} button>
//                 <ListItemIcon>
//                   <Checkbox
//                     checked={selectedParticipants.includes(participant)}
//                     onChange={(e) => {
//                       if (e.target.checked) {
//                         setSelectedParticipants((prev) => [
//                           ...prev,
//                           participant,
//                         ]);
//                       } else {
//                         setSelectedParticipants((prev) =>
//                           prev.filter((p) => p !== participant)
//                         );
//                       }
//                     }}
//                   />
//                 </ListItemIcon>
//                 <ListItemText primary={participant} />
//               </ListItem>
//             ))}
//           </List>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleSaveEdit} color="primary">
//             שמור
//           </Button>
//           <Button onClick={() => setEditDialogOpen(false)}>ביטול</Button>
//         </DialogActions>
//       </Dialog>

//       {successMessage && (
//         <Snackbar
//           open={Boolean(successMessage)}
//           autoHideDuration={6000}
//           onClose={() => setSuccessMessage("")}
//         >
//           <Alert
//             onClose={() => setSuccessMessage("")}
//             severity="success"
//             sx={{ width: "100%" }}
//           >
//             {successMessage}
//           </Alert>
//         </Snackbar>
//       )}
//     </Container>
//   );
// };

// export default PrivateLeagues;



import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Snackbar,
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Paper,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const PrivateLeagues = () => {
  const [leagueName, setLeagueName] = useState("");
  const [participants, setParticipants] = useState([]);
  const [newParticipant, setNewParticipant] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [leagueCreated, setLeagueCreated] = useState(false);
  const [leagueTable, setLeagueTable] = useState([]);

  const API_URL = process.env.REACT_APP_API_URL;

  // Add participant
  const handleAddParticipant = () => {
    if (newParticipant && !participants.includes(newParticipant)) {
      setParticipants([...participants, newParticipant]);
      setNewParticipant("");
    }
  };

  // Remove participant
  const handleRemoveParticipant = (participant) => {
    setParticipants((prevParticipants) =>
      prevParticipants.filter((p) => p !== participant)
    );
  };

  // Create League
  const handleCreateLeague = async () => {
    if (!leagueName) {
      setSuccessMessage("אנא הזן שם לקבוצה.");
      return;
    }
    if (participants.length < 2) {
      setSuccessMessage("עליך להוסיף לפחות 2 משתתפים.");
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/leagues`, {
        leagueName,
        participants,
      });

      setSuccessMessage("הקבוצה נוצרה בהצלחה!");
      setLeagueCreated(true);
      setLeagueTable(response.data.participantsData || []); // Simulating data from server
      setLeagueName("");
      setParticipants([]);
    } catch (error) {
      console.error("Error creating league:", error);
      setSuccessMessage("שגיאה ביצירת הליגה. נסה שוב.");
    }
  };

  return (
    <Container sx={{ mt: 4, mb: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        יצירת קבוצות פרטיות
      </Typography>
      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 3,
          borderRadius: "12px",
          p: 4,
        }}
      >
        {!leagueCreated ? (
          <>
            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="שם הקבוצה"
                  value={leagueName}
                  onChange={(e) => setLeagueName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="הוסף משתתף"
                  value={newParticipant}
                  onChange={(e) => setNewParticipant(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              startIcon={<PersonAddIcon />}
              sx={{ mb: 3 }}
              onClick={handleAddParticipant}
            >
              הוסף משתתף
            </Button>
            <List>
              {participants.map((participant, index) => (
                <ListItem key={index}>
                  <ListItemText primary={participant} />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      onClick={() => handleRemoveParticipant(participant)}
                    >
                      <DeleteIcon color="error" />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddCircleOutlineIcon />}
              sx={{ mt: 3 }}
              onClick={handleCreateLeague}
            >
              צור קבוצה
            </Button>
          </>
        ) : (
          <>
            <Typography variant="h5" align="center" gutterBottom>
              טבלת הליגה: {leagueName}
            </Typography>
            <TableContainer component={Paper} sx={{ mt: 3, boxShadow: 3 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>שם משתתף</TableCell>
                    <TableCell>תמונת מלך השערים</TableCell>
                    <TableCell>תמונת הקבוצה המנצחת</TableCell>
                    <TableCell>ניקוד</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {leagueTable.map((participant, index) => (
                    <TableRow key={index}>
                      <TableCell>{participant.name}</TableCell>
                      <TableCell>
                        <Avatar
                          src={participant.scorerImage}
                          alt="תמונת מלך השערים"
                          sx={{ width: 50, height: 50 }}
                        />
                      </TableCell>
                      <TableCell>
                        <Avatar
                          src={participant.winnerImage}
                          alt="תמונת הקבוצה המנצחת"
                          sx={{ width: 50, height: 50 }}
                        />
                      </TableCell>
                      <TableCell>{participant.points}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
      </Box>
      {successMessage && (
        <Snackbar
          open={Boolean(successMessage)}
          autoHideDuration={6000}
          onClose={() => setSuccessMessage("")}
        >
          <Alert
            onClose={() => setSuccessMessage("")}
            severity="success"
            sx={{ width: "100%" }}
          >
            {successMessage}
          </Alert>
        </Snackbar>
      )}
    </Container>
  );
};

export default PrivateLeagues;
