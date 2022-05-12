import { readFile } from 'fs/promises';
import Head from "next/head";

export async function getStaticProps() {
    readFile ('/content/posts/First-post.json', 'utf-8');
    return {
        props: {
            post: {
                title: 'First post static',
                body: 'This is my first post and I am writing off.'
            }
        }
    };
}

function firstPost({post}) {
    // console.log("First post page",post)
    return (
        <>
       
        <main>
            <h1>{post.title}</h1>
            <p>
                {post.body}
            </p>
        </main>
        </>
    );
}

export default firstPost;

