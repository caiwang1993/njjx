import React from 'react';
import { Chart, Axis, Tooltip, Geom } from 'bizcharts';
import autoHeight from '../autoHeight';
import styles from '../index.less';


export default class Area extends React.Component {
  render(){

    const {data,height,marginTop,color,borderColor,min} = this.props;

    const cols={
      value: {
        min: min
      },
      year: {
        range: [ 0 , 1 ]
      }
    };
    const tooltip = [
      'x*y',
      (x, y) => ({
        name: x,
        value: y,
      }),
    ];
    const grid = {
      type:  'line', // 网格的类型
      lineStyle: {
        stroke: '#b1daff', // 网格线的颜色
        lineWidth: 0.5, // 网格线的宽度复制代码
        lineDash: [0, 0]
      },
    }
    return(
      <div className={styles.chart} style={{height,marginTop,position:"relative",left:-35}}>
        <Chart height={height} data={data} scale={cols} forceFit>
          <Axis name="x" label={{
            textStyle: {

              fill: '#fff',
              textAlign: 'center',
            },
          }}/>
          <Axis name="y"
                grid={grid}
                label={{
            textStyle: {

              fill: '#fff',
              textAlign: 'center',
            },

          }}/>
          <Tooltip crosshairs={{type:'line'}} showTitle={false}/>
          <Geom type="area" position="x*y" color={color} tooltip={tooltip} shape='smooth'/>
          <Geom type="line" position="x*y" size={2} color={borderColor} tooltip={false} shape='smooth'/>
        </Chart>
      </div>
    )
  }
}
