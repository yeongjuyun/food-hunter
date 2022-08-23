import { mainImg } from '../imgs';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <Image src={mainImg} alt='main_image' width={1300} height={680} />
    </>
  );
}
