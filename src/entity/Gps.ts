import {coordinates} from '../controller/gps';
import { EntitySchema } from 'typeorm';
import postSchema from './Post';
interface Gps {
    latitude:number;
    longitude: number;
  }
  const gpsSchema = new EntitySchema<Gps>({
    name: 'gps',
    tableName: 'gps',
    columns: {
      latitude: {
        type: 'float',
      },
      longitude: {
        type: 'float',
      },
    }
  });
  
  export default gpsSchema;