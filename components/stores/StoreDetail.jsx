import { Grid, Typography } from '@mui/material';
import styled from 'styled-components';

export default function StoreDetail(props) {
  // description 줄바꿈 처리
  const descArr = props.description.split('\n').filter((desc) => desc !== '');

  return (
    <Grid
      container
      spacing={2}
      columns={16}
      conponent='section'
      sx={{
        pl: 8,
        pr: 8,
        pb: 8,
        height: '100%',
        display: { xs: 'block', sm: 'flex' },
      }}
    >
      <Grid item xs={8}>
        <Image src={props.image} alt={props.name} />
      </Grid>
      <Grid item xs={8}>
        <Typography variant='h2' component='h1'>
          {props.name}
        </Typography>
        {descArr.map((desc, idx) => {
          // description 매핑 후 랜더링
          return (
            <Typography
              key={`desc-${idx}`}
              variant='h6'
              component='p'
              sx={{
                padding: 2,
              }}
            >
              {desc}
            </Typography>
          );
        })}
      </Grid>
    </Grid>
  );
}

const Image = styled.img`
  width: 90%;
  height: 100%;
`;
