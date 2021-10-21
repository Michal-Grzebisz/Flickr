import { axiosApiInstance } from './axiosAPI';

const postAlbum = () => {
  return axiosApiInstance.post('album', { name: 'dupa', description: 'dupa2' });
};
