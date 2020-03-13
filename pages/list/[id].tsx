import { Container } from "../../components/Container";
import fetch from "isomorphic-unfetch";
import { NextPageContext } from "next";
import { Typography } from "@material-ui/core";

const Post = ({ show }: any) => (
  <Container>
    {show.id ? (
      <>
        <Typography children={show.name} variant="h6" />
        <Typography children={show.summary.replace(/<[/]?[pb]>/g, "")} />
        <br />
        {show.image ? <img src={show.image.medium} /> : null}
      </>
    ) : (
      <Typography children="Item not found" variant="h6" />
    )}
  </Container>
);

Post.getInitialProps = async (context: NextPageContext) => {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();
  return { show };
};

export default Post;
