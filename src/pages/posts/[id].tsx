import React from "react";
import Link from "next/link";
import Head from "next/head";
import PostsLayout from "../../layouts/posts/posts.layout";
import {GetServerSideProps} from "next";
import {PostServices} from "./post.services";
import {MapHostNameHelper} from "../../helpers/mapHostName.helper";

const PostPage = ({ info }) => {
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

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
    MapHostNameHelper.mapURL(req);

    const { info } = await PostServices.getSampleInfo(Number(params.id));

    return {
        props: {
            info
        }
    }
};

export default PostPage;