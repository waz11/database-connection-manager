export interface IField {
  id: string;
  title: string;
  type: EFieldType;
  locked?: boolean;
  secret?: boolean;
}

export enum EFieldType {
  TEXT = "test",
  PASSWORD = "password",
  SINGLE_SELECT = "single_select",
}

export const connectionTypes = ["Snowflake", "Trino", "MySQL"];

export const connectionFields: IField[] = [
  { id: "id", title: "ID", type: EFieldType.TEXT },
  { id: "name", title: "Database Name", type: EFieldType.TEXT },
  { id: "url", title: "URL", type: EFieldType.TEXT },
  { id: "username", title: "Username", type: EFieldType.TEXT },
  {
    id: "password",
    title: "Password",
    type: EFieldType.PASSWORD,
    secret: true,
  },
  { id: "type", title: "Database Type", type: EFieldType.SINGLE_SELECT },
];

const ex = ["id"];

export const addingConnectionFields: IField[] = connectionFields.filter(
  ({ id }) => !ex.includes(id)
);

export const SERVER_URL = "http://localhost:4000/databases";
