import axios from "axios";
import { Fragment } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import Post from "../Components/Post";
import styles from "./Posts.module.css";

const url = "https://jsonplaceholder.typicode.com";

const Posts = () => {
  const { id } = useParams();

  const getPosts = async () => {
    const response = await axios.get(`${url}/posts?userId=${id}`);
    return response.data;
  };

  const {
    data: posts,
    isError,
    error,
    isLoading,
  } = useQuery("Posts", getPosts);

  return (
    <Fragment>
      <h2 className="center-flex fs-36">Posts</h2>
      {isLoading && <p style={{ height: "100vh" }}>Loading...</p>}
      {isError && <p>{error.message}</p>}
      <div className={`${styles.wrapper} ml-20 mr-20`}>
        <div className={`${styles.accordion}`}>
          {!error &&
            posts &&
            posts.map((post) => <Post key={post.id} post={post} />)}
        </div>
      </div>
    </Fragment>
  );
};

export default Posts;
