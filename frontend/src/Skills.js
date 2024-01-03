import { common } from '@mui/material/colors';
import { useState } from 'react';
import { createTheme, useTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { BarChart } from '@mui/x-charts/BarChart';
import {
    blueberryTwilightPalette,
    mangoFusionPalette,
    cheerfulFiestaPalette,
  } from '@mui/x-charts/colorPalettes';

const chartSetting = {
    xAxis: [
      {
        label: 'Experience',
      },
    ],
    width: 600,
    height: 400,
  };

  const categories = {
    blueberryTwilight: blueberryTwilightPalette,
    mangoFusion: mangoFusionPalette,
    cheerfulFiesta: cheerfulFiestaPalette,
  };

const skillList = [
    {
        name: "Python",
        level: 3
    },
    {
        name: "Java",
        level: 2
    },
    {
        name: "JS",
        level: 2
    },
    {
        name: "C",
        level: 1
    },
    {
        name: "C#",
        level: 2
    },
    {
        name: "SQL",
        level: 2
    },
    {
        name: "Docker",
        level: 1
    },
]

const Skills = () => {
    const theme = useTheme();
    const [colorScheme, setColorScheme] = useState('blueberryTwilight');
    const [colorMode, setColorMode] = useState(theme.palette.mode);

    const newTheme = createTheme({ palette: { mode: colorMode } });
    return (
        <ThemeProvider theme={newTheme}>
            <Paper sx={{ width: '100%', p: 2 }} elevation={0}></Paper>
                <BarChart
                dataset={skillList}
                yAxis={[{ scaleType: 'band', dataKey: 'name'}]}
                colors={categories[colorScheme]}
                bottomAxis={null}
                series={[{ dataKey: 'level', label: 'Experience'}]}
                layout="horizontal"
                {...chartSetting}
                />
        </ThemeProvider>
    )
}

export default Skills;