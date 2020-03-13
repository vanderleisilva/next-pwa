import { FunctionComponent, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Paper,
  makeStyles,
  Theme,
  Hidden,
  createStyles,
  IconButton
} from "@material-ui/core";

import Link from "next/link";
import { IsOnline } from "./IsOnline";
import { MdxTagParse } from "./MdxTagParse";

import PagesIcon from "@material-ui/icons/Pages";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";

const pages = ["about", "list", "material-theme", "my-mdx"];
const drawerWidth = 8 * 29;

export const Container: FunctionComponent = ({ children }) => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const content = (
    <>
      <List>
        <Link href="/">
          <ListItem button component="a">
            <ListItemIcon children={<HomeIcon />} />
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        {pages.map(text => (
          <Link key={text} href={`/${text}`}>
            <ListItem button>
              <ListItemIcon children={<PagesIcon />} />
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );

  return (
    <div className={classes.container}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <IconButton
            className={classes.icon}
            onClick={() => setMobileOpen(!mobileOpen)}
            children={<MenuIcon />}
          />
          <Typography variant="h6" children="Next PWA" />
        </Toolbar>
      </AppBar>

      <nav className={classes.nav}>
        <Hidden smUp>
          <Drawer
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={() => setMobileOpen(!mobileOpen)}
            children={content}
            classes={{ paper: classes.drawer }}
            ModalProps={{
              keepMounted: true
            }}
          />
        </Hidden>

        <Hidden xsDown>
          <Drawer
            open
            variant="permanent"
            classes={{ paper: classes.drawer }}
            children={content}
          />
        </Hidden>
      </nav>

      <Paper className={classes.paper}>
        <MdxTagParse children={children} />
        <IsOnline />
      </Paper>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      marginTop: theme.spacing(8)
    },
    toolbar: {
      justifyContent: "space-between"
    },
    drawer: {
      width: drawerWidth
    },
    paper: {
      flexGrow: 1,
      padding: theme.spacing(2),
      margin: theme.spacing(3)
    },
    nav: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth
      }
    },
    icon: {
      color: theme.palette.common.white
    }
  })
);
