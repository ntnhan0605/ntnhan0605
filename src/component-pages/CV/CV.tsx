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
  'Detail-oriented Front-End Developer with 5+ years of experience in creating responsive and user-centric web applications.',
  'Seeking to leverage expertise in modern frameworks such as React, Vue.js to contribute to dynamic development teams.',
  'Committed to delivering clean, maintainable code with a strong focus on UI/UX design, performance optimization, and continuous learning in the evolving front-end landscape.',
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
    list: [
      'Developed responsive interfaces using React and Tailwind CSS, improving load times by 30%.',
      'Collaborated with backend engineers to integrate RESTful APIs.',
      'Led the migration of legacy code to a modern React-based stack.',
      'Worked closely with UX designers to implement Figma designs pixel-perfectly.',
      'Support legacy applications and contribute new feature development.',
      'Engineered full-featured admin dashboards from the ground up.',
    ],
  },
  'Mar 2021 – Apr 2021': {
    company: 'Designveloper',
    position: 'Front-End Developer',
    list: [
      'Maintained and updated UI/UX for internal tools and dashboards',
      'Participated in daily standups and sprint planning in an Agile team.',
      'Assisted in developing reusable components with React.js',
    ],
  },
  'Feb 2020 – Feb 2021': {
    company: 'Zivas',
    position: 'Front-End Developer',
    list: [
      'Worked closely with UX designers to implement Figma designs pixel-perfectly.',
      'Created and maintained custom WordPress themes aligned with marketing requirements.',
    ],
  },
  'Aug 2019 – Feb 2020': {
    company: 'Corsiva Lab Pte Ltd',
    position: 'Web Developer',
    list: [
      'Built and updated WordPress themes aligned with marketing specifications, leveraging Elementor and Advanced Custom Fields (ACF).',
    ],
  },
  'Jan 2018 – Aug 2019': {
    company: 'Munkas Agency',
    position: 'Web Developer',
    list: ['Implemented UI-driven updates and custom themes for WordPress marketing sites.'],
  },
};

const skills: Record<string, string[]> = {
  'Technical skills': [
    'Languages: HTML5, CSS3, JavaScript (ES6+), TypeScript',
    'Frameworks: React, Next.js, Vue.js',
    'Library: MUI, AntDesign, Redux, Zustand, jQuery, Bootstrap',
    'Styling: Tailwind CSS, Sass, Bootstrap, CSS Modules',
    'Tools: Git, Webpack, Vite, npm',
    'Others: REST APIs, gRPC, Responsive Design, Figma, Agile/Scrum, Docker, Redis, experience with Ory Hydra',
  ],
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
  // HHG WORKFLOW
  {
    name: 'HHG Workflow',
    size: '5',
    technology: [
      'Technial used in projects: reactjs, reactflow, antd, zustand, d3-hierarchy, vitejs, npm',
      'Format: typescript, eslint, prettier',
    ],
    description: (
      <>
        <p>
          Built admin dashboards and internal tools to streamline and automate email, web push, app
          push, SMS, Facebook Conversions, and Facebook Ads workflows.
        </p>
        <p>
          Built and packaged component workflows into&nbsp;
          <a
            href="https://www.npmjs.com/package/@ntnhan0605/hhg-workflow"
            target="_blank"
            rel="noreferrer"
          >
            NPM Package
          </a>
        </p>
        <p>
          Experienced in using Vite.js and vercal to develop and&nbsp;
          <a href="https://hhg-workflow.vercel.app/" target="_blank" rel="noreferrer">
            preview websites
          </a>
          &nbsp; with optimized performance.
        </p>
      </>
    ),
  },
  // SIDIS
  {
    name: 'SIDIS',
    size: '7',
    technology: [
      'Technial used in projects: reactjs, antd, tailwindcss, reactflow, muuri, recharts, highcharts, docker, npm',
      'Format: typescript, eslint, prettier',
    ],
    description: (
      <>
        <p>Built admin dashboard and internal tools to segment users from big data.</p>
        <p>
          Built dashboard and internal tools to set up campaign automate sending email, web push,
          app push, SMS, WhatsApp and Zalo.
        </p>
        <p>
          Integrated backend APIs to display dynamic analytics charts within the admin dashboard.
        </p>
      </>
    ),
  },
  // HEALTH TOOLS, LEAD TOOLS
  {
    name: 'Health tools, Lead tools',
    size: '6',
    technology: [
      'Technical used in projects: reactjs, vuejs, nextjs',
      'Format: typescript, eslint, prettier',
    ],
    description: (
      <>
        <p>
          Worked alongside UX designers to accurately implement Figma designs in building
          user-facing tools.
        </p>
        <p>Built dashboards and internal tools to set up condition show/hide tools.</p>
        <p>Integrated backend APIs to collect data form & tracking from health/lead tools.</p>
      </>
    ),
  },
  // SUBOT/RISK SCREENER
  {
    name: 'SUBOT/Risk screener',
    size: '4',
    technology: [
      'Technial used in projects: reactjs, reactflow, antd, docker',
      'Format: typescript, eslint, prettier',
    ],
    description: (
      <>
        <p>
          Translated Figma-based UI/UX designs into pixel-perfect components while collaborating
          with the design team.
        </p>
        <p>
          Engineered internal systems and dashboards to configure bots for each URL and control
          question visibility based on user selection.
        </p>
      </>
    ),
  },
];

