import NavBar from "../components/navBar";
import Head from 'next/head';
import '../styles/globals.css'

function App({ Component, pageProps }) {
    return (
        <>
           <Head>
                <title>hafur.com</title>
                <link rel="icon" href="/icons/favicon.ico"/>
            </Head>
            <header>
                <NavBar />
            </header>
            <Component {...pageProps} />
        </>

    );

}

export default App;