import React, { PureComponent } from "react";
import {
	PieChart,
	Pie,
	Sector,
	ResponsiveContainer,
	Legend,
	Tooltip,
} from "recharts";
import { CustomTooltip } from "./custom-tooltip";

const data = [
	{ name: "Transport", value: 576 },
	{ name: "Shopping", value: 1230 },
	{ name: "Food", value: 1500 },
	{ name: "Invoices", value: 1340 },
];

const renderActiveShape = (props: any) => {
	const RADIAN = Math.PI / 180;
	const {
		cx,
		cy,
		midAngle,
		innerRadius,
		outerRadius,
		startAngle,
		endAngle,
		fill,
		payload,
		percent,
		value,
	} = props;
	const sin = Math.sin(-RADIAN * midAngle);
	const cos = Math.cos(-RADIAN * midAngle);
	const sx = cx + (outerRadius + 10) * cos;
	const sy = cy + (outerRadius + 10) * sin;
	const mx = cx + (outerRadius + 30) * cos;
	const my = cy + (outerRadius + 30) * sin;
	const ex = mx + (cos >= 0 ? 1 : -1) * 22;
	const ey = my;
	const textAnchor = cos >= 0 ? "start" : "end";

	return (
		<g>
			<text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
				{payload.name}
			</text>
			<Sector
				cx={cx}
				cy={cy}
				innerRadius={innerRadius}
				outerRadius={outerRadius}
				startAngle={startAngle}
				endAngle={endAngle}
				fill={fill}
			/>
			<Sector
				cx={cx}
				cy={cy}
				startAngle={startAngle}
				endAngle={endAngle}
				innerRadius={outerRadius + 6}
				outerRadius={outerRadius + 10}
				fill={fill}
			/>
			{/* <path
				d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
				stroke={fill}
				fill="none"
			/> */}
			{/* <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" /> */}
			<text x={ex} y={ey} textAnchor={textAnchor} fill="#333">
				R$ {value}
			</text>
		</g>
	);
};

export class ExpensesChart extends PureComponent {
	static demoUrl =
		"https://codesandbox.io/s/pie-chart-with-customized-active-shape-y93si";

	state = {
		activeIndex: 0,
	};

	onPieEnter = (_: any, index: number) => {
		this.setState({
			activeIndex: index,
		});
	};

	render() {
		return (
			<ResponsiveContainer height={500}>
				<PieChart>
					<Pie
						data={data}
						cx="50%"
						cy="50%"
						dataKey="value"
						fill="#000"
						innerRadius={90}
						outerRadius={100}
						activeIndex={this.state.activeIndex}
						onMouseEnter={this.onPieEnter}
						activeShape={renderActiveShape}
					/>
					<Legend
						iconSize={10}
						iconType="circle"
						align="center"
						verticalAlign="bottom"
					/>
				</PieChart>
			</ResponsiveContainer>
		);
	}
}
