import React from 'react';

const Item = ({ children }) => <li className="list-item">{children}</li>;

const List = ({ children }) => <ul className="unordered-list">{children}</ul>;

List.Item = Item;

export default List;
