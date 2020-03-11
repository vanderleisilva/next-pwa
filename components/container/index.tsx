import { FunctionComponent } from "react";
import {
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Paper
} from "@material-ui/core";

import Link from "next/link";

import MenuIcon from "@material-ui/icons/Menu";
import MailIcon from "@material-ui/icons/Mail";
import HomeIcon from "@material-ui/icons/Home";

const pages = ["about", "list", "material-theme"];

const Index: FunctionComponent = ({ children }) => (
  <Container>
    <Paper style={{ marginLeft: 8 * 25, marginTop: 8 * 11, padding: 8 * 3 }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" children="News" />
          <Button color="inherit" children="Login" />
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
                <ListItemIcon children={<MailIcon />} />
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>

      {children}
    </Paper>
  </Container>
);

export default Index;
