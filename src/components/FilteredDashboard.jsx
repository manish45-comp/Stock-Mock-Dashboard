import {
  Article,
  Cached,
  Close,
  InfoOutlined,
  PictureAsPdf,
} from "@mui/icons-material";
import {
  MenuItem,
  Box,
  Button,
  Card,
  FormControl,
  InputLabel,
  Select,
  Stack,
  TextField,
  Typography,
  Grid2,
  useTheme,
  alpha,
  Badge,
  Tooltip,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";

const FilteredDashboard = () => {
  const theme = useTheme();
  const [show, setShow] = React.useState(false);
  return (
    <>
      <Card
        variant="outlined"
        sx={{
          padding: 2,
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button>Add more filters</Button>
      </Card>

      <Card
        variant="outlined"
        sx={{
          padding: 2,
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Stack spacing={2} direction="row" alignItems="center">
            <Typography
              fontWeight={700}
              sx={{
                textWrap: "nowrap",
              }}
            >
              Vix (1-99)
            </Typography>
            <Stack spacing={2} direction={{ xs: "column", md: "row" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography sx={{ minWidth: "40px", textAlign: "end" }}>
                  From
                </Typography>
                <TextField size="small"></TextField>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography sx={{ minWidth: "40px", textAlign: "end" }}>
                  To
                </Typography>
                <TextField size="small"></TextField>
              </Box>
            </Stack>
          </Stack>
          <Stack spacing={2} direction="row">
            <Button variant="contained" startIcon={<Cached />}>
              Reload
            </Button>
            <Button variant="contained" color="error" startIcon={<Close />}>
              Remove
            </Button>
          </Stack>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Stack spacing={2} direction="row" alignItems="center">
            <Typography
              fontWeight={700}
              sx={{
                textWrap: "nowrap",
              }}
            >
              Slippages
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography sx={{ minWidth: "40px", textAlign: "end" }}>
                %
              </Typography>
              <TextField size="small"></TextField>
            </Box>
            <Button variant="contained" startIcon={<Cached />}>
              Reload
            </Button>
          </Stack>
        </Box>
        <Typography>
          (0.5% Slippages are already included for options strategies)
        </Typography>
        <Stack
          sx={{
            width: "100%",
          }}
          spacing={2}
          direction="row"
          alignItems="center"
          justifyContent={{ xs: "space-between", md: "end" }}
        >
          <Button variant="outlined" startIcon={<Article />}>
            Export as Excel
          </Button>
          <Button variant="outlined" startIcon={<PictureAsPdf />}>
            Export as PDF
          </Button>
        </Stack>
      </Card>

      <Card
        variant="outlined"
        sx={{
          padding: 2,
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Stack
          spacing={2}
          direction={{ xs: "column", md: "row" }}
          alignItems={{ xs: "stretch", md: "center" }}
          justifyContent="space-between"
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Typography sx={{ minWidth: "40px", textAlign: "end" }}>
              From
            </Typography>
            <DatePicker sx={{ width: "100%" }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Typography sx={{ minWidth: "40px", textAlign: "end" }}>
              To
            </Typography>
            <DatePicker sx={{ width: "100%" }} />
          </Box>
          <Stack direction="row" spacing={1}>
            <FormControl
              sx={{
                minWidth: "100px",
                maxWidth: "200px",
              }}
              size="small"
            >
              <InputLabel id="day-filter-label">Select</InputLabel>
              <Select
                labelId="day-filter-label"
                id="day-filter-select"
                label="day-filter"
                defaultValue={10}
              >
                <MenuItem value={10}>Day</MenuItem>
                <MenuItem value={20}>DTE</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained">Mon</Button>
            <Button variant="contained">Tue</Button>
            <Button variant="contained">Wed</Button>
            <Button variant="outlined">Thu</Button>
            <Button variant="outlined">Fri</Button>
          </Stack>
        </Stack>

        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, md: 4, lg: 2 }}>
            <Badge
              sx={{
                width: "100%",
              }}
              badgeContent="Beta"
              color="primary"
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <Card
                sx={{
                  width: "100%",
                  padding: 2,
                  borderRadius: 2,
                  backgroundColor: alpha(theme.palette.primary.main, 0.1),
                  border: `1px solid ${theme.palette.primary.light}`,
                  color: alpha(theme.palette.primary.main, 1),
                }}
                variant="outlined"
              >
                <Stack spacing={1} alignItems="center" justifyContent="center">
                  <Typography variant="h5" fontWeight="bold">
                    ₹82,338
                  </Typography>
                  <Typography variant="h6">
                    Estimated Margin (On Expiry)
                  </Typography>
                </Stack>
              </Card>
            </Badge>
          </Grid2>
          <Grid2 sx={{ minHeight: "100%" }} size={{ xs: 12, md: 4, lg: 2 }}>
            <Card
              sx={{
                width: "100%",
                minHeight: "100%",
                padding: 2,
                borderRadius: 2,
                backgroundColor: alpha(theme.palette.success.main, 0.1),
                border: `1px solid ${theme.palette.success.light}`,
                color: alpha(theme.palette.success.main, 1),
              }}
              variant="outlined"
            >
              <Stack spacing={1} alignItems="center" justifyContent="center">
                <Typography
                  display="flex"
                  alignItems="center"
                  gap={1}
                  variant="h5"
                  fontWeight="bold"
                >
                  ₹83,22 <Typography variant="body1">(10%)</Typography>
                </Typography>
                <Typography variant="h6">Overall Profit</Typography>
              </Stack>
            </Card>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4, lg: 2 }}>
            <Card
              sx={{
                width: "100%",
                minHeight: "100%",
                padding: 2,
                borderRadius: 2,
                backgroundColor: alpha(theme.palette.warning.main, 0.1),
                border: `1px solid ${theme.palette.warning.light}`,
                color: alpha(theme.palette.warning.main, 1),
              }}
              variant="outlined"
            >
              <Stack spacing={1} alignItems="center" justifyContent="center">
                <Typography
                  display="flex"
                  alignItems="center"
                  gap={1}
                  variant="h5"
                  fontWeight="bold"
                >
                  ₹378 <Typography variant="body1">(0.46%)</Typography>
                </Typography>
                <Typography variant="h6">Avg Day Profit</Typography>
              </Stack>
            </Card>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4, lg: 2 }}>
            <Card
              sx={{
                width: "100%",
                padding: 2,
                borderRadius: 2,
                backgroundColor: alpha(theme.palette.success.main, 0.1),
                border: `1px solid ${theme.palette.success.light}`,
                color: alpha(theme.palette.success.main, 1),
              }}
              variant="outlined"
            >
              <Stack spacing={1} alignItems="center" justifyContent="center">
                <Typography
                  display="flex"
                  alignItems="center"
                  gap={1}
                  variant="h5"
                  fontWeight="bold"
                >
                  ₹3743<Typography variant="body1">(4.55%)</Typography>
                </Typography>
                <Typography variant="h6">Max Profit</Typography>
              </Stack>
            </Card>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4, lg: 2 }}>
            <Card
              sx={{
                width: "100%",
                padding: 2,
                borderRadius: 2,
                backgroundColor: alpha(theme.palette.error.main, 0.1),
                border: `1px solid ${theme.palette.error.light}`,
                color: alpha(theme.palette.error.main, 1),
              }}
              variant="outlined"
            >
              <Stack spacing={1} alignItems="center" justifyContent="center">
                <Typography
                  display="flex"
                  alignItems="center"
                  gap={1}
                  variant="h5"
                  fontWeight="bold"
                >
                  ₹-7752<Typography variant="body1">(-9.41%)</Typography>
                </Typography>
                <Typography variant="h6">Max Loss</Typography>
              </Stack>
            </Card>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4, lg: 2 }}>
            <Card
              sx={{
                width: "100%",
                padding: 2,
                borderRadius: 2,
                backgroundColor: alpha(theme.palette.success.main, 0.1),
                border: `1px solid ${theme.palette.success.light}`,
                color: alpha(theme.palette.success.main, 1),
              }}
              variant="outlined"
            >
              <Stack spacing={1} alignItems="center" justifyContent="center">
                <Typography
                  display="flex"
                  alignItems="center"
                  gap={1}
                  variant="h5"
                  fontWeight="bold"
                >
                  77% <Typography variant="body1">(17)</Typography>
                </Typography>
                <Typography variant="h6">Win% (Days)</Typography>
              </Stack>
            </Card>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4, lg: 2 }}>
            <Card
              sx={{
                width: "100%",
                padding: 2,
                borderRadius: 2,
                backgroundColor: alpha(theme.palette.error.main, 0.1),
                border: `1px solid ${theme.palette.error.light}`,
                color: alpha(theme.palette.error.main, 1),
              }}
              variant="outlined"
            >
              <Stack spacing={1} alignItems="center" justifyContent="center">
                <Typography
                  display="flex"
                  alignItems="center"
                  gap={1}
                  variant="h5"
                  fontWeight="bold"
                >
                  23%<Typography variant="body1">(5)</Typography>
                </Typography>
                <Typography variant="h6">Loss% (Days)</Typography>
              </Stack>
            </Card>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4, lg: 2 }}>
            <Card
              sx={{
                width: "100%",
                padding: 2,
                borderRadius: 2,
                backgroundColor: alpha(theme.palette.warning.main, 0.1),
                border: `1px solid ${theme.palette.warning.light}`,
                color: alpha(theme.palette.warning.main, 1),
              }}
              variant="outlined"
            >
              <Stack spacing={1} alignItems="center" justifyContent="center">
                <Typography
                  display="flex"
                  alignItems="center"
                  gap={1}
                  variant="h5"
                  fontWeight="bold"
                >
                  ₹8052<Typography variant="body1">(9.78%)</Typography>
                </Typography>
                <Typography variant="h6">Avg Monthly Profit</Typography>
              </Stack>
            </Card>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4, lg: 2 }}>
            <Card
              sx={{
                width: "100%",
                padding: 2,
                borderRadius: 2,
                backgroundColor: alpha(theme.palette.success.main, 0.1),
                border: `1px solid ${theme.palette.success.light}`,
                color: alpha(theme.palette.success.main, 1),
              }}
              variant="outlined"
            >
              <Stack spacing={1} alignItems="center" justifyContent="center">
                <Typography
                  display="flex"
                  alignItems="center"
                  gap={1}
                  variant="h5"
                  fontWeight="bold"
                >
                  ₹1499<Typography variant="body1">(1.82%)</Typography>
                </Typography>
                <Typography variant="h6">Avg Profit on Win Days</Typography>
              </Stack>
            </Card>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4, lg: 2 }}>
            <Card
              sx={{
                width: "100%",
                minHeight: "100%",
                padding: 2,
                borderRadius: 2,
                backgroundColor: alpha(theme.palette.error.main, 0.1),
                border: `1px solid ${theme.palette.error.light}`,
                color: alpha(theme.palette.error.main, 1),
              }}
              variant="outlined"
            >
              <Stack spacing={1} alignItems="center" justifyContent="center">
                <Typography
                  display="flex"
                  alignItems="center"
                  gap={1}
                  variant="h5"
                  fontWeight="bold"
                >
                  ₹-3431 <Typography variant="body1">(-4.17%)</Typography>
                </Typography>
                <Typography variant="h6">Avg Loss on Loss Days</Typography>
              </Stack>
            </Card>
          </Grid2>

          {show && (
            <>
              <Grid2 size={{ xs: 12, md: 4, lg: 2 }}>
                <Card
                  sx={{
                    width: "100%",
                    minHeight: "100%",
                    padding: 2,
                    borderRadius: 2,
                    backgroundColor: alpha(theme.palette.error.main, 0.1),
                    border: `1px solid ${theme.palette.error.light}`,
                    color: alpha(theme.palette.error.main, 1),
                  }}
                  variant="outlined"
                >
                  <Stack
                    spacing={1}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography
                      display="flex"
                      alignItems="center"
                      gap={1}
                      variant="h5"
                      fontWeight="bold"
                    >
                      ₹-12570<Typography variant="body1">(-15.27%)</Typography>
                    </Typography>
                    <Typography
                      display="flex"
                      alignItems="center"
                      gap={1}
                      variant="h6"
                    >
                      Max Drawdown(MDD)
                      <Tooltip title="Click to read" placement="top">
                        <InfoOutlined />
                      </Tooltip>
                    </Typography>
                  </Stack>
                </Card>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4, lg: 2 }}>
                <Card
                  sx={{
                    width: "100%",
                    padding: 2,
                    borderRadius: 2,
                    backgroundColor: alpha(theme.palette.error.main, 0.1),
                    border: `1px solid ${theme.palette.error.light}`,
                    color: alpha(theme.palette.error.main, 1),
                  }}
                  variant="outlined"
                >
                  <Stack
                    spacing={1}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography
                      display="flex"
                      alignItems="center"
                      gap={1}
                      variant="h5"
                      fontWeight="bold"
                    >
                      11
                      <Typography variant="body1">
                        (8 Days - Running)
                      </Typography>
                    </Typography>
                    <Typography
                      display="flex"
                      alignItems="center"
                      gap={1}
                      variant="h6"
                    >
                      MDD Days
                      <Tooltip title="Click to read" placement="top">
                        <InfoOutlined />
                      </Tooltip>
                    </Typography>
                  </Stack>
                </Card>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4, lg: 2 }}>
                <Card
                  sx={{
                    width: "100%",
                    padding: 2,
                    borderRadius: 2,
                    backgroundColor: alpha(theme.palette.success.main, 0.1),
                    border: `1px solid ${theme.palette.success.light}`,
                    color: alpha(theme.palette.success.main, 1),
                  }}
                  variant="outlined"
                >
                  <Stack
                    spacing={1}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography
                      display="flex"
                      alignItems="center"
                      gap={1}
                      variant="h5"
                      fontWeight="bold"
                    >
                      NA<Typography variant="body1">{""}</Typography>
                    </Typography>
                    <Typography variant="h6">Return to MDD Ratio</Typography>
                  </Stack>
                </Card>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4, lg: 2 }}>
                <Card
                  sx={{
                    width: "100%",
                    padding: 2,
                    borderRadius: 2,
                    backgroundColor: alpha(theme.palette.success.main, 0.1),
                    border: `1px solid ${theme.palette.success.light}`,
                    color: alpha(theme.palette.success.main, 1),
                  }}
                  variant="outlined"
                >
                  <Stack
                    spacing={1}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography
                      display="flex"
                      alignItems="center"
                      gap={1}
                      variant="h5"
                      fontWeight="bold"
                    >
                      10 Days<Typography variant="body1">{""}</Typography>
                    </Typography>
                    <Typography variant="h6">Max Winning Streak</Typography>
                  </Stack>
                </Card>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4, lg: 2 }}>
                <Card
                  sx={{
                    width: "100%",
                    padding: 2,
                    borderRadius: 2,
                    backgroundColor: alpha(theme.palette.error.main, 0.1),
                    border: `1px solid ${theme.palette.error.light}`,
                    color: alpha(theme.palette.error.main, 1),
                  }}
                  variant="outlined"
                >
                  <Stack
                    spacing={1}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography
                      display="flex"
                      alignItems="center"
                      gap={1}
                      variant="h5"
                      fontWeight="bold"
                    >
                      11<Typography variant="body1">(3 Days)</Typography>
                    </Typography>
                    <Typography
                      display="flex"
                      alignItems="center"
                      gap={1}
                      variant="h6"
                    >
                      Max Losing Streak
                      <Tooltip title="Click to read" placement="top">
                        <InfoOutlined />
                      </Tooltip>
                    </Typography>
                  </Stack>
                </Card>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4, lg: 2 }}>
                <Card
                  sx={{
                    width: "100%",
                    padding: 2,
                    borderRadius: 2,
                    backgroundColor: alpha(theme.palette.success.main, 0.1),
                    border: `1px solid ${theme.palette.success.light}`,
                    color: alpha(theme.palette.success.main, 1),
                  }}
                  variant="outlined"
                >
                  <Stack
                    spacing={1}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography
                      display="flex"
                      alignItems="center"
                      gap={1}
                      variant="h5"
                      fontWeight="bold"
                    >
                      NA <Typography variant="body1">{""}</Typography>
                    </Typography>
                    <Typography variant="h6">Expectancy</Typography>
                  </Stack>
                </Card>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4, lg: 2 }}>
                <Card
                  sx={{
                    width: "100%",
                    padding: 2,
                    borderRadius: 2,
                    backgroundColor: alpha(theme.palette.success.main, 0.1),
                    border: `1px solid ${theme.palette.success.light}`,
                    color: alpha(theme.palette.success.main, 1),
                  }}
                  variant="outlined"
                >
                  <Stack
                    spacing={1}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography
                      display="flex"
                      alignItems="center"
                      gap={1}
                      variant="h5"
                      fontWeight="bold"
                    >
                      2 Times <Typography variant="body1">{""}</Typography>
                    </Typography>
                    <Typography variant="h6">3 Winning Streak</Typography>
                  </Stack>
                </Card>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4, lg: 2 }}>
                <Card
                  sx={{
                    width: "100%",
                    padding: 2,
                    borderRadius: 2,
                    backgroundColor: alpha(theme.palette.success.main, 0.1),
                    border: `1px solid ${theme.palette.success.light}`,
                    color: alpha(theme.palette.success.main, 1),
                  }}
                  variant="outlined"
                >
                  <Stack
                    spacing={1}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography
                      display="flex"
                      alignItems="center"
                      gap={1}
                      variant="h5"
                      fontWeight="bold"
                    >
                      1 Times<Typography variant="body1">{""}</Typography>
                    </Typography>
                    <Typography variant="h6">10 Winning Streak</Typography>
                  </Stack>
                </Card>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4, lg: 2 }}>
                <Card
                  sx={{
                    width: "100%",
                    padding: 2,
                    borderRadius: 2,
                    backgroundColor: alpha(theme.palette.error.main, 0.1),
                    border: `1px solid ${theme.palette.error.light}`,
                    color: alpha(theme.palette.error.main, 1),
                  }}
                  variant="outlined"
                >
                  <Stack
                    spacing={1}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography
                      display="flex"
                      alignItems="center"
                      gap={1}
                      variant="h5"
                      fontWeight="bold"
                    >
                      2 Times<Typography variant="body1">{""}</Typography>
                    </Typography>
                    <Typography variant="h6">1 Losing Streak</Typography>
                  </Stack>
                </Card>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4, lg: 2 }}>
                <Card
                  sx={{
                    width: "100%",
                    padding: 2,
                    borderRadius: 2,
                    backgroundColor: alpha(theme.palette.error.main, 0.1),
                    border: `1px solid ${theme.palette.error.light}`,
                    color: alpha(theme.palette.error.main, 1),
                  }}
                  variant="outlined"
                >
                  <Stack
                    spacing={1}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography
                      display="flex"
                      alignItems="center"
                      gap={1}
                      variant="h5"
                      fontWeight="bold"
                    >
                      1 Times<Typography variant="body1">{""}</Typography>
                    </Typography>
                    <Typography variant="h6">3 Losing Streak</Typography>
                  </Stack>
                </Card>
              </Grid2>{" "}
            </>
          )}
        </Grid2>
        <Stack alignItems="center">
          <Button onClick={() => setShow(!show)}>
            {!show ? "Show more Stats" : "hide stats"}
          </Button>
        </Stack>
      </Card>
    </>
  );
};

export default FilteredDashboard;
