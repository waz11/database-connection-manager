import "./Connections.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ConnectionFormDialog from "../../components/ConnectionForm/ConnectionFormDIalog";
import { useDispatch, useSelector } from "react-redux";
import { connectionsSelector } from "../../store/connections/selectors";
import { getConnections } from "../../store/connections/actions";
import DataGridDemo, {
  ITableField,
} from "../../components/DataGrid/DataGridDemo";
import AddIcon from "@mui/icons-material/Add";

const columns: ITableField[] = [
  { field: "name", headerName: "Database Name", width: 150 },
  { field: "username", headerName: "Username", width: 150 },
  { field: "type", headerName: "Database Type", width: 150 },
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
      <button className="add-icon" onClick={onShowCloseDialog}>
        <AddIcon />
      </button>

      {showAddConnectionDialog && (
        <ConnectionFormDialog onClose={onShowCloseDialog} />
      )}

      <div className="connection-table-container">
        <DataGridDemo
          columns={columns}
          rows={connections}
          onRowClick={onRowClick}
        />
      </div>
    </div>
  );
};

export default Connections;
