import React, { Component } from 'react'
import { Stage, Layer, Rect, Shape, Group } from 'react-konva';
import { pow, e } from "mathjs"
import Point from './Point';


function createGuassian(amplitude, x0, sigmaX) {
	return (x) => {
		let exponent = -(
			(pow(x - x0, 2) / (2 * pow(sigmaX, 2)))
		);
		return amplitude * pow(e, exponent);
	}
}

const HillChartComponent = ({ width, height, points, update }) => {
	const gaussian = (x) => height - createGuassian(height / 2, width / 2, width / 4)(x) - 4;

	const DottedLine = () => {
		return (
			<Shape
				sceneFunc={(context, shape) => {
					context.beginPath();
					for (let i = height; i >= gaussian(width / 2); i -= 5) {
						context.lineTo(width / 2, i);
						context.moveTo(width / 2, i - 5);
						i -= 5;
					}

					context.fillStrokeShape(shape);
				}}
				stroke="#666666"
				strokeWidth={2}
			/>
		);
	};

	const HillLine = () => {
		return (
			<Shape
				sceneFunc={(context, shape) => {
					context.beginPath();
					for (let i = 1; i <= width; i++) {
						context.lineTo(i, gaussian(i));
					}
					context.fillStrokeShape(shape);
				}}
				stroke="#cccccc"
				strokeWidth={8}
			/>
		);
	};

	const Points = () => {
		return (
			<>
			{points
				.sort((a, b) => b.radius - a.radius)
				.map(point => {
					return <Point
						{...point}
						key={point.id}
						y={gaussian(point.x)}
						f={gaussian}
						update={(x, y) => {
							point.x = x;
							point.y = y;
							update(points);
						}}
					/>;
				})
			}
			</>
		);
	};

	return (
		<Stage width={width} height={height}>
			<Layer>
				<Group>
					<DottedLine />
					<HillLine />
					<Points />
				</Group>
			</Layer>
		</Stage>
	)
};

export default HillChartComponent;