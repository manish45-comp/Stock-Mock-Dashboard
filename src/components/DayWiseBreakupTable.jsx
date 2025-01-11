import {
  Box,
  Card,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "year", headerName: "Stock Mock", flex: 1 },
  {
    field: "Mon",
    headerName: "Mon",
    flex: 1,
    renderCell: (params) => (
      <span style={{ color: params.value < 0 ? "red" : "inherit" }}>
        {params.value}
      </span>
    ),
  },
  {
    field: "Tue",
    headerName: "Tue",
    flex: 1,
    renderCell: (params) => (
      <span style={{ color: params.value < 0 ? "red" : "inherit" }}>
        {params.value}
      </span>
    ),
  },
  {
    field: "Wed",
    headerName: "Wed",
    flex: 1,
    renderCell: (params) => (
      <span style={{ color: params.value < 0 ? "red" : "inherit" }}>
        {params.value}
      </span>
    ),
  },
  {
    field: "Thu",
    headerName: "Thu",
    flex: 1,
    renderCell: (params) => (
      <span style={{ color: params.value < 0 ? "red" : "inherit" }}>
        {params.value}
      </span>
    ),
  },
  {
    field: "Fri",
    headerName: "Fri",
    flex: 1,
    renderCell: (params) => (
      <span style={{ color: params.value < 0 ? "red" : "inherit" }}>
        {params.value}
      </span>
    ),
  },
];

const dataRows = [
  { id: 1, year: 2024, Mon: 2852, Tue: 2061, Wed: 2530, Thu: 14, Fri: -314 },
  { id: 2, year: 2025, Mon: -2363, Tue: 1415, Wed: -2382, Thu: 31, Fri: 2251 },
];

const calculateTotalRow = (rows) => {
  return {
    id: rows.length + 1, // Generate a unique ID
    year: "Total",
    Mon: rows.reduce((sum, row) => sum + (row.Mon || 0), 0),
    Tue: rows.reduce((sum, row) => sum + (row.Tue || 0), 0),
    Wed: rows.reduce((sum, row) => sum + (row.Wed || 0), 0),
    Thu: rows.reduce((sum, row) => sum + (row.Thu || 0), 0),
    Fri: rows.reduce((sum, row) => sum + (row.Fri || 0), 0),
  };
};

const rows = [...dataRows, calculateTotalRow(dataRows)];

const DayWiseBreakupTable = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        padding: 2,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "start",
      }}
    >
      <Typography variant="h5" fontWeight="bold">
        Day Wise Breakup
      </Typography>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Show ROI Percent"
      />
      <Box sx={{ height: "auto", width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          isCellEditable={(params) => params.row.Wed % 2 === 0}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </Box>
    </Card>
  );
};

export default DayWiseBreakupTable;
