import StoreItem from './StoreItem';
import { Grid } from '@mui/material';

export default function StoreList(props) {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      justifyContent='center'
    >
      {props.stores.map((store) => (
        <StoreItem
          key={store.id}
          id={store.id}
          name={store.name}
          description={store.description}
          image={store.image}
        />
      ))}
    </Grid>
  );
}
