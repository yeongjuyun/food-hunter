import Header from './Header';
import Footer from './Footer';
import { Grid } from '@mui/material';

export default function Layout(props) {
  return (
    <>
      <Header />
      <Grid
        container
        wrap='nowrap'
        component='main'
        justifyContent='center'
        alignItems='center'
        minHeight='840px'
        paddingY={3}
      >
        {props.children}
      </Grid>
      <Footer />
    </>
  );
}
