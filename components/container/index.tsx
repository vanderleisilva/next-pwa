import { FunctionComponent, useState, SetStateAction } from "react";
import dynamic from 'next/dynamic'
import { useTheme, Theme, ThemeProvider } from "@material-ui/core/styles";
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
import MenuIcon from "@material-ui/icons/Menu";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const ReactJson = dynamic(import('react-json-view'), { ssr: false })

const Index: FunctionComponent = ({ children }) => {
  const theme = useTheme();
  const [custom, setCustom] = useState(theme);

  return (
    <ThemeProvider theme={custom}>
      <Container>
        <Paper>
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
              {["Inbox", "Starred", "Send email", "Drafts"].map(
                (text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                )
              )}
            </List>
            <Divider />
            <List>
              {["All mail", "Trash", "Spam"].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Drawer>

          <div style={{ marginLeft: "180px", marginTop: "90px" }}>
            <ReactJson
              displayDataTypes={false}
              displayObjectSize={false}
              enableClipboard={false}
              collapsed={1}
              src={theme}
              onEdit={({ updated_src }) => {
                setCustom(updated_src as SetStateAction<Theme>);
              }}
            />

            {children}
          </div>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Index;
