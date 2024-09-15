// src/components/Navigation.js

// import React from "react";
// import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
// import { Link } from "react-router-dom";
// import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

// const Navigation = () => {
//   return (
//     <AppBar position="static" color="primary">
//       <Toolbar>
//         <IconButton edge="start" color="inherit" aria-label="menu">
//           <SportsSoccerIcon />
//         </IconButton>
//         <Typography variant="h6" style={{ flexGrow: 1 }}>
//           ניהול טורניר כדורגל
//         </Typography>
//         <Button color="inherit" component={Link} to="/games">
//           משחקים
//         </Button>
//         <Button color="inherit" component={Link} to="/participants">
//           משתתפים
//         </Button>
//         <Button color="inherit" component={Link} to="/predictions">
//           ניחושים
//         </Button>
//         <Button color="inherit" component={Link} to="/leaderboard">
//           דירוג
//         </Button>
//         <Button color="inherit" component={Link} to="/add-user">
//           הוסף משתמש
//         </Button>
//         <Button color="inherit" component={Link} to="/login">
//           התחבר
//         </Button>
//         <Button color="inherit" component={Link} to="/register">
//           הרשמה
//         </Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navigation;


//besttt
// import React from "react";
// import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
// import { Link } from "react-router-dom";
// import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
// import {jwtDecode} from "jwt-decode";

// const Navigation = () => {
//   const token = localStorage.getItem("token");
//   let userRole = null;

//   if (token) {
//     try {
//       const decodedToken = jwtDecode(token);
//       userRole = decodedToken.role;
//     } catch (error) {
//       console.error("Error decoding token:", error);
//     }
//   }

//   return (
//     <AppBar position="static" color="primary">
//       <Toolbar>
//         <IconButton edge="start" color="inherit" aria-label="menu">
//           <SportsSoccerIcon />
//         </IconButton>
//         <Typography variant="h6" style={{ flexGrow: 1 }}>
//           ניהול טורניר כדורגל
//         </Typography>
//         <Button color="inherit" component={Link} to="/games">
//           משחקים
//         </Button>
//         <Button color="inherit" component={Link} to="/participants">
//           משתתפים
//         </Button>
//         <Button color="inherit" component={Link} to="/predictions">
//           ניחושים
//         </Button>
//         <Button color="inherit" component={Link} to="/leaderboard">
//           דירוג
//         </Button>
//         {userRole === "admin" && (
//           <Button color="inherit" component={Link} to="/add-user">
//             הוסף משתמש
//           </Button>
//         )}
//         <Button color="inherit" component={Link} to="/login">
//           התחבר
//         </Button>
//         <Button color="inherit" component={Link} to="/register">
//           הרשמה
//         </Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navigation;







//bestt
// import React from "react";
// import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";
// import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
// import {jwtDecode} from "jwt-decode";

// const Navigation = () => {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");
//   const userName = localStorage.getItem("userName");
//   let userRole = null;


//     if (token) {
//     try {
//       const decodedToken = jwtDecode(token);
//       userRole = decodedToken.role;
//     } catch (error) {
//       console.error("Error decoding token:", error);
//     }
//   }

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("userName");
//     navigate("/login");
//   };

//   return (
//     <AppBar position="static" color="primary">
//       <Toolbar>
//         <IconButton edge="start" color="inherit" aria-label="menu">
//           <SportsSoccerIcon />
//         </IconButton>
//         <Typography variant="h6" style={{ flexGrow: 1 }}>
//           ניהול טורניר כדורגל
//         </Typography>
//         <Button color="inherit" component={Link} to="/games">
//           משחקים
//         </Button>
//         <Button color="inherit" component={Link} to="/participants">
//           משתתפים
//         </Button>
//         <Button color="inherit" component={Link} to="/predictions">
//           ניחושים
//         </Button>
//         <Button color="inherit" component={Link} to="/leaderboard">
//           דירוג
//         </Button>

        
        
//         {userRole === "admin" && (
//           <Button color="inherit" component={Link} to="/add-user">
//             הוסף משתמש
//           </Button>
//         )}
//         {token ? (
//           <>
//             <Typography color="inherit">שלום, {userRole === "admin" ? "מנהל" :"משתתף"}</Typography>
//             <Button color="inherit" onClick={handleLogout}>
//               התנתק
//             </Button>
//           </>
//         ) : (
//           <>
//             <Button color="inherit" component={Link} to="/login">
//               התחבר
//             </Button>
//             <Button color="inherit" component={Link} to="/register">
//               הרשמה
//             </Button>
//           </>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navigation;




import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import { jwtDecode } from "jwt-decode";

const Navigation = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("userName");
  let userRole = null;
  let userId = null;

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      userRole = decodedToken.role;
      userId = decodedToken.id; // הוספת userId כדי לקשר לעמוד הפרופיל של המשתמש
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    navigate("/login");
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <SportsSoccerIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
         PredictPlay 
        </Typography>
        <Button color="inherit" component={Link} to="/games">
          משחקים
        </Button>
        <Button color="inherit" component={Link} to="/participants">
          משתתפים
        </Button>
        <Button color="inherit" component={Link} to="/predictions">
          ניחושים
        </Button>
        <Button color="inherit" component={Link} to="/leaderboard">
          דירוג
        </Button>

        {/* כפתור לפרופיל המשתמש */}
        {token && (
          <Button color="inherit" component={Link} to={`/profile/${userId}`}>
            הפרופיל שלי
          </Button>
        )}

        {userRole === "admin" && (
          <Button color="inherit" component={Link} to="/add-user">
            הוסף משתמש
          </Button>
        )}
        {token ? (
          <>
            <Typography color="inherit">שלום, {userRole === "admin" ? "מנהל" : "משתתף"}</Typography>
            <Button color="inherit" onClick={handleLogout}>
              התנתק
            </Button>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/login">
              התחבר
            </Button>
            <Button color="inherit" component={Link} to="/register">
              הרשמה
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
