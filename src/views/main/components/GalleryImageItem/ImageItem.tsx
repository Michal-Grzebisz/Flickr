import React, { useEffect, useRef, useState, useCallback, lazy } from 'react'
import styles from './GalleryImageItem.module.scss'
import { Link } from 'react-router-dom'
import { entries } from 'lodash'

interface ImageItemProxy {
    idx: number,
    server: string,
    id: string,
    secret: string,
    title: string,
    date: string,
    ownerName: string

}

export const ImageItem = (proxy: ImageItemProxy) => {
    const {idx, server, id, secret, title, date, ownerName} = proxy
    const imageSrc = `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`


    const [imgSrc, setImgSrc] = useState("")
    const rootRef = useRef(null) 
    const [isVisible, setIsVisible] = useState(false)

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0
    }

    const imageObserver = new IntersectionObserver((entries, imageObserver)=> {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setImgSrc(imageSrc)

            }
            
        },
        {
            rootMargin: '0px',
            threshold: 0,
          }
          )
    })

    useEffect(() => {
        const observer = new IntersectionObserver((entries: any) => {
            const [entry] = entries;
            console.log('log')
            setIsVisible(entry.isIntersecting); 
          }, options);

        //   const rootRefCurrent = rootRef.current
    
          if (rootRef.current) observer.observe(rootRef.current);
          return () => {
            if (rootRef.current) observer.unobserve(rootRef.current);
          };

    })
   
    const onLoad = useCallback(() => {
       return(
           <p>Loaded</p>
       )
      }, [])
    

    return(
        <Link className={styles.WrapFocus} to={`/image/${id}/${secret}`} key={idx}>
            <div ref={rootRef} className={styles.GalleryItem}>
                {
                    isVisible?  
                        <>
                            
                                <div className={styles.Image}>
                                    <img ref={rootRef}
                                        onLoad={onLoad} 
                                        alt={title}
                                        key={idx} src={imageSrc}/>
                                </div>
                                <div className={styles.GalleryText} >
                                    <span className={styles.ImageTitle} >{title}</span>
                                    <span className={styles.ImageDate} >{date}</span>
                                    <span className={styles.ImageOwnerName}>{ownerName}</span>
                                </div>
                            
                        </> : <div className={styles.Unvisible}></div>
                }
            </div>
        </Link>
    )
}