
import React ,{PureComponent} from 'react';
import {Row,Col, Card, Select} from 'antd';
import { Circle } from 'rc-progress';
import styles from './AIproduction.less';
import start from '../../assets/start.png';
import product from '../../assets/product.png';
import product_ from '../../assets/product_.png';
import structure from '../../assets/structure.png';
import structure_ from '../../assets/structure_.png';
import all from '../../assets/all.png';
import all_ from '../../assets/all_.png';
import ProductionProgress from 'components/ProductionProgress';
import MonitorStatus from 'components/MonitorStatus';
import {Pie} from 'components/Charts';
const Option = Select.Option;
const monitor = [];
const bed=[];
for(let i =0;i<9;i++){
  monitor.push({
    name:`零件${i+1}`,
    value:Math.floor(Math.random()*100)
  })
}
for(let i =0;i<5;i++){
  bed.push({
    name:`零件${i+1}`,
    value:Math.floor(Math.random()*100),
    status:Math.floor(Math.random()*4+1)
  })
}

export default class AImonitor extends PureComponent{
  render() {
    const progress=30;
    return (
      <div>
        <Row>
          <Col span={24}>
            <Card className={styles.AImonitorBg}>
              <div className={styles.title}>生产车间</div>
              <div className={styles.type}>
                <span>型号:</span>
               {/* <span style={{marginLeft:15,color:'#00f5fe'}}>a2402</span>*/}
                <Select className={styles.productSelect}
                        defaultValue="a0052"
                        style={{width:150,background:'transparent'}}
                        dropdownStyle={{background:'transparent',color:'#00fff6'}}
                >
                  <Option value="a0051">a0051</Option>
                  <Option value="a0052">a0052</Option>
                  <Option value="a0053">a0053</Option>
                </Select>
              </div>
              <div style={{marginTop:44,position:'relative'}}>
                <ProductionProgress
                  width="1718px"
                  progress={progress}
                  active={true}/>
                <div style={{position:'absolute',left:-21}}>
                  <img src={start}  />
                </div>

                <div style={{position:'absolute',left:535}}>
                  {
                    progress > 33 ?
                      <img src={product}  /> : <img src={product_} alt=""/>
                  }

                </div>

                <div style={{position:'absolute',left:1095}}>
                  {
                    progress > 66 ?
                      <img src={structure}  /> : <img src={structure_} alt=""/>
                  }
                </div>

                <div style={{position:'absolute',left:1675}}>
                  {
                    progress === 100 ?
                      <img src={all}  /> : <img src={all_} alt=""/>
                  }
                </div>

              </div>
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Card className={styles.monitorBg}>
              <div className={styles.title}>零件使用监测</div>
              {
                monitor.map((item)=>{
                  return(
                    <div style={{marginTop:30}}>
                      <ProductionProgress
                        width="408px"
                        progress={item.value}
                        title={item.name}
                        percent={`${item.value}%`}
                        active={true}/>
                    </div>
                  )
                })
              }
              {/*<div style={{marginTop:30}}>
                <ProductionProgress
                  width="408px"
                  progress={80}
                  title='零件1'
                  percent={`80%`}
                  active={true}/>
              </div>*/}
            </Card>
          </Col>
          <Col span={8}>
            <Card className={styles.monitorBg}>
              <div className={styles.title}>机床使用监测</div>
              {
                bed.map(item=>{
                  return(
                    <div  className={styles.bedMonitor}>
                      <ProductionProgress
                        width="208px"
                        progress={item.value}
                        title={item.name}
                        percent={`${item.value}%`}
                        active={true}/>
                      <div className={styles.status}>
                        <MonitorStatus
                          title={
                            item.status ===1 &&'正常运行' ||
                            item.status ===2 &&'维护保养' ||
                            item.status ===3 &&'停机待料' ||
                            item.status ===4 &&'故障'
                          }
                          status={
                            item.status ===1 &&'success' ||
                            item.status ===2 &&'warning' ||
                            item.status ===3 &&'stop' ||
                            item.status ===4 &&'error'
                          }
                        />
                      </div>
                    </div>
                  )
                })
              }

            </Card>
          </Col>
          <Col span={8}>
            <Card className={styles.monitorBg}>
              <div className={styles.title}>机器使用监测</div>
              <Row gutter={16}>
                <Col span={12}>
                  <div className={styles.machine}>
                    <span>机器1</span>
                    <div className={styles.machineStatus}>
                      <MonitorStatus
                        title={'正常运行'}
                        status={'success'}
                      />
                    </div>
                    <div className={styles.circle}>
                      <Pie
                        animate={true}
                        color={`l (0) 0:#46f79c   1:#45cbfa`}
                        percent={70}
                        total="70%"
                        subTitle='使用率'
                        height={130}
                        lineWidth={2}
                      />
                    </div>
                  </div>
                </Col>
                <Col span={12}>
                  <div className={styles.machine}>
                    <span>机器2</span>
                    <div className={styles.machineStatus}>
                      <MonitorStatus
                        title={'故障'}
                        status={'error'}
                      />
                    </div>
                    <div className={styles.circle}>
                      <Pie
                        animate={true}
                        color={`l (0) 0:#46f79c   1:#45cbfa`}
                        percent={70}
                        total="70%"
                        subTitle='使用率'
                        height={130}
                        lineWidth={2}
                      />
                    </div>
                  </div>
                </Col>

                <Col span={12}>
                  <div className={styles.machine}>
                    <span>机器3</span>
                    <div className={styles.machineStatus}>
                      <MonitorStatus
                        title={'维护保养'}
                        status={'warning'}
                      />
                    </div>
                    <div className={styles.circle}>
                      <Pie
                        animate={true}
                        color={`l (0) 0:#46f79c   1:#45cbfa`}
                        percent={70}
                        total="70%"
                        subTitle='使用率'
                        height={130}
                        lineWidth={2}
                      />
                    </div>
                  </div>
                </Col>

                <Col span={12}>
                  <div className={styles.machine}>
                    <span>机器4</span>
                    <div className={styles.machineStatus}>
                      <MonitorStatus
                        title={'停机待料'}
                        status={'stop'}
                      />
                    </div>
                    <div className={styles.circle}>
                      <Pie
                        animate={true}
                        color={`l (0) 0:#46f79c   1:#45cbfa`}
                        percent={70}
                        total="70%"
                        subTitle='使用率'
                        height={130}
                        lineWidth={2}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

      </div>
    )
  }
}

