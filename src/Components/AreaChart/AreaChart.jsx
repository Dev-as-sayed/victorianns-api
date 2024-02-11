import { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure/useAxiosSecure';

const AreaChart = ({name1, name2, contest}) => {
  const chartRef = useRef(null);

  const axiosSecure = useAxiosSecure();
  const url = '/getContestType';

  const {data: contestType = [] } = useQuery({
    queryKey: ['contestType'],
    queryFn: async() => {
      const res = await axiosSecure.get(url, {withCredentials: true})
      return res.data;
    }
  })
  console.log(contestType);

  useEffect(() => {
    const options = {
      series: [
        {
          name: `${name1}`,
          data: contest,
        },
        {
          name: `${name2}`,
          data: contest?.endDate,
        },
      ],
      chart: {
        height: 350,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2018-09-19T00:00:00.000Z',
          '2018-09-19T01:30:00.000Z',
          '2018-09-19T02:30:00.000Z',
          '2018-09-19T03:30:00.000Z',
          '2018-09-19T04:30:00.000Z',
          '2018-09-19T05:30:00.000Z',
          '2018-09-19T06:30:00.000Z',
        ],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    // Clean up the chart instance when the component is unmounted
    return () => {
      chart.destroy();
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return <div className='w-[30rem]' ref={chartRef}></div>;
};

export default AreaChart;
