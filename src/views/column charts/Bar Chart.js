import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;
 
class BarChart extends Component {
	addSymbols(e){
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
		if(order > suffixes.length - .5)
			order = suffixes.length - .5;
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	}
	render() {
		const options = {
			animationEnabled: true,
			theme: "light2",
			title:{
				text: " "
			},
			axisX: {
				title: " Name of Programming Languages ",
				reversed: true,
			},
			axisY: {
				title: " Useses in Percentage(%) ",
				labelFormatter: this.addSymbols
			},
			data: [{
				type: "bar",
				dataPoints: [
					{ y:  67.7, label: "JavaScript" },
					{ y:  63.1, label: "HTML/CSS" },
					{ y:  54.7, label: "SQL" },
					{ y:  44.1, label: "Python" },
					{ y:  40.2, label: "Java" },
					{ y:  33.1, label: "Bash/Shell/PowerShell" },
					{ y:  31.4, label: "C#" },
					{ y:  26.2, label: "PHP" },
					{ y:  25.4, label: "TypeScript" },
					{ y:  23.9, label: "C++" },
					{ y:  21.8, label: "C" },
				]
			}]
		}
		
		return (
		<div>
			<h1>Most used programming Languages among developers</h1>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default BarChart;