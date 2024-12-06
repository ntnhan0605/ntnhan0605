'use client';

import clsx from 'clsx';
import { Libre_Bodoni, Montserrat } from 'next/font/google';
import Link from 'next/link';
import { FC, ReactNode } from 'react';
import avatarSrc from './CV-avatar.jpg';
import styles from './CV.module.scss';

const MontserratFont = Montserrat({
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  subsets: ['latin', 'latin-ext'],
});
const Libre_BodoniFont = Libre_Bodoni({
  variable: '--font-libre-bodoni',
  subsets: ['latin', 'latin-ext'],
});

//#region
const infos: Record<string, ReactNode> = {
  'Date of Birth': '06/05/1994',
  Phone: (
    <Link href="tel:0987 527 544" className={styles.link} target="_blank">
      0987 527 544
    </Link>
  ),
  Email: (
    <Link href="mailto:ntnhan0605@gmail.com" className={styles.link}>
      ntnhan0605@gmail.com
    </Link>
  ),
  Hobbies: 'Play Guitar, Reading,...',
  'Linked In': (
    <Link href="https://www.linkedin.com/in/ntnhan65/" className={styles.link} target="_blank">
      https://www.linkedin.com/in/ntnhan65/
    </Link>
  ),
  Address: '74/25/5C (Alley 242/23/17) An Duong Vuong Street, Ward 16, District 8',
};

const objectives: string[] = [
  'Find a new better environment.',
  'My short-term goal is accumulated experience and good coding skills to clean code in 2 years with ReactJS & React Native.',
  'In the long term, I want to be trained as a senior programmer for 4 years.',
];

const educations: Record<string, { title: string; list: string[] }> = {
  'Dec 2019 – Apr 2020': {
    title: 'Information Technology Center',
    list: ['HCMC University of Science', 'Basic Programming & Database', 'GPA: 9.5'],
  },
  'Sep 2012 – Sep 2015': {
    title: 'HCMC University of Technology and Education',
    list: ['Automotive Engineering Technology', 'GPA: 7.8'],
  },
};

const workExperiences: Record<string, { company: string; position: string; list: string[] }> = {
  'May 2021 – Now': {
    company: 'Hello Health Group',
    position: 'Software Engineer',
    list: ['Developing web app/admin dashboard', 'Maintain Nextjs web app'],
  },
  'Mar 2021 – Apr 2021': {
    company: 'Designveloper',
    position: 'Front-End Developer',
    list: ['Developing Website', 'Maintain others web app'],
  },
  'Feb 2020 – Feb 2021': {
    company: 'Zivas',
    position: 'Front-End Developer',
    list: ['Developing Website', 'Developing App'],
  },
  'Aug 2019 – Feb 2020': {
    company: 'Corsiva Lab Pte Ltd',
    position: 'Web Developer',
    list: ['Developing Website', 'Developing App'],
  },
  'Jan 2018 – Aug 2019': {
    company: 'Munkas Agency',
    position: 'Web Developer',
    list: ['Developing Website'],
  },
};

const skills: Record<string, string[]> = {
  'Programming skills': [
    'Web App: React JS, Next JS, HTML, CSS, SCSS, CSS-in-JS',
    'Mobile App: React Native, Expo',
    'Others: ES6, Typescript, Storybook, Webpack, experience with Ory Hydra, gRPC, API by Next JS, Zustand',
  ],
  Computer: ['Github, Gitlab, BitBucket', 'Design: Photoshop, AI, XD, Figma'],
  'Soft skills': [
    'Teamwork and independent working',
    'Optimistic, open-minded, critical thinking and self-aware',
    'Stay calm and work well under pressure',
    'Planning and time management skills',
  ],
};

