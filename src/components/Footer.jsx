import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import IconLink from './typography/IconLink';
import HR from './typography/HR';
import { formatBuildDate } from '../dates';
import P from './typography/P';

const ListItem = ({ children }) => (
  <li className="footer-item ml-4">{children}</li>
);

const Footer = () => {
  const {
    siteBuildMetadata: { buildTime },
  } = useStaticQuery(graphql`
    query {
      siteBuildMetadata {
        buildTime
      }
    }
  `);

  return (
    <footer className="text-center">
      <HR />
      <p>
        © Jeremy Keeler 2018&ndash;{new Date().getFullYear()} &mdash; Updated:{' '}
        {formatBuildDate(buildTime)}
      </p>
      <ul className="flex justify-center mt-2">
        <ListItem>
          <IconLink to="https://twitter.com/jerkeeler" icon={faTwitter} />
        </ListItem>
        <ListItem>
          <IconLink to="https://github.com/jerkeeler" icon={faGithub} />
        </ListItem>
        <ListItem>
          <IconLink
            to="https://www.linkedin.com/in/jeremy-keeler-74567891/"
            icon={faLinkedin}
          />
        </ListItem>
      </ul>
      <P className="text-xs">
        All opinions on this website are mine and mine alone. They do not
        reflect the opinions of my employers or my colleagues.
      </P>
    </footer>
  );
};

export default Footer;
