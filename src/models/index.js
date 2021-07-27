// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Thread } = initSchema(schema);

export {
  User,
  Thread
};