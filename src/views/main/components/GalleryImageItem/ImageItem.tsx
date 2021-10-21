import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './GalleryImageItem.module.scss';
interface ImageItemProxy {
  idx: number;
  server: string;
  id: string;
  secret: string;
  title: string;
  date: string;
  ownerName: string;
}

export const ImageItem = (proxy: ImageItemProxy) => {
  const { idx, server, id, secret, title, date, ownerName } = proxy;
  const imageSrc = `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`;

  const [imgSrc, setImgSrc] = useState('');
  const rootRef = useRef(null);
  // const [isVisible, setIsVisible] = useState(false);

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  };

  // useEffect(() => {
  //     const imageObserver = new IntersectionObserver((entries) => {
  //         entries.forEach(entry => {
  //             if(entry.isIntersecting) {
  //                 return (
  //                     <h1>dupa</h1>
  //                 )
  //             } else {
  //                 <h1>dupa 2</h1>
  //             }
  //         })

  //         if (rootRef.current) imageObserver.observe(rootRef.current);
  //             return () => {
  //         if (rootRef.current) imageObserver.unobserve(rootRef.current);
  //       };
  //     })

  //     // console.log(imageObserver)
  // })

  useEffect(() => {
    const imageObserver = new IntersectionObserver((elements) => {
      elements.forEach((element) => {
        if (element.isIntersecting) {
          setImgSrc(imageSrc);
        }
      });
    }, options);

    const rootRefCurrent = rootRef.current;

    if (rootRefCurrent) imageObserver.observe(rootRefCurrent);

    return () => {
      if (rootRefCurrent) imageObserver.unobserve(rootRefCurrent);
    };
  });

  // useEffect(() => {
  //     const observer = new IntersectionObserver((entries: any) => {
  //         const [entry] = entries;
  //         console.log('log')
  //         setIsVisible(entry.isIntersecting);
  //       }, options);

  //     //   const rootRefCurrent = rootRef.current

  //       if (rootRef.current) observer.observe(rootRef.current);
  //       return () => {
  //         if (rootRef.current) observer.unobserve(rootRef.current);
  //       };

  // })

  const onLoad = useCallback(() => {
    return <p>Loaded</p>;
  }, []);

  return (
    <Link ref={rootRef} className={styles.WrapFocus} to={`/image/${id}/${secret}`} key={idx}>
      <div className={styles.GalleryItem}>
        {
          <>
            <div className={styles.Image}>
              <img onLoad={onLoad} alt={title} key={idx} src={imgSrc} />
            </div>
            <div className={styles.GalleryText}>
              <span className={styles.ImageTitle}>{title}</span>
              <span className={styles.ImageDate}>{date}</span>
              <span className={styles.ImageOwnerName}>{ownerName}</span>
            </div>
          </>
        }
      </div>
    </Link>
  );
};
