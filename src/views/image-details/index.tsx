import dayjs from 'dayjs';
import React from 'react';
import { useParams } from 'react-router';

import { Layout } from '../../components/layout';
import { useFlickrInfoPhoto } from '../../queries/useFlickr';
import { addImage, getAlbum } from '../../services/deleteAlbum';
import styles from './ImageDetails.module.scss';

export const ImageDetailsView: React.FC = () => {
  const { id, secret }: { id: string; secret: string } = useParams();

  const { data } = useFlickrInfoPhoto(id, secret);

  return (
    <Layout>
      {data ? (
        <>
          <section className={styles.imageInfo}>
            <button onClick={() => getAlbum()}>Get Album</button>
            <button className={styles.AddButton} onClick={() => addImage(data.id)}>
              Add to Favourite
            </button>
            <div className={styles.imageImage}>
              <div className={styles.imageText}>
                <img
                  src={`http://farm${data.owner.iconfarm}.staticflickr.com/${data.owner.iconserver}/buddyicons/${data.owner.nsid}.jpg`}
                  alt=''
                />
                <span>{data.owner.username}</span>
                <span>Title: {data.title._content}</span>
                <div className='data__info'>
                  <span>{data.views}</span>
                  <span>Views</span>
                </div>
                <div className='data__info'>
                  <span>{data.isfavorite}</span>
                  <span>Faves</span>
                </div>
                <div className='data__info'>
                  <span>{data.comments._content}</span>
                  <span>Comments</span>
                </div>
                <div className='data__date'>
                  <span>Date upload</span>
                  <span>{dayjs(new Date(parseInt(data.dates.posted) * 1000)).format('DD/MM/YYYY')}</span>
                </div>
              </div>
              <img
                alt={data.title}
                key={data.id}
                src={`https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}.jpg`}
              />
            </div>
          </section>
        </>
      ) : (
        <div className={styles.LoaderContainer}>
          <div className='lds-dual-ring'></div>
        </div>
      )}
    </Layout>
  );
};
