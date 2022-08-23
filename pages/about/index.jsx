import Image from 'next/image';
import { Grid, Typography, Box, Container } from '@mui/material';
import styled from 'styled-components';
import { listImg } from '../../imgs';

export default function AboutPage() {
  return (
    <Container>
      <Grid
        container
        xs={12}
        direction='row'
        justifyContent='center'
        alignItems='center'
        marginTop={5}
      >
        <AbuotImage
          src='https://content.jdmagicbox.com/comp/patiala/m3/9999px175.x175.200109005703.y5m3/catalogue/food-hunter-mocktails-farm-bahadurgarh-patiala-mocktail-retailers-cn0so35agk.jpg'
          alt='main_image'
        />
        <Box padding={5}>
          <Typography variant='h3' component='h2' paddingY={2}>
            Food Hunter
          </Typography>
          <Typography variant='h6' component='body1'>
            Food Hunter 는 맛집 소개 사이트 입니다.
            <br />
            궁금하신 점이 있다면 언제든 연락해주세요!
          </Typography>
        </Box>
      </Grid>
      <Grid
        container
        xs={12}
        direction='row'
        justifyContent='center'
        alignItems='center'
      >
        <Box width={800} marginTop={5} padding={3}>
          <Typography
            variant='h4'
            component='h2'
            paddingY={2}
            marginBottom={3}
            borderBottom='5px solid #2E3B55'
            color='#253048'
          >
            <strong>Hunting List</strong>
          </Typography>
          <Image src={listImg} alt='store_img'></Image>
        </Box>
      </Grid>
    </Container>
  );
}

const AbuotImage = styled.img`
  width: 300px;
  height: 300px;
`;
