import { axiosApiInstance } from './axiosAPI';

export const getAlbum = () => {
  return axiosApiInstance.get('album');
};

export const addImage = (id: string) => {
  return axiosApiInstance.post(`album/:9a55d1a3-5b39-4e86-8f75-86d5a525faec/photos`, { id: id });
};
