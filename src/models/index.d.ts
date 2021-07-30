import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ThreadMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Thread {
  readonly id: string;
  readonly title?: string;
  readonly description?: string;
  readonly userID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Thread, ThreadMetaData>);
  static copyOf(source: Thread, mutator: (draft: MutableModel<Thread, ThreadMetaData>) => MutableModel<Thread, ThreadMetaData> | void): Thread;
}

export declare class User {
  readonly id: string;
  readonly username?: string;
  readonly password?: string;
  readonly email?: string;
  readonly profile?: string;
  readonly Threads?: (Thread | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}