import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

export interface ITableField {
  field: string;
  headerName: string;
  width?: number;
}

const DataGridDemo = ({ columns, rows, onRowClick }: any) => {
  return (
    <Box sx={{ height: "98%", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5, 10, 20, 50, 100]}
        onRowSelectionModelChange={onRowClick}
        rowHeight={30}
      />
    </Box>
  );
};

export default DataGridDemo;
