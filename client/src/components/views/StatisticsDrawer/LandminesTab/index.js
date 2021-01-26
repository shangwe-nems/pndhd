import React from 'react';
import { Pie } from '@ant-design/charts';

export default function LandminesTab() {
    var data = [
        {
        type: 'Deminage Terminé',
        value: 27,
        },
        {
        type: 'Deminage en cours',
        value: 25,
        },
        {
        type: 'Deminage Programmé',
        value: 18,
        },
        {
        type: 'Deminage suspendu',
        value: 15,
        }
    ];

    var config = {
        appendPadding: 10,
        data: data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.8,
        label: {
        type: 'outer',
        content: '{name} {value}',
        },
        interactions: [{ type: 'pie-legend-active' }, { type: 'element-active' }],
    };

    return (
        <Pie {...config} />
    )
}
