import React ,{PureComponent} from 'react';
import { routerRedux } from 'dva/router';
import { connect } from 'dva';
import QueueAnim from 'rc-queue-anim';
import styles from './Lifecycle.less';
import purple from '../../assets/purple.png';
import blue from '../../assets/blue.png';
import green from '../../assets/green.png';
import yellow from '../../assets/yellow.png';
import purpleSmall1 from '../../assets/purple_small1.png';
import purpleSmall2 from '../../assets/purple_small2.png';
import purpleSmall3 from '../../assets/purple_small3.png';

import blueSmall1 from '../../assets/blue_small1.png';
import blueSmall2 from '../../assets/blue_small2.png';
import yellowSmall1 from '../../assets/yellow_small1.png';
import yellowSmall2 from '../../assets/yellow_small2.png';
import greenSmall1 from '../../assets/green_small1.png';
import greenSmall2 from '../../assets/green_small2.png';


@connect(({lifecycle})=>{

})
export default class LifecycleMenu extends PureComponent{

  jumpToAImonitor=()=>{
    const { dispatch } = this.props;
    dispatch(routerRedux.push('/lifecycle/AImonitor'))
  };
  jumpToAIexperiment=()=>{
    const { dispatch } = this.props;
    dispatch(routerRedux.push('/lifecycle/AIexperiment'))
  };
  jumpToAIproduction=()=>{
    const { dispatch } = this.props;
    dispatch(routerRedux.push('/lifecycle/AIproduction'))
  };
  jumpToAIdesign=()=>{
    const { dispatch } = this.props;
    dispatch(routerRedux.push('/lifecycle/AIdesign'))
  };
  render(){
    return(
      <div className={styles.lifecycleBox}>
        <QueueAnim type={['top', 'bottom']}>
          <div className={styles.purple} key="a" onClick={this.jumpToAImonitor}>
            <img src={purple} alt=""/>

            <div className={styles.purpleSmall1}>
              <img src={purpleSmall1} alt=""/>
            </div>
            <div className={styles.purpleSmall2}>
              <img src={purpleSmall2} alt=""/>
            </div>
            <div className={styles.purpleSmall3}>
              <img src={purpleSmall3} alt=""/>
            </div>
          </div>
        </QueueAnim>

        <QueueAnim type={['bottom', 'top']} delay="450">
          <div className={styles.blue} key="b" onClick={this.jumpToAIexperiment}>
            <img src={blue} alt=""/>

            <div className={styles.blueSmall1}>
              <img src={blueSmall1} alt=""/>
            </div>
            <div className={styles.blueSmall2}>
              <img src={blueSmall2} alt=""/>
            </div>

          </div>
        </QueueAnim>

        <QueueAnim type={['bottom', 'top']} delay="800">
          <div className={styles.green} key="c" onClick={this.jumpToAIdesign}>
            <img src={green} alt=""/>

            <div className={styles.greenSmall1}>
              <img src={greenSmall1} alt=""/>
            </div>
            <div className={styles.greenSmall2}>
              <img src={greenSmall2} alt=""/>
            </div>
          </div>
        </QueueAnim>

        <QueueAnim type={['top', 'bottom']} delay="600">
          <div className={styles.yellow} key="d" onClick={this.jumpToAIproduction}>
            <img src={yellow} alt=""/>

            <div className={styles.yellowSmall1}>
              <img src={yellowSmall1} alt=""/>
            </div>
            <div className={styles.yellowSmall2}>
              <img src={yellowSmall2} alt=""/>
            </div>

          </div>
        </QueueAnim>
      </div>
    )
  }
}
