import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
} from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import React from "react";

const Positions = () => {
  const [alignment, setAlignment] = React.useState("Options");

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardHeader
        sx={{
          textAlign: "center",
          fontWeight: 800,
          color: "#FFF",
          bgcolor: "#1976d2",
        }}
        title="POSITIONS"
      />
      <CardContent>
        <RadioGroup
          sx={{ display: "flex" }}
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="ATM Point"
          name="radio-buttons-group"
        >
          <Stack
            direction={{ xs: "column", lg: "row" }}
            spacing={{ xs: 0, md: 2 }}
          >
            <FormControlLabel
              value="ATM Point"
              control={<Radio />}
              label="ATM Point"
            />

            <FormControlLabel
              value="ATM Percent"
              control={<Radio />}
              label="ATM Percent"
            />
            <FormControlLabel
              value="Straddle Width"
              control={<Radio />}
              label="Straddle Width"
            />
            <Tooltip
              title="This will select strike which is closest to the chosen premium (in the range od +-100 points) at entry time."
              placement="top"
              arrow
            >
              <FormControlLabel
                value="Closest Premium"
                control={<Radio />}
                label="Closest Premium (CP)"
              />
            </Tooltip>
            <Tooltip
              title="This will select strike which is closest to the chosen percent value of straddle premium at entry time."
              placement="top"
              arrow
            >
              <FormControlLabel
                value="CP based on straddle premium (SP)"
                control={<Radio />}
                label="CP based on straddle premium (SP)"
              />
            </Tooltip>
          </Stack>
        </RadioGroup>
        <Divider sx={{ marginBlock: 2 }} />

        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, md: 6, lg: 2 }}>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel id="index-label">Index</InputLabel>
              <Select
                sx={{ minWidth: "120px" }}
                labelId="index-label"
                id="index-select"
                label="Index"
                size="small"
                defaultValue={10}
              >
                <MenuItem value={10}>Nifty</MenuItem>
                <MenuItem value={20}>Banknifty</MenuItem>
                <MenuItem value={30}>Finnifty</MenuItem>
                <MenuItem value={40}>Midcpnifty</MenuItem>
                <MenuItem value={50}>Sensex</MenuItem>
                <MenuItem value={60}>Bankex</MenuItem>
              </Select>
            </FormControl>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6, lg: 2 }}>
            <ToggleButtonGroup
              sx={{ width: "100%" }}
              size="small"
              color="primary"
              exclusive
              value={alignment}
              aria-label="Platform"
              onChange={handleChange}
            >
              <ToggleButton
                sx={{
                  width: "100%",
                  bgcolor:
                    alignment === "Futures" ? "primary.main" : "transparent",

                  "&:hover": {
                    bgcolor:
                      alignment === "Futures"
                        ? "primary.dark"
                        : "rgba(0, 0, 0, 0.04)",
                  },
                  "&.Mui-selected": {
                    bgcolor: "primary.main",
                    color: "white",
                    "&:hover": {
                      bgcolor: "primary.dark",
                    },
                  },
                }}
                value="Futures"
              >
                Futures
              </ToggleButton>
              <ToggleButton
                sx={{
                  width: "100%",
                  bgcolor:
                    alignment === "Options" ? "primary.main" : "transparent",

                  "&:hover": {
                    bgcolor:
                      alignment === "Options"
                        ? "primary.dark"
                        : "rgba(0, 0, 0, 0.04)",
                  },
                  "&.Mui-selected": {
                    bgcolor: "primary.main",
                    color: "white",
                    "&:hover": {
                      bgcolor: "primary.dark",
                    },
                  },
                }}
                value="Options"
              >
                Options
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6, lg: 2 }}>
            <ToggleButtonGroup
              sx={{ width: "100%" }}
              size="small"
              color="primary"
              exclusive
              value={alignment}
              aria-label="Platform"
              onChange={handleChange}
            >
              <ToggleButton
                sx={{
                  width: "100%",
                  bgcolor:
                    alignment === "call" ? "success.main" : "transparent",

                  "&:hover": {
                    bgcolor:
                      alignment === "call"
                        ? "success.dark"
                        : "rgba(0, 0, 0, 0.04)",
                  },
                  "&.Mui-selected": {
                    bgcolor: "success.main",
                    color: "white",
                    "&:hover": {
                      bgcolor: "success.dark",
                    },
                  },
                }}
                value="call"
              >
                call
              </ToggleButton>
              <ToggleButton
                sx={{
                  width: "100%",
                  bgcolor: alignment === "put" ? "primary.main" : "transparent",

                  "&:hover": {
                    bgcolor:
                      alignment === "put"
                        ? "primary.dark"
                        : "rgba(0, 0, 0, 0.04)",
                  },
                  "&.Mui-selected": {
                    bgcolor: "primary.main",
                    color: "white",
                    "&:hover": {
                      bgcolor: "primary.dark",
                    },
                  },
                }}
                value="put"
              >
                Put
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6, lg: 2 }}>
            <ToggleButtonGroup
              sx={{ width: "100%" }}
              size="small"
              color="primary"
              exclusive
              value={alignment}
              aria-label="Platform"
              onChange={handleChange}
            >
              <ToggleButton
                sx={{
                  width: "100%",
                  bgcolor: alignment === "sell" ? "error.main" : "transparent",

                  "&:hover": {
                    bgcolor:
                      alignment === "sell"
                        ? "error.dark"
                        : "rgba(0, 0, 0, 0.04)",
                  },
                  "&.Mui-selected": {
                    bgcolor: "error.main",
                    color: "white",
                    "&:hover": {
                      bgcolor: "error.dark",
                    },
                  },
                }}
                value="sell"
              >
                sell
              </ToggleButton>
              <ToggleButton
                sx={{
                  width: "100%",
                  bgcolor: alignment === "buy" ? "success.main" : "transparent",

                  "&:hover": {
                    bgcolor:
                      alignment === "put"
                        ? "success.dark"
                        : "rgba(0, 0, 0, 0.04)",
                  },
                  "&.Mui-selected": {
                    bgcolor: "success.main",
                    color: "white",
                    "&:hover": {
                      bgcolor: "success.dark",
                    },
                  },
                }}
                value="buy"
              >
                buy
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6, lg: 2 }}>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel id="index-label">Price</InputLabel>
              <Select
                sx={{ minWidth: "120px" }}
                size="small"
                labelId="Price-label"
                id="Price-select"
                label="Price"
                defaultValue={40}
              >
                <MenuItem value={10}>ATM-150</MenuItem>
                <MenuItem value={20}>ATM-100</MenuItem>
                <MenuItem value={30}>ATM-50</MenuItem>
                <MenuItem value={40}>ATM</MenuItem>
                <MenuItem value={50}>ATM+50</MenuItem>
                <MenuItem value={60}>ATM+100</MenuItem>
                <MenuItem value={70}>ATM+150</MenuItem>
              </Select>
            </FormControl>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6, lg: 2 }}>
            <TextField
              sx={{ width: "100%" }}
              size="small"
              id="total-lot"
              label="Total Lot"
              variant="outlined"
              value={1}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6, lg: 2 }}>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel id="index-label">Expiry Type</InputLabel>
              <Select
                sx={{ minWidth: "150px" }}
                size="small"
                labelId="Expiry-type-label"
                id="Expiry-type-label"
                label="Expiry Type"
                defaultValue={10}
              >
                <MenuItem value={10}>Weekly</MenuItem>
                <MenuItem value={20}>Next Weekly</MenuItem>
                <MenuItem value={30}>Monthly</MenuItem>
              </Select>
            </FormControl>
          </Grid2>
        </Grid2>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBlock: 2,
          }}
        >
          <Button size="large" variant="contained" color="success">
            Add Position
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Positions;
