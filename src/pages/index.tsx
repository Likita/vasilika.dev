import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { withLayout } from '@/layout/Layout'
import Link from 'next/link'
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
          Hi, I am a <span className={styles.important}>Software Engineer</span> with a primary focus on the{' '}
          <span className={styles.important}>Web</span> 👩🏻‍💻. Shortly speaking, I can create the most fabulous websites 😎
        </p>
        <h3>University</h3>
        <p>
          At University I studied C and C++ languages, and in 2012, I got a{' '}
          <span className={styles.important}>Master&apos;s Degree</span> with honors in Engineering and Technology in
          the field of Information Technology and Computer Science.
        </p>
        <h3>Career</h3>
        <p>
          I started my career as a <span className={styles.important}>Full Stack Developer (PHP, JavaScript, CMS)</span>{' '}
          in 2010. At Artec3D company, I became a <span className={styles.important}>Frontend Team Lead</span> and
          learned how to work with amazing tasks in the 3D world (WebGL,{' '}
          <span className={styles.important}>Three.js</span>).
          {/* <!-- You can check out more about <a href="./projects.html">my role in various projects at this link</a>. --> */}
        </p>
        <h3>Speaker</h3>
        <p>
          I always like to share my knowledge with others; therefore, since 2015, I have been a{' '}
          <Link href='/speaker'>Speaker</Link> at different IT meetups and conferences.
        </p>
        <h3>Teacher</h3>
        <p>
          I have been working as a freelance Teacher at different offline/online IT schools. In 2019 I founded{' '}
          <a
            href='https://www.facebook.com/skilluplu'
            target='_blank'
            rel='noopener nofollow'
            className={styles.underlineA}
          >
            SkillUp Web School
          </a>{' '}
          in Luxembourg.
          <br />
          At{' '}
          <a href='https://skillup.lu' target='_blank' className={styles.underlineA}>
            SkillUp School
          </a>
          , I help people without any IT background to be involved in our industry. I&apos;d love to inspire you to join
          the IT industry! I have a Discord channel where I share Tech news and mentor people 👩🏻‍🏫.
        </p>
        <h3>Entrepreneur</h3>
        <p>
          In 2019 I also founded{' '}
          <a className={styles.underlineA} href='https://cute-geek.com' target='_blank'>
            Cute Geek IT Agency
          </a>
          . At Cute Geek, we do different web projects for clients (
          <span className={styles.important}>
            React, Node.js, PHP, Next.js, SQL, 3D/Three.js, e-commerce, WordPress
          </span>
          ).
        </p>
        <h3>Achievements</h3>
        <p>
          In 2022 I was proud to become a{' '}
          <a
            className={styles.underlineA}
            href='https://g.dev/vasilika'
            target='_blank'
            rel='noopener nofollow'
          >
            Google Developer Expert
          </a> in Web
          .
          <br />I love to be self-organized and I believe I am good in management. I passed{' '}
          Professional Advanced Scrum Product Owner <span className={styles.important}>PSPO II</span> and Professional Agile Leadership <span className={styles.important}>PAL&nbsp;I</span>{' '}
          exams (<span className={styles.important}>Agile, Scrum</span>).
        </p>
        <h3>Right to work</h3>
        <p>
          I can work as an employee or as a contractor. I have been living in Luxembourg since 2017 and I have
          got <span className={styles.important}>Luxembourgish citizenship</span>. I prefer to work{' '}
          <span className={styles.important}>fully remote</span>.{' '}
          <a className={styles.underlineA} href='/Vasilika Klimova – Developer Relations Manager.pdf' download>
            My CV
          </a>
        </p>
      </>
    </>
  )
}

export default withLayout(Home)
