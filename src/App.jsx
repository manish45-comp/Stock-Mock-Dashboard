import { FormControlLabel, Radio, RadioGroup, Stack } from "@mui/material";
import Positions from "./components/Positions";
import Strategies from "./components/Strategies";

function App() {
  return (
    <>
      <Stack spacing={2} sx={{ padding: "50px" }}>
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
      </Stack>
    </>
  );
}

export default App;
