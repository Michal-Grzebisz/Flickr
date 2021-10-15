import { useInfiniteQuery, useMutation, useQuery } from 'react-query';

import { FlickrOptions, FlickrPhotosResponse, FlickrService } from '../services/Flickr';

export const useFlickrPhotos = (options: any) =>
  useInfiniteQuery<FlickrOptions, unknown, FlickrPhotosResponse>(
    ['photos', options],
    (params) => {
      return FlickrService.getPhotos({
        page: 1, // Default page to fetch
        ...options,
        ...params.pageParam,
      });
    },
    {
      getNextPageParam: (lastPage) => {
        return {
          page: (lastPage.page || 0) + 1,
        };
      },
      refetchOnWindowFocus: false,
    },
  );

export const useFlickrInfoPhoto = (id: string, secret: string) =>
  useQuery(['photo', id, secret], () => {
    return FlickrService.getPhoto(id, secret);
  });

// useMutation
