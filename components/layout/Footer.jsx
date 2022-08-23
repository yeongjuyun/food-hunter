import { Container, Grid, Box, Link, Typography } from '@mui/material';

export default function Footer() {
  return (
    <footer>
      <Box style={{ background: '#2e3b55bb' }} color='white' padding={0}>
        <Container
          maxWidth='lg'
          sx={{
            height: 100,
          }}
        >
          <Box textAlign='center' padding={2.5} component='div'>
            <Typography variant='h6' component='h6' padding={0.5}>
              Food Hunter
            </Typography>
            <Link href='/' color='inherit' underline='hover'>
              © 2022 YEONGJUYUN.
            </Link>
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
