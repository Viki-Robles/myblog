import styles from '../../styles/AnimatedWrapper.module.css';

interface AnimatedWrapperProps {
  children?: JSX.Element;
}
export const AnimatedWrapper = ({ children }): JSX.Element => {
  return (
    <div>
      {children}
      <div className={styles.animationArea}>
        <ul className={styles.boxArea}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};
