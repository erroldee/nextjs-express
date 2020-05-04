import React from "react";
import Link from "next/link";
import Head from "next/head";
import cn from "classnames";
import PostsLayout from "../../layouts/posts/posts.layout";
import styles from "./first-post.module.css";

const FirstPostPage = () => {
    const activeTest: boolean = true;

    return (
        <PostsLayout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1 className={cn({
                [styles.activeTrue]: activeTest,
                [styles.activeFalse]: !activeTest
            })}>First Post</h1>
            <h2>
                <Link href={"/"}><a>Back to home</a></Link>
            </h2>
        </PostsLayout>
    )
}

export default FirstPostPage;