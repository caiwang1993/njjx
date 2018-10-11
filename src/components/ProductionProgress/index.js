import React, { PureComponent, Fragment } from 'react';
import styles from './index.less'
export default class ProductionProgress extends PureComponent{
  state={
    active:false,
  };

  render(){
    const {height=20,width,progress=0,title,titleWidth=150,percent,active=false, type} = this.props;
    return(
      <div>
        {
          title ?
            <span className={styles.title}
                  style={{marginRight:10,width:titleWidth,display:'inline-block'}}>
              {title}
            </span> : ''
        }

        {
          type !== 'vertical' ?
            <div style={{width:width,height:height}} className={styles.backgroundProgress}>
              <div

                style={{width:`${progress}%`,height:'20px'}}
                className={styles.backgroundProgressInner}>
                {
                  active ?
                    <div
                      className={`${styles.progressActive} `}>
                    </div> : ''
                }


              </div>

            </div> :
            <div style={{width:'20px',height:'500px'}} className={styles.backgroundProgress}>
              <div

                style={{height:`${progress}%`,width:'20px'}}
                className={styles.backgroundProgressInner}>
                {
                  active ?
                    <div
                      className={`${styles.progressActiveVertical} `}>
                    </div> : ''
                }


              </div>

            </div>
        }

        {
          percent ?
            <span className={styles.title} style={{marginLeft:10}}>{percent}</span> : ''
        }

      </div>

    )
  }
}
