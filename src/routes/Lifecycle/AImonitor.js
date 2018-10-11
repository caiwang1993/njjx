import React ,{PureComponent} from 'react';
import {Row, Col, Card,Table} from 'antd';
import {Tabs, TabPane} from "components/Tabs";
import vedio from '../../assets/vedio/v1.mp4';
import styles from './AImonitor.less';
import tmp from '../../assets/tep.png';
import wet from '../../assets/wet.png';
import mo from '../../assets/mo.png';
import N from '../../assets/N_.png';
import pressure from '../../assets/pressure.png';
import map from '../../assets/map.png';
import valveSuccess from '../../assets/valve_success.png';
import valveError from '../../assets/valve_error.png';
const columns = [{
  title: '数据源',
  dataIndex: 'source',
  key: 'source',
  className:styles.tableClass
}, {
  title: '状态',
  dataIndex: 'status',
  key: 'status',
  className:styles.tableClass
}, {
  title: '报警内容',
  dataIndex: 'content',
  key: 'content',
  className:styles.tableClass
},{
  title: '值',
  dataIndex: 'value',
  key: 'value',
  className:styles.tableClass
},{
  title: '报警时间',
  dataIndex: 'alarmTime',
  key: 'alarmTime',
  className:styles.tableClass
},{
  title: '标记为',
  dataIndex: 'mark',
  key: 'mark',
  className:styles.tableClass
}
];

const dataSource = [
  {
  key: '1',
  source: '默认',
  status: '触发',
  content: '电源故障',
  value:'1',
  alarmTime:'2018-08-12 08:39:19',
  mark:"确认",
}, {
  key: '2',
  source: '默认',
  status: '触发',
  content: '电源故障',
  value:'1',
  alarmTime:'2018-08-23 08:39:19',
  mark:"确认",
}
];

const shipInfo = [
  {
    name:'船名',
    value:'南极号'
},
  {
    name:'船籍港',
    value:'上海港'
  },
  {
    name:'吨位',
    value:'1500吨'
  },
  {
    name:'船舶种类',
    value:'货船'
  },
  {
    name:'运行情况',
    value:'运行良好'
  },
];
const valve = [

];
for(let i =0 ;i<23;i++){
  valve.push({
    name:'测试阀门监控',
    value:Math.floor(Math.random()*801+100),
    status:Math.floor(Math.random()*2+1)
  })
}
console.log(valve);
export default class AIproduction extends PureComponent{
  render() {
    return (
      <div className={styles.AImoitorBox} >

        {/*嵌入*/}
        <iframe style={{width:1960,height:980}}
                src="http://jsnj.yunzutai.com/app/main/devicesMonitor?id=6945" />

        {/*<Row gutter={16} className={styles.container}>

          <Col span={5} >
            <Row gutter={16}>
              <Col span={12}>
                <div className={styles.miniBox}>
                  <div>
                    <img src={tmp} alt=""/>
                  </div>
                  <div className={styles.tmp}>
                    <p>温度</p>
                    <p style={{color:'#00e4ff'}}>20℃</p>
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <div className={styles.miniBox}>
                  <div>
                    <img src={wet} alt=""/>
                  </div>
                  <div className={styles.tmp}>
                    <p>湿度</p>
                    <p style={{color:'#00ff7f'}}>20hPa</p>
                  </div>
                </div>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <div className={styles.miniBox}>
                  <div>
                    <img src={pressure} alt=""/>
                  </div>
                  <div className={styles.tmp}>
                    <p>压降</p>
                    <p style={{color:'#9473ff'}}>758</p>
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <div className={styles.miniBox}>
                  <div>
                    <img src={mo} alt=""/>
                  </div>
                  <div className={styles.tmp}>
                    <p>膜通量</p>
                    <p style={{color:'#fcba00'}}>488</p>
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <div className={styles.miniBox_}>
                  <div>
                    <img src={N} alt=""/>
                  </div>
                  <div className={styles.tmp}>
                    <p className={styles.N}>氮气饱和度</p>
                  </div>
                  <div style={{marginLeft:20,position:'relative',top:'4px'}}>
                    <p style={{color:'#00e4ff',fontSize:'30px'}}>52%</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Card className={styles.containerBg}>
                  <div className={styles.title}>船舶信息</div>
                  <div>
                    {
                      shipInfo.map(item=>{
                        return(
                        <Row className={styles.shipInfo}>
                          <Col span={12}>
                            <p>{item.name}</p>
                          </Col>
                          <Col span={12}>
                            <p style={{color:'#00e4ff'}}>{item.value}</p>
                          </Col>
                        </Row>
                        )
                      })
                    }
                    <Row className={styles.shipInfo}>
                      <Col span={12}>
                        <p>船名</p>
                      </Col>
                      <Col span={12}>
                        <p style={{color:'#00e4ff'}}>南极号</p>
                      </Col>
                    </Row>

                  </div>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Card className={styles.containerBg} style={{height:'330px'}}>
                  <div className={styles.title}>定位</div>
                  <div>
                    <img src={map} alt="" style={{width:330,height:235}}/>
                  </div>
                </Card>
              </Col>
            </Row>
          </Col>

          <Col span={14}>
            <div>
              <p className={styles.machineName}>NB-3000压载水处理装置远程监控维护管理系统</p>
            </div>
            <div style={{height:550,position:'relative'}}>
              <video autoPlay loop="loop" style={{width:'100%'}}>
                <source src={vedio} type="video/mp4" />
              </video>
              <p className={styles.vedioBox} style={{top:"170px",left:"25px" }}>1513m³/h</p>
              <p className={styles.vedioBox} style={{top:"210px",left:"25px" }}>0.346Mpa</p>
              <p className={styles.vedioBox} style={{top:"120px",left:"255px" }}>0.338Mpa</p>
              <p className={styles.vedioBox} style={{top:"130px",right:"25px" }}>31.3 Sm³/h</p>
              <p className={styles.vedioBox} style={{top:"190px",right:"25px" }}>0.450Mpa</p>
              <p className={styles.vedioBox} style={{top:"280px",right:"25px" }}>0.656Mpa</p>
            </div>
            <div>
              <Tabs height={265}>
                <TabPane name="当前报警">
                  <div>
                    <Table
                      dataSource={dataSource}
                      columns = {columns}
                      rowClassName={(record, index) => index % 2 ? styles.evenClass : styles.oddClass}
                    />
                  </div>
                </TabPane>
                <TabPane name="历史背景">
                  <div>暂无数据</div>
                </TabPane>
                <TabPane name="历史数据">
                  <div>暂无数据</div>
                </TabPane>
                <TabPane name="设备信息">
                  <div>暂无数据</div>
                </TabPane>
                <TabPane name="维保档案">
                  <div>暂无数据</div>
                </TabPane>
                <TabPane name="操作记录">
                  <div>暂无数据</div>
                </TabPane>
              </Tabs>
            </div>
          </Col>

          <Col span={5}>
            <Card className={styles.valveBox}>
              <div className={styles.title}>
                阀门监控
              </div>
              {
                valve.map(item=>{
                  return(
                    <Row className={styles.valveInfo}>
                      <Col span={12}>
                        <span>{item.name}</span>
                      </Col>
                      <Col span={12} style={{textAlign:'right'}}>
                        <span style={{color:'#00e4ff',}}>{item.value}</span>
                        <span>
                          {
                            item.status ===1 ?
                              <img src={valveSuccess}/> :
                                <img src={valveError}/>
                          }

                        </span>
                      </Col>
                    </Row>
                  )
                })
              }
            </Card>
          </Col>
        </Row>*/}
      </div>
    )
  }
}
