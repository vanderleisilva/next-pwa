import { FunctionComponent } from "react";
import {
  Container,
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
  createStyles
} from "@material-ui/core";

import Link from "next/link";
import IsOnline from '../isOnline';

import PagesIcon from "@material-ui/icons/Pages";
import HomeIcon from "@material-ui/icons/Home";

const pages = ["about", "list", "material-theme"];

const Index: FunctionComponent = ({ children }) => {
  const classes = useStyles();
  return (
    <Container>
      <Paper className={classes.paper}>
        <CssBaseline />
        <AppBar position="fixed">
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" children="Next PWA" />
          </Toolbar>
        </AppBar>

        <Drawer variant="permanent">
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
        </Drawer>

        {children}
        <IsOnline />
      </Paper>
    </Container>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      marginLeft: theme.spacing(25),
      marginTop: theme.spacing(11),
      padding: theme.spacing(3)
    },
    toolbar: {
      justifyContent: 'flex-end'
    }
  })
);

export default Index;
