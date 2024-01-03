import { BarChart } from '@mui/x-charts/BarChart';

const chartSetting = {
    xAxis: [
      {
        label: 'Experience',
      },
    ],
    width: 600,
    height: 400,
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
    return (
        <BarChart
            dataset={skillList}
            yAxis={[{ scaleType: 'band', dataKey: 'name'}]}
            bottomAxis={null}
            series={[{ dataKey: 'level', label: 'Experience'}]}
            layout="horizontal"
            {...chartSetting}
        />
    )
}

export default Skills;