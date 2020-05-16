import React from 'react';

import {
  faLinkedin,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import IconLink from './typography/IconLink';
import HR from './typography/HR';

const ListItem = ({ children }) => (
  <li className="footer-item ml-4">{children}</li>
);

const Footer = () => (
  <footer className="text-center">
    <HR />
    <p>© Jeremy Keeler 2018 - {new Date().getFullYear()}</p>
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
  </footer>
);

export default Footer;
