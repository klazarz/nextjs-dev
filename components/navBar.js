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