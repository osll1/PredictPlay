import React from "react";
import { Container, Box, Typography, Button, Grid, Paper, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";

const HomePage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box textAlign="center" mb={4}>
          <Avatar sx={{ bgcolor: "primary.main", width: 80, height: 80, margin: "auto" }}>
            <SportsSoccerIcon fontSize="large" />
          </Avatar>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: "bold", mt: 2 }}>
            ברוכים הבאים לניהול טורניר כדורגל
          </Typography>
          <Typography variant="h5" component="p" sx={{ mt: 2, mb: 4 }}>
            מערכת ניהול מתקדמת לטורנירי כדורגל הכוללת ניהול משחקים, דירוג משתתפים, ניחושים, ועוד.
          </Typography>
          <Button variant="contained" color="primary" size="large" component={Link} to="/games" sx={{ mt: 2 }}>
            התחילו עכשיו
          </Button>
        </Box>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 3, textAlign: "center" }}>
              <Avatar sx={{ bgcolor: "secondary.main", width: 56, height: 56, margin: "auto" }}>
                <EmojiEventsIcon fontSize="large" />
              </Avatar>
              <Typography variant="h5" component="h3" sx={{ fontWeight: "bold", mt: 2 }}>
                משחקים
              </Typography>
              <Typography variant="body1" component="p" sx={{ mt: 2 }}>
                ניהול מלא של כל המשחקים בטורניר, כולל עדכון תוצאות והתאמת הניקוד.
              </Typography>
              <Button variant="outlined" color="primary" component={Link} to="/games" sx={{ mt: 2 }}>
                גשו למשחקים
              </Button>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 3, textAlign: "center" }}>
              <Avatar sx={{ bgcolor: "secondary.main", width: 56, height: 56, margin: "auto" }}>
                <PeopleIcon fontSize="large" />
              </Avatar>
              <Typography variant="h5" component="h3" sx={{ fontWeight: "bold", mt: 2 }}>
                משתתפים
              </Typography>
              <Typography variant="body1" component="p" sx={{ mt: 2 }}>
                ניהול משתתפים בטורניר, כולל הצגת פרופילים ועדכון ניקוד.
              </Typography>
              <Button variant="outlined" color="primary" component={Link} to="/participants" sx={{ mt: 2 }}>
                גשו למשתתפים
              </Button>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 3, textAlign: "center" }}>
              <Avatar sx={{ bgcolor: "secondary.main", width: 56, height: 56, margin: "auto" }}>
                <BarChartIcon fontSize="large" />
              </Avatar>
              <Typography variant="h5" component="h3" sx={{ fontWeight: "bold", mt: 2 }}>
                דירוג
              </Typography>
              <Typography variant="body1" component="p" sx={{ mt: 2 }}>
                צפייה בדירוג המשתתפים בזמן אמת לפי ביצועיהם במשחקים.
              </Typography>
              <Button variant="outlined" color="primary" component={Link} to="/leaderboard" sx={{ mt: 2 }}>
                גשו לדירוג
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default HomePage;
