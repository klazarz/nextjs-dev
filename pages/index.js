import Link from 'next/link';


function HomePage() {
    return (
        <>
            <main>
                <h1>hafur.com</h1>
                <ul>
                    <li>
                        <Link href="/posts/first-post">
                            <a>First Post</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/posts/second-post">
                            <a>Second Post</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/posts/my-life">
                            <a>Miy life</a>
                        </Link>
                    </li>
                </ul>
            </main>
        </>
    );
}

export default HomePage;