import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { withLayout } from '@/layout/Layout'
import Link from 'next/link'
import { CV_URL } from '@/helpers/constants'
function Home(): JSX.Element {
  return (
    <>
      <Head key='head-home'>
        <title>Vasilika Klimova</title>
        <meta
          name='keywords'
          content='Vasilika Klimova, Vasilika, Klimova, frontend, frontend developer, full stack, Василика Климова, Василика, Климова, JavaScript, js, WebGL, speaker, UI developer, разработчик интерфейсов, web developer, founder of SkillUp School Luxembourg, engineering manager'
        />
        <meta
          name='description'
          content='Website of a Software Engineer, speaker, founder of SkillUp School Luxembourg, Vasilika Klimova'
        />
        <link rel='canonical' href='https://vasilika.dev/' />
        <meta name='robots' content='index, follow' />
        <meta property='og:type' content='article' />
        <meta property='og:title' content='Vasilika Klimova' />
        <meta
          property='og:description'
          content='Website of a Software Engineer, speaker, founder of SkillUp School Luxembourg, Vasilika Klimova'
        />
        <meta property='og:image' content='https://vasilika.dev/share.png' />
        <meta property='og:url' content='https://vasilika.dev/' />
        <meta property='og:site_name' content='Vasilika Klimova' />
      </Head>
      <>
        <p>
          Hi, I am an <span className={styles.important}>Engineering Manager</span> with 14 years of experience in
          software development, team leadership, and product delivery. Expertise in web technologies and developer
          relations. Led cross-functional teams, delivered 20+ web projects from scratch, optimized development
          processes, and minimized technical debt. <span className={styles.important}>Public speaker</span> (50+ talks), event organizer (60+ events), Microsoft
          MVP, Google Developer Expert, Professional Scrum <span className={styles.important}>Product Owner II</span> certified. Passionate about mentoring and
          team collaboration. PMP certification in progress.
        </p>

        <h3>Career</h3>
        <p>
          My journey started as a <span className={styles.important}>Full Stack Developer</span> in 2010. Over time, I transitioned into leadership roles, including <span className={styles.important}>Engineering Manager</span> at Artec3D, where I led a frontend team working on cutting-edge 3D applications (WebGL, <span className={styles.important}>Three.js</span>).
        </p>
        <p>
          Later, I founded my own web development agency, where I took on the role of a <span className={styles.important}>Technical Project Manager</span>, overseeing the full lifecycle of digital projects, leading cross-functional teams, and aligning business objectives with technical execution.
          Throughout my career, I have built and scaled development teams, conducted 100+ engineering interviews, and mentored professionals to foster high-performing environments. I am passionate about strategic planning, Agile methodologies, and technical excellence.
        </p>

        <h3>Public Speaking & Community</h3>
        <p>
          I love sharing knowledge and inspiring others. Since 2015, I have been a <Link href='/speaker'>Speaker</Link> at international IT conferences and meetups, delivering over 50 talks on topics ranging from Web Development and Security to Agile Leadership and Blockchain.
        </p>

        <h3>Mentorship & Teaching</h3>
        <p>
          I have worked as a freelance instructor, teaching web technologies to aspiring developers. In 2019, I founded{' '}
          <a href='https://skillup.lu' target='_blank' className={styles.underlineA}>
            SkillUp School
          </a>, helping professionals transition into IT and advance their careers.
        </p>

        <h3>Entrepreneurship</h3>
        <p>
          As the founder of{' '}
          <a className={styles.underlineA} href='https://cute-geek.com' target='_blank'>
            Cute Geek</a> Web Development Agency, I have successfully led <span className={styles.important}>10+</span> digital transformation projects for clients, working with technologies like{' '}
          <span className={styles.important}>React, Node.js, Next.js, Three.js,</span> SQL, PHP, Tilda, WordPress and others.
        </p>

        <h3>Education</h3>
        <p>
          I hold a <span className={styles.important}>Master’s Degree</span> with honors in Engineering and Technology in the field of Information Technology and Computer Science. My academic background gave me a strong foundation in software engineering and system architecture.
          I also hold advanced certifications in Agile and Product Management, including{' '}
          <span className={styles.important}>PSPO II</span> (Professional Scrum Product Owner) and{' '}
          <span className={styles.important}>PAL I</span> (Professional Agile Leadership).
          And I finished plenty of courses, PMP course is in progress.
        </p>

        <h3>Certifications & Achievements</h3>
        <p>
          I am a <a className={styles.underlineA} href='https://g.dev/vasilika' target='_blank' rel='noopener nofollow'>
            Google Developer Expert</a> and a <a className={styles.underlineA} href='https://mvp.microsoft.com/en-US/MVP/profile/3cb85a8c-b6c0-4622-9a84-f61c0a0c5ba1' target='_blank' rel='noopener nofollow'>Microsoft MVP</a>.
        </p>


        <h3>Work Authorization</h3>
        <p>
          I am a <span className={styles.important}>Luxembourgish citizen</span> and open to opportunities as an employee or contractor. I prefer to work{' '}
          <span className={styles.important}>fully remote</span>.{' '}
          <a className={styles.underlineA} href={CV_URL} download>
            My CV
          </a>
        </p>
      </>
    </>
  )
}

export default withLayout(Home)
