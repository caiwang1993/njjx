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
  {type:"原水实验", x: '1', y: 0.91 },
  {type:"原水实验", x: '2', y: 0.96},
  {type:"原水实验", x: '3', y: 0.95},
  {type:"原水实验", x: '4', y: 0.89},
  {type:"原水实验", x: '5', y: 0.91},


  {type:"排放水实验", x: '1', y: 1},
  {type:"排放水实验", x: '2', y: 1},
  {type:"排放水实验", x: '3', y: 2},
  {type:"排放水实验", x: '4', y: 1},
  {type:"排放水实验", x: '5', y: 1},
];
const luji2 = [
  {type:"原水实验", x: '1', y: 0 },
  {type:"原水实验", x: '2', y: 0},
  {type:"原水实验", x: '3', y: 0},
  {type:"原水实验", x: '4', y: 0},
  {type:"原水实验", x: '5', y: 0},


  {type:"排放水实验", x: '1', y: 0},
  {type:"排放水实验", x: '2', y: 0},
  {type:"排放水实验", x: '3', y: 0},
  {type:"排放水实验", x: '4', y: 0},
  {type:"排放水实验", x: '5', y: 0},
];
const luji3 = [
  {type:"原水实验", x: '1', y: 34 },
  {type:"原水实验", x: '2', y: 35},
  {type:"原水实验", x: '3', y: 31},
  {type:"原水实验", x: '4', y: 31},
  {type:"原水实验", x: '5', y: 36},


  {type:"排放水实验", x: '1', y: 0},
  {type:"排放水实验", x: '2', y: 0},
  {type:"排放水实验", x: '3', y: 0},
  {type:"排放水实验", x: '4', y: 0},
  {type:"排放水实验", x: '5', y: 0},
];
const luji4 = [
  {type:"原水实验", x: '1', y: 3.9},
  {type:"原水实验", x: '2', y: 2.2},
  {type:"原水实验", x: '3', y: 3.0},
  {type:"原水实验", x: '4', y: 3.4},
  {type:"原水实验", x: '5', y: 4.0},


  {type:"排放水实验", x: '1', y: 0},
  {type:"排放水实验", x: '2', y: 0},
  {type:"排放水实验", x: '3', y: 0},
  {type:"排放水实验", x: '4', y: 0},
  {type:"排放水实验", x: '5', y: 0},
];
const luji5 = [
  {type:"原水实验", x: '1', y: 2.24 },
  {type:"原水实验", x: '2', y: 3.01},
  {type:"原水实验", x: '3', y: 3.0},
  {type:"原水实验", x: '4', y: 2.73},
  {type:"原水实验", x: '5', y: 3.27},


  {type:"排放水实验", x: '1', y: 0.1},
  {type:"排放水实验", x: '2', y: 0.23},
  {type:"排放水实验", x: '3', y: 0.6},
  {type:"排放水实验", x: '4', y: 0.3},
  {type:"排放水实验", x: '5', y: 0.2},
];
const luji1_ = [
  {type:"原水实验", x: '1', y: 1.50 },
  {type:"原水实验", x: '2', y: 1.79},
  {type:"原水实验", x: '3', y: 1.79},
  {type:"原水实验", x: '4', y: 1.80},
  {type:"原水实验", x: '5', y: 1.81},


  {type:"排放水实验", x: '1', y: 19},
  {type:"排放水实验", x: '2', y: 2},
  {type:"排放水实验", x: '3', y: 2},
  {type:"排放水实验", x: '4', y: 2},
  {type:"排放水实验", x: '5', y: 2},
];
const luji2_ = [
  {type:"原水实验", x: '1', y: 0 },
  {type:"原水实验", x: '2', y: 0},
  {type:"原水实验", x: '3', y: 0},
  {type:"原水实验", x: '4', y: 0},
  {type:"原水实验", x: '5', y: 0},


  {type:"排放水实验", x: '1', y: 0},
  {type:"排放水实验", x: '2', y: 0},
  {type:"排放水实验", x: '3', y: 0},
  {type:"排放水实验", x: '4', y: 0},
  {type:"排放水实验", x: '5', y: 0},
];
const luji3_ = [
  {type:"原水实验", x: '1', y: 63 },
  {type:"原水实验", x: '2', y: 62},
  {type:"原水实验", x: '3', y: 65},
  {type:"原水实验", x: '4', y: 67},
  {type:"原水实验", x: '5', y: 65},


  {type:"排放水实验", x: '1', y: 1},
  {type:"排放水实验", x: '2', y: 1},
  {type:"排放水实验", x: '3', y: 1},
  {type:"排放水实验", x: '4', y: 2},
  {type:"排放水实验", x: '5', y: 0},
];
const luji4_ = [
  {type:"原水实验", x: '1', y: 5.0 },
  {type:"原水实验", x: '2', y: 5.5},
  {type:"原水实验", x: '3', y: 6.1},
  {type:"原水实验", x: '4', y: 6.1},
  {type:"原水实验", x: '5', y: 3.8},


  {type:"排放水实验", x: '1', y: 0},
  {type:"排放水实验", x: '2', y: 0},
  {type:"排放水实验", x: '3', y: 0},
  {type:"排放水实验", x: '4', y: 0},
  {type:"排放水实验", x: '5', y: 0},
];
const luji5_ = [
  {type:"原水实验", x: '1', y: 4.24},
  {type:"原水实验", x: '2', y: 4.24},
  {type:"原水实验", x: '3', y: 4.63},
  {type:"原水实验", x: '4', y: 4.63},
  {type:"原水实验", x: '5', y: 5.06},


  {type:"排放水实验", x: '1', y: 0.57},
  {type:"排放水实验", x: '2', y: 0.57},
  {type:"排放水实验", x: '3', y: 0.88},
  {type:"排放水实验", x: '4', y: 0.88},
  {type:"排放水实验", x: '5', y: 0.46},
];

