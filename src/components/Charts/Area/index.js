import React from 'react';
import { Chart, Axis, Tooltip, Geom, Legend } from 'bizcharts';
import autoHeight from '../autoHeight';
import styles from '../index.less';


export default class Area extends React.Component {
  render(){

    const {data,height,marginTop,color,borderColor,min,title} = this.props;

    const cols={
      value: {
        min: min
      },
      year: {
        range: [ 0 , 1 ]
      }
    };
    /*const tooltip = [
      'x*y',
      (x, y) => ({
        name: x,
        value: y,
      }),
    ];*/
    const grid = {
      type:  'line', // 网格的类型
      lineStyle: {
        stroke: '#b1daff', // 网格线的颜色
        lineWidth: 0.5, // 网格线的宽度复制代码
        lineDash: [0, 0]
      },
    }
    return(
      <div className={styles.chart} style={{height,marginTop,position:"relative"}}>
        <div style={{textAlign:"center",fontSize:24}}>{title}</div>
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
          <Legend position="bottom"  textStyle={{
            fill: '#fff', // 文本的颜色
            fontSize: '12', // 文本大小
            fontWeight: 'bold', // 文本粗细
          }}/>
          <Tooltip crosshairs={{type:'line'}} showTitle={false}/>
          <Geom type="area" position="x*y" color={color}  shape="smooth"/>
          <Geom type="line" position="x*y" size={2} color={borderColor} tooltip={false} shape="smooth"/>
        </Chart>
      </div>
    )
  }
}
