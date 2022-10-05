import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={`${styles.spinner} full-w-h pos-relative`}>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
