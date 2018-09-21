import React, { PureComponent, Component } from 'react';
import {Row,Col,Button,Card} from 'antd';

import {Gauge,Area} from 'components/Charts';
import QueueAnim from 'rc-queue-anim';
import styles from './Product.less';
import pro1 from '../../assets/pro1.png';
import pro2 from '../../assets/pro2.png'
import pro3 from '../../assets/pro3.png'

const menu=[
  {name:'压载水管理系统'},
  {name:'全船污水管理系统'},
  {name:'动力系统轴舵系'},
  {name:'压力容器类'},
  {name:'特种装备'},
];
const data = [
  { x: '1995', y: 17000 },
  { x: '1996', y: 31056 },
  { x: '1997', y: 31982 },
  { x: '1998', y: 32040 },
  { x: '1999', y: 33233 },
];
const pic = [pro1,pro2,pro3];
const DescriptionItem = ({title,content,unit})=>{
  return(
    <div className={styles.parameterTitle}>
      <p
        style={{
          marginRight: 8,
          display: 'inline-block',
        }}
      >
        {title}
      </p>
      <p className={styles.parameterContent}>
        {content}
      </p>
      <p className={styles.parameterUnit}>
        {unit}
      </p>
    </div>
  )
};

export default class Product extends PureComponent{
  state={
    currentIndex: 0,
    show:true,
    showPic:pic[0],
  };
  isClass=(index)=>{
    this.setState({
      currentIndex: index,
    });
};
  showPic = (url)=>{
    this.setState({
      showPic:url,
      show:false,
    });
    setInterval(()=>{
      this.setState({

        show:true,
      });
    },200)
  };
  render(){
    const offset =0;
    return(
      <div className={styles.productBg}>
        <Row style={{paddingRight:10}}>
          {/*产品菜单*/}
          <Col span={4} offset={1}>
            <div className={styles.menuBox}>
              {
                menu.map((item,index) =>{
                  return(
                    // 一元二次函数表达式
                    <div
                      onClick={() => {this.isClass(index);}}
                      className={this.state.currentIndex === index ? styles.menuSelected : ''}
                      style={{position:'relative',left:18*index*index-index * 73+55+'px'}}>
                      <span
                        className={this.state.currentIndex === index ? styles.cancel : ''}>
                        {item.name}
                      </span>
                    </div>
                  )
                })
              }
            </div>
          </Col>



          <Col span={10} >
            <div className={styles.productBox}>

              {/*产品缩略图*/}
              <div className={styles.pic}>
                {
                  pic.map((item)=>{
                    return(
                      <div onClick={()=>this.showPic(item)}>
                        <img src={item} alt=""/>
                      </div>
                    )

                  })
                }
              </div>

              {/*产品名称*/}
              <div className={styles.productName}>NiBallastTM BWMS压载水管理系统</div>
              <span className={styles.productNum}>a2042</span>

              {/*产品大图*/}
              <div style={{height:'342px'}}>
                {
                  this.state.show ?
                    <QueueAnim
                               key="demo"
                               type={['right', 'left']}
                               ease={['easeOutQuart', 'easeInOutQuart']}>
                      <div key="a" className={styles.bigPic}>
                        <img src={this.state.showPic} alt=""/>
                      </div>
                    </QueueAnim> : ''
                }
              </div>


              {/*仪表盘*/}
              <div className={styles.gaugeBox}>
                <div className={styles.gaugeBox1} style={{marginTop:'20px'}}>
                  <Gauge
                    percent={87}
                    height={214}
                    min="0"
                    max="100"
                    tickInterval="10"
                    color="#037eed" title="氮气浓度"
                    unit="%"

                  />
                </div>

                <div className={styles.gaugeBox1} style={{marginTop:'20px'}}>
                  <Gauge
                    end={[1, 0.965]}
                    percent={0.4}
                    height={214}
                    min="0.0"
                    max="1.0"
                    tickInterval="0.1"
                    color="#05f248"
                    title="氮气浓度"

                    unit="Mpa"

                  />
                </div>

                <div className={styles.gaugeBox1} style={{marginTop:'20px'}}>
                  <Gauge
                    end={[1, 0.965]}
                    percent={0.5}
                    height={214}
                    min="0"
                    max="1.0"
                    tickInterval="0.1"
                    color="#eef30c"
                    title="系统压降"
                    unit="Mpa"

                  />
                </div>
              </div>
            </div>



          </Col>
          <Col span={9} >
            <div className={styles.chartBox}>
              <Card className={styles.chartCard}>
                <div className={styles.chartCardHead}>近五年销量</div>
                <Area min='10000' data={data} color='green' borderColor="#00ff3c" height={250} marginTop={30}/>
              </Card>
            </div>

            {/*产品参数*/}
            <div className={styles.parameterBox}>
              <Card className={styles.cardBg}>
                <div className={styles.title}>产品概览</div>
                <Row style={{marginTop:'20px'}}>
                  <Col span={12}>
                    <DescriptionItem title='产品类型' content="NB200"/>
                  </Col>
                  <Col span={12}>
                    <DescriptionItem title='处理流量' content="200" unit="m3/h"/>
                  </Col>

                  <Col span={12}>
                    <DescriptionItem title='功率' content="4.5" unit="kw"/>
                  </Col>
                  <Col span={12}>
                    <DescriptionItem title='外形尺寸' content="600*580*1700" unit="CM"/>
                  </Col>

                  <Col span={12}>
                    <DescriptionItem title='系统压降' content="0.05" unit="Mpa"/>
                  </Col>
                  <Col span={12}>
                    <DescriptionItem title='滤孔尺寸' content="50" unit = 'μm'/>
                  </Col>

                  <Col span={12}>
                    <DescriptionItem title='氮气浓度' content="99" unit="%"/>
                  </Col>
                  <Col span={12}>
                    <DescriptionItem title='氮气流量' content="5.14" unit = 'μm/h'/>
                  </Col>

                  <Col span={12}>
                    <DescriptionItem title='防护等级' content="IP44/IP56" />
                  </Col>
                  <Col span={12}>
                    <DescriptionItem title='压缩空气量' content="0.7" unit = 'Mpa'/>
                  </Col>

                  <Col span={12}>
                    <DescriptionItem title='总配电源' content="7.9" unit="kw"/>
                  </Col>
                  <Col span={12}>
                    <DescriptionItem title='排放标准' content="D-2"/>
                  </Col>
                </Row>
              </Card>

            </div>
          </Col>
        </Row>

      </div>
    )
  }
}