type Project = {
  size: string;
  technology: string[];
  name?: ReactNode;
  position?: string;
  description?: ReactNode;
};
const projectsInHHG: Project[] = [
  {
    name: 'HHG Workflow',
    size: '1',
    technology: ['Library/Framework: ReactJS, ReactFlow', 'Format: Typescript, ESLint, Prettier'],
    description: (
      <>
        Build package to NPM:
        <br />
        <a
          href="https://www.npmjs.com/package/@ntnhan0605/hhg-workflow"
          target="_blank"
          rel="noreferrer"
        >
          https://www.npmjs.com/package/@ntnhan0605/hhg-workflow
        </a>
        <br />
        Work with vitejs for launching preview web:
        <br />
        <a href="https://hhg-workflow.vercel.app/" target="_blank" rel="noreferrer">
          https://hhg-workflow.vercel.app/
        </a>
        <br />
      </>
    ),
  },
  {
    name: 'Health tools, BMI/BMR tools, Lead tools',
    size: '3',
    technology: [
      'Library/Framework: ReactJS, NextJS',
      'Format: Typescript, ESLint, Prettier, NextJS',
    ],
    description: (
      <>
        Build component form & result for each market <br />
        Refactor code & maintainece other tools
      </>
    ),
  },
  {
    name: 'Chat bot/Risk screener',
    size: '2',
    technology: [
      'Library/Framework: ReactJS, NextJS, Ant Design, React Flow',
      'Format: Typescript, ESLint, Prettier',
      'Others: Docker',
    ],
    description: (
      <>
        Build admin website for setting chat bot <br />
        Show chat bot to others web app.
      </>
    ),
  },
  {
    name: 'SSO/Oauth2',
    size: '2',
    technology: [
      'Library/Framework: ReactJS, NextJS, Ant Design',
      'Format: Typescript, ESLint, Prettier',
      'Others: Redis, Docker, Ory Hydra',
    ],
    description: (
      <>
        Website login & redirect with Ory Hydra <br />
        Login with Google & Facebook
      </>
    ),
  },
  {
    name: 'Admin Database Analytics',
    size: '7',
    technology: [
      'Library/Framework: ReactJS, Ant Design, React Flow, Recharts, Highcharts, TailwindCSS',
      'Format: Typescript, ESLint, Prettier',
      'Others: Docker, NPM',
    ],
    description: (
      <>
        Create Segment from big data <br />
        Make Campaign for remarketing <br />
        Build Flow for each campaign & segment <br />
        And then build chart from segment, campaign or flow
      </>
    ),
  },
];

const projectsInZivas: Project[] = [
  {
    name: 'CRM Phu Hoang Land (Feb 2020 – Feb 2021)',
    size: '2',
    position: 'Front-End Developer',
    technology: ['React JS, Next JS, Ant.design', 'GraphQL, Apollo/Client, Typescript'],
    description:
      'Manage customer, department, employee, project, room booking, meeting, calendar,… UI/UX.',
  },
  {
    name: (
      <Link href="https://hotel.ueh.edu.vn/vi/" target="_blank">
        https://hotel.ueh.edu.vn/vi/
      </Link>
    ),
    size: '1',
    technology: ['HTML, CSS, jQuery', 'Worpress: make theme from Front-end'],
  },
];

const projectsInCorsivaLab: Project[] = [
  {
    name: (
      <>
        <Link href="http://www.kaimay.com.sg/" target="_blank">
          http://www.kaimay.com.sg/
        </Link>
        <br />
        <Link href=" https://www.tacamsteel.com/" target="_blank">
          https://www.tacamsteel.com/
        </Link>
        <br />
        <Link href="https://medelabreastfeeding.asia/sg/" target="_blank">
          https://medelabreastfeeding.asia/sg/
        </Link>
      </>
    ),
    size: '1',
    technology: ['HTML, CSS, jQuery', 'Worpress: make theme from Front-end', 'Woocommerce Plugin'],
    description: 'Flexible builder content on each layout with TypeRocket Plugin',
  },
  {
    name: (
      <>
        <Link href="http://virtualwebdesign.azurewebsites.net/" target="_blank">
          http://virtualwebdesign.azurewebsites.net/
        </Link>
      </>
    ),
    size: '1',
    technology: ['HTML, CSS, jQuery', 'Work with Cookie'],
  },
  {
    name: (
      <Link href="http://payabeachv19.azurewebsites.net/" target="_blank">
        http://payabeachv19.azurewebsites.net/
      </Link>
    ),
    size: '1',
    technology: ['HTML, CSS, jQuery', 'Work with PHP'],
  },
];

const projectsInMunkas: Project[] = [
  {
    name: (
      <Link href="https://munkas.com/" target="_blank">
        https://munkas.com/
      </Link>
    ),
    size: '1',
    technology: ['HTML, CSS, jQuery', 'Worpress: make theme from Front-end'],
  },
];
//#endregion

