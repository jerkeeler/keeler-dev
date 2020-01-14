import React from 'react';

import { formatDate } from '../../../dates';
import Item from '../Item';

import styles from './styles.module.css';

const Date = ({ data }) => (
  <span>{formatDate(data.startDate)} - {formatDate(data.endDate)}</span>
);

const Content = ({ data }) => (
  <>
    <span>{data.studyType} {data.area}</span>
    <br />
    <span className={styles.institute}>{data.institution}</span>
  </>
);


const Education = ({ idx, data }) => {
  const content = <Content data={data} />;
  const date = <Date data={data} />;
  const side = idx % 2 === 0 ? 'right' : 'left';
  return <Item date={date} content={content} side={side} />;
};

export default Education;
