import React from 'react';
import styles from './Result.module.scss';

interface ResultProps {}

const Result: React.FC<ResultProps> = ({}) => {
  return (
    <div className='result'>
      <div className='picture'>
        <img
          src='https://akademik.unikom.ac.id/foto/10118087.jpg'
          alt='10118087'
        />
      </div>
      <div className='caption'>
        <h1 className='nim'></h1>
        <div>
          <div className='label'>major</div>
          <div className='info'>teknik informatika</div>
        </div>
        <div>
          <div className='label'>year of entry</div>
          <div className='info'>2020</div>
        </div>
      </div>
    </div>
  );
};

export default Result;
