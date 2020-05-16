import React from 'react';

import ArchiveItem from './ArchiveItem';

const ArchiveList = ({ year, nodes }) => (
  <div className="mb-6 last:mb-0">
    <h4 className="font-bold">{year}</h4>

    <ul className="list-disc pl-8 mt-2">
      {nodes.map((node) => (
        <ArchiveItem key={node.fields.url} node={node} />
      ))}
    </ul>
  </div>
);

export default ArchiveList;