export const CV: FC = () => {
  return (
    <div className={styles.main}>
      <div className={clsx(styles.cv, MontserratFont.variable, Libre_BodoniFont.variable)}>
        <div className={clsx(styles.container, styles.infos)}>
          <h1 className={styles.name}>NGUYEN THIEN NHAN</h1>
          <div className={styles.divider} />
          <div className={styles.infoContainer}>
            <div className={styles.infoLeft}>
              <h3 className={styles.position}>Front-end Developer</h3>
              <ul className={styles.list}>
                {Object.keys(infos).map((k, itemIndex) => {
                  const key = k as keyof typeof infos;
                  const children = infos[key];
                  return (
                    <li key={itemIndex.toString()} className={styles.item}>
                      <label className={styles.label}>{key}:</label>
                      <span className={styles.value}>{children}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={styles.infoRight}>
              <Link href="/">
                <div className={styles.avatar}>
                  <img src={avatarSrc.src} alt="Nguyen Thien Nhan" className={styles.avatarImg} />
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* ******************************************* OBJECTIVE ******************************************* */}
        <div className={clsx(styles.container, styles.objectives)}>
          <h2 className={styles.title}>OBJECTIVE</h2>
          <div className={styles.divider} />
          <ul className={styles.list}>
            {objectives.map((item, itemIndex) => {
              return <li key={itemIndex.toString()}>{item}</li>;
            })}
          </ul>
        </div>
        {/* ******************************************* EDUCATION ******************************************* */}
        <div className={clsx(styles.container, styles.educations)}>
          <h2 className={styles.title}>EDUCATION</h2>
          <div className={styles.divider} />
          <table className={styles.table}>
            <tbody>
              {Object.keys(educations).map((k, index) => {
                const key = k as keyof typeof educations;
                const value = educations[key];
                return (
                  <tr key={index.toString()}>
                    <th className={styles.head40}>{key}</th>
                    <td className={styles.col}>
                      <h4 className={styles.subtitle}>{value.title}</h4>
                      <ul className={styles.list}>
                        {value.list.map((item, itemIndex) => {
                          return <li key={itemIndex.toString()}>{item}</li>;
                        })}
                      </ul>
                      {Object.keys(educations).length - 1 > index && (
                        <div className={styles.divider} />
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* ******************************************* WORK EXPERIENCE ******************************************* */}
        <div className={clsx(styles.container, styles.workExperiences)}>
          <h2 className={styles.title}>WORK EXPERIENCE</h2>
          <div className={styles.divider} />
          <table className={styles.table}>
            <tbody>
              {Object.keys(workExperiences).map((k, index) => {
                const key = k as keyof typeof workExperiences;
                const value = workExperiences[key];
                return (
                  <tr key={index.toString()}>
                    <th className={styles.head40}>{key}</th>
                    <td className={styles.col}>
                      <h4 className={styles.subtitle}>{value.company}</h4>
                      <p className={styles.description}>
                        My position: <strong>{value.position}</strong>
                      </p>
                      <h6 className={styles.listTitle}>Main responsibilities:</h6>
                      <ul className={styles.list}>
                        {value.list.map((item, itemIndex) => {
                          return <li key={itemIndex.toString()}>{item}</li>;
                        })}
                      </ul>
                      {Object.keys(workExperiences).length - 1 > index && (
                        <div className={styles.divider} />
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* ******************************************* SKILLS ******************************************* */}
        <div className={clsx(styles.container, styles.skills)}>
          <h2 className={styles.title}>SKILLS</h2>
          <div className={styles.divider} />
          {Object.keys(skills).map((k, index) => {
            const key = k as keyof typeof skills;
            const list = skills[key];
            return (
              <div key={index.toString()} className={styles.skill}>
                <h4 className={styles.subtitle}>{key}</h4>
                <ul className={styles.list}>
                  {list.map((item, itemIndex) => {
                    return <li key={itemIndex.toString()}>{item}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        {/* ******************************************* PROJECTS ******************************************* */}
        <div className={clsx(styles.container, styles.projects)}>
          <h2 className={styles.title}>PROJECTS</h2>
          <div className={styles.divider} />
          {/* ** Hello Health Group ** */}
          <div className={styles.project}>
            <h4 className={clsx(styles.subtitle, styles.note)}>* Projects in Hello Health Group</h4>
            <table className={clsx(styles.table, styles.bordered)}>
              <tbody>
                <tr>
                  <th className={styles.head40}>App/Tool Name</th>
                  <th>Team size</th>
                  <th className={styles.head50}>Technologies used</th>
                </tr>
                {projectsInHHG.map((project, index) => {
                  return (
                    <tr key={index.toString()}>
                      <td>{project.name}</td>
                      <td>{project.size}</td>
                      <td>
                        <ul className={styles.list}>
                          {project.technology.map((item, itemIndex) => {
                            return <li key={itemIndex.toString()}>{item}</li>;
                          })}
                        </ul>
                        {project.description}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* ** Zivas ** */}
          <div className={styles.project}>
            <h4 className={clsx(styles.subtitle, styles.note)}>* Projects in Zivas</h4>
            <div className={styles.projectTitle}>{projectsInZivas[0].name}</div>
            <table className={clsx(styles.table, styles.bordered)}>
              <tbody>
                <tr>
                  <th className={styles.head30}>Description</th>
                  <td>{projectsInZivas[0].description}</td>
                </tr>
                <tr>
                  <th>Team size</th>
                  <td>{projectsInZivas[0].size}</td>
                </tr>
                <tr>
                  <th>Position</th>
                  <td>{projectsInZivas[0].position}</td>
                </tr>
                <tr>
                  <th>Technologies used</th>
                  <td>
                    <ul className={styles.list}>
                      {projectsInZivas[0].technology.map((item, itemIndex) => {
                        return <li key={itemIndex.toString()}>{item}</li>;
                      })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className={clsx(styles.table, styles.bordered)}>
              <tbody>
                <tr>
                  <th className={styles.head45}>Website</th>
                  {/* <th>Team size</th> */}
                  <th className={styles.head50}>Techonlogies used</th>
                </tr>
                {projectsInZivas.slice(1).map((project, index) => {
                  return (
                    <tr key={index.toString()}>
                      <td>{project.name}</td>
                      {/* <td>{project.size}</td> */}
                      <td>
                        <ul className={styles.list}>
                          {project.technology.map((item, itemIndex) => {
                            return <li key={itemIndex.toString()}>{item}</li>;
                          })}
                        </ul>
                        {project.description}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* ** Corsiva Lab ** */}
          <div className={styles.project}>
            <h4 className={clsx(styles.subtitle, styles.note)}>* Project in Corsiva Lab</h4>
            <table className={clsx(styles.table, styles.bordered)}>
              <tbody>
                <tr>
                  <th className={styles.head45}>Website</th>
                  {/* <th>Team size</th> */}
                  <th className={styles.head50}>Techonlogies used</th>
                </tr>
                {projectsInCorsivaLab.map((project, index) => {
                  return (
                    <tr key={index.toString()}>
                      <td>{project.name}</td>
                      {/* <td>{project.size}</td> */}
                      <td>
                        <ul className={styles.list}>
                          {project.technology.map((item, itemIndex) => {
                            return <li key={itemIndex.toString()}>{item}</li>;
                          })}
                        </ul>
                        {project.description}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* ** Munkas ** */}
          <div className={styles.project}>
            <h4 className={clsx(styles.subtitle, styles.note)}>* Project in Munkas Agency</h4>
            <table className={clsx(styles.table, styles.bordered)}>
              <tbody>
                <tr>
                  <th className={styles.head45}>Website</th>
                  {/* <th>Team size</th> */}
                  <th className={styles.head50}>Techonlogies used</th>
                </tr>
                {projectsInMunkas.map((project, index) => {
                  return (
                    <tr key={index.toString()}>
                      <td>{project.name}</td>
                      {/* <td>{project.size}</td> */}
                      <td>
                        <ul className={styles.list}>
                          {project.technology.map((item, itemIndex) => {
                            return <li key={itemIndex.toString()}>{item}</li>;
                          })}
                        </ul>
                        {project.description}
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td colSpan={2}>
                    <p className={styles.note}>
                      <strong>* Note:</strong> Munkas Agency is a social media company so each
                      campaign has one website for each project. After the campaign ends, the site
                      is no longer kept. So I cannot save all the domains for that project.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
