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
  'Linked In': (
    <Link href="https://www.linkedin.com/in/ntnhan65/" className={styles.link} target="_blank">
      https://www.linkedin.com/in/ntnhan65/
    </Link>
  ),
  Address:
    '74/25/5C (Alley 242/23/17) An Duong Vuong Street, Ward 16, District 8, Ho Chi Minh City',
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
    'Languages: HTML5, CSS3, JavaScript (ES6+), TypeScript, PHP',
    'Frameworks: React, Next.js, Vue.js',
    'Library: MUI, AntDesign, Redux, Zustand, jQuery, Bootstrap',
    'Styling: TailwindCSS, Sass, Bootstrap, CSS Modules, CSS-in-JS',
    'Tools: Git, Webpack, Vite, npm',
    'Others: REST APIs, gRPC, Responsive Design, Figma, Agile/Scrum, Docker, Redis, experience with Ory Hydra',
  ],
  'Soft skills': [
    'Capable of working effectively both in collaborative team environments and independently.',
    'Optimistic and open-minded with strong critical thinking skills and a high level of self-awareness.',
    'Maintain composure and efficiency in high-pressure situations.',
    'Strong planning and time management skills to prioritize tasks and meet deadlines efficiently.',
  ],
};

type Project = {
  name: string[] | string;
  size: number;
  detail: Array<string | Record<string, string[]>>;
  note?: string;
};
const projects: Record<string, Project[]> = {
  '* Project in Hello Health Group': [
    // HHG WORKFLOW
    {
      name: ['HHG Workflow'],
      size: 5,
      detail: [
        'Built internal tools featuring node-based editors and interactive diagrams by ReactFlow, D3-Hierarchy, Zustand and AntD to streamline and automate workflows for email, web push, app push, SMS, Facebook Conversions, and Facebook Ads.',
        'Built and packaged component workflows into&nbsp;<a href="https://www.npmjs.com/package/@ntnhan0605/hhg-workflow" target="_blank" rel="noreferrer">NPM Package</a>',
        'Experienced in using Vite.js and vercal to develop and <a href="https://hhg-workflow.vercel.app/" target="_blank" rel="noreferrer">preview websites</a> with optimized performance.',
        'Technial used in projects: ReactJS, ReactFlow, AntD, Zustand, D3-Hierarchy, npm, Typescript, Vitejs, ESlint, Prettier',
      ],
    },
    // SIDIS
    {
      name: ['SIDIS'],
      size: 7,
      detail: [
        {
          'Built admin dashboard and internal tools: ': [
            'Segmented users from large-scale datasets to enable targeted marketing and personalization.',
            'Set up automated campaigns for multi-channel messaging, including email, web push, app push, SMS, WhatsApp, and Zalo.',
            'Developed a dynamic dashboard using Muuri and Highcharts, allowing users to rearrange analytics widgets via drag-and-drop.',
          ],
        },
        'Technial used in projects: ReactJS, AntD, TailwindCSS, Muuri, ReactFlow, Recharts, Highcharts, Docker, npm, Typescript, ESlint, Prettier',
      ],
    },
    // HEALTH TOOLS, LEAD TOOLS
    {
      name: ['Health tools, Lead tools'],
      size: 6,
      detail: [
        {
          'Maintain and develop feature of internal tools:': [
            'Used Vue.js to configure campaigns that dynamically show or hide lead capture tools based on target URLs.',
            'Worked alongside UX designers to accurately implement Figma designs in building user-facing tools.',
            'Integrated backend APIs to collect data form & tracking from health/lead tools.',
          ],
        },
        'Technical used in projects: ReactJS, Vue.js, NextJS, Typescript, ESlint, Prettier.',
      ],
    },
    // SUBOT/RISK SCREENER
    {
      name: ['SUBOT/Risk screener'],
      size: 4,
      detail: [
        {
          'Built admin dashboard and internal tools: ': [
            'Used ReactFlow, AntD to engineered internal systems and dashboards to configure bots for each URL and control question visibility based on user selection.',
            'Translated Figma-based UI/UX designs into pixel-perfect components while collaborating with the design team.',
          ],
        },
        'Technial used in projects: ReactJS, ReactFlow, AntD, Docker, Typescript, ESlint, Prettier.',
      ],
    },
  ],
  '* Projects in Zivas': [
    // CRM Phu Hoang Land
    {
      name: 'CRM Phu Hoang Land',
      size: 3,
      detail: [
        {
          'Engineered UI and integrate API': [
            'Manage customer, department, employeee, project, room booking, meeting, calendar...',
            'Worked alongside UX designers to accurately implement Figma designs in building user-facing tools.',
          ],
        },
        'Technical used in projects: ReactJS, AntD.',
      ],
    },
    // Hotel UEH Edu
    {
      name: [
        '<a href="https://hotel.ueh.edu.vn/vi/" target="_blank">https://hotel.ueh.edu.vn/vi/</a>',
      ],
      size: 2,
      detail: [
        'Developed responsive WordPress themes with pixel-perfect precision from Adobe XD designs.',
        'Technical used in projects: HTML, CSS, JS, jQuery, Swiper, Bootstrap, Wordpress, TypeRocket, Advanced Custom Field (ACF).',
      ],
    },
  ],
  '* Project in Corsiva Lab': [
    {
      name: [
        '<a href="http://www.kaimay.com.sg/" target="_blank">http://www.kaimay.com.sg/</a>',
        '<a href=" https://www.tacamsteel.com/" target="_blank">https://www.tacamsteel.com/</a>',
        '<a href="https://medelabreastfeeding.asia/sg/" target="_blank">https://medelabreastfeeding.asia/sg/</a>',
      ],
      size: 2,
      detail: [
        'Built custom WordPress themes by accurately translating Adobe XD layouts into code.',
        'Built dynamic WordPress templates using TypeRocket, enabling flexible section layouts per page.',
        'Technical used in projects: HTML, CSS, JS, jQuery, Swiper, Bootstrap, Wordpress, Woocommerce, TypeRocket, Advanced Custom Field (ACF).',
      ],
    },
    {
      name: '<a href="http://virtualwebdesign.azurewebsites.net/" target="_blank">http://virtualwebdesign.azurewebsites.net/</a>',
      size: 2,
      detail: [
        'Used HTML, CSS, and jQuery to translate Figma designs into responsive, user-friendly tools in close collaboration with UX designers.',
        "Utilized cookies to store and restore users' previous steps in multi-step processes.",
      ],
    },
    {
      name: '<a href="http://payabeachv19.azurewebsites.net/" target="_blank">http://payabeachv19.azurewebsites.net/</a>',
      size: 2,
      detail: [
        'Built custom WordPress themes by accurately translating Adobe XD layouts into code.',
        'Developed custom WordPress theme templates with flexible section layouts for each page.',
        'Technical used in projects: HTML, CSS, JS, jQuery, Swiper, Bootstrap, Wordpress, Woocommerce, TypeRocket, Advanced Custom Field (ACF).',
      ],
    },
  ],
  '* Project in Munkas': [
    {
      name: '<a href="https://munkas.com/" target="_blank">https://munkas.com/</a>',
      size: 1,
      detail: [
        'Worked alongside UX designers to accurately implement Figma designs in building user-facing tools.',
        'Technical used in projects: HTML, CSS, JS, jQuery, Swiper, Bootstrap, Wordpress, Advanced Custom Field (ACF).',
      ],
      note: '<i><strong>* Note:</strong></i> Munkas Agency is a social media company so each campaign has one website for each project. After the campaign ends, the site is no longer kept. So I cannot save all the domains for that project.',
    },
  ],
};

