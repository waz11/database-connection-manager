import { useState, useEffect } from "react";
import axios from "axios";
import Table, { ITableField } from "../../components/Table/Table";

const tableFields: ITableField[] = [
  { id: "name", title: "Database Name" },
  { id: "username", title: "Username" },
  { id: "type", title: "Database Type" },
];

export interface IConnection {
  id: string;
  name: string;
  url: string;
  username: string;
  password: string;
  type: string;
}

const Connections = () => {
  const [data, setData] = useState<IConnection[]>([]);

  useEffect(() => {
    const fakeServerUrl = "http://localhost:4000/databases";

    axios.get(fakeServerUrl).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div>
      <Table tableFields={tableFields} data={data} />
    </div>
  );
};

export default Connections;
