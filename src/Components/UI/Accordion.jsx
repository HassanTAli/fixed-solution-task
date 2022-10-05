import { useState } from "react";
import styles from "./Accordion.module.css";

const Accordion = ({ post }) => {
  const { title, body, id } = post;

  const [selected, setSelected] = useState(null);

  const toggle = (id) => {
    if (selected === id) {
      return setSelected(null);
    }
    setSelected(id);
  };

  console.log(selected);

  return (
    <div className={`${styles.item} bg-light color-black`}>
      <div className={`${styles.title}`} onClick={() => toggle(id)}>
        <h2 className="w-full">{title}</h2>
        <span>{selected === id ? "-" : "+"}</span>
      </div>
      <div
        className={
          selected === id
            ? `${styles.content} ${styles.show}`
            : `${styles.content}`
        }
      >
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Accordion;
