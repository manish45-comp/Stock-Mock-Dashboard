import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import {
  Card,
  Checkbox,
  Chip,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "date", headerName: "Date", width: 150 },
  { field: "day", headerName: "Day", width: 80 },
  { field: "time", headerName: "Time", width: 100 },
  { field: "open", headerName: "Open", width: 100 },
  { field: "close", headerName: "Close", width: 150 },
  { field: "highLow", headerName: "High-Low", width: 200 },
  {
    field: "change",
    headerName: "Change",
    width: 150,
    renderCell: (params) => {
      const value = params.value;
      const isPositive = value.includes("+") || !value.includes("-");
      const color = isPositive ? "success" : "error";
      const icon = isPositive ? <ArrowUpward /> : <ArrowDownward />;
      return (
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}
          size="small"
          color={color}
        >
          {value} {icon}
        </Typography>
      );
    },
  },
  {
    field: "volume",
    headerName: "Volume",
    width: 120,
    renderCell: (params) => {
      const value = params.value;
      const isPositive = value.includes("+") || !value.includes("-");
      const color = isPositive ? "success" : "error";
      return (
        <Chip
          variant="filled"
          style={{ fontWeight: "bold" }}
          color={color}
          label={value}
        ></Chip>
      );
    },
  },
  { field: "option", headerName: "Option", width: 150 },
  { field: "otherInfo1", headerName: "Other Info 1", width: 200 },
  { field: "otherInfo2", headerName: "Other Info 2", width: 200 },
  { field: "otherInfo3", headerName: "Other Info 3", width: 200 },
  { field: "otherInfo4", headerName: "Other Info 4", width: 200 },
];

const rows = [
  {
    id: 1,
    date: "2025-01-10",
    day: "Fri",
    time: "2111",
    open: "25",
    close: "2258/-556",
    highLow: "14.81 - 14.94",
    change: "46.25 (0.2%)",
    volume: "-175",
    option: "23600CE",
    otherInfo1: "(23589.45-23414.6)",
    otherInfo2: "-175",
    otherInfo3: "-160",
    otherInfo4: "2112",
  },
  {
    id: 2,
    date: "2025-01-09",
    day: "Thu",
    time: "1257",
    open: "25",
    close: "1259/-399",
    highLow: "14.5 - 14.68",
    change: "-14.2 (-0.06%)",
    volume: "-96",
    option: "23600CE",
    otherInfo1: "(23618.45-23521.95)",
    otherInfo2: "-96",
    otherInfo3: "-89",
    otherInfo4: "1260",
  },
  {
    id: 3,
    date: "2025-01-08",
    day: "Wed",
    time: "-11",
    open: "25",
    close: "1886/-930",
    highLow: "14.76 - 14.45",
    change: "38.75 (0.16%)",
    volume: "41",
    option: "23650CE",
    otherInfo1: "(23662.5-23703.95)",
    otherInfo2: "41",
    otherInfo3: "45",
    otherInfo4: "1900",
  },
  {
    id: 4,
    date: "2025-01-07",
    day: "Tue",
    time: "1415",
    open: "25",
    close: "1650/-573",
    highLow: "15.25 - 14.67",
    change: "-63.85 (0.27%)",
    volume: "-30",
    option: "23750CE",
    otherInfo1: "(23734.45-23703.95)",
    otherInfo2: "-30",
    otherInfo3: "-25",
    otherInfo4: "1417",
  },
  {
    id: 5,
    date: "2025-01-06",
    day: "Mon",
    time: "2363",
    open: "25",
    close: "2413/-420",
    highLow: "14.24 - 15.72",
    change: "41.05 (0.17%)",
    volume: "-473",
    option: "24050CE",
    otherInfo1: "(24059.85-23587.15)",
    otherInfo2: "-473",
    otherInfo3: "-450",
    otherInfo4: "2415",
  },
  {
    id: 6,
    date: "2025-01-03",
    day: "Fri",
    time: "2251",
    open: "25",
    close: "2466/-119",
    highLow: "13.69 - 13.54",
    change: "7.75 (0.03%)",
    volume: "-160",
    option: "24150CE",
    otherInfo1: "(24167.9-24008.15)",
    otherInfo2: "-160",
    otherInfo3: "-145",
    otherInfo4: "2253",
  },
  {
    id: 7,
    date: "2025-01-02",
    day: "Thu",
    time: "-7752",
    open: "25",
    close: "314/-8845",
    highLow: "14.73 - 13.78",
    change: "40.1 (0.17%)",
    volume: "415",
    option: "23750CE",
    otherInfo1: "(23770.35-24185.5)",
    otherInfo2: "415",
    otherInfo3: "430",
    otherInfo4: "320",
  },

  {
    id: 8,
    date: "2025-01-11",
    day: "Sat",
    time: "1020",
    open: "28",
    close: "2178/-520",
    highLow: "14.65 - 15.02",
    change: "32.4 (0.14%)",
    volume: "200",
    option: "23650CE",
    otherInfo1: "(23620.45-23580.6)",
    otherInfo2: "200",
    otherInfo3: "210",
    otherInfo4: "2179",
  },
  {
    id: 9,
    date: "2025-01-12",
    day: "Sun",
    time: "1540",
    open: "29",
    close: "2300/-480",
    highLow: "15.10 - 14.88",
    change: "45.2 (0.19%)",
    volume: "-120",
    option: "23700CE",
    otherInfo1: "(23710.85-23620.5)",
    otherInfo2: "-120",
    otherInfo3: "-110",
    otherInfo4: "2301",
  },
  {
    id: 10,
    date: "2025-01-13",
    day: "Mon",
    time: "0805",
    open: "27",
    close: "2245/-590",
    highLow: "14.87 - 14.33",
    change: "-40.8 (0.18%)",
    volume: "130",
    option: "23500CE",
    otherInfo1: "(23490.25-23460.75)",
    otherInfo2: "130",
    otherInfo3: "135",
    otherInfo4: "2247",
  },
  {
    id: 11,
    date: "2025-01-14",
    day: "Tue",
    time: "1900",
    open: "30",
    close: "2455/-410",
    highLow: "15.20 - 14.95",
    change: "-60.5 (0.25%)",
    volume: "-250",
    option: "24000CE",
    otherInfo1: "(24005.85-23855.5)",
    otherInfo2: "-250",
    otherInfo3: "-240",
    otherInfo4: "2456",
  },
  {
    id: 12,
    date: "2025-01-15",
    day: "Wed",
    time: "2115",
    open: "26",
    close: "2310/-500",
    highLow: "14.80 - 14.45",
    change: "34.8 (0.15%)",
    volume: "-100",
    option: "23650CE",
    otherInfo1: "(23675.85-23550.6)",
    otherInfo2: "-100",
    otherInfo3: "-95",
    otherInfo4: "2312",
  },
];

export default function DataTable() {
  return (
    <Card
      variant="outlined"
      sx={{
        padding: 2,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <FormControlLabel
        control={<Checkbox />}
        label="Show individual leg contribution"
      />
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={20}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 20,
            },
          },
        }}
        pageSizeOptions={[20]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Card>
  );
}
