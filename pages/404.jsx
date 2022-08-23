import { useRouter } from 'next/router';
import { Alert, Box, Container, Typography } from '@mui/material';
import { useState } from 'react';
import useInterval from '../components/hooks/timer';

export default function NotFoundPage() {
  const router = useRouter();
  const [count, setCount] = useState(5);

  const showDetailHandler = () => {
    router.push('/');
  };

  const timer = useInterval(() => {
    if (parseInt(count) <= 1) {
      showDetailHandler();
      return () => clearInterval(timer);
    }
    setCount(count - 1);
  }, 1000);

  return (
    <>
      <Box position='fixed' top={100}>
        <Alert severity='info'>
          해당 페이지는 없는 페이지 입니다. <br />
          {count}초 뒤 메인 페이지로 이동합니다.
        </Alert>
      </Box>
      <Container>
        <Typography variant='h3' textAlign='center'>
          Page Not Found
        </Typography>
      </Container>
    </>
  );
}
