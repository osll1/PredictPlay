import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  IconButton,
  Badge,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(`${API_URL}/notifications`);
        setNotifications(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching notifications:", error);
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  const handleMarkAsRead = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification._id !== id)
    );
    // You can also send a request to the server to mark as read
    axios.delete(`${API_URL}/notifications/${id}`);
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <Typography>טוען התראות...</Typography>
      </Box>
    );
  }

  return (
    <Container sx={{ mt: 4, mb: 8 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
        <Badge badgeContent={notifications.length} color="primary">
          <NotificationsIcon fontSize="large" />
        </Badge>{" "}
        התראות
      </Typography>
      <List sx={{ bgcolor: "background.paper", borderRadius: "12px", boxShadow: 2 }}>
        {notifications.length === 0 ? (
          <Typography align="center" sx={{ my: 4 }}>
            אין התראות חדשות.
          </Typography>
        ) : (
          notifications.map((notification) => (
            <React.Fragment key={notification._id}>
              <ListItem
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleMarkAsRead(notification._id)}
                  >
                    <CloseIcon />
                  </IconButton>
                }
              >
                <ListItemIcon>
                  <CheckCircleOutlineIcon color="success" />
                </ListItemIcon>
                <ListItemText
                  primary={notification.title}
                  secondary={new Date(notification.date).toLocaleString()}
                />
              </ListItem>
              <Divider variant="inset" />
            </React.Fragment>
          ))
        )}
      </List>
    </Container>
  );
};

export default Notifications;
