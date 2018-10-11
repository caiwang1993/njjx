import React, { PureComponent, Component } from 'react';
import { connect } from 'dva';
import { Row, Card, Col, Carousel, Icon, Modal, Skeleton} from 'antd';
import CardHead from '../../assets/news_head.jpg';
import QueueAnim from 'rc-queue-anim';
import honor from '../../assets/honor.png';
import honor1 from '../../assets/honor1.jpg';
import zizhi from '../../assets/zizhi.png';
import banner2 from '../../assets/banner2.jpg';

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
  { x: '2013', y: 662 },
  { x: '2014', y: 804 },
  { x: '2015', y: 429 },
  { x: '2016', y: 737 },
  { x: '2017', y: 1071 },
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
  content='',
  newsTitle,
  newsDate,
  loading,
}) => {
  return (
    <Modal
      onOk={handleAdd}
      title={newsTitle}
      onCancel={handleModalVisible}
      visible={modalVisible}
      footer={null}
      width={900}
    >
      <Skeleton loading={loading} active>
        <div style={{ textAlign: 'center', color: '#ddd' }}>{newsDate}</div>
        <div dangerouslySetInnerHTML={{__html:content}}>

        </div>
      </Skeleton>
    </Modal>
  );
};

@connect(({ windows, loading }) => {
  return {
    windows,
    loading: loading.effects['windows/fetchNewsInfo'],
    loading_: loading.effects['windows/fetch'],
  };
})
export default class Windows extends PureComponent {
  state = {
    loading: false,
    visible: false,
    currentIndex: 0,
    content:[],
  };


  componentDidMount() {

    this.props.dispatch({
      type:'windows/fetch',
      payload:{id:'1'},
    })
  }

  handleCancel = () => {
    this.setState({ visible: false });
  };

  showModal = (id,opttime) => {
    this.setState({
      visible: true,
    });
    console.log(123);
    this.props.dispatch({
      type:'windows/fetchNewsInfo',
      payload:{id:id,opttime:opttime},
      callback:()=>{
        const {windows} = this.props;
        const {newsInfo} = windows;
        this.setState({

          content:newsInfo
        });
      }
    });

  };
  isClass = index => {
    this.setState({
      currentIndex: index,
    });
  };
  render() {
    const {windows, loading,loading_} = this.props;
    const {prtkList,newList, honList, aptList, compList} = windows;
    const newList_=[];
    const honList_=[];
    const aptList_=[];
    const compList_=[];
    console.log(honList);
    for(let i=0,len=newList.length;i<len;i+=2){
      newList_.push(newList.slice(i,i+2));
    }
    for(let i=0,len=honList.length;i<len;i+=2){
      honList_.push(honList.slice(i,i+2));
    }
    for(let i=0,len=aptList.length;i<len;i+=2){
      aptList_.push(aptList.slice(i,i+2));
    }
    for(let i=0,len=compList.length;i<len;i++){
      compList_.push({
        x: compList[i].dsc2,
        y: eval(compList[i].dsc1),
        }
      );
    }
    const text = prtkList.length? prtkList[0].content :'';
    function createMarkup() {
      return {__html: text};
    }
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
    console.log()


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
                <div className={styles.introduction}
                     dangerouslySetInnerHTML={createMarkup()}
                >

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
                        data={compList_}
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
                loading={loading_}
              >
                <Carousel  vertical className={styles.slickDots}>
                  {newList_.map((item)=>{
                    return(
                      <div>
                        {item.map(item=>{
                          console.log(item);
                          return(
                            <div className={styles.newsList}>
                              <div style={{ marginRight: '15px' }}>
                                <img
                                  style={{ width: '110px', height: '90px' }}
                                  src={item.dsc1}
                                />
                              </div>
                              <div onClick={()=>this.showModal(item.id,item.opttime)} className={styles.newsContent}>
                                <p>{item.title}</p>
                                <p>{item.detail}</p>
                                <p>{item.opttime}</p>
                              </div>
                            </div>
                            )

                        })}
                      </div>
                    )
                  })}

                </Carousel>
                <div>

                  <ModalNews
                    {...parentMethods}
                    loading={loading}
                    newsTitle={this.state.content.length ? this.state.content[0].title : '' }
                    newsDate={this.state.content.length? this.state.content[0].opttime : ''}
                    content={this.state.content.length? this.state.content[0].content : ''}
                  />
                </div>

              </Card>
            </QueueAnim>
          </Col>
          <Col span={5}>
            <QueueAnim type={['bottom', 'top']} delay="400">
              <Card title="荣誉与资质" key="4" className={styles.newsHead} headStyle={headStyle} loading={loading_}>
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
                    {
                      honList_.map(item => {
                        return(
                          <div>
                            {
                              item.map(item =>{
                                return(
                                  <img
                                    style={{
                                      width: '120px',
                                      height: '91px',
                                      display: 'inline-block',
                                      marginRight: '5px',
                                    }}
                                    src={item.dsc1}
                                    alt=""
                                  />
                                )
                              })
                            }
                          </div>
                        )
                      })
                    }

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
                    {
                      aptList_.map(item => {
                        return(
                          <div>
                            {
                              item.map(item =>{
                                return(
                                  <img
                                    style={{
                                      width: '120px',
                                      height: '91px',
                                      display: 'inline-block',
                                      marginRight: '5px',
                                    }}
                                    src={item.dsc1}
                                    alt=""
                                  />
                                )
                              })
                            }
                          </div>
                        )
                      })
                    }
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
      </div>
    );
  }
}
