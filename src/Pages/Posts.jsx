import axios from "axios";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";

import Accordion from "../Components/UI/Accordion";
import Loader from "../Components/UI/Loader";
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
    <div className="bg-dark">
      <h2 className="center-flex fs-36">Posts</h2>
      <Link to="/" className="center-flex fs-36 color-333 p-20">
        Back To Users
      </Link>
      {isLoading && <Loader />}
      {isError && (
        <div className="full-w-h">
          <div className="error">{error.message}</div>
        </div>
      )}
      <div className={`${styles.wrapper} ml-20 mr-20`}>
        <div className={`${styles.accordion}`}>
          {!error &&
            posts &&
            posts.map((post) => <Accordion key={post.id} post={post} />)}
        </div>
      </div>
    </div>
  );
};

export default Posts;
