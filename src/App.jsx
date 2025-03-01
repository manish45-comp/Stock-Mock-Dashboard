import { FormControlLabel, Radio, RadioGroup, Stack } from "@mui/material";
import Positions from "./components/Positions";
import Strategies from "./components/Strategies";
import FilteredDashboard from "./components/FilteredDashboard";
import DayWiseBreakupTable from "./components/DayWiseBreakupTable";
import MonthlyBreakupTable from "./components/MonthlyBreakupTable";
import Charts from "./components/Charts";
import DataTable from "./components/DataTable";

function App() {
  return (
    <>
      <Stack spacing={2} sx={{ padding: { xs: "10px", md: "50px" } }}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="all-days"
          name="radio-buttons-group"
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems="start"
            justifyContent="start"
            spacing={{ xs: -1, md: 0 }}
          >
            <FormControlLabel
              sx={{
                "& .MuiFormControlLabel-label": { fontSize: 14 },
              }}
              value="all-days"
              control={
                <Radio
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 18,
                    },
                  }}
                />
              }
              label="All Days"
            />

            <FormControlLabel
              sx={{
                "& .MuiFormControlLabel-label": { fontSize: 14 },
              }}
              value="budget-days"
              control={
                <Radio
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 18,
                    },
                  }}
                />
              }
              label="Budget Days"
            />

            <FormControlLabel
              sx={{
                "& .MuiFormControlLabel-label": { fontSize: 14 },
              }}
              value="rbi-policy-days"
              control={
                <Radio
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 18,
                    },
                  }}
                />
              }
              label="RBI Policy Days"
            />
          </Stack>
        </RadioGroup>
        <Positions />
        <Strategies />
        <FilteredDashboard />
        <DayWiseBreakupTable />
        <MonthlyBreakupTable />
        <Charts />
        <DataTable />
      </Stack>
    </>
  );
}

export default App;
