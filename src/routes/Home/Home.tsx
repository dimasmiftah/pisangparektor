import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  const [search, setSearch] = useState('');
  const [notFound, setNotFound] = useState(false);
  const history = useHistory();
  const searchInput = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const pattern = /^[0-9\b]+$/;
    if (e.target.value === '' || pattern.test(e.target.value)) {
      setSearch(e.target.value);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setNotFound(false);
    let image = new Image();
    image.onload = () => {
      if (image.width > 0) {
        history.push('/result', search);
      }
    };
    image.onerror = () => {
      setNotFound(true);
    };
    image.src = `https://akademik.unikom.ac.id/foto/${search}.jpg`;
  };

  useEffect(() => {
    searchInput.current!.focus();
  }, []);

  return (
    <div className={styles.home}>
      <h1 className={styles.title}>사진</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <svg
          className={styles.searchIcon}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          ></path>
        </svg>
        <input
          ref={searchInput}
          className={styles.search}
          type='search'
          name='search'
          id='search'
          pattern='[0-9]*'
          placeholder='Find by NIM'
          maxLength={8}
          onChange={handleChange}
          value={search}
        />
      </form>
      {notFound && <h2 className={styles.notfound}>Sorry, not found 😞</h2>}
    </div>
  );
};

export default Home;
