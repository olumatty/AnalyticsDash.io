import { SlWallet } from "react-icons/sl";
import "./Chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { BsArrowDownRight } from "react-icons/bs";
import { AiOutlineProduct } from "react-icons/ai";

const Chart = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <main className="chart-container">
      <div className="dashboard-text">
        <h3> Dashboard</h3>
        <p>Welcome back , Olumatty</p>
      </div>

      <div className="charts">
        <div className="Simple_chart">
          <div className="Simple_text">
            Expenses <SlWallet />
          </div>
          <h3>$3000.00</h3>
          <ResponsiveContainer idth="80%" height={300}>
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="Bar_chart">
          <div className="Bar_text">
            Expenses <BsArrowDownRight/>
          </div>
          <h3>$4200.30</h3>
          <ResponsiveContainer width="95%" height={300}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
        </div>

        <div className="Stacked_chart">
          <div className="Stacked_text">
           Sales <AiOutlineProduct/>
          </div>
          <h3>$5200.00</h3>
          <ResponsiveContainer width="98%" height={300}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv"  fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
        </div>
      </div>
    </main>
  );
};

export default Chart;
