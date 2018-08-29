import React, { PureComponent, Component } from 'react';
import { routerRedux, Route, Switch } from 'dva/router';
import { connect } from 'dva';
import { Input, Row, Card, Col, Carousel, Icon, Modal } from 'antd';
import CardHead from '../../assets/news_head.jpg';
import QueueAnim from 'rc-queue-anim';

import CardBody from '../../assets/card_body.png';
import honor from '../../assets/honor.png';
import honor1 from '../../assets/honor1.jpg';
import zizhi from '../../assets/zizhi.png';
import {
  ChartCard,
  yuan,
  MiniArea,
  MiniBar,
  MiniProgress,
  Field,
  Bar,
  Pie,
  TimelineChart,
} from 'components/Charts';
import Video from './Video';
import styles from './Windows.less';

/*import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"*/

const salesData = [
  { x: '1月', y: 662 },
  { x: '2月', y: 1071 },
  { x: '3月', y: 429 },
  { x: '4月', y: 737 },
  { x: '5月', y: 804 },
];

const salesPieData = [
  { x: '压载水管理系统', y: 4544 },
  { x: '全船污水', y: 3321 },
  { x: '动力系统轴舵系', y: 3113 },
  { x: '压力容器类', y: 2341 },
  { x: '特种装备', y: 1231 },
];

const develop = [
  { title: '1968年', content: '组建泰兴县渔业五金厂' },
  { title: '1972年', content: '更名泰兴县渔业机械二厂' },
  { title: '1978年', content: '成立泰兴县船舶机械厂' },
  { title: '1984年', content: '更名泰兴船舶机械厂' },
  { title: '1992年', content: '创建申泰船舶机械制造公司' },
  { title: '1995年', content: '组建江苏南极机械集团公司为核心企业' },
  { title: '1998年', content: '改制更名为江苏南极机械有限责任公司' },
  { title: '2006年', content: '新建泰兴市瑞泰机器有限责任公司' },
  { title: '2014年', content: '江苏南极机械有限责任公司在泰兴高新技术产业园建立新厂区' },
];
const test = [{ name: '123' }, { name: '456' }, { name: '789' }, { name: '190' }];
const ModalNews = ({
  modalVisible,
  handleAdd,
  handleModalVisible,
  content,
  newsTitle,
  newsDate,
}) => {
  return (
    <Modal
      onOk={handleAdd}
      title={newsTitle}
      onCancel={handleModalVisible}
      visible={modalVisible}
      footer={null}
    >
      <div style={{ textAlign: 'center', color: '#ddd' }}>{newsDate}</div>
      <div>{content}</div>
    </Modal>
  );
};
@connect(({ windows, loading }) => {
  return {
    windows,
    loading: loading.effects['chart/fetch'],
  };
})
export default class Windows extends PureComponent {
  state = {
    loading: false,
    visible: false,
    currentIndex: 0,
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };

