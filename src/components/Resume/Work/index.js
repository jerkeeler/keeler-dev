import React from 'react';

import { formatDate } from '../../../dates';
import Item from '../Item';

import styles from './styles.module.css';

const Date = ({ data }) => (
  <span>{formatDate(data.startDate)} - {formatDate(data.endDate) || 'Present'}</span>
);

const Content = ({ data }) => (
  <>
    <span>{data.company}</span>
    <br />
    <span className={styles.position}>{data.position}</span>
    <br />
    <ul className={styles.bullets}>
      {data.highlights.map(item => <li key={item}>{item}</li>)}
    </ul>
  </>
);

const Work = ({ idx, data }) => {
  const content = <Content data={data} />;
  const date = <Date data={data} />;
  const side = idx % 2 === 0 ? 'right' : 'left';
  return <Item date={date} content={content} side={side} />;
};

export default Work;
