// pick VITE_API_URL in dev, VITE_PUBLIC_API_URL in prod
const baseURL = import.meta.env.DEV
  ? import.meta.env.VITE_API_URL
  : import.meta.env.VITE_PUBLIC_API_URL;



export default baseURL;
