import Head from 'next/head';
import StoreDetail from '../../components/stores/StoreDetail';
import DetailModal from '../../components/ui/Modal';

export default function StoreDetailPage(props) {
  return (
    <DetailModal>
      <Head>
        <title>{props.storeData.name}</title>
        <meta name='description' content={props.storeData.description} />
      </Head>
      <StoreDetail
        image={props.storeData.image}
        name={props.storeData.name}
        description={props.storeData.description}
      />
    </DetailModal>
  );
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:9000/stores');
  const stores = await res.json();

  const paths = stores.map((store) => ({
    params: { storeId: store.id.toString() },
  }));

  return {
    fallback: false,
    paths,
  };
}

export async function getStaticProps(context) {
  const { storeId } = context.params;

  const res = await fetch(`http://localhost:9000/stores/${storeId}`);
  const store = await res.json();

  return {
    props: {
      storeData: store,
    },
  };
}
