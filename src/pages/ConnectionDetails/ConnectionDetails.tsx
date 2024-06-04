import "./ConnectionDetails.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ConnectionForm from "../../components/ConnectionForm/ConnectionForm";
import { SERVER_URL, connectionFields } from "../../utils";
import NavigateButton from "../../components/NavigateButton/NavigateButton";
import ROUTES from "../../routes";

const ConnectionDetails = () => {
  const [connection, setConnection] = useState<Record<string, string>>({});
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
      <div className="connection-wrapper">
        <h2 className="title">Connection Details - id: {connection.id}</h2>
        <div className="info">
          <ConnectionForm fields={connectionFields} connection={connection} />
        </div>
      </div>
    </div>
  );
};

export default ConnectionDetails;
