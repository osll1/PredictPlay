import React, { useState } from "react"; // ייבוא React לניהול הממשק ו-useState לניהול מצב.
import axios from "axios"; // ייבוא axios לשליחת בקשות HTTP.
import {
  Button,
  TextField,
  Input,
  Typography,
  Box,
  CircularProgress,
  Avatar,
  Snackbar,
  Alert,
} from "@mui/material"; // ייבוא רכיבי עיצוב ממערכת Material UI.
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"; // אייקון להוספת משתמש.
import PersonIcon from "@mui/icons-material/Person"; // אייקון לייצוג משתמש.

const AddUser = () => { // יצירת קומפוננטה להוספת משתמש חדש.
  const [userName, setUserName] = useState(""); // שם המשתמש.
  const [email, setEmail] = useState(""); // כתובת האימייל.
  const [password, setPassword] = useState(""); // סיסמת המשתמש.
  const [scorerImage, setScorerImage] = useState(null); // תמונת מלך השערים.
  const [winnerImage, setWinnerImage] = useState(null); // תמונת הקבוצה המנצחת.
  const [loading, setLoading] = useState(false); // מצב טעינה.
  const [error, setError] = useState(""); // הודעת שגיאה.
  const [success, setSuccess] = useState(false); // הודעת הצלחה.
  const [previewScorer, setPreviewScorer] = useState(null); // תצוגה מקדימה של תמונת מלך השערים.
  const [previewWinner, setPreviewWinner] = useState(null); // תצוגה מקדימה של תמונת הקבוצה המנצחת.

  const API_URL = process.env.REACT_APP_API_URL; // משתנה לסביבת העבודה עבור ה-URL של ה-API.

  // פונקציה לטיפול בשליחת הטופס.
  const handleSubmit = async (e) => {
    e.preventDefault(); // מניעת ריענון הדף.
    setError(""); // איפוס הודעות שגיאה.
    setSuccess(false); // איפוס הודעת הצלחה.

    if (userName && email && password && scorerImage && winnerImage) { // בדיקה שכל השדות מלאים.
      setLoading(true); // התחלת מצב טעינה.
      const formData = new FormData(); // יצירת אובייקט FormData לשליחת נתונים וקבצים.
      formData.append("userName", userName);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("scorerImage", scorerImage);
      formData.append("winnerImage", winnerImage);

      try {
        const response = await axios.post(
          `${API_URL}/participants`, // שליחת נתוני המשתמש לשרת.
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data", // הגדרת סוג התוכן.
              "x-auth-token": localStorage.getItem("token"), // שליחת טוקן לאימות.
            },
          }
        );
        console.log("משתמש נוסף:", response.data); // הדפסת תגובת השרת.

        // איפוס השדות לאחר הוספת המשתמש.
        setUserName("");
        setEmail("");
        setPassword("");
        setScorerImage(null);
        setWinnerImage(null);
        setPreviewScorer(null);
        setPreviewWinner(null);
        setSuccess(true); // הצגת הודעת הצלחה.
      } catch (error) {
        console.error("שגיאה בהוספת משתמש:", error); // הדפסת השגיאה בקונסול.
        setError("הוספת המשתמש נכשלה. נסה שוב."); // הצגת הודעת שגיאה.
      } finally {
        setLoading(false); // עצירת מצב הטעינה.
      }
    } else {
      setError("נא למלא את כל השדות!"); // הודעת שגיאה אם יש שדות ריקים.
    }
  };

  // פונקציה לעדכון תמונה ותצוגה מקדימה.
  const handleImageChange = (e, setImage, setPreview) => {
    const file = e.target.files[0]; // קבלת הקובץ הנבחר.
    setImage(file); // שמירת הקובץ ב-state המתאים.
    if (file) {
      const reader = new FileReader(); // יצירת אובייקט לקריאת הקובץ.
      reader.onloadend = () => {
        setPreview(reader.result); // הגדרת תצוגה מקדימה.
      };
      reader.readAsDataURL(file); // קריאת הקובץ בפורמט Data URL.
    }
  };

  return (
    <Box
      className="add-user-form"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      style={{
        padding: "40px", // ריווח פנימי.
        backgroundColor: "#f0f0f0", // צבע רקע.
        borderRadius: "12px", // פינות מעוגלות.
        maxWidth: "600px", // רוחב מקסימלי.
        margin: "auto", // יישור למרכז.
        marginBottom: "70px", // ריווח תחתון.
        marginTop: "50px", // ריווח עליון.
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // אפקט צל.
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        style={{ fontWeight: "bold", marginBottom: "20px" }}
      >
        <PersonIcon style={{ verticalAlign: "middle", marginRight: "8px" }} />
        הוספת משתמש חדש
      </Typography>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <TextField
          type="text"
          label="שם משתמש"
          value={userName}
          onChange={(e) => setUserName(e.target.value)} // עדכון שם המשתמש ב-state.
          required
          fullWidth
          margin="dense"
          helperText="נא להזין שם משתמש ייחודי."
          error={Boolean(error && !userName)} // הצגת שגיאה אם השדה ריק.
        />
        <TextField
          type="email"
          label="כתובת אימייל"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // עדכון כתובת האימייל ב-state.
          required
          fullWidth
          margin="dense"
          helperText="נא להזין כתובת אימייל תקינה."
          error={Boolean(error && !email)} // הצגת שגיאה אם השדה ריק או לא תקין.
        />
        <TextField
          type="password"
          label="סיסמה"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // עדכון הסיסמה ב-state.
          required
          fullWidth
          margin="dense"
          helperText="נא להזין סיסמה חזקה."
          error={Boolean(error && !password)} // הצגת שגיאה אם השדה ריק.
        />
        <Typography style={{ marginTop: "20px" }}>תמונת מלך השערים</Typography>
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => handleImageChange(e, setScorerImage, setPreviewScorer)} // טיפול בתמונת מלך השערים.
          required
          fullWidth
          margin="dense"
        />
        {previewScorer && (
          <Avatar
            src={previewScorer}
            alt="תצוגה מקדימה"
            style={{
              marginTop: "10px",
              width: "100px",
              height: "100px",
              borderRadius: "8px",
            }}
          />
        )}
        <Typography style={{ marginTop: "20px" }}>תמונת הקבוצה המנצחת</Typography>
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => handleImageChange(e, setWinnerImage, setPreviewWinner)} // טיפול בתמונת הקבוצה המנצחת.
          required
          fullWidth
          margin="dense"
        />
        {previewWinner && (
          <Avatar
            src={previewWinner}
            alt="תצוגה מקדימה"
            style={{
              marginTop: "10px",
              width: "100px",
              height: "100px",
              borderRadius: "8px",
            }}
          />
        )}
        {loading ? (
          <CircularProgress style={{ marginTop: "30px" }} /> // הצגת אנימציית טעינה בזמן שליחה.
        ) : (
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{
              marginTop: "30px",
              padding: "10px 20px",
              fontSize: "16px",
            }}
          >
            <AddCircleOutlineIcon style={{ marginRight: "8px" }} />
            הוסף משתמש
          </Button>
        )}
      </form>
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
            המשתמש נוסף בהצלחה!
          </Alert>
        </Snackbar>
      )}
    </Box>
  );
};

export default AddUser; // ייצוא הקומפוננטה.