  showModal = () => {
    this.setState({
      visible: true,
      //url:'http://static.smartisanos.cn/common/video/t1-ui.mp4',
    });
  };
  isClass = index => {
    this.setState({
      currentIndex: index,
    });
  };
  render() {
    const headStyle = {
      background: `url(${CardHead}) no-repeat`,
      backgroundSize: 'cover',
      borderBottom: 'none',
      backgroundPosition: '10px 4px',
    };
    const offset = 102;
    const parentMethods = {
      modalVisible: this.state.visible,
      handleModalVisible: this.handleCancel,
    };
    return (
      <div style={{ marginTop: '23px' }} className={styles.map}>
        <Row>
          <Col span={10}>
            <QueueAnim type={['top', 'bottom']}>
              <Card className={styles.cardBg} key="0">
                <div className={styles.title}>公司介绍</div>
                <div>
                  <Video />
                </div>
                <div className={styles.introduction}>
                  江苏南极机械有限责任公司是一家军民融合型企业，有50年发展历程，为国家火炬计划重点高新技术企业、江苏省高新技术企业、江苏省船舶配套行业重点企业。公司坐落于江苏省泰兴高新区和泰兴大生工业园区，占地面积{' '}
                  <span>25万平方米</span> ，拥有各类设备 <span>450多台套</span> ，现总资产{' '}
                  <span>5亿元</span> 。 公司主要生产经营 <span>“南极”</span>{' '}
                  牌舰船防污染设备、舰船动力系统轴舵系产品及其它舱室机械设备。产品销往全国各大、中船厂，被“南极”长城站、中山站、极地号科考船、远望系列测量船和赴索马里护航编队等国家重点工程广泛选用，并配套出口二十多个国家和地区。
                  公司科研实力雄厚，被认定为江苏省企业技术中心和江苏省船舶污水序批式膜法处理设备工程技术研究中心，建有目前全球规模最大、技术领先的船舶压载水处理试验中心，和功能齐全的全船污水处理、中间轴承、减振降噪等试验中心，拥有技术人员{' '}
                  <span>160多人</span>
                  ，其中高、中级职称 <span>80多人</span> ，有百名以上技师和高级工，与{' '}
                  <span>20多家</span> 科研院校建立广泛的合作关系。
                </div>
              </Card>
            </QueueAnim>
          </Col>

          <Col span={14}>
            <div>
              <Row gutter={16}>
                <QueueAnim type={['top', 'bottom']} delay="200">
                  <Col span={9} key="1" delay="200">
                    <Card className={styles.chartCard}>
                      <div className={styles.chartCardHead}>近五年销量</div>
                      <Bar height={170} data={salesData} />
                    </Card>
                  </Col>
                </QueueAnim>
                <QueueAnim type={['top', 'bottom']} delay="200">
                  <Col span={9} key="2" delay="200">
                    <Card className={styles.chartCard}>
                      <div className={styles.chartCardHead}>去年销售产品种类占比</div>
                      <Pie
                        hasLegend
                        //total={() => <Yuan>{salesPieData.reduce((pre, now) => now.y + pre, 0)}</Yuan>}
                        data={salesPieData}
                        //valueFormat={value => <Yuan>{value}</Yuan>}
                        height={170}
                        lineWidth={4}
                      />
                    </Card>
                  </Col>
                </QueueAnim>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={5}>
            <QueueAnim type={['bottom', 'top']} delay="400">
              <Card
                title="新闻中心"
                className={styles.newsHead}
                headStyle={headStyle}
                // bodyStyle={bodyStyle}
                key="3"
              >
                <Carousel autoplay vertical className={styles.slickDots}>
                  <div>
                    <div className={styles.newsList}>
                      <div style={{ marginRight: '15px' }}>
                        <img
                          style={{ width: '110px', height: '90px' }}
                          src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                          alt=""
                        />
                      </div>
                      <div onClick={this.showModal} className={styles.newsContent}>
                        <p>南极机械举行全员安全教育活动</p>
                        <p>南极机械举行全员安全教育活动南极机械举行全员安</p>
                        <p>2018/8/16</p>
                      </div>
                    </div>

                    <div className={styles.newsList}>
                      <div style={{ marginRight: '15px' }}>
                        <img
                          style={{ width: '110px', height: '90px' }}
                          src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                          alt=""
                        />
                      </div>
                      <div className={styles.newsContent}>
                        <p>南极机械举行全员安全教育活动</p>
                        <p>南极机械举行全员安全教育活动南极机械举行全员安</p>
                        <p>2018/8/16</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className={styles.newsList}>
                      <div style={{ marginRight: '15px' }}>
                        <img
                          style={{ width: '110px', height: '90px' }}
                          src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                          alt=""
                        />
                      </div>
                      <div className={styles.newsContent}>
                        <p>南极机械举行全员安全教育活动</p>
                        <p>南极机械举行全员安全教育活动南极机械举行全员安</p>
                        <p>2018/8/16</p>
                      </div>
                    </div>

                    <div className={styles.newsList}>
                      <div style={{ marginRight: '15px' }}>
                        <img
                          style={{ width: '110px', height: '90px' }}
                          src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                          alt=""
                        />
                      </div>
                      <div className={styles.newsContent}>
                        <p>南极机械举行全员安全教育活动</p>
                        <p>南极机械举行全员安全教育活动南极机械举行全员安</p>
                        <p>2018/8/16</p>
                      </div>
                    </div>
                  </div>
                </Carousel>
                <ModalNews
                  {...parentMethods}
                  newsTitle="泰州市委常委、组织部长张国梁莅临南极机械调研指导"
                  newsDate="2018年5月25日 16:53"
                  content="5月24日，泰州市委常委、组织部长张国梁在泰兴市委常委顾刚、鞠林红、泰兴高新区管委会主任陈斌的陪同下莅临南极机械调研指导，倪治忠董事长、倪建峰总经理参加接待并陪同调研。在产品展示区，倪治忠董事长向各位领导介绍了南极产品在全国各大船厂、国家重点舰船和重点工程的运用情况，介绍了央视CCTV纪录片摄制组近期在南极录制“弘扬工匠精神、争做民族品牌”的过程。"
                />
              </Card>
            </QueueAnim>
          </Col>
          <Col span={5}>
            <QueueAnim type={['bottom', 'top']} delay="400">
              <Card title="荣誉与资质" key="4" className={styles.newsHead} headStyle={headStyle}>
                {/*<div  style={{fontSize:'14px'}}>荣誉资质</div>*/}
                <div style={{ paddingLeft: '60px ', position: 'relative', marginBottom: '10px' }}>
                  <img src={honor} className={styles.honor} />
                  <Icon
                    type="left"
                    className={styles.prev}
                    onClick={() => {
                      this.slider.prev();
                    }}
                  />
                  <Icon
                    type="right"
                    className={styles.next}
                    onClick={() => {
                      this.slider.next();
                    }}
                  />
                  <Carousel ref={slider => (this.slider = slider)} dots={false}>
                    <div>
                      <div>
                        <img
                          style={{
                            width: '120px',
                            height: '91px',
                            display: 'inline-block',
                            marginRight: '5px',
                          }}
                          src={honor1}
                          alt=""
                        />
                        <img
                          style={{ width: '120px', height: '91px', display: 'inline-block' }}
                          src={honor1}
                          alt=""
                        />
                      </div>
                    </div>

                    <div>
                      <div>
                        <img
                          style={{
                            width: '120px',
                            height: '91px',
                            display: 'inline-block',
                            marginRight: '5px',
                          }}
                          src={honor1}
                          alt=""
                        />
                        <img
                          style={{ width: '120px', height: '91px', display: 'inline-block' }}
                          src={honor1}
                          alt=""
                        />
                      </div>
                    </div>
                  </Carousel>
                </div>

                <div style={{ paddingLeft: '60px ', position: 'relative' }}>
                  <img src={zizhi} className={styles.honor} />
                  <Icon
                    type="left"
                    className={styles.prev}
                    onClick={() => {
                      this.slider1.prev();
                    }}
                  />
                  <Icon
                    type="right"
                    className={styles.next}
                    onClick={() => {
                      this.slider1.next();
                    }}
                  />
                  <Carousel ref={slider1 => (this.slider1 = slider1)} dots={false}>
                    <div>
                      <div>
                        <img
                          style={{
                            width: '120px',
                            height: '91px',
                            display: 'inline-block',
                            marginRight: '5px',
                          }}
                          src={honor1}
                          alt=""
                        />
                        <img
                          style={{ width: '120px', height: '91px', display: 'inline-block' }}
                          src={honor1}
                          alt=""
                        />
                      </div>
                    </div>

                    <div>
                      <div>
                        <img
                          style={{
                            width: '120px',
                            height: '91px',
                            display: 'inline-block',
                            marginRight: '5px',
                          }}
                          src={honor1}
                          alt=""
                        />
                        <img
                          style={{ width: '120px', height: '91px', display: 'inline-block' }}
                          src={honor1}
                          alt=""
                        />
                      </div>
                    </div>
                  </Carousel>
                </div>
              </Card>
            </QueueAnim>
          </Col>

          <Col span={14}>
            <QueueAnim type={['bottom', 'top']} delay="400">
              <Card key="5" className={styles.newsHead} headStyle={headStyle}>
                <div className={styles.headStyle}>发展之路</div>
                <div className={styles.develop}>
                  {develop.map((item, index) => {
                    return (
                      <div>
                        {index % 2 === 0 ? (
                          <div
                            className={styles.developContent}
                            style={{ top: '-15px', left: 45 + offset * index + 'px' }}
                          >
                            <p className={styles.developTitle}>{item.title}</p>
                            <p style={{ fontSize: '13px' }}>{item.content}</p>
                          </div>
                        ) : (
                          <div
                            className={styles.developContent}
                            style={{ bottom: '0px', left: 47.5 + offset * index + 'px' }}
                          >
                            <p style={{ fontSize: '13px' }}>{item.content}</p>
                            <p className={styles.developTitle}>{item.title}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                  {/*循坏这部分*/}
                  {/*<div>
                      <div className={styles.developContent}
                           style={{left:'45px'}}>
                        <p className={styles.developTitle}>1968年</p>
                        <p>组建泰兴县渔业五金厂</p>
                      </div>
                      <div className={styles.developContent}
                           style={{bottom:'0px',left:'165px'}}>
                        <p>更名泰兴县渔业机械二厂</p>
                        <p className={styles.developTitle}>1972年</p>
                      </div>
                    </div>*/}
                </div>
              </Card>
            </QueueAnim>
          </Col>
        </Row>
        <div>
          {test.map((item, index) => {
            return (
              <div
                onClick={() => {
                  this.isClass(index);
                }}
                className={this.state.currentIndex === index ? styles.testClass : ''}
                style={{ width: '150px', height: '150px', border: '1px solid #fff' }}
              >
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
