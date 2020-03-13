import { NextPage } from "next";
import fetch from "isomorphic-unfetch";
import { Container } from "../components/Container";
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import Link from "next/link";

interface Show {
  id: number;
  name: string;
}

const Index: NextPage<{ shows: Array<Show> }> = ({ shows }) => (
  <Container>
    <Typography children="Batman TV Shows" variant="h6" />
    <List>
      {shows.map(show => (
        <Link key={show.id} href="/list/[id]" as={`/list/${show.id}`}>
          <ListItem button>
            <ListItemIcon children={<CheckIcon />} />
            <ListItemText primary={show.name} />
          </ListItem>
        </Link>
      ))}
    </List>
  </Container>
);

Index.getInitialProps = async () => {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data: Array<{ show: Show }> = await res.json();

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Index;
