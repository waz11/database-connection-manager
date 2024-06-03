import "./ConnectionDetails.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ConnectionForm from "../../components/ConnectionForm/ConnectionForm";
import { SERVER_URL } from "../../utils";
import NavigateButton from "../../components/NavigateButton/NavigateButton";
import ROUTES from "../../routes";

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

const ConnectionDetails = () => {
  const [connection, setConnection] = useState<Record<string, string>>();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/${id}`)
      .then((response) => {
        setConnection(response.data);
      })
      .catch();
  }, []);

  return (
    <div className="connection-details">
      <NavigateButton label={"back to connections"} route={ROUTES.HOME} />

      <div className="title">Connection Details {id}</div>

      <div className="info">
        {/* <ConnectionForm connection={connection} /> */}
      </div>
    </div>
  );
};

export default ConnectionDetails;
