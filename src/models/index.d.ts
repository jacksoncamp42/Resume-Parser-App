import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ResumeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Resume {
  readonly id: string;
  readonly name: string;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly education?: string | null;
  readonly experience?: string | null;
  readonly skills?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Resume, ResumeMetaData>);
  static copyOf(source: Resume, mutator: (draft: MutableModel<Resume, ResumeMetaData>) => MutableModel<Resume, ResumeMetaData> | void): Resume;
}