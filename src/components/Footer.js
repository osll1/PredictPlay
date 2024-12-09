// import React from 'react';
// import { Box, Container, Grid, Typography, Link } from '@mui/material';
// import EmailIcon from '@mui/icons-material/Email';
// import PhoneIcon from '@mui/icons-material/Phone';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import HomeIcon from '@mui/icons-material/Home';
// import PolicyIcon from '@mui/icons-material/Policy';
// import GavelIcon from '@mui/icons-material/Gavel';

// const Footer = () => {
//   return (
//     <Box sx={{ bgcolor: '#1976d2', color: 'white', py: 3 }}>
//       <Container maxWidth="lg">
//         <Grid container spacing={4} justifyContent="center">
//           <Grid item xs={12} md={4}>
//             <Typography variant="h6" gutterBottom>
//               ניהול טורניר כדורגל
//             </Typography>
//             <Typography variant="body2">
//               מערכת לניהול טורנירי כדורגל ותצוגת דירוגי משתתפים בזמן אמת.
//             </Typography>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <Typography variant="h6" gutterBottom>
//               קישורים שימושיים
//             </Typography>
//             <Box>
//               <Link href="/" color="inherit" underline="none" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
//                 <HomeIcon sx={{ mr: 1 }} />
//                 דף הבית
//               </Link>
//               <Link href="/privacy-policy" color="inherit" underline="none" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
//                 <PolicyIcon sx={{ mr: 1 }} />
//                 מדיניות פרטיות
//               </Link>
//               <Link href="/terms" color="inherit" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
//                 <GavelIcon sx={{ mr: 1 }} />
//                 תנאי שימוש
//               </Link>
//             </Box>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <Typography variant="h6" gutterBottom>
//               צור קשר
//             </Typography>
//             <Box>
//               <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
//                 <EmailIcon sx={{ mr: 1 }} />
//                 info@football-tournament.com
//               </Typography>
//               <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
//                 <PhoneIcon sx={{ mr: 1 }} />
//                 +972-55-123-4567
//               </Typography>
//               <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
//                 <LocationOnIcon sx={{ mr: 1 }} />
//                 כתובת: תל אביב, ישראל
//               </Typography>
//             </Box>
//           </Grid>
//         </Grid>
//         <Typography variant="body2" align="center" sx={{ mt: 3 }}>
//           © 2024 ניהול טורניר כדורגל. כל הזכויות שמורות.
//         </Typography>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;


import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import PolicyIcon from '@mui/icons-material/Policy';
import GavelIcon from '@mui/icons-material/Gavel';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#1976d2', color: 'white', py: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              ניהול טורניר כדורגל
            </Typography>
            <Typography variant="body2">
              מערכת לניהול טורנירי כדורגל ותצוגת דירוגי משתתפים בזמן אמת.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              קישורים שימושיים
            </Typography>
            <Box>
              <Link href="/" color="inherit" underline="none" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <HomeIcon sx={{ mr: 1 }} />
                דף הבית
              </Link>
              <Link href="/how-to-play" color="inherit" underline="none" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <SportsSoccerIcon sx={{ mr: 1 }} />
                איך משחקים
              </Link>
              <Link href="/privacy-policy" color="inherit" underline="none" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <PolicyIcon sx={{ mr: 1 }} />
                מדיניות פרטיות
              </Link>
              <Link href="/terms" color="inherit" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
                <GavelIcon sx={{ mr: 1 }} />
                תנאי שימוש
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              צור קשר
            </Typography>
            <Box>
              <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <EmailIcon sx={{ mr: 1 }} />
                info@football-tournament.com
              </Typography>
              <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <PhoneIcon sx={{ mr: 1 }} />
                +972-55-123-4567
              </Typography>
              <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOnIcon sx={{ mr: 1 }} />
                כתובת: תל אביב, ישראל
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" sx={{ mt: 3 }}>
          © 2024 ניהול טורניר כדורגל. כל הזכויות שמורות.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
