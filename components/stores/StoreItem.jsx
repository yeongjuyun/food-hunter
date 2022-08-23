import { useRouter } from 'next/router';
import { Card, CardActionArea, CardMedia } from '@mui/material';

export default function StoreItem(props) {
  const router = useRouter();

  // id 로 라우팅 하여 디테일 모달 띄우기
  function showDetailHandler() {
    router.push('/store/' + props.id);
  }

  return (
    <div onClick={showDetailHandler}>
      <Card sx={{ maxWidth: 345, margin: 1 }}>
        <CardActionArea>
          <CardMedia
            component='img'
            height='300'
            image={props.image}
            alt='green iguana'
          />
        </CardActionArea>
      </Card>
    </div>
  );
}
