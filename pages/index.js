import Link from 'next/link';


function HomePage() {
    return (
        <>
            <main>
                <h1>hafur.com</h1>
                <ul>
                    <li>
                        <Link href="/posts/First-post">
                            <a>First Post</a>
                        </Link>
                    </li>
                  
                </ul>
            </main>
        </>
    );
}

export default HomePage;