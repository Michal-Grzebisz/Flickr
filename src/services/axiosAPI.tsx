import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
export const axiosApiInstance = axios.create({
  baseURL: 'http://localhost:8080/',
});

// const { getAccessTokenSilently } = useAuth0();

// function getLocalAccessToken() {
//   const accessToken = window.localStorage.getItem('accessToken');
//   return accessToken;
// }

// window.localStorage.setItem('access', 'eyJhbGciOiJSUzI1NiIsInR5c…lREhyiQhk2FnsQ8fsGH7fn5');
const token =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InZkX1dFTkhQVHZGS0NidjFoakJ6bSJ9.eyJpc3MiOiJodHRwczovL2Rldi1wemVwaTdxOC51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjE2ODcwN2VjYWMzN2YwMDY4NDliNTk2IiwiYXVkIjpbImh0dHBzOi8vZmxpY2tyLmJhY2tlbmQiLCJodHRwczovL2Rldi1wemVwaTdxOC51cy5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjM0MzA3Njg4LCJleHAiOjE2MzQzOTQwODgsImF6cCI6IkljdmltMGNxSDdXZ1RvVmM2VjZ5SWlGREp4M1BzN2VzIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCJ9.hB_3jkoPa8WLjqmLChA14kFNxajDJ5JEOAS6d_wojDxB5jBJ7DBhayT3ezRrrYpt6tkJBcggsewXNFfOJW37Wk-Rs-yr1yexifOodn4doPywqdHYmyU4EOb-G05RhUkos3rMsDC4T7k8lp19ePWxfRtqDZcYk9vY5MaSUPqG7f7PT7htmtt_wJERV8AvELmPUVQa8LbJQL3DzZfVENpEbQEmC6tgLSZiSWHB-vo5RYBsKem8CSosp3RF9VvMQNU7BznxsRO2apnyCX2SM9ELplvtDiXmXkhaFJMiAFmiO8x737QJp_roiYwwNrlN6-jWVGoj7MDGoe76mEZPPBqstA';

axiosApiInstance.interceptors.request.use(
  (config) => {
    // const token = await getAccessTokenSilently();
    // const token = getLocalAccessToken();
    config.headers = {
      // eslint-disable-next-line prettier/prettier
      'Authorization': `Bearer ${token}`,
    };
    // Authorization: `Bearer ${token}`,
    // Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5c…lREhyiQhk2FnsQ8fsGH7fn5`,
    // Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);
