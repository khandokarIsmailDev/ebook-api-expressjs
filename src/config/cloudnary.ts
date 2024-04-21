import {v2 as cloudinary} from 'cloudinary';
import { config } from './config';
          
cloudinary.config({ 
  cloud_name: config.cloudinaryClould, 
  api_key: config.cloudinaryApi, 
  api_secret: config.cloudinarySecret
});

export default cloudinary