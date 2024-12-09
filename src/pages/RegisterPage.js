
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
//   LinearProgress,
// } from "@mui/material";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const RegisterPage = () => {
//   const [userName, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);
//   const [passwordStrength, setPasswordStrength] = useState(0);
//   const navigate = useNavigate();

//   const API_URL = process.env.REACT_APP_API_URL;

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const calculatePasswordStrength = (password) => {
//     let strength = 0;
//     if (password.length >= 8) strength += 25;
//     if (/[A-Z]/.test(password)) strength += 25;
//     if (/[a-z]/.test(password)) strength += 25;
//     if (/[0-9]/.test(password) || /[@$!%*?&]/.test(password)) strength += 25;
//     setPasswordStrength(strength);
//   };

//   const handleRegister = async () => {
//     if (!validateEmail(email)) {
//       setError("כתובת אימייל לא תקינה");
//       return;
//     }
//     if (password.length < 8) {
//       setError("הסיסמה חייבת להיות לפחות באורך של 8 תווים");
//       return;
//     }
//     if (password !== confirmPassword) {
//       setError("הסיסמאות אינן תואמות");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("userName", userName);
//     formData.append("email", email);
//     formData.append("password", password);

//     try {
//       const response = await axios.post(`${API_URL}/api/users/register`, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       if (response.status === 201) {
//         setSuccess(true);
//         setTimeout(() => {
//           navigate("/login");
//         }, 2000);
//       } else {
//         setError("הרשמה נכשלה");
//       }
//     } catch (error) {
//       console.error("Error during registration:", error);
//       setError("הרשמה נכשלה");
//     }
//   };

//   return (
//     <Container maxWidth="xs" sx={{ marginBottom: 8 }}>
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
//           הרשמה
//         </Typography>
//         <Box sx={{ mt: 1 }}>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="userName"
//             label="שם משתמש"
//             name="userName"
//             autoComplete="userName"
//             autoFocus
//             value={userName}
//             onChange={(e) => setUserName(e.target.value)}
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="כתובת אימייל"
//             name="email"
//             autoComplete="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             error={!validateEmail(email) && email.length > 0}
//             helperText={
//               !validateEmail(email) && email.length > 0
//                 ? "כתובת אימייל לא תקינה"
//                 : ""
//             }
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
//               calculatePasswordStrength(e.target.value);
//             }}
//           />
//           <LinearProgress
//             variant="determinate"
//             value={passwordStrength}
//             sx={{ height: 10, borderRadius: 5, marginY: 1 }}
//           />
//           <Typography variant="caption">
//             חוזק סיסמה: {passwordStrength}%
//           </Typography>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="confirmPassword"
//             label="אשר סיסמא"
//             type="password"
//             id="confirmPassword"
//             autoComplete="current-password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//           <Button
//             type="button"
//             fullWidth
//             variant="contained"
//             color="primary"
//             sx={{ mt: 3, mb: 2 }}
//             onClick={handleRegister}
//           >
//             הירשם
//           </Button>
//           <Link href="/login" variant="body2">
//             {"כבר יש לך חשבון? התחבר"}
//           </Link>
//         </Box>
//       </Box>
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
//       {success && (
//         <Snackbar
//           open={success}
//           autoHideDuration={6000}
//           onClose={() => setSuccess(false)}
//         >
//           <Alert onClose={() => setSuccess(false)} severity="success">
//             ההרשמה בוצעה בהצלחה!
//           </Alert>
//         </Snackbar>
//       )}
//     </Container>
//   );
// };

// export default RegisterPage;



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
  LinearProgress,
} from "@mui/material"; // רכיבי Material UI לעיצוב ממשק משתמש
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"; // אייקון לייצוג נעילה
import { useNavigate } from "react-router-dom"; // ניווט בין דפים
import axios from "axios"; // ספרייה לשליחת בקשות HTTP

