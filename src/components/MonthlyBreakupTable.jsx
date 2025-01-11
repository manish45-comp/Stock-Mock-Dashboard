import { Box, Card, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "year", headerName: "Year", flex: 1 },
  {
    field: "Jan",
    headerName: "Jan",
    flex: 1,
    renderCell: (params) => (
      <span style={{ color: params.value < 0 ? "red" : "green" }}>
        {params.value}
      </span>
    ),
  },
  {
    field: "Feb",
    headerName: "Feb",
    flex: 1,
    renderCell: (params) => (
      <span style={{ color: params.value < 0 ? "red" : "green" }}>
        {params.value}
      </span>
    ),
  },
  {
    field: "Mar",
    headerName: "Mar",
    flex: 1,
    renderCell: (params) => (
      <span style={{ color: params.value < 0 ? "red" : "green" }}>
        {params.value}
      </span>
    ),
  },
  {
    field: "Apr",
    headerName: "Apr",
    flex: 1,
    renderCell: (params) => (
      <span style={{ color: params.value < 0 ? "red" : "green" }}>
        {params.value}
      </span>
    ),
  },
  {
    field: "May",
    headerName: "May",
    flex: 1,
    renderCell: (params) => (
      <span style={{ color: params.value < 0 ? "red" : "green" }}>
        {params.value}
      </span>
    ),
  },
  {
    field: "Jun",
    headerName: "Jun",
    flex: 1,
    renderCell: (params) => (
      <span style={{ color: params.value < 0 ? "red" : "green" }}>
        {params.value}
      </span>
    ),
  },
  {
    field: "Jul",
    headerName: "Jul",
    flex: 1,
    renderCell: (params) => (
      <span style={{ color: params.value < 0 ? "red" : "green" }}>
        {params.value}
      </span>
    ),
  },
  {
    field: "Aug",
    headerName: "Aug",
    flex: 1,
    renderCell: (params) => (
      <span style={{ color: params.value < 0 ? "red" : "green" }}>
        {params.value}
      </span>
    ),
  },
  {
    field: "Sep",
    headerName: "Sep",
    flex: 1,
    renderCell: (params) => (
      <span style={{ color: params.value < 0 ? "red" : "green" }}>
        {params.value}
      </span>
    ),
  },
  {
    field: "Oct",
    headerName: "Oct",
    flex: 1,
    renderCell: (params) => (
      <span style={{ color: params.value < 0 ? "red" : "green" }}>
        {params.value}
      </span>
    ),
  },
  {
    field: "Nov",
    headerName: "Nov",
    flex: 1,
    renderCell: (params) => (
      <span style={{ color: params.value < 0 ? "red" : "green" }}>
        {params.value}
      </span>
    ),
  },
  {
    field: "Dec",
    headerName: "Dec",
    flex: 1,
    renderCell: (params) => (
      <span style={{ color: params.value < 0 ? "red" : "green" }}>
        {params.value}
      </span>
    ),
  },
  {
    field: "Total",
    headerName: "Total",
    flex: 1,
    renderCell: (params) => (
      <span style={{ color: params.value < 0 ? "red" : "green" }}>
        {params.value}
      </span>
    ),
  },
  {
    field: "MDD",
    headerName: "MDD",
    flex: 1,
    renderCell: (params) => (
      <span style={{ color: params.value < 0 ? "red" : "green" }}>
        {params.value}
      </span>
    ),
  },
  {
    field: "ROI",
    headerName: "ROI",
    flex: 1,
    renderCell: (params) => (
      <span style={{ color: params.value < 0 ? "red" : "green" }}>
        {params.value}
      </span>
    ),
  },
];

const dataRows = [
  {
    id: 1,
    year: 2024,
    Jan: 0,
    Feb: 0,
    Mar: 0,
    Apr: 0,
    May: 0,
    Jun: 0,
    Jul: 0,
    Aug: 0,
    Sep: 0,
    Oct: 0,
    Nov: 0,
    Dec: 10371,
    Total: 10371,
    MDD: -4572,
    ROI: "12%",
  },
  {
    id: 2,
    year: 2025,
    Jan: -737,
    Feb: 0,
    Mar: 0,
    Apr: 0,
    May: 0,
    Jun: 0,
    Jul: 0,
    Aug: 0,
    Sep: 0,
    Oct: 0,
    Nov: 0,
    Dec: 0,
    Total: -737,
    MDD: -10123,
    ROI: "0%",
  },
];

const calculateTotalRow = (rows) => {
  return {
    id: rows.length + 1, // Generate a unique ID
    year: "Total",
    Jan: rows.reduce((sum, row) => sum + (row.Jan || 0), 0),
    Feb: rows.reduce((sum, row) => sum + (row.Feb || 0), 0),
    Mar: rows.reduce((sum, row) => sum + (row.Mar || 0), 0),
    Apr: rows.reduce((sum, row) => sum + (row.Apr || 0), 0),
    May: rows.reduce((sum, row) => sum + (row.May || 0), 0),
    Jun: rows.reduce((sum, row) => sum + (row.Jun || 0), 0),
    Jul: rows.reduce((sum, row) => sum + (row.Jul || 0), 0),
    Aug: rows.reduce((sum, row) => sum + (row.Aug || 0), 0),
    Sep: rows.reduce((sum, row) => sum + (row.Sep || 0), 0),
    Oct: rows.reduce((sum, row) => sum + (row.Oct || 0), 0),
    Nov: rows.reduce((sum, row) => sum + (row.Nov || 0), 0),
    Dec: rows.reduce((sum, row) => sum + (row.Dec || 0), 0),
    Total: rows.reduce((sum, row) => sum + (row.Total || 0), 0),
    MDD: rows.reduce((sum, row) => sum + (row.MDD || 0), 0),
    ROI: rows.reduce((sum, row) => row.ROI),
  };
};

const rows = [...dataRows, calculateTotalRow(dataRows)];

const MonthlyBreakupTable = () => {
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
        Monthly Breakup
      </Typography>

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

export default MonthlyBreakupTable;
