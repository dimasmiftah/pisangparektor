import { useState } from 'react';
import styles from './Home.module.scss';
import Loader from 'react-loader-spinner';
import { useHistory } from 'react-router-dom';

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const history = useHistory();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const pattern = /^[0-9\b]+$/;
    if (e.target.value === '' || pattern.test(e.target.value)) {
      setSearch(e.target.value);
    }
  };
  const imageExists = (image_url: string) => {
    var http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();

    return http.status != 404;
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setLoading(true);
    // if (imageExists(`https://akademik.unikom.ac.id/foto/${search}.jpg`)) {
    //   history.push('/result', search);
    //   setLoading(false);
    // }
    fetch(`https://akademik.unikom.ac.id/foto/${search}.jpg`, {
      mode: 'no-cors',
    }).then((res) => {
      console.log(res);
      history.push('/result', search);
      setLoading(false);
    });
  };

  return (
    <div className={styles.home}>
      {/* {loading && (
        <Loader type='ThreeDots' color='#00BFFF' height={80} width={80} />
      )} */}
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
    </div>
  );
};

export default Home;
