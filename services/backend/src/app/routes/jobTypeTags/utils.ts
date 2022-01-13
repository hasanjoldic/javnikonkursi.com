import {
  JobTypeTag,
  JobTypeTagField,
  TimestampField,
} from "@javnikonkursi/shared";

export const jobTypeTagReturnFields = [
  TimestampField.id,
  JobTypeTagField.title,
  JobTypeTagField.notes,
  TimestampField._created_at,
  TimestampField._updated_at,
];

export type jobTypeTagReturnType = Pick<
  JobTypeTag,
  | TimestampField.id
  | JobTypeTagField.title
  | JobTypeTagField.notes
  | TimestampField._created_at
  | TimestampField._updated_at
>;