import React from 'react';
import styles from './Result.module.scss';

interface ResultProps {}

const Result: React.FC<ResultProps> = ({}) => {
  return (
    <div className={styles.result}>
      <div className={styles.picture}>
        <img
          src='https://akademik.unikom.ac.id/foto/10118244.jpg'
          alt='10118244'
        />
      </div>
      <div className={styles.caption}>
        <h1 className={styles.nim}>#10118244</h1>
        <div>
          <div className={styles.label}>major</div>
          <div className={styles.info}>teknik informatika</div>
        </div>
        <div>
          <div className={styles.label}>year of entry</div>
          <div className={styles.info}>2020</div>
        </div>
      </div>
      <button className={styles.button}>
        <svg
          className={styles.backIcon}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M15 19l-7-7 7-7'
          ></path>
        </svg>
        back
      </button>
    </div>
  );
};

export default Result;
