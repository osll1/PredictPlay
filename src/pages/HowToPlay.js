// import React from "react";
// import {
//   Box,
//   Container,
//   Typography,
//   Card,
//   CardContent,
//   Grid,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Button,
// } from "@mui/material";
// import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
// import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";

// const HowToPlay = () => {
//   return (
//     <Box
//       sx={{
//         bgcolor: "linear-gradient(to bottom, #f0f4f8, #e3f2fd)",
//         py: 6,
//         direction: "rtl",
//       }}
//     >
//       <Container maxWidth="lg">
//         {/* כותרת ראשית */}
//         <Typography
//           variant="h3"
//           align="center"
//           gutterBottom
//           sx={{
//             fontWeight: "bold",
//             color: "#0d47a1",
//             textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
//           }}
//         >
//           איך משחקים?
//         </Typography>
//         <Typography
//           variant="h6"
//           align="center"
//           sx={{ color: "#555", mb: 4, maxWidth: "800px", mx: "auto" }}
//         >
//           ברוכים הבאים לטורניר הכדורגל שלנו! גלו איך להשתתף, לנחש ולהשיג את המקום הראשון!
//         </Typography>

//         {/* שלבים */}
//         <Grid container spacing={4}>
//           <Grid item xs={12} sm={6} md={4}>
//             <Card
//               sx={{
//                 boxShadow: 4,
//                 borderRadius: "12px",
//                 bgcolor: "#ffffff",
//                 transition: "transform 0.3s ease",
//                 "&:hover": { transform: "scale(1.08)" },
//               }}
//             >
//               <CardContent>
//                 <Typography
//                   variant="h5"
//                   gutterBottom
//                   sx={{ display: "flex", alignItems: "center", color: "#1976d2" }}
//                 >
//                   <SportsSoccerIcon sx={{ ml: 1 }} />
//                   שלב 1: הרשמה
//                 </Typography>
//                 <Typography variant="body1" sx={{ color: "#555" }}>
//                   התחילו את המסע שלכם על ידי יצירת חשבון אישי. מלאו את הפרטים
//                   האישיים שלכם, העלו את תמונות מלך השערים והקבוצה המנצחת, והצטרפו
//                   לטורניר!
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>

//           <Grid item xs={12} sm={6} md={4}>
//             <Card
//               sx={{
//                 boxShadow: 4,
//                 borderRadius: "12px",
//                 bgcolor: "#ffffff",
//                 transition: "transform 0.3s ease",
//                 "&:hover": { transform: "scale(1.08)" },
//               }}
//             >
//               <CardContent>
//                 <Typography
//                   variant="h5"
//                   gutterBottom
//                   sx={{ display: "flex", alignItems: "center", color: "#388e3c" }}
//                 >
//                   <CheckCircleIcon sx={{ ml: 1 }} />
//                   שלב 2: ניחושים
//                 </Typography>
//                 <Typography variant="body1" sx={{ color: "#555" }}>
//                   נחשו את תוצאות המשחקים העתידיים וקבלו נקודות על ניחושים נכונים.
//                   ככל שתהיו מדויקים יותר, כך תעלו למעלה בטבלת המובילים!
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>

//           <Grid item xs={12} sm={6} md={4}>
//             <Card
//               sx={{
//                 boxShadow: 4,
//                 borderRadius: "12px",
//                 bgcolor: "#ffffff",
//                 transition: "transform 0.3s ease",
//                 "&:hover": { transform: "scale(1.08)" },
//               }}
//             >
//               <CardContent>
//                 <Typography
//                   variant="h5"
//                   gutterBottom
//                   sx={{ display: "flex", alignItems: "center", color: "#f57c00" }}
//                 >
//                   <EmojiEventsIcon sx={{ ml: 1 }} />
//                   שלב 3: התחרו ונצחו
//                 </Typography>
//                 <Typography variant="body1" sx={{ color: "#555" }}>
//                   בדקו את דירוגכם בטבלת המובילים והתחרו נגד חברים ושחקנים אחרים.
//                   קבלו פרסים על הגעה למקומות הראשונים!
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>

//         {/* חוקי המשחק */}
//         <Box sx={{ mt: 6 }}>
//           <Typography
//             variant="h4"
//             align="center"
//             sx={{
//               fontWeight: "bold",
//               color: "#0d47a1",
//               textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
//               mb: 3,
//             }}
//           >
//             חוקי המשחק
//           </Typography>
//           <List sx={{ maxWidth: "800px", mx: "auto" }}>
//             <ListItem>
//               <ListItemIcon>
//                 <CheckCircleIcon color="primary" />
//               </ListItemIcon>
//               <ListItemText
//                 primary="ניחוש תוצאה מדויקת יזכה אתכם ב-3 נקודות."
//                 sx={{ color: "#555" }}
//               />
//             </ListItem>
//             <ListItem>
//               <ListItemIcon>
//                 <CheckCircleIcon color="primary" />
//               </ListItemIcon>
//               <ListItemText
//                 primary="ניחוש של תוצאה זהה מבחינת ניצחון/תיקו יזכה אתכם בנקודה אחת."
//                 sx={{ color: "#555" }}
//               />
//             </ListItem>
//             <ListItem>
//               <ListItemIcon>
//                 <CheckCircleIcon color="primary" />
//               </ListItemIcon>
//               <ListItemText
//                 primary="תוכלו לערוך ניחושים עד שעת תחילת המשחק."
//                 sx={{ color: "#555" }}
//               />
//             </ListItem>
//           </List>
//         </Box>

