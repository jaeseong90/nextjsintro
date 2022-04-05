import NavBar from '../Component/NavBar';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>{`
        nav {
          display: flex;
          flex-direction: column;
        }
        .active {
          color: #c01;
        }
        a {
          color: white;
        }
      `}</style>
    </>
  );
}
