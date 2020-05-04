import React, {useEffect} from "react";
import styles from "./main.component.module.css";
import Link from "next/link";

const MainComponent = ({ posts }) => {
    return (
        <>
            <style jsx>{`
                main {
                    padding: 5rem 0;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                a {
                    color: inherit;
                    text-decoration: none;
                }
                code {
                    background: #fafafa;
                    border-radius: 5px;
                    padding: 0.75rem;
                    font-size: 1.1rem;
                    font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
                    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
                }
            `}</style>
            <main>
                <h1 className={styles.title}>
                    Read{' '}
                    <Link href={`/sample/first-post`}>
                        <a>this page!</a>
                    </Link>
                </h1>

                <p className={styles.description}>
                    Get started by editing <code>pages/index.js</code>
                </p>

                <div className={styles.grid}>
                    {
                        posts.map(({ id, date, title }, key) => (
                            <Link href="/posts/[id]" as={`/posts/${id}`}  key={`card-${key}`}>
                                <a className={styles.card}>
                                    <span>{ id }</span>
                                    <br/>
                                    <span>{ date }</span>
                                    <br/>
                                    <span>{ title }</span>
                                </a>
                            </Link>
                        ))
                    }
                </div>
            </main>
        </>
    );
};

export default MainComponent;