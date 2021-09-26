import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import CustomTypography from '../../../CustomTypography';
import ListItem from "@mui/material/ListItem";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Notifications from "../../../../Assets/Svg/Header/Notifications";
import BinDelete from '../../../../Assets/Svg/BinDelete';

const NotificationDrawer = () => {
  const [state, setState] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 330 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete" color="error" disabled>
                <BinDelete />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "rgb(92, 30, 226)" }}>P</Avatar>
            </ListItemAvatar>
            <div>
              <ListItemText
                primary="Padberg-Haucks"
                secondary="Cette fonctionnalité sera disponible prochainement!!"
              />
              <CustomTypography
                sx={{ py: 1}}
                variant="overline"
                component="div"
                color="primary"
                content="Merci de votre compréhension"
              />
            </div>
          </ListItem>
        <Divider />
        <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete" color="error" disabled>
                <BinDelete />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "rgb(92, 30, 226)" }}>A</Avatar>
            </ListItemAvatar>
            <div>
              <ListItemText
                primary="Adams LLC"
                secondary="Cette fonctionnalité sera disponible prochainement!!"
              />
              <CustomTypography
                sx={{ py: 1}}
                variant="overline"
                component="div"
                color="primary"
                content="Merci de votre compréhension"
              />
            </div>
          </ListItem>
        <Divider />
        <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete" color="error" disabled>
                <BinDelete />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "rgb(92, 30, 226)" }}>S</Avatar>
            </ListItemAvatar>
            <div>
              <ListItemText
                primary="Schum Group"
                secondary="Cette fonctionnalité sera disponible prochainement!!"
              />
              <CustomTypography
                sx={{ py: 1}}
                variant="overline"
                component="div"
                color="primary"
                content="Merci de votre compréhension"
              />
            </div>
          </ListItem>
        <Divider />
        <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete" color="error" disabled>
                <BinDelete />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "rgb(92, 30, 226)" }}>P</Avatar>
            </ListItemAvatar>
            <div>
              <ListItemText
                primary="Padberg-Hauck"
                secondary="Cette fonctionnalité sera disponible prochainement!!"
              />
              <CustomTypography
                sx={{ py: 1}}
                variant="overline"
                component="div"
                color="primary"
                content="Merci de votre compréhension"
              />
            </div>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, true)}>
            <Badge color="error" variant="dot">
              <Notifications />
            </Badge>
          </IconButton>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default NotificationDrawer;
