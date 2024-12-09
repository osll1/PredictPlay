
// import React, { useState } from "react";
// import {
//   Container,
//   Box,
//   TextField,
//   Button,
//   Typography,
//   Link,
//   Avatar,
//   Snackbar,
//   Alert,
// } from "@mui/material";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(""); // מצב לשגיאות
//   const [emailError, setEmailError] = useState(""); // שגיאה על אימייל
//   const [passwordError, setPasswordError] = useState(""); // שגיאה על סיסמה
//   const navigate = useNavigate();

//   const API_URL = process.env.REACT_APP_API_URL;

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const handleLogin = async () => {
//     // בדיקת ולידציה של המייל
//     if (!validateEmail(email)) {
//       setEmailError("כתובת אימייל לא תקינה");
//       return;
//     }
//     if (password.trim() === "") {
//       setPasswordError("יש להזין סיסמה");
//       return;
//     }

//     try {
//       const response = await axios.post(`${API_URL}/api/users/login`, { email, password });
//       if (response.data.success) {
//         localStorage.setItem("token", response.data.token);
//         localStorage.setItem("userName", response.data.userName);
//         navigate("/");
//       } else {
//         setError(response.data.message || "כתובת אימייל או סיסמה שגויים");
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//       if (error.response && error.response.data.message) {
//         setError(error.response.data.message);
//       } else {
//         setError("שגיאה בתהליך ההתחברות");
//       }
//     }
//   };

//   return (
//     <Container maxWidth="xs" style={{ marginBottom: "70px" }}>
//       <Box
//         sx={{
//           marginTop: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           התחברות
//         </Typography>
//         <Box sx={{ mt: 1 }}>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="כתובת אימייל"
//             name="email"
//             autoComplete="email"
//             autoFocus
//             value={email}
//             onChange={(e) => {
//               setEmail(e.target.value);
//               setEmailError(""); // איפוס שגיאה בזמן ההקלדה
//             }}
//             error={!!emailError}
//             helperText={emailError}
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="סיסמא"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//             value={password}
//             onChange={(e) => {
//               setPassword(e.target.value);
//               setPasswordError(""); // איפוס שגיאה בזמן ההקלדה
//             }}
//             error={!!passwordError}
//             helperText={passwordError}
//           />
//           <Button
//             type="button"
//             fullWidth
//             variant="contained"
//             color="primary"
//             sx={{ mt: 3, mb: 2 }}
//             onClick={handleLogin}
//           >
//             התחבר
//           </Button>
//           <Link href="/register" variant="body2">
//             {"אין לך חשבון? הירשם"}
//           </Link>
//         </Box>
//       </Box>

//       {/* הודעת שגיאה כללית */}
//       {error && (
//         <Snackbar
//           open={Boolean(error)}
//           autoHideDuration={6000}
//           onClose={() => setError("")}
//         >
//           <Alert onClose={() => setError("")} severity="error">
//             {error}
//           </Alert>
//         </Snackbar>
//       )}
//     </Container>
//   );
// };

// export default LoginPage;





import React, { useState } from "react"; // ייבוא React ו-hook לניהול מצב
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Link,
  Avatar,
  Snackbar,
  Alert,
} from "@mui/material"; // רכיבי Material UI לעיצוב הממשק
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"; // אייקון נעילה לעיצוב
import { useNavigate } from "react-router-dom"; // מאפשר ניווט בין דפים
import axios from "axios"; // ספרייה לשליחת בקשות HTTP

const LoginPage = () => {
  const [email, setEmail] = useState(""); // שדה האימייל
  const [password, setPassword] = useState(""); // שדה הסיסמה
  const [error, setError] = useState(""); // הודעת שגיאה כללית
  const [emailError, setEmailError] = useState(""); // הודעת שגיאה לאימייל
  const [passwordError, setPasswordError] = useState(""); // הודעת שגיאה לסיסמה
  const navigate = useNavigate(); // פונקציה לניווט בין דפים

  const API_URL = process.env.REACT_APP_API_URL; // כתובת ה-API נלקחת מהמשתנים הסביבתיים

  // פונקציה לבדוק אם האימייל תקין
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // רג'קס לאימות אימייל
    return emailRegex.test(email); // מחזיר true אם האימייל תקין
  };

  // פונקציה לטיפול בהתחברות
  const handleLogin = async () => {
    // ולידציה על האימייל
    if (!validateEmail(email)) {
      setEmailError("כתובת אימייל לא תקינה"); // עדכון הודעת שגיאה
      return; // מפסיק את הפונקציה אם האימייל לא תקין
    }
    // בדיקת סיסמה
    if (password.trim() === "") {
      setPasswordError("יש להזין סיסמה"); // הודעת שגיאה אם השדה ריק
      return; // מפסיק את הפונקציה
    }

    try {
      // שליחת בקשת התחברות לשרת
      const response = await axios.post(`${API_URL}/api/users/login`, { email, password });

      // אם ההתחברות הצליחה
      if (response.data.success) {
        // שמירת טוקן וזיהוי המשתמש בלוקאל סטורג'
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userName", response.data.userName);

        // ניווט לדף הבית
        navigate("/");
      } else {
        // עדכון שגיאה אם הפרטים שגויים
        setError(response.data.message || "כתובת אימייל או סיסמה שגויים");
      }
    } catch (error) {
      console.error("Error during login:", error); // לוג שגיאה
      // אם יש הודעת שגיאה מהשרת
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("שגיאה בתהליך ההתחברות"); // שגיאה כללית אם השרת לא זמין
      }
    }
  };

  return (
    <Container maxWidth="xs" style={{ marginBottom: "70px" }}> {/* מיכל מרכזי בגודל XS */}
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}> {/* אייקון התחברות */}
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5"> {/* כותרת הדף */}
          התחברות
        </Typography>
        <Box sx={{ mt: 1 }}> {/* טופס ההתחברות */}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="כתובת אימייל"
            name="email"
            autoComplete="email"
            autoFocus
            value={email} // ערך שדה האימייל
            onChange={(e) => {
              setEmail(e.target.value); // עדכון מצב האימייל
              setEmailError(""); // איפוס שגיאה אם המשתמש מתחיל להקליד
            }}
            error={!!emailError} // מציג שגיאה אם יש הודעת שגיאה
            helperText={emailError} // טקסט עזר אם יש שגיאה
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="סיסמא"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password} // ערך שדה הסיסמה
            onChange={(e) => {
              setPassword(e.target.value); // עדכון מצב הסיסמה
              setPasswordError(""); // איפוס שגיאה אם המשתמש מתחיל להקליד
            }}
            error={!!passwordError} // מציג שגיאה אם יש הודעת שגיאה
            helperText={passwordError} // טקסט עזר אם יש שגיאה
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleLogin} // מפעיל את פונקציית ההתחברות
          >
            התחבר
          </Button>
          <Link href="/register" variant="body2"> {/* קישור לדף ההרשמה */}
            {"אין לך חשבון? הירשם"}
          </Link>
        </Box>
      </Box>

      {/* הודעת שגיאה כללית */}
      {error && (
        <Snackbar
          open={Boolean(error)} // נפתח אם יש שגיאה
          autoHideDuration={6000} // נעלם אוטומטית אחרי 6 שניות
          onClose={() => setError("")} // סוגר את ההודעה
        >
          <Alert onClose={() => setError("")} severity="error"> {/* מציג הודעת שגיאה */}
            {error}
          </Alert>
        </Snackbar>
      )}
    </Container>
  );
};

export default LoginPage; // ייצוא הקומפוננטה
