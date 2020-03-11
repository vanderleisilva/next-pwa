import Container from '../components/container';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export default () => {

  return (
    <Container>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Container>
  );
}