const exp2 = [
  {type:"NB-200", x: '1', y: 0 },
  {type:"NB-200", x: '2', y: 13},
  {type:"NB-200", x: '3', y: 12},


  {type:"NB-800", x: '1', y: 11},
  {type:"NB-800", x: '2', y: 12},
  {type:"NB-800", x: '3', y: 9},
];
const shichuan2 = [
  {type:"NB-200", x: '1', y: 0 },
  {type:"NB-200", x: '2', y: 0},
  {type:"NB-200", x: '3', y: 0},


  {type:"NB-800", x: '1', y: 0},
  {type:"NB-800", x: '2', y: 0},
  {type:"NB-800", x: '3', y: 0},
];
const shichuan3 = [
  {type:"NB-200", x: '1', y: 0},
  {type:"NB-200", x: '2', y: 0},
  {type:"NB-200", x: '3', y: 3},


  {type:"NB-800", x: '1', y: 0},
  {type:"NB-800", x: '2', y: 2},
  {type:"NB-800", x: '3', y: 7},
];
const shichuan4 = [
  {type:"NB-200", x: '1', y: 0},
  {type:"NB-200", x: '2', y: 0},
  {type:"NB-200", x: '3', y: 3},


  {type:"NB-800", x: '1', y: 0},
  {type:"NB-800", x: '2', y: 0},
  {type:"NB-800", x: '3', y: 0},
];
const shichuan5 = [
  {type:"NB-200", x: '1', y: 0.22},
  {type:"NB-200", x: '2', y: 0.46},
  {type:"NB-200", x: '3', y: 0.75},


  {type:"NB-800", x: '1', y: 1.9},
  {type:"NB-800", x: '2', y: 0},
  {type:"NB-800", x: '3', y: 2.6},
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
                                  data={luji2}
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
                                  data={luji3}
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
                                  data={luji4}
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
                                  title="10微米~50微米生物"
                                  min='0'
                                  data={luji5}
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
                                        data={luji1_}
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
                                        data={luji2_}
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
                                        data={luji3_}
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
                                        data={luji4_}
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
                                        title="10微米~50微米的生物"
                                        min='0'
                                        data={luji5_}
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
                                  data={shichuan2}
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
                                  data={shichuan3}
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
                                  data={shichuan4}
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
                                  title="10微米~50微米生物"
                                  min='0'
                                  data={shichuan5}
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
