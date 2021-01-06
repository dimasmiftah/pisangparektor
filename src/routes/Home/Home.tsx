import styles from './Home.module.scss';

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>사진</h1>
      <form onSubmit={() => {}} className={styles.form}>
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
          placeholder='Find by NIM'
          maxLength={8}
        />
      </form>
    </div>
  );
};

export default Home;
