import React from 'react';
import classnames from 'classnames';

const Item = ({ children, className }) => (
  <li className={classnames('list-item', className)}>{children}</li>
);

const List = ({ children }) => <ul className="unordered-list">{children}</ul>;

List.Item = Item;

export default List;
