import React from 'react';

import { formatDate } from '../../dates';
import Item from './Item';

const Date = ({ data }) => <span>{formatDate(data.releaseDate)}</span>;

const Content = ({ data }) => (
  <>
    <span>"{data.name}"</span>
    <br />
    <span className="italic">{data.publisher}</span>
    <br />
    <a href={data.website}>{data.website}</a>
  </>
);

const Publication = ({ idx, data }) => {
  const content = <Content data={data} />;
  const date = <Date data={data} />;
  const side = idx % 2 === 0 ? 'right' : 'left';
  return <Item date={date} content={content} side={side} />;
};

export default Publication;
