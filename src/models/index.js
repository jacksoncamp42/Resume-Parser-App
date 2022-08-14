// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Resume } = initSchema(schema);

export {
  Resume
};