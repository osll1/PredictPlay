

// import React, { useEffect, useState } from "react";
// import {
//   Container,
//   Typography,
//   Box,
//   Avatar,
//   Grid,
//   Paper,
//   Button,
//   CircularProgress,
//   Input,
//   Snackbar,
//   Alert,
// } from "@mui/material";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// const UserProfile = () => {
//   const { id } = useParams(); // קבלת ה-ID של המשתמש מה-URL
//   const [user, setUser] = useState(null); // אחסון נתוני המשתמש
//   const [loading, setLoading] = useState(true); // תצוגת טעינה עד לטעינת הנתונים
//   const [scorerImage, setScorerImage] = useState(null); // תמונת מלך השערים
//   const [winnerImage, setWinnerImage] = useState(null); // תמונת הקבוצה המנצחת
//   const [previewScorer, setPreviewScorer] = useState(null); // תצוגה מקדימה למלך השערים
//   const [previewWinner, setPreviewWinner] = useState(null); // תצוגה מקדימה לקבוצה המנצחת
//   const [error, setError] = useState(""); // הודעות שגיאה
//   const [success, setSuccess] = useState(false); // הודעות הצלחה

//   const API_URL = "http://localhost:5000";

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
//         const response = await axios.get(`${API_URL}/participants/${id}`);
//         setUser(response.data); // קבלת הנתונים והצגתם
//         setPreviewScorer(`${API_URL}/${response.data.scorerImage}` || null); // טעינת תמונת מלך השערים
//         setPreviewWinner(`${API_URL}/${response.data.winnerImage}` || null); // טעינת תמונת הקבוצה המנצחת
//         setLoading(false); // עצירת טעינת המידע
//       } catch (error) {
//         console.error("שגיאה בהבאת פרופיל המשתמש:", error);
//         setLoading(false);
//       }
//     };

//     fetchUserProfile();
//   }, [id]);

//   const handleImageChange = (e, setImage, setPreview) => {
//     const file = e.target.files[0];
//     setImage(file);
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };


//   const handleSaveSelections = async () => {
//     if (!scorerImage || !winnerImage) {
//         setError("נא להעלות את שתי התמונות (מלך שערים וקבוצה מנצחת).");
//         return;
//     }

//     const formData = new FormData();
//     formData.append("scorerImage", scorerImage);
//     formData.append("winnerImage", winnerImage);

//     console.log("תמונות לפני שליחה:", scorerImage, winnerImage);

//     try {
//         const response = await axios.put(`${API_URL}/api/participants/${id}`, formData, {
//             headers: {
//                 "Content-Type": "multipart/form-data",
//                 "x-auth-token": localStorage.getItem("token"),
//             },
//         });

//         console.log("Response from server:", response.data);

//         const updatedParticipant = response.data.updatedParticipant || response.data;

//         if (updatedParticipant.scorerImage && updatedParticipant.winnerImage) {
//             setUser(updatedParticipant);
//             setPreviewScorer(`${API_URL}/${updatedParticipant.scorerImage}`);
//             setPreviewWinner(`${API_URL}/${updatedParticipant.winnerImage}`);
//             setSuccess(true);
//         } else {
//             throw new Error("השרת לא החזיר נתוני תמונות מעודכנים.");
//         }
//     } catch (error) {
//         console.error("שגיאה בשמירת הבחירות:", error);
//         setError("שגיאה בשמירת הנתונים. נסה שוב.");
//     }
// };

  

//   if (loading) {
//     return (
//       <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (!user) return <Typography>משתמש לא נמצא</Typography>;

//   return (
//     <Container sx={{ mt: 4, mb: 8, direction: "rtl" }}>
//       <Paper elevation={3} sx={{ padding: 4, borderRadius: "12px" }}>
//         <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
//           <Avatar
//             alt={user.userName}
//             src={`${API_URL}/${user.avatar}`}
//             sx={{ width: 100, height: 100, marginRight: 2 }}
//           />
//           <Typography variant="h5">שלום, {user.userName}</Typography>
//         </Box>

//         <Grid container spacing={4}>
//           <Grid item xs={12}>
//             <Typography variant="h6">סה"כ נקודות</Typography>
//             <Typography variant="h4">{user.points}</Typography>
//           </Grid>