const projectsInZivas: Project[] = [
  {
    name: 'CRM Phu Hoang Land (Feb 2020 – Feb 2021)',
    size: '3',
    position: 'Front-End Developer',
    technology: ['Technical used in projects: reactjs, antd.'],
    description: (
      <>
        <p>
          Engineered UI to manage customer, department, employeee, project, room booking, meeting,
          calendar...
        </p>
        <p>
          Worked alongside UX designers to accurately implement Figma designs in building
          user-facing tools.
        </p>
      </>
    ),
  },
  {
    name: (
      <Link href="https://hotel.ueh.edu.vn/vi/" target="_blank">
        https://hotel.ueh.edu.vn/vi/
      </Link>
    ),
    size: '1',
    technology: [
      'Technical used in projects: html, css, js, jquery, swiper, bootstrap, wordpress, typerocket, advanced custom field (acf).',
    ],
    description: (
      <>
        <p>
          Developed responsive WordPress themes with pixel-perfect precision from Adobe XD designs.
        </p>
      </>
    ),
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
    technology: [
      'Technical used in projects: html, css, js, jquery, swiper, bootstrap, wordpress, woocommerce, typerocket, advanced custom field (acf).',
    ],
    description: (
      <>
        <p>Built custom WordPress themes by accurately translating Adobe XD layouts into code.</p>
        <p>
          Developed custom WordPress theme templates with flexible section layouts for each page.
        </p>
      </>
    ),
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
    technology: [
      'Technical used in projects: html, css, js, jquery, swiper, bootstrap, wordpress, woocommerce, typerocket, advanced custom field (acf).',
    ],
    description: (
      <>
        <p>Built custom WordPress themes by accurately translating Adobe XD layouts into code.</p>
        <p>
          Developed custom WordPress theme templates with flexible section layouts for each page.
        </p>
      </>
    ),
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
    technology: [
      'Technical used in projects: html, css, js, jquery, swiper, bootstrap, wordpress, woocommerce, typerocket, advanced custom field (acf).',
    ],
    description: (
      <>
        <p>
          Worked alongside UX designers to accurately implement Figma designs in building
          user-facing tools.
        </p>
      </>
    ),
  },
];
//#endregion

export const CV: FC = () => {
  return (
    <div className={styles.main}>
      <div className={clsx(styles.cv, MontserratFont.variable, Libre_BodoniFont.variable)}>
        {/* ******************************************* INFO ************************************************ */}
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
                    <th className={styles.head30}>{key}</th>
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
                  <th className={styles.head30}>App/Tool Name</th>
                  <th>Team size</th>
                  <th className={styles.head60}>Description</th>
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
