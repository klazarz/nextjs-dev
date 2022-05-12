import Link from 'next/link'

function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        <a>home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>about</a>
                    </Link>
                </li>
            </ul>
            <style jsx>{`
                ul {
                    list-style-type: none;
                    padding: 0;
                    background-color: rgb(243, 226, 204);
                    font-size: 1.6rem;
                }
                li {
                    display: inline;
                    margin-left: 0.75rem;
                }
                li:not(:first-child) {
                    margin-left: 0.75rem;
                }
            `}
            </style>
        </nav>
    );
}

export default NavBar;