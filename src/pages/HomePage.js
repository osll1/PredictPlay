// import React from "react";
// import { Container, Box, Typography, Button, Grid, Paper, Avatar } from "@mui/material";
// import { Link } from "react-router-dom";
// import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
// import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
// import PeopleIcon from "@mui/icons-material/People";
// import BarChartIcon from "@mui/icons-material/BarChart";

// const HomePage = () => {
//   return (
//     <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
//       {/* שינוי צבע הרקע לאזור הראשי */}
//       <Paper elevation={3} sx={{ p: 4, backgroundColor: "#f5f5f5", borderRadius: 3 }}>
//         <Box textAlign="center" mb={4}>
//           {/* אווטר ראשי עם צבע מעבר */}
//           <Avatar sx={{
//             background: "linear-gradient(135deg, #1976d2 0%, #64b5f6 100%)",
//             width: 80,
//             height: 80,
//             margin: "auto"
//           }}>
//             <SportsSoccerIcon fontSize="large" />
//           </Avatar>
//           <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: "bold", mt: 2 }}>
//             ברוכים הבאים לניהול טורניר כדורגל
//           </Typography>
//           <Typography variant="h5" component="p" sx={{ mt: 2, mb: 4 }}>
//             מערכת ניהול מתקדמת לטורנירי כדורגל הכוללת ניהול משחקים, דירוג משתתפים, ניחושים, ועוד.
//           </Typography>
//           {/* עיצוב הכפתור הראשי בולט יותר עם אנימציית מעבר */}
//           <Button
//             variant="contained"
//             color="secondary"
//             size="large"
//             component={Link}
//             to="/games"
//             sx={{ mt: 2, px: 4, transition: "transform 0.2s ease", "&:hover": { transform: "scale(1.05)" } }}
//           >
//             התחילו עכשיו
//           </Button>
//         </Box>

//         <Grid container spacing={4} sx={{ mt: 4 }}>
//           <Grid item xs={12} md={4}>
//             {/* צבע רקע עדין לכרטיסים ושדרוג הטיפוגרפיה */}
//             <Paper elevation={2} sx={{
//               p: 3,
//               textAlign: "center",
//               backgroundColor: "#e1f5fe", // כחול בהיר
//               transition: "transform 0.2s ease",
//               "&:hover": { transform: "scale(1.05)" },
//               borderRadius: 2
//             }}>
//               <Avatar sx={{ bgcolor: "#1976d2", width: 56, height: 56, margin: "auto" }}>
//                 <EmojiEventsIcon fontSize="large" />
//               </Avatar>
//               <Typography variant="h5" component="h3" sx={{ fontWeight: "bold", mt: 2, color: "#424242" }}>
//                 משחקים
//               </Typography>
//               <Typography variant="body1" component="p" sx={{ mt: 2 }}>
//                 ניהול מלא של כל המשחקים בטורניר, כולל עדכון תוצאות והתאמת הניקוד.
//               </Typography>
//               <Button
//                 variant="outlined"
//                 color="primary"
//                 component={Link}
//                 to="/games"
//                 sx={{ mt: 2 }}
//               >
//                 גשו למשחקים
//               </Button>
//             </Paper>
//           </Grid>

//           <Grid item xs={12} md={4}>
//             <Paper elevation={2} sx={{
//               p: 3,
//               textAlign: "center",
//               backgroundColor: "#e1f5fe", // ירקרק בהיר
//               transition: "transform 0.2s ease",
//               "&:hover": { transform: "scale(1.05)" },
//               borderRadius: 2
//             }}>
//               <Avatar sx={{ bgcolor: "#388e3c", width: 56, height: 56, margin: "auto" }}>
//                 <PeopleIcon fontSize="large" />
//               </Avatar>
//               <Typography variant="h5" component="h3" sx={{ fontWeight: "bold", mt: 2, color: "#424242" }}>
//                 משתתפים
//               </Typography>
//               <Typography variant="body1" component="p" sx={{ mt: 2 }}>
//                 ניהול משתתפים בטורניר, כולל הצגת פרופילים ועדכון ניקוד.
//               </Typography>
//               <Button
//                 variant="outlined"
//                 color="primary"
//                 component={Link}
//                 to="/participants"
//                 sx={{ mt: 2 }}
//               >
//                 גשו למשתתפים
//               </Button>
//             </Paper>
//           </Grid>

//           <Grid item xs={12} md={4}>
//             <Paper elevation={2} sx={{
//               p: 3,
//               textAlign: "center",
//               backgroundColor: "#e1f5fe", // סגול בהיר
//               transition: "transform 0.2s ease",
//               "&:hover": { transform: "scale(1.05)" },
//               borderRadius: 2
//             }}>
//               <Avatar sx={{ bgcolor: "#8e24aa", width: 56, height: 56, margin: "auto" }}>
//                 <BarChartIcon fontSize="large" />
//               </Avatar>
//               <Typography variant="h5" component="h3" sx={{ fontWeight: "bold", mt: 2, color: "#424242" }}>
//                 דירוג
//               </Typography>
//               <Typography variant="body1" component="p" sx={{ mt: 2 }}>
//                 צפייה בדירוג המשתתפים בזמן אמת לפי ביצועיהם במשחקים.
//               </Typography>
//               <Button
//                 variant="outlined"
//                 color="primary"
//                 component={Link}
//                 to="/leaderboard"
//                 sx={{ mt: 2 }}
//               >
//                 גשו לדירוג
//               </Button>
//             </Paper>
//           </Grid>
//         </Grid>
//       </Paper>
//     </Container>
//   );
// };

