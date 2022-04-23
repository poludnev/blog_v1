import { useEffect, useState } from 'react';
import styles from 'src/components/BackToTopButton/BackToTopButton.module.css';

interface BackToTopButtonProps {
  onClick: () => void;
}

const BackToTopButton: React.FC<BackToTopButtonProps> = ({ onClick }) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, [windowWidth]);

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={onClick}>
        &#8963;
        <br />
        TOP
      </button>
    </div>
  );
};

export default BackToTopButton;
