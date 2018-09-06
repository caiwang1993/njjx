import React from 'react';
import { Chart, Axis, Tooltip, Geom } from 'bizcharts';
import autoHeight from '../autoHeight';
import styles from '../index.less';


export default class Area extends React.Component {
  render(){

    const {data,height,marginTop,color,borderColor} = this.props;

    const cols={
      value: {
        min: 10000
      },
      year: {
        range: [ 0 , 1 ]
      }
    };
    return(
      <div className={styles.chart} style={{height,marginTop}}>
        <Chart height={height} data={data} scale={cols} forceFit>
          <Axis name="year" label={{
            textStyle: {
              fontSize: 14,
              fill: '#fff',
              textAlign: 'center',
            },
          }}/>
          <Axis name="value" label={{
            formatter: val => {
              return (val / 10000).toFixed(1) + 'k';
            },
            textStyle: {
              fontSize: 14,
              fill: '#fff',
              textAlign: 'center',
            },
          }}/>
          <Tooltip crosshairs={{type:'line'}}/>
          <Geom type="area" position="year*value" color={color}/>
          <Geom type="line" position="year*value" size={2} color={borderColor}/>
        </Chart>
      </div>
    )
  }
}
