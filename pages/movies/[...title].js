import { useRouter } from 'next/router';

export default function Detaile({ params }) {
  const router = useRouter();

  //pre-render로 인한 오류
  //const [title, id] = router.query.parms;

  const [title, id] = params || [];

  return (
    <div>
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { title } }) {
  return {
    props: {
      params: title,
    },
  };
}