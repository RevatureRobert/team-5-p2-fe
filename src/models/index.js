// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Thread, User } = initSchema(schema);

export {
  Thread,
  User
};