export interface IField {
  id: string;
  title: string;
  type?: EFieldType;
  locked?: boolean;
  options?: string[];
  required?: boolean;
}

export enum EFieldType {
  TEXT = "test",
  PASSWORD = "password",
  SELECT = "select",
}

export const connectionTypes = ["Snowflake", "Trino", "MySQL"];

export const connectionFields: IField[] = [
  { id: "id", title: "ID", required: true },
  { id: "name", title: "Database Name", required: true },
  { id: "url", title: "URL", required: true },
  { id: "username", title: "Username", required: true },
  {
    id: "password",
    title: "Password",
    type: EFieldType.PASSWORD,
    required: true,
  },
  {
    id: "type",
    title: "Database Type",
    options: connectionTypes,
    required: true,
  },
];

const ex = ["id"];

export const addingConnectionFields: IField[] = connectionFields.filter(
  ({ id }) => !ex.includes(id)
);

export const SERVER_URL = "http://localhost:4000/databases";