//#endregion

const ProjectSection = ({ title, projects }: { title: string; projects: Project[] }) => {
  const ProjectName = ({ name }: { name: string | string[] }) => {
    if (typeof name === 'string') {
      return <p dangerouslySetInnerHTML={{ __html: name }} />;
    }
    if (Array.isArray(name)) {
      return name.map((n) => <ProjectName name={n} />);
    }
    return null;
  };

  return (
    <div className={styles.project}>
      <h4 className={clsx(styles.subtitle, styles.note)}>{title}</h4>
      <table className={clsx(styles.table, styles.bordered)}>
        <tbody>
          <tr>
            <th className={styles.head25}>App/Tool Name</th>
            <th>Team size</th>
            <th className={styles.head70}>Detail</th>
          </tr>
          {projects.map((project, index) => {
            const { name, size, detail, note } = project;
            return (
              <tr key={index.toString()}>
                <td>
                  <ProjectName name={name} />
                </td>
                <td>{size}</td>
                <td>
                  <ul className={styles.list}>
                    {detail.map((lv0, lv0Index) => {
                      if (typeof lv0 === 'string') {
                        return (
                          <li key={lv0Index.toString()} dangerouslySetInnerHTML={{ __html: lv0 }} />
                        );
                      }
                      return Object.keys(lv0).map((lv1, lv1Index) => {
                        const lv2s = lv0[lv1];
                        return (
                          <li key={`${lv1Index}`}>
                            <span dangerouslySetInnerHTML={{ __html: lv1 }} />
                            <ul className={styles.list}>
                              {lv2s.map((lv2, lv2Index) => {
                                return (
                                  <li
                                    key={`${lv1Index}-${lv2Index}`}
                                    dangerouslySetInnerHTML={{ __html: lv2 }}
                                  />
                                );
                              })}
                            </ul>
                          </li>
                        );
                      });
                    })}
                  </ul>
                  {!!note && <p dangerouslySetInnerHTML={{ __html: note }} />}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
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
          {Object.keys(projects).map((title) => {
            const prjs = projects[title as keyof typeof projects];
            return <ProjectSection title={title} projects={prjs} />;
          })}
        </div>
      </div>
    </div>
  );
};
