import styles from './Button.module.css';

export default function Button({ children, secondary, large }) {
  return (
    <a
      href="/"
      style={{ color: secondary, border: secondary, width: large }}
      className={
        secondary
          ? styles.secondarybutton
          : large
            ? styles.largebutton
            : styles.button
      }
    >
      {children}
    </a>
  );
}
