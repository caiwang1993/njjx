import React ,{PureComponent} from 'react';
import {Row, Col, Card} from 'antd';
import {Gauge,Area,Bar,MiniProgress} from 'components/Charts';
import styles from './AIexperiment.less';
import CardHead from '../../assets/news_head.jpg';
import pro1 from '../../assets/pro1.png';
const exp1 = [
  { x: '1', y: 20 },
  { x: '2', y: 10 },
  { x: '3', y: 50 },
  { x: '4', y: 75 },
  { x: '5', y: 13 },
  { x: '6', y: 24 },
  { x: '7', y: 13 },
];
export default class AIexperiment extends PureComponent{
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
          <Col span="14">
            {/*需要一个完整的框子*/}
            <Card className={styles.cardBg}>
              <div className={styles.title}>美国USCG实验</div>
              <div className={styles.gaugeBox}>
                <div className={styles.gaugeBox1} style={{marginTop:'20px'}}>
                  <Gauge
                    percent={87}
                    height={214}
                    min="0"
                    max="100"
                    tickInterval="10"
                    color="#037eed" title="流量"

                  />
                </div>

                <div className={styles.gaugeBox1} style={{marginTop:'20px'}}>
                  <Gauge
                    end={[1, 0.965]}
                    percent={40}
                    height={214}
                    min="0"
                    max="100"
                    tickInterval="10"
                    color="#05f248"
                    title="压力"
                  />
                </div>

                <div className={styles.gaugeBox1} style={{marginTop:'20px'}}>
                  <Gauge
                    end={[1, 0.965]}
                    percent={50}
                    height={214}
                    min="0"
                    max="100"
                    tickInterval="10"
                    color="#eef30c"
                    title="压降"

                  />
                </div>
              </div>
            </Card>
          </Col>
          <Col span="10">
            <div className={styles.productName}>NiBallastTM BWMS压载水管理系统</div>
            <span className={styles.productNum}>a2042</span>

            <div style={{height:'342px'}}>
              <div  className={styles.bigPic}>
                <img src={pro1} alt=""/>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
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
        </Row>
      </div>
    )
  }
}
