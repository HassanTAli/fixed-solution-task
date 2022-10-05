import { Fragment } from "react";
import { useQuery } from "react-query";
import { getUsers } from "../api/userApi";
import Card from "../Components/UI/Card";

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
      {isLoading && <p style={{ height: "100vh" }}>Loading...</p>}
      {isError && <p>{error.message}</p>}
      <div className={`${styles.wrapper} d-grid gap-20 ml-20 mr-20`}>
        {!error &&
          users &&
          users.map((user) => <Card key={user.id} user={user} />)}
      </div>
    </Fragment>
  );
};

export default Users;
