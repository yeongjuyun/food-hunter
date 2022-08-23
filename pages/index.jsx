import { mainImg } from '../imgs';
import Image from 'next/image';
import { Grid } from '@mui/material';

export default function HomePage(props) {
  return (
    <Grid item>
      <Image src={mainImg} alt='main_image' width={1200} height={680} />
    </Grid>
  );
}
