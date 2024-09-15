import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Container sx={{ mt: 4, mb: 4, direction: 'rtl' }}>
      <Box sx={{ textAlign: 'right', mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#1976d2' }}>
          מדיניות פרטיות
        </Typography>
        <Typography variant="body1" paragraph>
          פרטיותך חשובה לנו. מדיניות פרטיות זו מסבירה כיצד אנו אוספים, משתמשים ומגנים על המידע האישי שלך כאשר אתה משתמש באתר שלנו.
        </Typography>
      </Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ color: '#1976d2' }}>
          איסוף מידע
        </Typography>
        <Typography variant="body1" paragraph>
          אנו עשויים לאסוף מידע אישי כגון שם, כתובת אימייל, ומידע נוסף שתספק בעת השימוש באתר שלנו. אנו משתמשים בעוגיות (cookies) ובטכנולוגיות אחרות כדי לשפר את חוויית המשתמש.
        </Typography>
      </Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ color: '#1976d2' }}>
          שימוש במידע
        </Typography>
        <Typography variant="body1" paragraph>
          המידע שנאסף משמש כדי לספק ולשפר את השירותים שלנו, לשלוח עדכונים ולספק תמיכה טכנית. אנו נשתמש במידע שלך אך ורק למטרות שהוסכמו.
        </Typography>
      </Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ color: '#1976d2' }}>
          הגנה על המידע
        </Typography>
        <Typography variant="body1" paragraph>
          אנו נוקטים באמצעי אבטחה כדי להגן על המידע שלך מפני גישה לא מורשית, שימוש לרעה, או חשיפה לא מורשית.
        </Typography>
      </Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ color: '#1976d2' }}>
          זכויותיך
        </Typography>
        <Typography variant="body1" paragraph>
          באפשרותך לגשת, לתקן או למחוק את המידע האישי שלך בכל עת. אם ברצונך לממש את זכויותיך, אנא צור איתנו קשר.
        </Typography>
      </Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ color: '#1976d2' }}>
          שינויים במדיניות
        </Typography>
        <Typography variant="body1" paragraph>
          אנו עשויים לעדכן את מדיניות הפרטיות שלנו מעת לעת. אנו נודיע לך על כל שינוי משמעותי דרך האתר או באימייל.
        </Typography>
      </Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ color: '#1976d2' }}>
          צור קשר
        </Typography>
        <Typography variant="body1">
          אם יש לך שאלות בנוגע למדיניות הפרטיות שלנו, אנא צור קשר בכתובת info@football-tournament.com.
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
