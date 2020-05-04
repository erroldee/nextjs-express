import React from "react";
import styles from "./posts.layout.module.css";

const PostsLayout = ({ children }) => {
    return (
        <>
            <style jsx global>{`
                html,
                body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
                }
                * {
                box-sizing: border-box;
                }
            `}</style>
            <div className={styles.container}>
                { children }
            </div>
        </>
    );
};

export default PostsLayout;