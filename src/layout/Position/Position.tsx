import styles from './Position.module.css';

export const Position = (): JSX.Element => {
  return <>
      <br />
      <h2 className={styles.roleList}>
          <span>Software Engineer</span>
          <span>∾</span>
          <span>Team Lead</span>
          <span>∾</span>
          <span>Developer Relations</span>
          <span>∾</span>
          <span>Engineering Manager</span>
          <span>∾</span>
          <span>Speaker</span>
          <span>∾</span>
          <span><a href="/Vasilika Klimova – Developer Relations Manager.pdf" download className={styles.underlineA}>My CV</a></span>
      </h2>
      <br/>
      <br/>
  </>;
};
