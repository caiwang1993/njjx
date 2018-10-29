import React, { PureComponent, Component } from 'react';
import {Row,Col,Button,Card} from 'antd';
import { connect } from 'dva';
import {Gauge,Area} from 'components/Charts';
import QueueAnim from 'rc-queue-anim';
import styles from './Product.less';
import pro1 from '../../assets/pro1.png';
import pro2 from '../../assets/pro2.png';
import pro3 from '../../assets/pro3.png';
import pro4 from '../../assets/4.jpg';

const menu=[
  {name:'压载水管理系统',key:'1'},
  {name:'全船污水管理系统',key:'2'},
  {name:'动力系统轴舵系',key:'3'},
  {name:'压力容器类',key:'4'},
  {name:'特种装备',key:'5'},
];
const data = [
  { x: '2013', y: 12 },
  { x: '2014', y: 17 },
  { x: '2015', y: 16 },
  { x: '2016', y: 20 },
  { x: '2017', y: 24 },
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
@connect(({ product, loading }) => {
  return {
    product,
    loading: loading.effects['product/fetch'],
  };
})
export default class Product extends PureComponent{
  state={
    currentIndex: 0,
    show:true,
    showPic:'',
    title:'',
    dsc4:'',
    dsc5:'',
    dsc6:'',
    content:''
  };
  componentDidMount() {

    this.props.dispatch({
      type:'product/fetch',
      payload:{id:'2',type:'1'},
      callback:()=>{
        const {product} = this.props;
        const {pluList} = product;
        this.setState({
          showPic:pluList[0].dsc1,
          title:pluList[0].title,
          dsc4:pluList[0].dsc4,
          dsc5:pluList[0].dsc5,
          dsc6:pluList[0].dsc6,
          content:pluList[0].content,
        })
      }
    })

  }
  isClass=(index,type)=>{
    this.setState({
      currentIndex: index,
    });
    this.props.dispatch({
      type:'product/fetch',
      payload:{id:'2',type:type},
      callback:()=>{
        const {product} = this.props;
        const {pluList} = product;
        this.setState({
          showPic:pluList[0].dsc1,
          title:pluList[0].title,
          dsc4:pluList[0].dsc4,
          dsc5:pluList[0].dsc5,
          dsc6:pluList[0].dsc6,
          content:pluList[0].content,
        })
      }
    })
};
  showPic = (url,title,dsc4,dsc5,dsc6,content)=>{

    this.setState({
      showPic:url,
      show:false,
      title:title,
      dsc4:dsc4,
      dsc5:dsc5,
      dsc6:dsc6,
      content:content,
    });
    this.props.dispatch({
      type:'product/fetchInfo',
      payload:{title:title},
    });
    setInterval(()=>{
      this.setState({

        show:true,
      });
    },200)
  };

  render(){
    const offset =0;
    const {product} = this.props;
    const {pluList,pluList_,compList} = product;
    /*const text = pluList_.length? pluList_[0].content :'';
    function createMarkup() {
      return {__html: this.state.content};
    }*/
    const compList_ =[];
    for(let i=0,len=compList.length;i<len;i++){
      compList_.push({
          x: compList[i].dsc2,
          y: eval(compList[i].dsc1),
        }
      );
    }
    console.log(compList_);
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
                      onClick={() => {this.isClass(index,item.key);}}
                      className={this.state.currentIndex === index ? styles.menuSelected : ''}
                      style={{position:'relative',left:15*index*index-index * 70+60+'px'}}>
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
                  pluList.map((item)=>{
                    return(
                      <div onClick={ () =>
                        this.showPic( item.dsc1,
                                      item.title,
                                      item.dsc4,
                                      item.dsc5,
                                      item.dsc6,
                                      item.content
                        )}
                      >
                        <img src={item.dsc1} alt=""/>
                      </div>
                    )

                  })
                }
              </div>

              {/*产品名称*/}
              <div className={styles.productName}>
                {this.state.title.substr(0,this.state.title.length-5)}
              </div>
              <span className={styles.productNum}>
                {this.state.title.substr(this.state.title.length-5,this.state.title.length)}
              </span>

              {/*产品大图*/}
              <div style={{height:'342px'}}>
                {
                  this.state.show ?
                    <QueueAnim
                               key="demo"
                               type={['right', 'left']}
                               ease={['easeOutQuart', 'easeInOutQuart']}>
                      {
                        this.state.currentIndex === 0?
                          <div key="a" className={styles.bigPic}>
                            <img src={this.state.showPic} alt=""/>
                          </div> :<img src={this.state.showPic} alt=""/>
                      }

                    </QueueAnim> : ''
                }
              </div>


              {/*仪表盘*/}
              {this.state.currentIndex ===0 ?
                <div className={styles.gaugeBox}>
                  <div className={styles.gaugeBox1} style={{marginTop:'20px'}}>
                    <Gauge
                      percent={this.state.dsc4 }
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
                      title="压缩空气量"

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
                </div> : ''
              }

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
              {
                this.state.currentIndex === 0 ?
                  <img src={pro4} alt="" style={{width:"100%"}} /> :
                  <Card className={styles.cardBg}>
                <div className={styles.title}>产品概览</div>
                <Row style={{marginTop:'20px'}}>

                  <Col span={24}>
                    <div className={styles.paraImg}
                         dangerouslySetInnerHTML={{__html: this.state.content}}>

                    </div>

                  </Col>

                </Row>
              </Card>
              }



            </div>
          </Col>
        </Row>

      </div>
    )
  }
}
