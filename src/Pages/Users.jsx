import { Fragment } from "react";
import { useQuery } from "react-query";
import { getUsers } from "../api/userApi";
import Card from "../Components/UI/Card";
import Loader from "../Components/UI/Loader";

import styles from "./Users.module.css";

const Users = () => {
  const {
    data: users,
    isError,
    error,
    isLoading,
  } = useQuery("Users", getUsers);

  return (
    <Fragment>
      <h2 className="center-flex fs-36">List of users</h2>
      {isLoading && <Loader />}
      {isError && (
        <div className="full-w-h">
          <div className="error">{error.message}</div>
        </div>
      )}
      <div className={`${styles.wrapper} d-grid gap-20 ml-20 mr-20`}>
        {!error &&
          users &&
          users.map((user) => <Card key={user.id} user={user} />)}
      </div>
    </Fragment>
  );
};

export default Users;