//           <Grid item xs={12}>
//             <Typography variant="h6">תמונת מלך השערים</Typography>
//             <Input
//               type="file"
//               accept="image/*"
//               onChange={(e) => handleImageChange(e, setScorerImage, setPreviewScorer)}
//               fullWidth
//             />
//             {previewScorer && (
//               <Avatar
//                 src={previewScorer}
//                 alt="תצוגה מקדימה של מלך השערים"
//                 sx={{ width: 100, height: 100, mt: 2 }}
//               />
//             )}
//           </Grid>

//           <Grid item xs={12}>
//             <Typography variant="h6">תמונת הקבוצה המנצחת</Typography>
//             <Input
//               type="file"
//               accept="image/*"
//               onChange={(e) => handleImageChange(e, setWinnerImage, setPreviewWinner)}
//               fullWidth
//             />
//             {previewWinner && (
//               <Avatar
//                 src={previewWinner}
//                 alt="תצוגה מקדימה של הקבוצה המנצחת"
//                 sx={{ width: 100, height: 100, mt: 2 }}
//               />
//             )}
//           </Grid>
//         </Grid>

//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleSaveSelections}
//           sx={{ mt: 3 }}
//         >
//           שמור נתונים
//         </Button>
//       </Paper>

//       {/* הודעות שגיאה והצלחה */}
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
//             הנתונים נשמרו בהצלחה!
//           </Alert>
//         </Snackbar>
//       )}
//     </Container>
//   );
// };

// export default UserProfile;


import React, { useEffect, useState } from "react"; // ייבוא React וכלי ניהול state ואפקטים
import {
  Container,
  Typography,
  Box,
  Avatar,
  Grid,
  Paper,
  Button,
  CircularProgress,
  Input,
  Snackbar,
  Alert,
} from "@mui/material"; // ייבוא רכיבי עיצוב ממערכת Material UI
import axios from "axios"; // ייבוא ספריית axios לשליחת בקשות HTTP
import { useParams } from "react-router-dom"; // ייבוא כלי לקריאת פרמטרים מה-URL

