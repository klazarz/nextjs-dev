import { getPost, getSlugs } from '../../lib/posts';

export async function getStaticPaths() {
    const slugs = await getSlugs();
    return {
        paths: slugs.map((slug) => ({
            params: { slug },
        })),
        fallback: false,
    };
}

export async function getStaticProps(context) {
    console.log('[Post page getStaticProps():', context.params.slug);
    const post = await getPost(context.params.slug);
    return {
        props: { post },
        };
    }

function PostPage({post}) {
    return (
        <>
        <main>
            <h1>{post.title}</h1>
            <p>{post.date}</p>
             <article dangerouslySetInnerHTML={{ __html: post.body}}/>
        </main>
        </>
    );
}

export default PostPage;

