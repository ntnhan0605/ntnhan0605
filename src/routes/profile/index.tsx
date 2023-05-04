import { Grid, Typography } from '@mui/material'
import {
  ProfileAvatar,
  ProfileBox,
  ProfileBoxInnerItem,
  ProfileBoxItem,
  ProfileContainer,
  ProfileDescription,
  ProfileDivider,
  ProfileHeading,
  ProfileList,
  ProfileName,
  ProfilePosition,
  ProfileTable,
  ProfileStrong,
  ProfileProjectTable
} from './index.styles'

export const Profile = () => {
  return (
    <ProfileContainer maxWidth="md">
      <ProfileBox borderRadius={1}>
        <ProfileBoxItem>
          <ProfileName>NGUYEN THIEN NHAN</ProfileName>
          <ProfileDivider />
          <Grid spacing={5} container>
            <Grid flex={1} item>
              <ProfilePosition>Front-end Developer</ProfilePosition>
              <ProfileTable>
                <tbody>
                  <tr>
                    <th>Date of Birth:</th>
                    <td>06/05/1994</td>
                  </tr>
                  <tr>
                    <th>Phone:</th>
                    <td>0987 527 544</td>
                  </tr>
                  <tr>
                    <th>Email:</th>
                    <td>ntnhan0605@gmail.com</td>
                  </tr>
                  <tr>
                    <th>Linked In:</th>
                    <td>linkedin.com/in/ntnhan0605/</td>
                  </tr>
                  <tr>
                    <th>Address:</th>
                    <td>
                      629 Kinh Duong Vuong, An Lac Ward, Binh Tan District, Ho
                      Chi Minh City
                    </td>
                  </tr>
                </tbody>
              </ProfileTable>
            </Grid>
            <Grid width={220} item>
              <ProfileAvatar src="/images/avatar.jpg" />
            </Grid>
          </Grid>
        </ProfileBoxItem>
        {/* ******************************************* OBJECTIVE ******************************************* */}
        <ProfileBoxItem>
          <ProfileHeading>OBJECTIVE</ProfileHeading>
          <ProfileDivider />
          <ProfileList>
            <li>Find a new better environment.</li>
            <li>
              My short-term goal is accumulated experience and good coding
              skills to clean code in 2 years with ReactJS & React Native.
            </li>
            <li>
              In the long term, I want to be trained as a senior programmer for
              4 years.
            </li>
          </ProfileList>
        </ProfileBoxItem>
        {/* ******************************************* EDUCATION ******************************************* */}
        <ProfileBoxItem>
          <ProfileHeading>EDUCATION</ProfileHeading>
          <ProfileDivider />
          <ProfileBoxInnerItem>
            <Grid spacing={5} container>
              <Grid xs={5} item>
                <ProfileStrong>Dec 2019 – Apr 2020</ProfileStrong>
              </Grid>
              <Grid xs={7} item>
                <ProfileStrong>Information Technology Center</ProfileStrong>
                <ProfileList>
                  <li>HCMC University of Science</li>
                  <li>Basic Programming & Database</li>
                  <li>GPA: 9.5</li>
                </ProfileList>
                <ProfileDivider className="half" />
              </Grid>
            </Grid>
          </ProfileBoxInnerItem>
          <ProfileBoxInnerItem>
            <Grid spacing={5} container>
              <Grid xs={5} item>
                <ProfileStrong>Sep 2012 – Sep 2015</ProfileStrong>
              </Grid>
              <Grid xs={7} item>
                <ProfileStrong>
                  HCMC University of Technology and Education
                </ProfileStrong>
                <ProfileList>
                  <li>Automotive Engineering Technology</li>
                  <li>GPA: 7.8</li>
                </ProfileList>
              </Grid>
            </Grid>
          </ProfileBoxInnerItem>
        </ProfileBoxItem>
        {/* ******************************************* WORK EXPERIENCE ******************************************* */}
        <ProfileBoxItem>
          <ProfileHeading>WORK EXPERIENCE</ProfileHeading>
          <ProfileDivider />
          <ProfileBoxInnerItem>
            <Grid spacing={5} container>
              <Grid xs={5} item>
                <ProfileStrong>May 2021 – Now</ProfileStrong>
              </Grid>
              <Grid xs={7} item>
                <ProfileStrong>Hello Health Group</ProfileStrong>
                <ProfileDescription>
                  My position: <ProfileStrong>Software Engineer</ProfileStrong>
                  <br />
                  Main responsibilities:
                </ProfileDescription>
                <ProfileList>
                  <li>Developing web app</li>
                  <li>Maintain others web app</li>
                </ProfileList>
                <ProfileDivider className="half" />
              </Grid>
            </Grid>
          </ProfileBoxInnerItem>
          <ProfileBoxInnerItem>
            <Grid spacing={5} container>
              <Grid xs={5} item>
                <ProfileStrong>Mar 2021 – Apr 2021</ProfileStrong>
              </Grid>
              <Grid xs={7} item>
                <ProfileStrong>Designveloper</ProfileStrong>
                <ProfileDescription>
                  My position:&nbsp;
                  <ProfileStrong>Front-End Developer</ProfileStrong>
                  <br />
                  Main responsibilities:
                </ProfileDescription>
                <ProfileList>
                  <li>Developing Website</li>
                  <li>Developing App</li>
                </ProfileList>
                <ProfileDivider className="half" />
              </Grid>
            </Grid>
          </ProfileBoxInnerItem>
          <ProfileBoxInnerItem>
            <Grid spacing={5} container>
              <Grid xs={5} item>
                <ProfileStrong>Feb 2020 – Feb 2021</ProfileStrong>
              </Grid>
              <Grid xs={7} item>
                <ProfileStrong>Zivas</ProfileStrong>
                <ProfileDescription>
                  My position:&nbsp;
                  <ProfileStrong>Front-End Developer</ProfileStrong>
                  <br />
                  Main responsibilities:
                </ProfileDescription>
                <ProfileList>
                  <li>Developing Website</li>
                  <li>Developing App</li>
                </ProfileList>
                <ProfileDivider className="half" />
              </Grid>
            </Grid>
          </ProfileBoxInnerItem>
          <ProfileBoxInnerItem>
            <Grid spacing={5} container>
              <Grid xs={5} item>
                <ProfileStrong>Aug 2019 – Feb 2020</ProfileStrong>
              </Grid>
              <Grid xs={7} item>
                <ProfileStrong>Corsiva Lab Pte Ltd</ProfileStrong>
                <ProfileDescription>
                  My position:&nbsp;
                  <ProfileStrong>Web Developer</ProfileStrong>
                  <br />
                  Main responsibilities:
                </ProfileDescription>
                <ProfileList>
                  <li>Developing Website</li>
                </ProfileList>
                <ProfileDivider className="half" />
              </Grid>
            </Grid>
          </ProfileBoxInnerItem>
          <ProfileBoxInnerItem>
            <Grid spacing={5} container>
              <Grid xs={5} item>
                <ProfileStrong>Jan 2018 – Aug 2019</ProfileStrong>
              </Grid>
              <Grid xs={7} item>
                <ProfileStrong>Munkas Agency</ProfileStrong>
                <ProfileDescription>
                  My position:&nbsp;
                  <ProfileStrong>Web Developer</ProfileStrong>
                  <br />
                  Main responsibilities:
                </ProfileDescription>
                <ProfileList>
                  <li>Developing Website</li>
                </ProfileList>
              </Grid>
            </Grid>
          </ProfileBoxInnerItem>
        </ProfileBoxItem>
        {/* ******************************************* SKILLS ******************************************* */}
        <ProfileBoxItem>
          <ProfileHeading>SKILLS</ProfileHeading>
          <ProfileDivider />
          <ProfileBoxInnerItem>
            <ProfileStrong>Programming skills</ProfileStrong>
            <ProfileList>
              <li>
                Web App: Next JS, React JS, SCSS/SASS, CSS-in-JS, HTML, CSS, JS
              </li>
              <li>Mobile App: React Native, Expo</li>
              <li>System: Docker</li>
              <li>
                Others: ES6, Typescript, ESLint, Prettier, Storybook, Webpack,
                Redis, Experience with Oauth2, GRPC, API by NextJS
              </li>
            </ProfileList>
          </ProfileBoxInnerItem>
          <ProfileBoxInnerItem>
            <ProfileStrong>Computer</ProfileStrong>
            <ProfileList>
              <li>Github, Gitlab, BitBucket</li>
              <li>Design: Photoshop, AI, XD, Figma</li>
            </ProfileList>
          </ProfileBoxInnerItem>
          <ProfileBoxInnerItem>
            <ProfileStrong>Soft skills</ProfileStrong>
            <ProfileList>
              <li>Teamwork and independent working</li>
              <li>Optimistic, open-minded, critical thinking and self-aware</li>
              <li>Stay calm and work well under pressure</li>
              <li>Planning and time management skills </li>
            </ProfileList>
          </ProfileBoxInnerItem>
        </ProfileBoxItem>
        {/* ******************************************* PROJECTS ******************************************* */}
        <ProfileBoxItem>
          <ProfileHeading>PROJECTS</ProfileHeading>
          <ProfileDivider />
          <ProfileBoxInnerItem>
            <ProfileStrong style={{ textDecoration: 'underline' }}>
              * Projects in Hello Health Group
            </ProfileStrong>
            <ProfileList>
              <ProfileBoxInnerItem>
                <ProfileProjectTable className="half">
                  <tbody>
                    <tr>
                      <th>App/Tool Name</th>
                      <th>Technologies used</th>
                    </tr>
                    <tr>
                      <td>BMI tool</td>
                      <td>
                        <ProfileList>
                          <li>Typescript, ESLint, Prettier</li>
                        </ProfileList>
                        <Typography fontStyle="italic">
                          Build component form & result for BMI for each market
                        </Typography>
                      </td>
                    </tr>
                  </tbody>
                </ProfileProjectTable>
              </ProfileBoxInnerItem>
            </ProfileList>
          </ProfileBoxInnerItem>
          <ProfileBoxInnerItem>
            <ProfileStrong style={{ textDecoration: 'underline' }}>
              * Projects in Zivas
            </ProfileStrong>
            <ProfileList>
              <ProfileBoxInnerItem>
                <li>
                  <ProfileStrong>
                    CRM Phu Hoang Land (Feb 2020 – Feb 2021)
                  </ProfileStrong>
                </li>
                <ProfileProjectTable>
                  <tbody>
                    <tr>
                      <th>Description</th>
                      <td>
                        Manage customer, department, employee, project, room
                        booking, meeting, calendar,… UI/UX.
                      </td>
                    </tr>
                    <tr>
                      <th>Team size</th>
                      <td>2</td>
                    </tr>
                    <tr>
                      <th>Position</th>
                      <td>Front-End Developer</td>
                    </tr>
                    <tr>
                      <th>Technologies used</th>
                      <td>
                        <ProfileList>
                          <li>React JS, Next JS, Ant.design</li>
                          <li>GraphQL, Apollo/Client, Typescript</li>
                        </ProfileList>
                      </td>
                    </tr>
                  </tbody>
                </ProfileProjectTable>
              </ProfileBoxInnerItem>
              <ProfileBoxInnerItem>
                <ProfileProjectTable className="half">
                  <tbody>
                    <tr>
                      <th>Website</th>
                      <th>Technologies used</th>
                    </tr>
                    <tr>
                      <td>
                        <a href="https://hotel.ueh.edu.vn/vi/">
                          https://hotel.ueh.edu.vn/vi/
                        </a>
                      </td>
                      <td>
                        <ProfileList>
                          <li>HTML, CSS, jQuery</li>
                          <li>Worpress: make theme from Front-end</li>
                        </ProfileList>
                      </td>
                    </tr>
                  </tbody>
                </ProfileProjectTable>
              </ProfileBoxInnerItem>
            </ProfileList>
          </ProfileBoxInnerItem>
          <ProfileBoxInnerItem>
            <ProfileStrong style={{ textDecoration: 'underline' }}>
              * Projects in Corsiva Lab
            </ProfileStrong>
            <ProfileList>
              <ProfileBoxInnerItem>
                <ProfileProjectTable className="half">
                  <tbody>
                    <tr>
                      <th>Website</th>
                      <th>Technologies used</th>
                    </tr>
                    <tr>
                      <td>
                        <a href="http://www.kaimay.com.sg/">
                          http://www.kaimay.com.sg/
                        </a>
                        <br />
                        <a href=" https://www.tacamsteel.com/">
                          https://www.tacamsteel.com/
                        </a>
                        <br />
                        <a href="https://development.corsivalab.xyz/prolink/">
                          https://development.corsivalab.xyz/prolink/
                        </a>
                        <br />
                        <a href="https://medelabreastfeeding.asia/sg/">
                          https://medelabreastfeeding.asia/sg/
                        </a>
                      </td>
                      <td>
                        <ProfileList>
                          <li>HTML, CSS, jQuery</li>
                          <li>Worpress: make theme from Front-end</li>
                          <li>Woocommerce Plugin</li>
                        </ProfileList>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="http://cwstresidences.azurewebsites.net/">
                          http://cwstresidences.azurewebsites.net/
                        </a>
                        <br />
                        <a href="http://virtualwebdesign.azurewebsites.net/">
                          http://virtualwebdesign.azurewebsites.net/
                        </a>
                      </td>
                      <td>
                        <ProfileList>
                          <li>HTML, CSS, jQuery</li>
                          <li>Cookie</li>
                        </ProfileList>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="http://payabeachv19.azurewebsites.net/">
                          http://payabeachv19.azurewebsites.net/
                        </a>
                      </td>
                      <td>
                        <ProfileList>
                          <li>HTML, CSS, jQuery</li>
                          <li>Fullstack, PHP</li>
                        </ProfileList>
                      </td>
                    </tr>
                  </tbody>
                </ProfileProjectTable>
              </ProfileBoxInnerItem>
            </ProfileList>
          </ProfileBoxInnerItem>
          <ProfileBoxInnerItem>
            <ProfileStrong style={{ textDecoration: 'underline' }}>
              * Project in Munkas Agency
            </ProfileStrong>
            <ProfileList>
              <ProfileBoxInnerItem>
                <ProfileProjectTable className="half">
                  <tbody>
                    <tr>
                      <th>Website</th>
                      <th>Technologies used</th>
                    </tr>
                    <tr>
                      <td>
                        <a href="https://munkas.com/">https://munkas.com/</a>
                      </td>
                      <td>
                        <ProfileList>
                          <li>HTML, CSS, jQuery</li>
                          <li>Worpress: make theme from Front-end</li>
                        </ProfileList>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <Typography fontStyle="italic">
                          <strong>* Note:</strong> Munkas Agency is a social
                          media company so each campaign has one website for
                          each project. After the campaign ends, the site is no
                          longer kept. So I cannot save all the domains for that
                          project.
                        </Typography>
                      </td>
                    </tr>
                  </tbody>
                </ProfileProjectTable>
              </ProfileBoxInnerItem>
            </ProfileList>
          </ProfileBoxInnerItem>
        </ProfileBoxItem>
      </ProfileBox>
    </ProfileContainer>
  )
}