const UserProfile = () => {
  const { id } = useParams(); // קריאת ה-ID של המשתמש מה-URL
  const [user, setUser] = useState(null); // שמירת נתוני המשתמש
  const [loading, setLoading] = useState(true); // ניהול מצב טעינה
  const [scorerImage, setScorerImage] = useState(null); // שמירת תמונת מלך השערים
  const [winnerImage, setWinnerImage] = useState(null); // שמירת תמונת הקבוצה המנצחת
  const [previewScorer, setPreviewScorer] = useState(null); // תצוגה מקדימה של מלך השערים
  const [previewWinner, setPreviewWinner] = useState(null); // תצוגה מקדימה של הקבוצה המנצחת
  const [error, setError] = useState(""); // שמירת הודעות שגיאה
  const [success, setSuccess] = useState(false); // שמירת הודעות הצלחה

  const API_URL = "http://localhost:5000"; // כתובת ה-API הבסיסית

  // פונקציה שמביאה את נתוני המשתמש מהשרת
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`${API_URL}/participants/${id}`); // בקשת GET לנתוני המשתמש
        setUser(response.data); // שמירת נתוני המשתמש ב-state
        setPreviewScorer(`${API_URL}/${response.data.scorerImage}` || null); // תצוגה מקדימה לתמונת מלך השערים
        setPreviewWinner(`${API_URL}/${response.data.winnerImage}` || null); // תצוגה מקדימה לתמונת הקבוצה המנצחת
        setLoading(false); // עצירת מצב הטעינה
      } catch (error) {
        console.error("שגיאה בהבאת פרופיל המשתמש:", error); // הצגת שגיאה בקונסול
        setLoading(false); // עצירת מצב הטעינה
      }
    };

    fetchUserProfile(); // קריאה לפונקציה בזמן טעינת הקומפוננטה
  }, [id]); // קריאה מחדש בכל שינוי של ID

  // פונקציה שמטפלת בשינוי של קובץ (תמונה)
  const handleImageChange = (e, setImage, setPreview) => {
    const file = e.target.files[0]; // קבלת הקובץ הנבחר
    setImage(file); // שמירת הקובץ ב-state המתאים
    if (file) {
      const reader = new FileReader(); // יצירת אובייקט לקריאת קובץ
      reader.onloadend = () => {
        setPreview(reader.result); // הצגת תצוגה מקדימה
      };
      reader.readAsDataURL(file); // קריאת הקובץ כ-Data URL
    }
  };

  // פונקציה לשמירת הנתונים המעודכנים בשרת
  const handleSaveSelections = async () => {
    if (!scorerImage || !winnerImage) {
        setError("נא להעלות את שתי התמונות (מלך שערים וקבוצה מנצחת)."); // הצגת הודעת שגיאה אם חסרים קבצים
        return;
    }

    const formData = new FormData(); // יצירת אובייקט FormData לשליחת קבצים
    formData.append("scorerImage", scorerImage); // הוספת תמונת מלך השערים
    formData.append("winnerImage", winnerImage); // הוספת תמונת הקבוצה המנצחת

    console.log("תמונות לפני שליחה:", scorerImage, winnerImage); // הדפסת התמונות לקונסול לצורכי דיבאג

    try {
        const response = await axios.put(`${API_URL}/api/participants/${id}`, formData, { // בקשת PUT לשרת
            headers: {
                "Content-Type": "multipart/form-data", // הגדרת סוג התוכן
                "x-auth-token": localStorage.getItem("token"), // שליחת טוקן לאימות
            },
        });

        console.log("Response from server:", response.data); // הדפסת תגובת השרת

        const updatedParticipant = response.data.updatedParticipant || response.data; // עדכון נתוני המשתמש

        if (updatedParticipant.scorerImage && updatedParticipant.winnerImage) { // אם השרת החזיר נתונים מעודכנים
            setUser(updatedParticipant); // עדכון נתוני המשתמש
            setPreviewScorer(`${API_URL}/${updatedParticipant.scorerImage}`); // עדכון תצוגת מלך השערים
            setPreviewWinner(`${API_URL}/${updatedParticipant.winnerImage}`); // עדכון תצוגת הקבוצה המנצחת
            setSuccess(true); // הצגת הודעת הצלחה
        } else {
            throw new Error("השרת לא החזיר נתוני תמונות מעודכנים."); // הצגת שגיאה אם אין נתונים מעודכנים
        }
    } catch (error) {
        console.error("שגיאה בשמירת הבחירות:", error); // הצגת השגיאה בקונסול
        setError("שגיאה בשמירת הנתונים. נסה שוב."); // הצגת הודעת שגיאה למשתמש
    }
  };

  // הצגת טוען במידה והמידע עדיין נטען
  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  // הצגת הודעה אם המשתמש לא נמצא
  if (!user) return <Typography>משתמש לא נמצא</Typography>;

  return (
    <Container sx={{ mt: 4, mb: 8, direction: "rtl" }}>
      <Paper elevation={3} sx={{ padding: 4, borderRadius: "12px" }}> {/* תצוגת כרטיס ראשי */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
          <Avatar
            alt={user.userName}
            src={`${API_URL}/${user.avatar}`} // תצוגת האווטר של המשתמש
            sx={{ width: 100, height: 100, marginRight: 2 }}
          />
          <Typography variant="h5">שלום, {user.userName}</Typography>
        </Box>

        <Grid container spacing={4}> {/* רשת להצגת נתוני המשתמש */}
          <Grid item xs={12}>
            <Typography variant="h6">סה"כ נקודות</Typography>
            <Typography variant="h4">{user.points}</Typography> {/* הצגת הנקודות */}
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6">תמונת מלך השערים</Typography>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, setScorerImage, setPreviewScorer)} // העלאת תמונת מלך השערים
              fullWidth
            />
            {previewScorer && ( // תצוגה מקדימה אם נבחרה תמונה
              <Avatar
                src={previewScorer}
                alt="תצוגה מקדימה של מלך השערים"
                sx={{ width: 100, height: 100, mt: 2 }}
              />
            )}
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6">תמונת הקבוצה המנצחת</Typography>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, setWinnerImage, setPreviewWinner)} // העלאת תמונת הקבוצה המנצחת
              fullWidth
            />
            {previewWinner && ( // תצוגה מקדימה אם נבחרה תמונה
              <Avatar
                src={previewWinner}
                alt="תצוגה מקדימה של הקבוצה המנצחת"
                sx={{ width: 100, height: 100, mt: 2 }}
              />
            )}
          </Grid>
        </Grid>

        <Button
          variant="contained"
          color="primary"
          onClick={handleSaveSelections} // שמירת הבחירות
          sx={{ mt: 3 }}
        >
          שמור נתונים
        </Button>
      </Paper>

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
            הנתונים נשמרו בהצלחה!
          </Alert>
        </Snackbar>
      )}
    </Container>
  );
};

export default UserProfile; // ייצוא הקומפוננטה
