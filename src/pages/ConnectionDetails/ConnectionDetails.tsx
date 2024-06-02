import "./ConnectionDetails.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface IConnection {
  id: string;
  name: string;
  url: string;
  username: string;
  password: string;
  type: string;
}

interface IField {
  id: string;
  title: string;
}

const connectionFields: IField[] = [
  { id: "id", title: "ID" },
  { id: "name", title: "Database Name" },
  { id: "url", title: "URL" },
  { id: "username", title: "Username" },
  { id: "password", title: "Password" },
  { id: "type", title: "Database Type" },
];

const fakeServerUrl = "http://localhost:4000/databases";

const ConnectionDetails = () => {
  const [connection, setConnection] = useState<Record<string, string>>();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${fakeServerUrl}/${id}`)
      .then((response) => {
        setConnection(response.data);
      })
      .catch();
  }, []);

  return (
    <div className="connection-details">
      <div className="title">Connection Details {id}</div>

      <div className="info">
        <table>
          {connectionFields.map((field) => (
            <tr key={field.id}>
              <td>{field.title}</td>
              <td>{connection?.[field.id] || ""}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ConnectionDetails;
