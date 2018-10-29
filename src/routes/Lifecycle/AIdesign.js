import React ,{PureComponent} from 'react';
import styles from './AIdesign.less';
import {Row, Col, Card, Select} from 'antd';
import Viewer from 'react-viewer';
import 'react-viewer/dist/index.css';
import boat from '../../assets/boat.png';
/*import AIdesign_1 from '../../assets/AIdesign_1.png';
import AIdesign_2 from '../../assets/AIdesign_2.png';
import AIdesign_3 from '../../assets/AIdesign_3.png';
import AIdesign_4 from '../../assets/AIdesign_4.png';*/
import AIdesign_1 from '../../assets/AIdesign_1.jpg';
import AIdesign_2 from '../../assets/AIdesign_2.jpg';
import AIdesign_3 from '../../assets/AIdesign_3.jpg';


const Option =Select.Option;
const type=[
  {name:'中英文船名',value:'金海华'},
  {name:'国籍',value:'中国'},
  {name:'船舶吨位',value:'29255吨'},
  {name:'船舶种类',value:'散货船'},
  {name:'建造时间',value:'2012-03-27'},
  {name:'航区',value:'远洋'},
  {name:'船舶型深',value:'15.5m'},
  {name:'最大船高',value:'46m'},
  {name:'满载吃水',value:'10m'},
  {name:'主机数量',value:'1台'},
  {name:'主机额定功率',value:'8280KW'},
  {name:'船舶制造厂',value:'福建省轮船总公司'},
];
const img=[
  {src:boat,name:'船体CAD图'},
  {src:AIdesign_1,name:'机舱布置图'},
  {src:AIdesign_3,name:'压载管线图'},
  {src:AIdesign_2,name:'电力负荷图'},
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
            <div style={{position:"relative"}} >
              <img src={boat} alt=""/>
              <div className={styles.type}>
                <span>船舶规格:</span>
                {/* <span style={{marginLeft:15,color:'#00f5fe'}}>a2402</span>*/}
                <Select className={styles.productSelect}
                        defaultValue="a0051"
                        style={{width:200,background:'transparent'}}
                        dropdownStyle={{background:'transparent',color:'#00fff6'}}
                >
                  <Option value="a0051">MJ-11-461</Option>

                </Select>
              </div>
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
