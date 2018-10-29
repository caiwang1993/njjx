import React, { PureComponent } from 'react';
import {Card} from 'antd';
import { routerRedux } from 'dva/router';
import { connect } from 'dva';

import { Route, Redirect, Switch } from 'dva/router';
import NotFound from '../Exception/404';
import { getRoutes } from '../../utils/utils';
import styles from './LifecycleManage.less';

const inItem = [

  {name:'福建省轮船总公司'},
  {name:'上海船运公司'},
  {name:'天津大海港湾船务有限公司'},
  {name:'青岛船运公司'},
  {name:'上海船舶运输集团'},
];
const project = [
  {name:'项目1'},
  {name:'项目2'},
  {name:'项目3'},
  {name:'项目4'}
];
@connect(({lifecycle})=>{

})
export default class LifecycleManage extends PureComponent {
  state={
    currentIndexIn: -1,
    currentIndexOut: -1,
    showIn:false,
    showOut:false,
    showDetail:false,
  };
  isClass=(index)=>{
    this.setState({
      currentIndexIn: index,
      showDetail:true,
    });
  };
  isClassOut=(index)=>{
    this.setState({
      currentIndexOut: index,
    });
  };
  showIn = ()=>{
    this.setState({
      showIn: true,
      showOut: false,
    });
  };
  showOut = ()=>{
    this.setState({
      showIn: false,
      showOut: true,
    });
  };
  jumpTo = ()=>{
    const { dispatch } = this.props;
    dispatch(routerRedux.push('/lifecycle/menu'));
  };

  render() {
    const { match, routerData, location } = this.props;
    return (
      <div className={styles.manageBg}>
        <div className={styles.in} onClick={this.showIn}>
          <p>国内客户</p>
          <span className={styles.inNumber}>2774</span>
        </div>

        <div className={styles.out} style={{right:500}} onClick={this.showOut}>
          <p>国外客户</p>
          <span className={styles.inNumber}>2274</span>
        </div>
        {this.state.showIn ?
          <div className={styles.inItem}>
            {
              inItem.map((item,index)=>{
                return(
                  <div onClick={()=>this.isClass(index)}
                       className={this.state.currentIndexIn === index ? styles.menuSelected : ''}
                  >
                    {item.name}
                  </div>
                )
              })
            }
          </div> :''
        }
        {
          this.state.showOut ?
            <div className={styles.outItem}>
              {
                inItem.map((item,index)=>{
                  return(
                    <div onClick={()=>this.isClassOut(index)}
                         className={this.state.currentIndexOut === index ? styles.menuSelected : ''}
                    >
                      {item.name}
                    </div>
                  )
                })
              }
            </div> : ''
        }

        <div className={styles.itemDetail}>
          <Card className={styles.cardBg}>

            <div className={styles.title}>项目明细</div>
            {
              this.state.showDetail ?
                <div>

                  <p className={styles.iconLeft}>
                    <i className={styles.name}></i>
                    <span>客户名称:</span>
                    <span>福建省轮船总公司</span>
                  </p>

                  <p  className={styles.iconLeft}>
                    <i className={styles.address}></i>
                    <span>地址:</span>
                    <span>江苏江阴</span>
                  </p>

                  <div>
                    {
                      project.map(item=>{
                        return(
                          <div onClick={this.jumpTo} className={styles.project}>{item.name}</div>
                        )
                      })
                    }
                  </div>
                </div> : ''
            }

          </Card>
        </div>

      </div>
    );
  }
}
