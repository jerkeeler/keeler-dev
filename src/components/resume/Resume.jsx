import React from 'react';

import Education from './Education';
import Publication from './Publication';
import Work from './Work';

import data from '../../data/resume.json';

function constructResumeEntries(resumeData) {
  const work = resumeData.work.map((w) => ({
    ...w,
    type: 'work',
    date: new Date(w.startDate),
  }));
  const education = resumeData.education.map((e) => ({
    ...e,
    type: 'education',
    date: new Date(e.startDate),
  }));
  const publications = resumeData.publications.map((p) => ({
    ...p,
    type: 'publication',
    date: new Date(p.releaseDate),
  }));
  const entries = [...work, ...education, ...publications].sort((a, b) =>
    a.date > b.date ? -1 : 1,
  );
  const components = entries
    .map((entry, idx) => {
      switch (entry.type) {
        case 'work':
          return <Work key={idx} idx={idx} data={entry} />;
        case 'education':
          return <Education key={idx} idx={idx} data={entry} />;
        case 'publication':
          return <Publication key={idx} idx={idx} data={entry} />;
        default:
          console.error(
            `No way to render resume element of type: ${entry.type}`,
          );
          return null;
      }
    })
    .filter((e) => e !== null);
  return components;
}

const resumeElements = constructResumeEntries(data);

const Resume = () => <div>{resumeElements}</div>;

export default Resume;
