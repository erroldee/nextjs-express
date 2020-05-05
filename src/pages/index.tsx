import React from "react";
import Head from "next/head";

import MainLayout from "../layouts/main/main.layout";
import MainComponent from "../components/main/main.component";
import FooterComponent from "../components/footer/footer.component";
import {GetServerSideProps} from "next";
import {IndexServices} from "./index.services";
import {MapHostNameHelper} from "../helpers/mapHostName.helper";

const IndexPage = ({ posts }) => {
    return (
        <MainLayout>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainComponent
                posts={posts}
            />
            <FooterComponent/>
        </MainLayout>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    MapHostNameHelper.mapURL(req);

    const { posts } = await IndexServices.getSample();

    return {
        props: {
            posts
        }
    }
};

export default IndexPage;