const RegisterPage = () => {
  // מצב לניהול שדות הטופס
  const [userName, setUserName] = useState(""); // שם המשתמש
  const [email, setEmail] = useState(""); // כתובת האימייל
  const [password, setPassword] = useState(""); // הסיסמה
  const [confirmPassword, setConfirmPassword] = useState(""); // אישור הסיסמה
  const [error, setError] = useState(""); // הודעת שגיאה
  const [success, setSuccess] = useState(false); // הודעת הצלחה
  const [passwordStrength, setPasswordStrength] = useState(0); // חוזק הסיסמה
  const navigate = useNavigate(); // פונקציה לניווט

  const API_URL = process.env.REACT_APP_API_URL; // כתובת ה-API מהמשתנים הסביבתיים

  // פונקציה לבדוק אם כתובת האימייל תקינה
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // רג'קס לאימות אימייל
    return emailRegex.test(email); // מחזיר true אם הכתובת תקינה
  };

  // חישוב חוזק הסיסמה על סמך קריטריונים
  const calculatePasswordStrength = (password) => {
    let strength = 0; // מתחילים עם 0 חוזק
    if (password.length >= 8) strength += 25; // תווים מינימליים
    if (/[A-Z]/.test(password)) strength += 25; // אותיות גדולות
    if (/[a-z]/.test(password)) strength += 25; // אותיות קטנות
    if (/[0-9]/.test(password) || /[@$!%*?&]/.test(password)) strength += 25; // מספרים או תווים מיוחדים
    setPasswordStrength(strength); // מעדכן את המצב
  };

  // פונקציה לטיפול בהרשמה
  const handleRegister = async () => {
    // בדיקה אם האימייל תקין
    if (!validateEmail(email)) {
      setError("כתובת אימייל לא תקינה"); // עדכון שגיאה אם לא תקין
      return;
    }
    // בדיקה אם הסיסמה עומדת בתנאי האורך
    if (password.length < 8) {
      setError("הסיסמה חייבת להיות לפחות באורך של 8 תווים");
      return;
    }
    // בדיקה אם הסיסמאות תואמות
    if (password !== confirmPassword) {
      setError("הסיסמאות אינן תואמות");
      return;
    }

    // יצירת אובייקט FormData לשליחת הנתונים לשרת
    const formData = new FormData();
    formData.append("userName", userName);
    formData.append("email", email);
    formData.append("password", password);

    try {
      // שליחת בקשת POST לשרת
      const response = await axios.post(`${API_URL}/api/users/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // הגדרת סוג התוכן
        },
      });
      // אם הבקשה הצליחה
      if (response.status === 201) {
        setSuccess(true); // עדכון הודעת הצלחה
        setTimeout(() => {
          navigate("/login"); // מעבר לדף התחברות לאחר 2 שניות
        }, 2000);
      } else {
        setError("הרשמה נכשלה"); // הודעת שגיאה אם השרת החזיר שגיאה
      }
    } catch (error) {
      console.error("Error during registration:", error); // לוג לשגיאה
      setError("הרשמה נכשלה");
    }
  };

  return (
    <Container maxWidth="xs" sx={{ marginBottom: 8 }}> {/* מגדיר מיכל מרכזי ברוחב קטן */}
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}> {/* אייקון הרשמה */}
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5"> {/* כותרת הדף */}
          הרשמה
        </Typography>
        <Box sx={{ mt: 1 }}> {/* טופס ההרשמה */}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="userName"
            label="שם משתמש"
            name="userName"
            autoComplete="userName"
            autoFocus
            value={userName} // שומר את הערך שהמשתמש הזין
            onChange={(e) => setUserName(e.target.value)} // מעדכן את המצב
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="כתובת אימייל"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // מעדכן את המצב
            error={!validateEmail(email) && email.length > 0} // מציג שגיאה אם האימייל לא תקין
            helperText={
              !validateEmail(email) && email.length > 0
                ? "כתובת אימייל לא תקינה"
                : ""
            }
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
            value={password}
            onChange={(e) => {
              setPassword(e.target.value); // מעדכן את הסיסמה
              calculatePasswordStrength(e.target.value); // מחשב חוזק סיסמה
            }}
          />
          <LinearProgress
            variant="determinate"
            value={passwordStrength} // מציג את חוזק הסיסמה
            sx={{ height: 10, borderRadius: 5, marginY: 1 }}
          />
          <Typography variant="caption"> {/* מציג את אחוז חוזק הסיסמה */}
            חוזק סיסמה: {passwordStrength}%
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="אשר סיסמא"
            type="password"
            id="confirmPassword"
            autoComplete="current-password"
            value={confirmPassword} // שומר את ערך האישור
            onChange={(e) => setConfirmPassword(e.target.value)} // מעדכן את המצב
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleRegister} // מפעיל את הפונקציה לטיפול בהרשמה
          >
            הירשם
          </Button>
          <Link href="/login" variant="body2"> {/* קישור לדף התחברות */}
            {"כבר יש לך חשבון? התחבר"}
          </Link>
        </Box>
      </Box>
      {error && ( // אם יש שגיאה מציג הודעת שגיאה
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
      {success && ( // אם ההרשמה הצליחה מציג הודעת הצלחה
        <Snackbar
          open={success}
          autoHideDuration={6000}
          onClose={() => setSuccess(false)}
        >
          <Alert onClose={() => setSuccess(false)} severity="success">
            ההרשמה בוצעה בהצלחה!
          </Alert>
        </Snackbar>
      )}
    </Container>
  );
};

export default RegisterPage; // ייצוא הקומפוננטה
