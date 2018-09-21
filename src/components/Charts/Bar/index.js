import React, { Component } from 'react';
import { Chart, Axis, Tooltip, Geom, Coord} from 'bizcharts';
import Debounce from 'lodash-decorators/debounce';
import Bind from 'lodash-decorators/bind';
import autoHeight from '../autoHeight';
import styles from '../index.less';

@autoHeight()
class Bar extends Component {
  state = {
    autoHideXLabels: false,
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  handleRoot = n => {
    this.root = n;
  };

  handleRef = n => {
    this.node = n;
  };

  @Bind()
  @Debounce(400)
  resize() {
    if (!this.node) {
      return;
    }
    const canvasWidth = this.node.parentNode.clientWidth;
    const { data = [], autoLabel = true } = this.props;
    if (!autoLabel) {
      return;
    }
    const minWidth = data.length * 30;
    const { autoHideXLabels } = this.state;

    if (canvasWidth <= minWidth) {
      if (!autoHideXLabels) {
        this.setState({
          autoHideXLabels: true,
        });
      }
    } else if (autoHideXLabels) {
      this.setState({
        autoHideXLabels: false,
      });
    }
  }

  render() {
    const {
      height,
      title,
      forceFit = true,
      data,
      color = '#42febb',
      padding,
      transpose=false,
    } = this.props;

    const { autoHideXLabels } = this.state;

    const scale = {
      x: {
        type: 'cat',
      },
      y: {
        min: 0,
      },
    };
    const label = {
      textStyle: {
        textAlign: 'center', // 文本对齐方向，可取值为： start center end
        fill: '#fff', // 文本的颜色
        fontSize: '12', // 文本大小
        fontWeight: 'bold', // 文本粗细
      },
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
    return (
      <div className={styles.chart} style={{ height }} ref={this.handleRoot}>
        <div ref={this.handleRef}>
          {title && <h4 style={{ marginBottom: 20 }}>{title}</h4>}
          <Chart
            scale={scale}
            height={title ? height - 41 : height}
            forceFit={forceFit}
            data={data}
            padding={padding || 'auto'}
          >
            {
              transpose ?
                <Coord transpose />:''
            }


            <Axis
              name="x"
              title={false}
              //label={autoHideXLabels ? false : {}}
              label={label}
              tickLine={autoHideXLabels ? false : {}}
            />
            <Axis grid={grid} name="y" min={0} label={label} />
            <Tooltip showTitle={false} crosshairs={false} />
            <Geom type="interval" position="x*y" color={color} tooltip={tooltip} />
          </Chart>
        </div>
      </div>
    );
  }
}

export default Bar;
