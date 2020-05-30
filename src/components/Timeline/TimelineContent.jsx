import React from 'react';

const TimelineContent = ({ date, children }) => (
  <div>
    <p className="text-sm">{date}</p>
    {children}
  </div>
);

export default TimelineContent;
