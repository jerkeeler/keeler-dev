import React from 'react';

import styles from './styles.module.css';

const ResumeItem = ({ date, content, side = 'left' }) => {
  const extraClass = side === 'left' ? styles.left : styles.right;
  return (
    <div className={`${styles.item} ${extraClass}`}>
      <div className={styles.date}>
        {date}
      </div>
      <div className={styles.center}>
        <span className={styles.sphere} />
      </div>
      <div className={styles.content}>
        {content}
      </div>
    </div>
  );
};

export default ResumeItem;
