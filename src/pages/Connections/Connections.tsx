import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import ConnectionForm from "../../components/ConnectionForm/ConnectionForm";
import BasicTable, { ITableField } from "../../components/Table/BasicTable";
import { Link } from "react-router-dom";

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
  const navigate = useNavigate();

  useEffect(() => {
    const fakeServerUrl = "http://localhost:4000/databases";

    axios.get(fakeServerUrl).then((response) => {
      setData(response.data);
    });
  }, []);

  const onClick = (id: string) => {
    navigate(`/connection/${id}`);
  };

  return (
    <div>
      {/* <Table tableFields={tableFields} data={data} /> */}
      {/* <ConnectionForm /> */}

      <BasicTable tableFields={tableFields} data={data} onRowClick={onClick} />
      {/* <BasicTable /> */}
    </div>
  );
};

export default Connections;
