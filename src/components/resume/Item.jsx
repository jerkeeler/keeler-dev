import React from 'react';
import classnames from 'classnames';

import styles from './Item.module.css';

const ResumeItem = ({ date, content, side = 'left' }) => {
  const extraClass = side === 'left' ? styles.left : styles.right;
  return (
    <div className={classnames(styles.item, extraClass)}>
      <div className={styles.date}>{date}</div>
      <div className={classnames(styles.center, 'bg-gray-300')}>
        <span className={classnames(styles.sphere, 'bg-primary')} />
      </div>
      <div className={styles.content}>{content}</div>
    </div>
  );
};

export default ResumeItem;
