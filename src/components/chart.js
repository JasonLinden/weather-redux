import React, { Component } from "react";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from "lodash";

export function Chart(props) {
    function average(data) {
        return _.round(_.sum(data) / data.length);
    }

    return (
        <div>
            <Sparklines
                data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>
                {average(props.data)}
            </div>
        </div>
    );
};