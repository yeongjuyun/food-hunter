import { useRouter } from 'next/router';
import { Dialog, IconButton, Slide, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';

// 모달 트랜지션 효과
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function DetailModal({ children }) {
  const router = useRouter();

  // x 아이콘 클릭 시, 모달 창 닫기
  const closeModalHandler = () => {
    router.push('/store');
  };

  return (
    <>
      <Dialog
        maxWidth='xl'
        open={true}
        onClose={closeModalHandler}
        TransitionComponent={Transition}
      >
        <Grid container justifyContent='flex-end'>
          <IconButton
            edge='start'
            color='inherit'
            onClick={closeModalHandler}
            aria-label='close'
            sx={{ m: 1.5 }}
          >
            <CloseIcon />
          </IconButton>
        </Grid>
        {children}
      </Dialog>
    </>
  );
}
