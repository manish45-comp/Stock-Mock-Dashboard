import { AppBar, Box, Card, Tab, Tabs, useTheme } from "@mui/material";
import { BarChart, LineChart } from "@mui/x-charts";
import React from "react";

const pData = [
  2400, 1400, -1500, 3000, 3500, 2500, 3800, 4000, 2700, 2300, 2400, 3100, 2800,
  2900, 2700, -1000, 3700, 3800, -1300, 54545, 4545, 4678, 24234, 2342, 574,
  4234, 9090, 3424,
];

const xLabels = [
  "Dec 11",
  "Dec 12",
  "Dec 13",
  "Dec 14",
  "Dec 15",
  "Dec 16",
  "Dec 17",
  "Dec 18",
  "Dec 19",
  "Dec 20",
  "Dec 21",
  "Dec 22",
  "Dec 23",
  "Dec 24",
  "Dec 25",
  "Dec 26",
  "Dec 27",
  "Dec 28",
  "Dec 29",
  "Dec 30",
  "Dec 31",
  "Jan 1",
  "Jan 2",
  "Jan 3",
  "Jan 4",
  "Jan 5",
];

const Charts = () => {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const barColors = pData.map((value) =>
    value < 0 ? "red" : theme.palette.primary.main
  );

  return (
    <Card>
      <Box sx={{ bgcolor: "background.paper" }}>
        <AppBar position="static" sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Profit" {...a11yProps(0)} />
            <Tab label="Cumulative Profit" {...a11yProps(1)} />
            <Tab label="Drawdown" {...a11yProps(2)} />
          </Tabs>
        </AppBar>

        <TabPanel value={value} index={0} dir={theme.direction}>
          <Box
            sx={{
              padding: 2,
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "start",
            }}
          >
            <BarChart
              height={400}
              series={[
                {
                  data: pData,
                  label: "Profit",
                  color: barColors,
                },
              ]}
              xAxis={[
                {
                  data: xLabels,
                  scaleType: "band",
                  label: "Days",
                },
              ]}
              yAxis={[
                {
                  max: 10000,
                  label: "Profit",
                  tickFormatter: (value) => `${value} units`,
                },
              ]}
              tooltip={{
                valueFormatter: (value) => `${value}`,
              }}
            />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <LineChart
            xAxis={[
              {
                data: [
                  1, 1, 2, 3, 3.5, 4, 5, 6, 6.3, 7, 8, 9, 10, 11, 12, 13, 14,
                  15, 16, 17, 18, 19, 20, 21, 25,
                ],
              },
            ]}
            series={[
              {
                data: [
                  2, 5.5, 2, 8.5, 1.5, 5, 3, 4, 6, 3, 5, 7, 6.5, 8, 2, 4.5, 3,
                  5.5, 6, 7, 9, 10, 11, 12, 13,
                ], // Y-axis data
                label: "Cumulative", // Label for the series
                color: "blue", // Color for the series
              },
            ]}
            height={300}
          />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <LineChart
            xAxis={[
              {
                data: [
                  1, 1, 2, 3, 3.5, 4, 5, 6, 6.3, 7, 8, 9, 10, 11, 12, 13, 14,
                  15, 16, 17, 18, 19, 20, 21, 25,
                ],
              },
            ]}
            series={[
              {
                data: [
                  2, 5.5, 2, 8.5, 1.5, 5, 3, 4, 6, 3, 5, 7, 6.5, 8, 2, 4.5, 3,
                  5.5, 6, 7, 9, 10, 11, 12, 13,
                ],
                label: "Drawdown", // Label for the series
                color: "red", // Color for the series
              },
            ]}
            height={300}
          />
        </TabPanel>
      </Box>
    </Card>
  );
};

export default Charts;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {children}
    </div>
  );
}
