export interface IField {
  id: string;
  title: string;
  type?: EFieldType;
  locked?: boolean;
  secret?: boolean;
  options?: string[];
}

export enum EFieldType {
  TEXT = "test",
  PASSWORD = "password",
  SELECT = "select",
}

export const connectionTypes = ["Snowflake", "Trino", "MySQL"];

export const connectionFields: IField[] = [
  { id: "id", title: "ID" },
  { id: "name", title: "Database Name" },
  { id: "url", title: "URL" },
  { id: "username", title: "Username" },
  {
    id: "password",
    title: "Password",
    type: EFieldType.PASSWORD,
    secret: true,
  },
  {
    id: "type",
    title: "Database Type",
    options: connectionTypes,
  },
];

const ex = ["id"];

export const addingConnectionFields: IField[] = connectionFields.filter(
  ({ id }) => !ex.includes(id)
);

export const SERVER_URL = "http://localhost:4000/databases";
