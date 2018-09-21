import React ,{PureComponent} from 'react';
import styles from './AIdesign.less';
import {Row, Col, Card} from 'antd';
import Viewer from 'react-viewer';
import 'react-viewer/dist/index.css';
import boat from '../../assets/boat.png';
import AIdesign_1 from '../../assets/AIdesign_1.png';
import AIdesign_2 from '../../assets/AIdesign_2.png';
import AIdesign_3 from '../../assets/AIdesign_3.png';
import AIdesign_4 from '../../assets/AIdesign_4.png';


const type=[
  {name:'中英文船名',value:'南极号'},
  {name:'国籍',value:'中国'},
  {name:'船舶吨位',value:'15吨'},
  {name:'船舶种类',value:'货船'},
  {name:'建成完工日期',value:'2001-08-23'},
  {name:'航区',value:'环太平洋'},
  {name:'船舶型深',value:'远航货运船型'},
  {name:'最大船高',value:'68m'},
  {name:'满载吃水',value:'36m'},
  {name:'主机数量',value:'8个'},
  {name:'主机功率之和',value:'536000'},
  {name:'船舶制造厂',value:'江南造船厂'},
];
const img=[
  {src:AIdesign_1,name:'船体CAD图'},
  {src:AIdesign_2,name:'机舱布置图'},
  {src:AIdesign_3,name:'压载管线图'},
  {src:AIdesign_4,name:'电力负荷图'},
  ];
let brr1=[];
let brr2=[];
for(let i=0;i<type.length/2;i++){
  brr1[i]=type[i];
  brr2[i]=type[i+Math.ceil(type.length/2)];
}
if(type.length % 2 !==0){
  brr2.pop();
}
console.log(brr1,brr2);

export default class AIdesign extends PureComponent{
  state={
    visible:false,
    activeIndex:0,
  };
  showImg = (index)=>{
    this.setState({
      visible:true,
      activeIndex:index,
    })
  };
  render() {
    return (
      <div className={styles.AIdesignBg}>
        <Row>
          <Col span={7}>
            <div className={styles.para1}>
              <ul>
                {brr1.map((item,index)=>{
                  return(
                    <li className={styles.left}
                        style={{position:'relative',left:7.5*index*index-47.5*index}}
                    >
                      <span>{item.value}</span>
                      <span className={styles.title} style={{marginLeft:15}}>{item.name}</span>
                    </li>
                  )
                })}


              </ul>
            </div>
          </Col>
          <Col span={11} pull={3}>
            <div>
              <img src={boat} alt=""/>
            </div>
          </Col>
          <Col span={6}>
            <div className={styles.para1}>
              <ul>
                {brr2.map((item,index)=>{
                  console.log(item);
                  return(
                    <li className={styles.right}
                        style={{position:'relative',left:-7.5*index*index+47.5*index-75}}
                    >
                      <span className={styles.title} style={{marginRight:15}}>{item.name}</span>
                      <span>{item.value}</span>
                    </li>
                  )
                })}

              </ul>
            </div>
          </Col>
        </Row>
        <Row gutter={16}>
          {
            img.map((item,index)=>{
              return(
                <Col span={6}>
                  <Card className={styles.designBg}>
                    <div className={styles.title}>{item.name}</div>
                    <div>
                      <img
                        src={item.src}
                        alt=""
                        style={{height:'180px',width:'100%'}}
                        onClick={()=>this.showImg(index)}
                      />
                    </div>
                  </Card>
                </Col>
              )
            })
          }
          <Viewer
            visible={this.state.visible}
            onClose={() => { this.setState({ visible: false }); } }
            images={img}
            activeIndex={this.state.activeIndex}
          />
        </Row>
      </div>
    )
  }
}
