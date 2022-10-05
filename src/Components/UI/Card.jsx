import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = ({ user }) => {
  const { name, username, email, phone, address, company, website, id } = user;
  return (
    <div
      className={`${styles.card} color-dark bg-light block-mobile over-hide p-20`}
    >
      <h3 className="fs-24 color-333 txt-c">{name}</h3>
      <p className="fs-14 fw-light">
        username: <span className="fs-18 fw-medium">{username}</span>
      </p>
      <p className="fs-14 fw-light">
        phone: <span className="fs-18 fw-medium">{phone}</span>
      </p>
      <p className="fs-14 fw-light">
        email: <span className="fs-18 fw-medium">{email}</span>
      </p>
      <p className="fs-14 fw-light">
        address:{" "}
        <span className="fs-18 fw-medium">
          {address.city},{address.street}
        </span>
      </p>
      <p className="fs-14 fw-light">
        company: <span className="fs-18 fw-medium">{company.name}</span>
      </p>
      <div>
        <a
          className="fs-18 "
          href={`http://www.${website}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Website
        </a>
      </div>
      <Link
        to={`/post/${id}`}
        className={`${styles.visit} d-block fs-14 bor-rad-6 bg-blue color-white w-fit btn-shape `}
      >
        See Posts
      </Link>
    </div>
  );
};

export default Card;
