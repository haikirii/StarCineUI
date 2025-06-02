import React, { useRef } from 'react';
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Carousel = ({ data }) => {
  const ref = useRef(null);

  const scroll = (direction) => {
    if (ref.current) {
      const scrollAmount = 200;
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.carouselWrapper}>
      <FontAwesomeIcon icon={faChevronLeft} className={styles.arrow} onClick={() => scroll('left')} />
      <div className={styles.container} ref={ref}>
        {data.map((item, index) => (
          <div className={styles.item} key={index}>
            <a href={item.link || '#'}  className={styles.link}>
              <img src={item.src} alt={item.alt} />
              <div className={styles.caption}>{item.title}</div>
            </a>
          </div>
        ))}
      </div>
      <FontAwesomeIcon icon={faChevronRight} className={styles.arrow} onClick={() => scroll('right')} />
    </div>
  );
};

export default Carousel;