// export default HomePage;

import React from "react"; // ייבוא React
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  Avatar,
} from "@mui/material"; // ייבוא רכיבים ממערכת Material UI לעיצוב
import { Link } from "react-router-dom"; // מאפשר ניווט בין דפים
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer"; // אייקון כדורגל
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"; // אייקון פרסים
import PeopleIcon from "@mui/icons-material/People"; // אייקון משתתפים
import BarChartIcon from "@mui/icons-material/BarChart"; // אייקון דירוג

const HomePage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {" "}
      {/* מיכל מרכזי */}
      <Paper
        elevation={3}
        sx={{ p: 4, backgroundColor: "#f5f5f5", borderRadius: 3 }} // עיצוב נייר הרקע
      >
        <Box textAlign="center" mb={4}>
          {" "}
          {/* תיבת כותרת מרכזית */}
          <Avatar
            sx={{
              background: "linear-gradient(135deg, #1976d2 0%, #64b5f6 100%)",
              width: 80,
              height: 80,
              margin: "auto",
            }}
          >
            <SportsSoccerIcon fontSize="large" /> {/* אייקון כדורגל */}
          </Avatar>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: "bold", mt: 2 }}
          >
            ברוכים הבאים לניהול טורניר כדורגל
          </Typography>
          <Typography variant="h5" component="p" sx={{ mt: 2, mb: 4 }}>
            מערכת ניהול מתקדמת לטורנירי כדורגל הכוללת ניהול משחקים, דירוג
            משתתפים, ניחושים, ועוד.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={Link}
            to="/games"
            sx={{
              mt: 2,
              px: 4,
              transition: "transform 0.2s ease",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            התחילו עכשיו
          </Button>
        </Box>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {" "}
          {/* רשת לכרטיסים */}
          <Grid item xs={12} md={4}>
            {" "}
            {/* כרטיס 1 */}
            <Paper
              elevation={2}
              sx={{
                p: 3,
                textAlign: "center",
                backgroundColor: "#e1f5fe",
                transition: "transform 0.2s ease",
                "&:hover": { transform: "scale(1.05)" },
                borderRadius: 2,
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "#1976d2",
                  width: 56,
                  height: 56,
                  margin: "auto",
                }}
              >
                <EmojiEventsIcon fontSize="large" /> {/* אייקון פרסים */}
              </Avatar>
              <Typography
                variant="h5"
                component="h3"
                sx={{ fontWeight: "bold", mt: 2, color: "#424242" }}
              >
                משחקים
              </Typography>
              <Typography variant="body1" component="p" sx={{ mt: 2 }}>
                ניהול מלא של כל המשחקים בטורניר, כולל עדכון תוצאות והתאמת
                הניקוד.
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                component={Link}
                to="/games"
                sx={{ mt: 2 }}
              >
                גשו למשחקים
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            {" "}
            {/* כרטיס 2 */}
            <Paper
              elevation={2}
              sx={{
                p: 3,
                textAlign: "center",
                backgroundColor: "#e1f5fe",
                transition: "transform 0.2s ease",
                "&:hover": { transform: "scale(1.05)" },
                borderRadius: 2,
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "#388e3c",
                  width: 56,
                  height: 56,
                  margin: "auto",
                }}
              >
                <PeopleIcon fontSize="large" /> {/* אייקון משתתפים */}
              </Avatar>
              <Typography
                variant="h5"
                component="h3"
                sx={{ fontWeight: "bold", mt: 2, color: "#424242" }}
              >
                משתתפים
              </Typography>
              <Typography variant="body1" component="p" sx={{ mt: 2 }}>
                ניהול משתתפים בטורניר, כולל הצגת פרופילים ועדכון ניקוד.
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                component={Link}
                to="/participants"
                sx={{ mt: 2 }}
              >
                גשו למשתתפים
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            {" "}
            {/* כרטיס 3 */}
            <Paper
              elevation={2}
              sx={{
                p: 3,
                textAlign: "center",
                backgroundColor: "#e1f5fe",
                transition: "transform 0.2s ease",
                "&:hover": { transform: "scale(1.05)" },
                borderRadius: 2,
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "#8e24aa",
                  width: 56,
                  height: 56,
                  margin: "auto",
                }}
              >
                <BarChartIcon fontSize="large" /> {/* אייקון דירוג */}
              </Avatar>
              <Typography
                variant="h5"
                component="h3"
                sx={{ fontWeight: "bold", mt: 2, color: "#424242" }}
              >
                דירוג
              </Typography>
              <Typography variant="body1" component="p" sx={{ mt: 2 }}>
                צפייה בדירוג המשתתפים בזמן אמת לפי ביצועיהם במשחקים.
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                component={Link}
                to="/leaderboard"
                sx={{ mt: 2 }}
              >
                גשו לדירוג
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default HomePage; // ייצוא הדף הראשי
