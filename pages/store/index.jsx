import { useState } from 'react';
import StoreList from '../../components/stores/StoreList';
import { useRouter } from 'next/router';
import { Grid, Typography } from '@mui/material';

export default function StoreListPage(props) {
  const router = useRouter();
  const [isModal, setIsModal] = useState(false);

  return (
    <Grid item xs zeroMinWidth paddingX={15}>
      <Typography
        variant='h4'
        component='h2'
        paddingBottom={2}
        marginBottom={8}
        borderBottom='5px solid #2E3B55'
        color='#253048'
      >
        <strong>Hunting List</strong>
      </Typography>

      <StoreList stores={props.stores} setIsModal={setIsModal} />
    </Grid>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:9000/stores');
  const stores = await res.json();

  return {
    props: {
      stores: stores,
    },
  };
}
