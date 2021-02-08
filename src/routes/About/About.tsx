import { Link } from 'react-router-dom';
import styles from './About.module.scss';
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import imageOne from './../../images/1.png';
import imageTwo from './../../images/2.png';
import imageThree from './../../images/3.png';
import imageFour from './../../images/4.png';
import imageFive from './../../images/5.png';
import imageSix from './../../images/6.png';
import imageSeven from './../../images/7.png';
import imageEight from './../../images/8.png';
import imageNine from './../../images/9.png';
import imageTen from './../../images/10.png';
interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <div className={styles.about}>
      <Link className={styles.title} to='/'>
        <h1>사진</h1>
      </Link>
      <div className={styles.section}>
        <p className={styles.desc}>사진 (sajin) - Photo (noun)</p>
        <p className={styles.desc}>
          Sajin is a website for generating UNIKOM student cards.
        </p>
        <p className={styles.desc}>
          Sajin uses UNIKOM Academic System as a data source.
        </p>
      </div>
      <div className={styles.section}>
        <h2 className={styles.subtitle}>How to Use</h2>
        <p className={styles.desc}>
          You can generate your student card by simply enter your NIM to the
          search form and tap enter.
        </p>
      </div>
      <div className={styles.section}>
        <h2 className={styles.subtitle}>Testimonials</h2>
        <p className={styles.desc}>
          I made a challenge on Instagram where I asked my friends to try the
          app and then upload the result to their stories.
        </p>
        <p className={styles.desc}>Here are some of their responses.</p>
        <Carousel
          plugins={[
            'infinite',
            {
              resolve: autoplayPlugin,
              options: {
                interval: 2000,
              },
            },
          ]}
          animationSpeed={1000}
        >
          <img src={imageOne} alt='ImageOne' />
          <img src={imageTwo} alt='imageTwo' />
          <img src={imageThree} alt='imageThree' />
          <img src={imageFour} alt='imageFour' />
          <img src={imageFive} alt='imageFive' />
          <img src={imageSix} alt='imageSix' />
          <img src={imageSeven} alt='imageSeven' />
          <img src={imageEight} alt='imageEight' />
          <img src={imageNine} alt='imageNine' />
          <img src={imageTen} alt='imageTen' />
        </Carousel>
        <p className={styles.desc}>Swipe to see more {`>`}</p>
      </div>
    </div>
  );
};

export default About;
