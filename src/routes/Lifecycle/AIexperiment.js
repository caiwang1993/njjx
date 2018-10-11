import React ,{PureComponent} from 'react';
import {Row, Col, Card} from 'antd';
import {Gauge,Area,Bar,MiniProgress} from 'components/Charts';
import {Tabs, TabPane} from "components/Tabs";
import ProductionProgress from 'components/ProductionProgress';
import styles from './AIexperiment.less';
import CardHead from '../../assets/news_head.jpg';
import pro1 from '../../assets/12.jpg';
import check from '../../assets/check.png';
import exp from '../../assets/USCGexp.png';
import luji_exp from '../../assets/luji_exp.png';
import shichuang from '../../assets/shichuang_exp.png';
const exp1 = [
  {type:"原水实验", x: '1', y: 20 },
  {type:"原水实验", x: '2', y: 10},
  {type:"原水实验", x: '3', y: 50},
  {type:"原水实验", x: '4', y: 75 },
  {type:"原水实验", x: '5', y: 13},
  {type:"原水实验", x: '6', y: 24 },
  {type:"原水实验", x: '7', y: 13 },

  {type:"排放水实验", x: '1', y: 60},
  {type:"排放水实验", x: '2', y: 22},
  {type:"排放水实验", x: '3', y: 12},
  {type:"排放水实验", x: '4', y: 45},
  {type:"排放水实验", x: '5', y: 26},
  {type:"排放水实验", x: '6', y: 68},
  {type:"排放水实验", x: '7', y: 19},
];
const exp2 = [
  {type:"NB-200", x: '1', y: 20 },
  {type:"NB-200", x: '2', y: 10},
  {type:"NB-200", x: '3', y: 50},
  {type:"NB-200", x: '4', y: 75 },
  {type:"NB-200", x: '5', y: 13},
  {type:"NB-200", x: '6', y: 24 },
  {type:"NB-200", x: '7', y: 13 },

  {type:"NB-800", x: '1', y: 60},
  {type:"NB-800", x: '2', y: 22},
  {type:"NB-800", x: '3', y: 12},
  {type:"NB-800", x: '4', y: 45},
  {type:"NB-800", x: '5', y: 26},
  {type:"NB-800", x: '6', y: 68},
  {type:"NB-800", x: '7', y: 19},
];
export default class AIexperiment extends PureComponent{
  state={
    show:false,
    show_:false
  };
  show = ()=>{
    console.log(777);
    this.setState({
      show:true,
    })
  };
  show_ = ()=>{
    console.log(777);
    this.setState({
      show_:true,
    })
  };
  render() {
    const headStyle = {
      background: `url(${CardHead}) no-repeat`,
      backgroundSize: 'cover',
      borderBottom: 'none',
      backgroundPosition: '10px 4px',
    };
    return (
      <div>
        <Row>
          <Col span="21">

            <div className={styles.productName}>
              NiBallastTM BWMS压载水管理系统
              <span className={styles.productNum}>a2042</span>
            </div>


            <Card className={styles.cardBg}>
              <div className={styles.title}>IMO型式认可</div>
              <div style={{marginTop:15}}>
                <Tabs width={'20%'} show_={this.show_}>
                  <TabPane name="陆基实验">
                    <div>
                      <Tabs width={'20%'} height={660} show={this.show}>
                        <TabPane name="淡水" >

                          {/*淡水*/}
                          <Row gutter={16}>
                            <Col span="12">
                              <div className={styles.expUp}>
                                <Area
                                  title="大肠杆菌"
                                  min='0'
                                  data={exp1}
                                  color='type'
                                  borderColor="type"
                                  height={259}
                                  marginTop={10}
                                />
                                <div className={styles.standardLine}>
                                  标准线
                                </div>
                              </div>
                            </Col>
                            <Col span="12">
                              <div className={styles.expUp}>
                                <Bar
                                  title="霍乱菌"
                                  data={exp1}
                                  color={['type',
                                    ['l (270) 0:#042b33 0.5:#1ae3bf  1:#43ffba',
                                    'l (270) 0:#0084ff   1:#00e4ff']]}
                                  height={300}
                                  marginTop={10}
                                />
                                <div className={styles.standardLine}>
                                  标准线
                                </div>
                              </div>
                            </Col>
                          </Row>
                          <Row gutter={16}>
                            <Col span="8">
                              <div className={styles.expDown}>
                                <Bar
                                  title="肠球菌"
                                  transpose={true}
                                  height={250}
                                  data={exp1}
                                  color={['type',
                                    ['l (270) 0:#042b33 0.5:#1ae3bf  1:#43ffba',
                                      'l (270) 0:#0084ff   1:#00e4ff']]}
                                />
                                <div className={styles.standardLine1}>
                                  标准线
                                </div>
                              </div>
                            </Col>
                            <Col span="8">
                              <div className={styles.expDown}>
                                <Bar

                                  title="大于50微米的生物"
                                  data={exp1}
                                  color={['type',
                                    ['l (270) 0:#042b33 0.5:#1ae3bf  1:#43ffba',
                                      'l (270) 0:#0084ff   1:#00e4ff']]}
                                  height={280}
                                  marginTop={10}
                                />
                                <div className={styles.standardLine}>
                                  标准线
                                </div>
                              </div>
                            </Col>
                            <Col span="8">
                              <div className={styles.expDown}>
                                <Area
                                  title="大肠杆菌"
                                  min='0'
                                  data={exp1}
                                  color='type'
                                  borderColor="type"
                                  height={259}
                                  marginTop={10}
                                />
                                <div className={styles.standardLine}>
                                  标准线
                                </div>
                              </div>

                            </Col>
                          </Row>
                        </TabPane>

                        {/*低盐海水*/}
                        <TabPane name="低盐海水"  >
                          {
                            this.state.show ?
                              <div>
                                <Row gutter={16}>
                                  <Col span="12">
                                    <div className={styles.expUp}>

                                      <Area
                                        title="大肠杆菌"
                                        min='0'
                                        data={exp1}
                                        color='type'
                                        borderColor="type"
                                        height={259}
                                        marginTop={10}
                                      />
                                      <div className={styles.standardLine}>
                                        标准线
                                      </div>
                                    </div>
                                  </Col>
                                  <Col span="12">
                                    <div className={styles.expUp}>
                                      <Bar
                                        title="霍乱菌"
                                        data={exp1}
                                        color={['type',
                                          ['l (270) 0:#042b33 0.5:#1ae3bf  1:#43ffba',
                                            'l (270) 0:#0084ff   1:#00e4ff']]}
                                        height={300}
                                        marginTop={10}
                                      />
                                      <div className={styles.standardLine}>
                                        标准线
                                      </div>
                                    </div>
                                  </Col>
                                </Row>
                                <Row gutter={16}>
                                  <Col span="8">
                                    <div className={styles.expDown}>
                                      <Bar
                                        title="肠球菌"
                                        transpose={true}
                                        height={250}
                                        data={exp1}
                                        color={['type',
                                          ['l (270) 0:#042b33 0.5:#1ae3bf  1:#43ffba',
                                            'l (270) 0:#0084ff   1:#00e4ff']]}
                                      />
                                      <div className={styles.standardLine1}>
                                        标准线
                                      </div>
                                    </div>
                                  </Col>
                                  <Col span="8">
                                    <div className={styles.expDown}>
                                      <Bar

                                        title="大于50微米的生物"
                                        data={exp1}
                                        color={['type',
                                          ['l (270) 0:#042b33 0.5:#1ae3bf  1:#43ffba',
                                            'l (270) 0:#0084ff   1:#00e4ff']]}
                                        height={280}
                                        marginTop={10}
                                      />
                                      <div className={styles.standardLine}>
                                        标准线
                                      </div>
                                    </div>
                                  </Col>
                                  <Col span="8">
                                    <div className={styles.expDown}>
                                      <Area
                                        title="大肠杆菌"
                                        min='0'
                                        data={exp1}
                                        color='type'
                                        borderColor="type"
                                        height={259}
                                        marginTop={10}
                                      />
                                      <div className={styles.standardLine}>
                                        标准线
                                      </div>
                                    </div>

                                  </Col>
                                </Row>
                              </div> : ''
                          }

                        </TabPane>
                      </Tabs>
                    </div>
                  </TabPane>
                  <TabPane name="实船实验">
                    {
                      this.state.show_ ?
                        <div>
                          <Row gutter={16}>
                            <Col span="12">
                              <div className={styles.expUp}>

                                <Area
                                  title="大肠杆菌"
                                  min='0'
                                  data={exp2}
                                  color='type'
                                  borderColor="type"
                                  height={259}
                                  marginTop={10}
                                />
                                <div className={styles.standardLine}>
                                  标准线
                                </div>
                              </div>
                            </Col>
                            <Col span="12">
                              <div className={styles.expUp}>
                                <Bar
                                  title="霍乱菌"
                                  data={exp2}
                                  color={['type',
                                    ['l (270) 0:#042b33 0.5:#1ae3bf  1:#43ffba',
                                      'l (270) 0:#0084ff   1:#00e4ff']]}
                                  height={300}
                                  marginTop={10}
                                />
                                <div className={styles.standardLine}>
                                  标准线
                                </div>
                              </div>
                            </Col>
                          </Row>
                          <Row gutter={16}>
                            <Col span="8">
                              <div className={styles.expDown}>
                                <Bar
                                  title="肠球菌"
                                  transpose={true}
                                  height={250}
                                  data={exp2}
                                  color={['type',
                                    ['l (270) 0:#042b33 0.5:#1ae3bf  1:#43ffba',
                                      'l (270) 0:#0084ff   1:#00e4ff']]}
                                />
                                <div className={styles.standardLine1}>
                                  标准线
                                </div>
                              </div>
                            </Col>
                            <Col span="8">
                              <div className={styles.expDown}>
                                <Bar

                                  title="大于50微米的生物"
                                  data={exp2}
                                  color={['type',
                                    ['l (270) 0:#042b33 0.5:#1ae3bf  1:#43ffba',
                                      'l (270) 0:#0084ff   1:#00e4ff']]}
                                  height={280}
                                  marginTop={10}
                                />
                                <div className={styles.standardLine}>
                                  标准线
                                </div>
                              </div>
                            </Col>
                            <Col span="8">
                              <div className={styles.expDown}>
                                <Area
                                  title="大肠杆菌"
                                  min='0'
                                  data={exp2}
                                  color='type'
                                  borderColor="type"
                                  height={259}
                                  marginTop={10}
                                />
                                <div className={styles.standardLine}>
                                  标准线
                                </div>
                              </div>

                            </Col>
                          </Row>
                        </div> : ''
                    }
                  </TabPane>

                </Tabs>
              </div>
            </Card>
          </Col>
          <Col span="3">


            <div>
              <div  className={styles.bigPic}>
                <img src={pro1} alt=""/>
              </div>
            </div>
          </Col>
          <Col span="3">


            <Card className={styles.USCG}>
              <div className={styles.title}>USCG型式认可</div>

              <div style={{paddingLeft:30,marginTop:40,position:'relative'}}>
                <ProductionProgress type="vertical" progress={33} active={true} />
                <div style={{position:'absolute',left:50,top:0}}>
                  <img src={check}  />
                  <span className={styles.USCGtitle}>资料审查</span>
                </div>

                <div style={{position:'absolute',left:50,top:150}}>
                  <img src={exp}  />
                  <span className={styles.USCGtitle}>部件实验</span>
                </div>

                <div style={{position:'absolute',left:50,top:300}}>
                  <img src={luji_exp}  />
                  <span className={styles.USCGtitle}>陆基实验</span>
                </div>

                <div style={{position:'absolute',left:50,top:470}}>
                  <img src={shichuang}  />
                  <span className={styles.USCGtitle}>实船实验</span>
                </div>
              </div>

            </Card>
          </Col>
        </Row>
        {/*<Row>
          <Col span="24">
            <Card className={styles.lujiBg}>
              <div className={styles.title}>陆基产品试验</div>
              <div className={styles.experimentBox}>
                <Card className={styles.experimentBg}>
                  <div className={styles.expTitle}>大肠杆菌</div>
                  <div>
                    <Area
                      min='0'
                      data={exp1}
                      color='#00c6ff'
                      borderColor="#00c6ff"
                      height={300}
                      marginTop={30}
                    />
                  </div>
                </Card>

                <Card className={styles.experimentBg}>
                  <div className={styles.expTitle}>霍乱菌</div>
                  <div style={{marginTop:30}}>
                    <Bar
                      height={250}
                      data={exp1}
                      color={`l (270) 0:#042b33 0.5:#1ae3bf  1:#43ffba`}
                    />
                  </div>
                </Card>

                <Card className={styles.experimentBg}>
                  <div className={styles.expTitle}>大肠杆菌</div>
                  <div style={{marginTop:30}}>
                    <Bar
                      transpose={true}
                      height={250}
                      data={exp1}
                      color={`l (0) 0:#0084ff   1:#00e4ff`}
                    />
                  </div>
                </Card>

                <Card className={styles.experimentBg}>
                  <div className={styles.expTitle}>大于50微米的生物</div>
                  <div style={{marginTop:30}}>
                    <Bar
                      height={250}
                      data={exp1}
                      color={`l (270) 0:#042433  0.5:#1abbe3   1:#00fcff`}
                    />
                  </div>
                </Card>

                <Card className={styles.experimentBg}>
                  <div className={styles.expTitle}>大于10微米小于50微米的生物</div>
                  <div style={{marginTop:30}}>
                    <Bar
                      height={250}
                      data={exp1}
                      color={`l (270) 0:#0f9aea 1:#1cff8c`}
                    />
                  </div>
                </Card>
              </div>
            </Card>
          </Col>
        </Row>*/}
      </div>
    )
  }
}
