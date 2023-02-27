import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Pie from 'react-native-pie';

function Piegraf(props) {
    const { radius, innerRadius, backgroundColor, sections } = props;
    return (
        <Pie
        radius={27}
        innerRadius={17}
            sections={sections}
            backgroundColor={backgroundColor}
        />
    );
};

export default Piegraf;
