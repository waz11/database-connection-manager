import "./Connections.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BasicTable, { ITableField } from "../../components/Table/BasicTable";
import ConnectionFormDialog from "../../components/ConnectionForm/ConnectionFormDIalog";
import { SERVER_URL } from "../../utils";
import ConnectionForm from "../../components/ConnectionForm/ConnectionForm";
import { useDispatch, useSelector } from "react-redux";
import { connectionsSelector } from "../../store/connections/selectors";
import { getConnections } from "../../store/connections/actions";

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
  const [showAddConnectionDialog, setShowAddConnectionDialog] = useState(false);
  const dispatch = useDispatch();
  const { connections } = useSelector(connectionsSelector);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getConnections() as any);
  }, [dispatch]);

  const onRowClick = (id: string) => {
    navigate(`/connection/${id}`);
  };

  const onShowCloseDialog = () =>
    setShowAddConnectionDialog(!showAddConnectionDialog);

  return (
    <div className="connections-page">
      <button onClick={onShowCloseDialog}>+</button>

      {showAddConnectionDialog && (
        <ConnectionFormDialog onClose={onShowCloseDialog} />
      )}

      <div className="connection-table-container">
        <BasicTable
          tableFields={tableFields}
          data={connections}
          onRowClick={onRowClick}
        />
      </div>
    </div>
  );
};

export default Connections;
