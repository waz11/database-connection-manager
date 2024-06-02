interface IField {
  id: string;
  title: string;
  type: EFieldType;
  locked?: boolean;
}

export enum EFieldType {
  STRING = "string",
  PASSWORD = "password",
  SINGLE_SELECT = "single_select",
}

export const connectionFields: IField[] = [
  { id: "id", title: "ID", type: EFieldType.STRING, locked: true },
  { id: "name", title: "Database Name", type: EFieldType.STRING },
  { id: "url", title: "URL", type: EFieldType.STRING },
  { id: "username", title: "Username", type: EFieldType.STRING },
  { id: "password", title: "Password", type: EFieldType.PASSWORD },
  { id: "type", title: "Database Type", type: EFieldType.STRING },
];
