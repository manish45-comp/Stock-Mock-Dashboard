import {
  Add,
  CopyAll,
  Delete,
  PlayCircleFilled,
  Save,
  Share,
} from "@mui/icons-material";
import {
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Chip,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid2,
  IconButton,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Switch,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";

const Strategies = () => {
  const [alignment, setAlignment] = useState("Intraday");
  const handleChange = (event, newAlignment) => {
    if (newAlignment != null) {
      setAlignment(newAlignment);
    }
  };
  return (
    <>
      <Card sx={{ borderRadius: 2 }} variant="outlined">
        <CardContent>
          <Stack spacing={2}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: { xs: "start", md: "center" },
                justifyContent: { xs: "start", md: "space-between" },
                gap: { xs: 1, md: 0 },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography variant="body2">Use Spot as ATM</Typography>
                <Switch size="small" />
                <Typography variant="body2">Use Futures as ATM</Typography>
              </Box>
              <RadioGroup
                sx={{ display: "flex" }}
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="One Leg"
                name="radio-buttons-group"
              >
                <Stack direction="row">
                  <Tooltip
                    title="If any leg stop loss or target profit condition is met then only that leg will be squared off."
                    arrow
                    placement="top"
                  >
                    <FormControlLabel
                      sx={{
                        "& .MuiTypography-root": {
                          fontSize: 14,
                        },
                      }}
                      value="One Leg"
                      control={
                        <Radio
                          sx={{
                            "& .MuiSvgIcon-root": {
                              fontSize: 20,
                            },
                          }}
                        />
                      }
                      label="Square of one leg"
                    />
                  </Tooltip>
                  <Tooltip
                    title="If any leg stop loss or target profit condition is met then squared off entire strategy."
                    arrow
                    placement="top"
                  >
                    <FormControlLabel
                      sx={{
                        "& .MuiTypography-root": {
                          fontSize: 14,
                        },
                      }}
                      value="All Leg"
                      control={
                        <Radio
                          sx={{
                            "& .MuiSvgIcon-root": {
                              fontSize: 20,
                            },
                          }}
                        />
                      }
                      label="Square of all leg"
                    />
                  </Tooltip>
                </Stack>
              </RadioGroup>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: { xs: "stretch", md: "center" },
                justifyContent: { xs: "start", md: "space-between" },
                gap: { xs: 2, md: 0 },
              }}
            >
              <FormControl
                sx={{
                  flexShrink: 0,
                }}
              >
                <InputLabel id="index-label">Index</InputLabel>
                <Select
                  sx={{ minWidth: "120px", width: "100%" }}
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

              <FormGroup>
                <Stack direction="row">
                  <FormControlLabel
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: { xs: 10, md: 14 },
                        textWrap: "nowrap",
                      },
                    }}
                    control={<Checkbox size="small" />}
                    label="Wait & Trade"
                  />
                  <FormControlLabel
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: { xs: 10, md: 14 },
                        textWrap: "nowrap",
                      },
                    }}
                    control={<Checkbox size="small" />}
                    label="Move SL to Cost"
                  />
                  <FormControlLabel
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: { xs: 10, md: 14 },
                        textWrap: "nowrap",
                      },
                    }}
                    control={<Checkbox size="small" />}
                    label="Re-Entry / Re-Execute"
                  />
                </Stack>
              </FormGroup>
            </Box>
            <Badge
              sx={{
                "& .MuiBadge-badge": {
                  borderRadius: "3px",
                },
              }}
              color="primary"
              badgeContent={"L1"}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <Card
                variant="outlined"
                sx={{
                  width: "100%",
                  padding: 2,
                  borderRadius: 2,
                  bgcolor: "#D9EAFD",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  overflowX: "auto",
                  gap: 5,
                }}
              >
                <Stack
                  spacing={2}
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  flexShrink={0}
                >
                  <Checkbox></Checkbox>
                  <TextField
                    sx={{ maxWidth: "120px" }}
                    size="small"
                    id="total-lot"
                    label="Total Lot"
                    variant="outlined"
                    value={1}
                  />
                  <Button variant="contained" color="success">
                    Buy
                  </Button>
                  <FormControl>
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
                  <Button variant="contained" color="primary">
                    Put
                  </Button>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Chip
                    icon={<Add />}
                    size="small"
                    label="Target Profit"
                    onClick={() => console.log("clicked")}
                  />
                  <Chip
                    icon={<Add />}
                    size="small"
                    label="Stop Loss"
                    onClick={() => console.log("clicked")}
                  />
                  <Chip
                    icon={<Add />}
                    size="small"
                    label="Trail Stop Loss"
                    onClick={() => console.log("clicked")}
                  />
                  <Chip
                    icon={<Add />}
                    size="small"
                    label="Journey"
                    onClick={() => console.log("clicked")}
                  />
                  <FormControl>
                    <InputLabel id="index-label">Expiry</InputLabel>
                    <Select
                      sx={{ minWidth: "120px" }}
                      labelId="expiry-label"
                      id="index-select"
                      label="Expiry"
                      size="small"
                      defaultValue={10}
                    >
                      <MenuItem value={10}>Weekly</MenuItem>
                      <MenuItem value={20}>Next Weekly</MenuItem>
                      <MenuItem value={30}>Monthly</MenuItem>
                    </Select>
                  </FormControl>
                  <IconButton>
                    <CopyAll />
                  </IconButton>
                  <IconButton>
                    <Delete />
                  </IconButton>
                </Stack>
              </Card>
            </Badge>
            <Badge
              sx={{
                "& .MuiBadge-badge": {
                  borderRadius: "3px",
                },
              }}
              color="primary"
              badgeContent={"L2"}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <Card
                variant="outlined"
                sx={{
                  width: "100%",
                  padding: 2,
                  borderRadius: 2,
                  bgcolor: "#D9EAFD",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  overflowX: "auto",
                  gap: 5,
                }}
              >
                <Stack
                  spacing={2}
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  flexShrink={0}
                >
                  <Checkbox></Checkbox>
                  <TextField
                    sx={{ maxWidth: "120px" }}
                    size="small"
                    id="total-lot"
                    label="Total Lot"
                    variant="outlined"
                    value={1}
                  />
                  <Button variant="contained" color="success">
                    Buy
                  </Button>
                  <FormControl>
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
                  <Button variant="contained" color="primary">
                    Put
                  </Button>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Chip
                    icon={<Add />}
                    size="small"
                    label="Target Profit"
                    onClick={() => console.log("clicked")}
                  />
                  <Chip
                    icon={<Add />}
                    size="small"
                    label="Stop Loss"
                    onClick={() => console.log("clicked")}
                  />
                  <Chip
                    icon={<Add />}
                    size="small"
                    label="Trail Stop Loss"
                    onClick={() => console.log("clicked")}
                  />
                  <Chip
                    icon={<Add />}
                    size="small"
                    label="Journey"
                    onClick={() => console.log("clicked")}
                  />
                  <FormControl>
                    <InputLabel id="index-label">Expiry</InputLabel>
                    <Select
                      sx={{ minWidth: "120px" }}
                      labelId="expiry-label"
                      id="index-select"
                      label="Expiry"
                      size="small"
                      defaultValue={10}
                    >
                      <MenuItem value={10}>Weekly</MenuItem>
                      <MenuItem value={20}>Next Weekly</MenuItem>
                      <MenuItem value={30}>Monthly</MenuItem>
                    </Select>
                  </FormControl>
                  <IconButton>
                    <CopyAll />
                  </IconButton>
                  <IconButton>
                    <Delete />
                  </IconButton>
                </Stack>
              </Card>
            </Badge>
          </Stack>
        </CardContent>
      </Card>

      <Stack alignItems="end">
        <FormControlLabel
          control={<Switch />}
          label="No Re-Entry/Re-Execute/Journey After"
        />
      </Stack>

      {/* time */}
      <Card
        variant="outlined"
        sx={{
          padding: 2,
          borderRadius: 2,
          gap: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "stretch",
            justifyContent: { xs: "center", md: "space-between" },
            gap: { xs: 2, md: 0 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: { xs: "start", md: "end" },
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Typography sx={{ textWrap: "nowrap", paddingBlock: 1 }}>
              Entry Time
            </Typography>
            <Stack alignItems="end" spacing={2} sx={{ width: "100%" }}>
              <FormControlLabel
                sx={{
                  "& .MuiTypography-root": {
                    fontSize: 12,
                  },
                }}
                control={<Checkbox />}
                label="Range Breakout"
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <FormControl sx={{ minWidth: "120px" }} size="small">
                  <InputLabel id="Hours-label">Hours</InputLabel>
                  <Select labelId="Hours-label" id="Hours-select" label="Hours">
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={11}>11</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                    <MenuItem value={13}>13</MenuItem>
                    <MenuItem value={14}>14</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                  </Select>
                </FormControl>

                <FormControl sx={{ minWidth: "120px" }} size="small">
                  <InputLabel id="Minutes-label">Minutes</InputLabel>
                  <Select
                    labelId="Hours-label"
                    id="Minutes-select"
                    label="Minutes"
                  >
                    <MenuItem value={0}>00</MenuItem>
                    <MenuItem value={9}>01</MenuItem>
                    <MenuItem value={10}>02</MenuItem>
                    <MenuItem value={11}>03</MenuItem>
                    <MenuItem value={12}>04</MenuItem>
                    <MenuItem value={13}>05</MenuItem>
                    <MenuItem value={14}>06</MenuItem>
                    <MenuItem value={15}>07</MenuItem>
                  </Select>
                </FormControl>

                <FormControl sx={{ minWidth: "120px" }} size="small">
                  <InputLabel id="Seconds-label">Seconds</InputLabel>
                  <Select
                    labelId="Seconds-label"
                    id="Seconds-select"
                    label="Seconds"
                  >
                    <MenuItem value={0}>00</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Stack>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: { xs: "start", md: "end" },
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Typography sx={{ textWrap: "nowrap", paddingBlock: 1 }}>
              Exit Time
            </Typography>
            <Stack alignItems="end" spacing={2}>
              <RadioGroup
                row
                aria-labelledby="same-day-next-label"
                name="same-day-next"
              >
                <FormControlLabel
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: 12,
                    },
                  }}
                  value="same-day"
                  control={<Radio />}
                  label="Same Day"
                />
                <FormControlLabel
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: 12,
                    },
                  }}
                  value="next-day"
                  control={<Radio />}
                  label="Next Day (BTST/STBT)"
                />
              </RadioGroup>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <FormControl sx={{ minWidth: "120px" }} size="small">
                  <InputLabel id="Hours-label">Hours</InputLabel>
                  <Select labelId="Hours-label" id="Hours-select" label="Hours">
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={11}>11</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                    <MenuItem value={13}>13</MenuItem>
                    <MenuItem value={14}>14</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                  </Select>
                </FormControl>

                <FormControl sx={{ minWidth: "120px" }} size="small">
                  <InputLabel id="Minutes-label">Minutes</InputLabel>
                  <Select
                    labelId="Hours-label"
                    id="Minutes-select"
                    label="Minutes"
                  >
                    <MenuItem value={0}>00</MenuItem>
                    <MenuItem value={9}>01</MenuItem>
                    <MenuItem value={10}>02</MenuItem>
                    <MenuItem value={11}>03</MenuItem>
                    <MenuItem value={12}>04</MenuItem>
                    <MenuItem value={13}>05</MenuItem>
                    <MenuItem value={14}>06</MenuItem>
                    <MenuItem value={15}>07</MenuItem>
                  </Select>
                </FormControl>

                <FormControl sx={{ minWidth: "120px" }} size="small">
                  <InputLabel id="Seconds-label">Seconds</InputLabel>
                  <Select
                    labelId="Seconds-label"
                    id="Seconds-select"
                    label="Seconds"
                  >
                    <MenuItem value={0}>00</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Card>

      {/* dates */}
      <Card
        variant="outlined"
        sx={{
          padding: 2,
          borderRadius: 2,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "end",
          justifyContent: "space-between",
          gap: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            gap: 2,
          }}
        >
          <Typography>From Date</Typography>
          <DatePicker />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            gap: 2,
          }}
        >
          <Typography>To Date</Typography>
          <DatePicker />
        </Box>
      </Card>

      <Card
        variant="outlined"
        sx={{
          padding: 2,
          borderRadius: 2,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: 2,
        }}
      >
        <Chip
          icon={<Add />}
          onClick={() => {}}
          label="Strategy Target Profit"
        ></Chip>
        <Chip
          icon={<Add />}
          onClick={() => {}}
          label="Strategy Stop Loss"
        ></Chip>
      </Card>

      <Card
        variant="outlined"
        sx={{
          padding: 2,
          borderRadius: 2,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Chip
          icon={<Add />}
          onClick={() => {}}
          label="Protect The Profit"
        ></Chip>
      </Card>
      {/* buttons */}
      <Card
        variant="outlined"
        sx={{
          padding: 2,
          borderRadius: 2,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "end",
          justifyContent: "space-between",
          gap: 5,
        }}
      >
        <Grid2
          container
          spacing={{ xs: 2, md: 4, lg: 6 }}
          sx={{ width: "100%" }}
          alignItems="center"
        >
          <Grid2 size={{ xs: 12, md: 3 }}>
            <ToggleButtonGroup
              sx={{ width: "100%" }}
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
                    alignment === "Intraday" ? "primary.main" : "transparent",

                  "&:hover": {
                    bgcolor:
                      alignment === "Intraday"
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
                value="Intraday"
              >
                Intraday
              </ToggleButton>
              <ToggleButton
                sx={{
                  width: "100%",
                  bgcolor:
                    alignment === "Positional" ? "primary.main" : "transparent",

                  "&:hover": {
                    bgcolor:
                      alignment === "Positional"
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
                value="Positional"
              >
                Positional
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 3 }}>
            <Button
              size="large"
              fullWidth
              variant="contained"
              startIcon={<Save />}
            >
              Save Strategy
            </Button>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 3 }}>
            <Button
              size="large"
              fullWidth
              variant="contained"
              startIcon={<Share />}
            >
              Share Strategy
            </Button>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 3 }}>
            <Button
              fullWidth
              size="large"
              variant="contained"
              color="success"
              startIcon={<PlayCircleFilled />}
            >
              Start Backtest
            </Button>
          </Grid2>
        </Grid2>
      </Card>
    </>
  );
};

export default Strategies;
