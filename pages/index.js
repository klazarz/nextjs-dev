import Link from 'next/link';
import { getPosts } from '/lib/posts';

export async function getStaticProps() {
    const posts = await getPosts();
    return {
        props: { posts },
    };
}

function HomePage({posts}) {
    console.log(posts)
    return (
        <>
            <main>
                <h1>My Next.js App</h1>
                <ul>
                    {posts.map((post) => (
                        <li key={post.slug}>
                            <Link href={`/posts/${post.slug}`}>
                                <a>{post.title}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </main>
        </>
    );
}

export default HomePage;