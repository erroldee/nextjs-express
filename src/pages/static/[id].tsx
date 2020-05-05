import React from "react";
import Link from "next/link";
import Head from "next/head";
import PostsLayout from "../../layouts/posts/posts.layout";
import {GetStaticPaths, GetStaticProps} from "next";
import {StaticPostServices} from "./staticpost.services";

const StaticPostPage = ({ info }) => {
    const { id, title, date } = info;

    return (
        <PostsLayout>
            <Head>
                <title>{ title }</title>
            </Head>
            <h1>{`${ id } - ${ title }`}</h1>
            <h3>{date}</h3>
            <h2>
                <Link href={"/"}><a>Back to home</a></Link>
            </h2>
        </PostsLayout>
    )
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const info = await StaticPostServices.getSampleInfo(Number(params.id));

    console.log(info);

    return {
        props: {
            info
        }
    }
};

export const getStaticPaths: GetStaticPaths = async () => {
    const ids = await StaticPostServices.getSampleIds();

    const paths = ids.map(id => {
        return {
            params: {
                id: String(id)
            }
        }
    });

    return {
        paths,
        fallback: false
    }
};

export default StaticPostPage;