import { CV_URL } from '@/helpers/constants';
import styles from './Position.module.css';

export const Position = (): JSX.Element => {
  return <>
      <br />
      <h2 className={styles.roleList}>
          <span>Technical Manager</span>
          <span>∾</span>
          <span>Engineering Manager</span>
          <span>∾</span>
          <span>Software Engineer</span>
          <span>∾</span>
          <span>Developer Relations</span>
          <span>∾</span>
          <span>Speaker</span>
          <span>∾</span>
          <span><a href={CV_URL} download className={styles.underlineA}>My CV</a></span>
      </h2>
      <br />
      <br />
  </>;
};