//         {/* כפתור להמשך */}
//         <Box sx={{ mt: 6, textAlign: "center" }}>
//           <Button
//             variant="contained"
//             color="primary"
//             size="large"
//             sx={{
//               px: 4,
//               py: 1,
//               fontSize: "18px",
//               textTransform: "none",
//               borderRadius: "8px",
//               transition: "transform 0.2s ease",
//               "&:hover": { transform: "scale(1.05)" },
//             }}
//             startIcon={<PlayArrowIcon />}
//           >
//             התחל עכשיו
//           </Button>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default HowToPlay;




// אבזר `sx` הוא קיצור דרך להגדרת סגנון מותאם אישית שיש לו גישה לערכת הנושא.

import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const HowToPlay = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/register"); // העברה לדף ההרשמה אם המשתמש לא רשום
      return;
    }

    try {
      const decodedToken = jwtDecode(token);
      const { id, scorerImage, winnerImage } = decodedToken;

      if (!scorerImage || !winnerImage) {
        navigate(`/profile/${id}`); // העברה לדף פרופיל המשתמש אם לא בחר תמונות
        return;
      }

      navigate("/predictions"); // העברה לדף הניחושים אם הכל בסדר
    } catch (error) {
      console.error("שגיאה בפענוח הטוקן:", error);
      navigate("/login"); // אם יש בעיה בטוקן, הפניה לדף ההתחברות
    }
  };

  return (
    <Box
      sx={{
        bgcolor: "linear-gradient(to bottom, #f0f4f8, #e3f2fd)",
        py: 6,
        direction: "rtl",
      }}
    >
      <Container maxWidth="lg">
        {/* כותרת ראשית */}
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#0d47a1",
            textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
          }}
        >
          איך משחקים?
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{ color: "#555", mb: 4, maxWidth: "800px", mx: "auto" }}
        >
          ברוכים הבאים לטורניר הכדורגל שלנו! גלו איך להשתתף, לנחש ולהשיג את
          המקום הראשון!
        </Typography>

        {/* שלבים */}
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                boxShadow: 4,
                borderRadius: "12px",
                bgcolor: "#ffffff",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.08)" },
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ display: "flex", alignItems: "center", color: "#1976d2" }}
                >
                  <SportsSoccerIcon sx={{ ml: 1 }} />
                  שלב 1: הרשמה
                </Typography>
                <Typography variant="body1" sx={{ color: "#555" }}>
                  התחילו את המסע שלכם על ידי יצירת חשבון אישי. מלאו את הפרטים
                  האישיים שלכם, העלו את תמונות מלך השערים והקבוצה המנצחת,
                  והצטרפו לטורניר!
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                boxShadow: 4,
                borderRadius: "12px",
                bgcolor: "#ffffff",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.08)" },
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#388e3c",
                  }}
                >
                  <CheckCircleIcon sx={{ ml: 1 }} />
                  שלב 2: ניחושים
                </Typography>
                <Typography variant="body1" sx={{ color: "#555" }}>
                  נחשו את תוצאות המשחקים העתידיים וקבלו נקודות על ניחושים
                  נכונים. ככל שתהיו מדויקים יותר, כך תעלו למעלה בטבלת המובילים!
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                boxShadow: 4,
                borderRadius: "12px",
                bgcolor: "#ffffff",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.08)" },
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#f57c00",
                  }}
                >
                  <EmojiEventsIcon sx={{ ml: 1 }} />
                  שלב 3: התחרו ונצחו
                </Typography>
                <Typography variant="body1" sx={{ color: "#555" }}>
                  בדקו את דירוגכם בטבלת המובילים והתחרו נגד חברים ושחקנים אחרים.
                  קבלו פרסים על הגעה למקומות הראשונים!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* חוקי המשחק */}
        <Box sx={{ mt: 6 }}>
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontWeight: "bold",
              color: "#0d47a1",
              textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
              mb: 3,
            }}
          >
            חוקי המשחק
          </Typography>
          <List sx={{ maxWidth: "800px", mx: "auto" }}>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="ניחוש תוצאה מדויקת יזכה אתכם ב-3 נקודות."
                sx={{ color: "#555" }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="ניחוש של תוצאה זהה מבחינת ניצחון/תיקו יזכה אתכם בנקודה אחת."
                sx={{ color: "#555" }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="תוכלו לערוך ניחושים עד שעת תחילת המשחק."
                sx={{ color: "#555" }}
              />
            </ListItem>
          </List>
        </Box>

        {/* כפתור להמשך */}
        <Box sx={{ mt: 6, textAlign: "center" }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              px: 4,
              py: 1,
              fontSize: "18px",
              textTransform: "none",
              borderRadius: "8px",
              transition: "transform 0.2s ease",
              "&:hover": { transform: "scale(1.05)" },
            }}
            startIcon={<PlayArrowIcon />}
            onClick={handleStart}
          >
            התחל עכשיו
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HowToPlay;

