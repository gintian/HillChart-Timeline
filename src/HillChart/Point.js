import React, { useState } from 'react'
import { Text, Group, Circle } from 'react-konva';

const Point = ({ x, y, radius, color, description, f, update }) => {
    const [coords, setcoords] = useState({ x: x, y: y });

    return (
        <Group>
            <Circle
                x={coords.x}
                y={coords.y}
                radius={radius}
                fill={color}
                stroke="black"
                strokeWidth={2}
                draggable
                onDragMove={(e) => {
                    let x = e.target.attrs.x;
                    let y = f(x);
                    e.target.attrs.y = y;
                    setcoords({ x: x, y: y });
                }}
                onDragEnd={() => {
                    update(coords.x, coords.y);
                }}
            />
            <Text
                text={description}
                x={coords.x + radius + 5}
                y={coords.y + radius}
            />
        </Group>
    );
};

export default Point;