import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";

import useStyles from "./styles";

import memories from "../../images/memories.png";
import { LOGOUT } from "../../redux/types";

const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const handleLogOut = () => {
    dispatch({ type: LOGOUT });
    setUser(null);
    history.push("/");
  };

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          className={`${classes.heading} ${classes.letter}`}
          variant="h2"
          align="center"
          component={Link}
          to="/"
        >
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          width="60"
        />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              src={user.result.imageUrl}
              className={classes.purple}
              alt={user.result.name}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              onClick={handleLogOut}
              variant="contained"
              color="secondary"
            >
              Log out
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sing In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
