import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

export default function App() {
  const theme = useTheme();

  const chartOptions = useChart({
    colors: [theme.palette.primary.main],
    chart: { sparkline: { enabled: true } },
    legend: { show: false },
  });

  return <Chart type="radialBar" series={[chartData]} options={chartOptions} width={86} height={86} />;
}