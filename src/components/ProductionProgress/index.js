import React, { PureComponent, Fragment } from 'react';
import styles from './index.less'
export default class ProductionProgress extends PureComponent{
  state={
    active:false,
  };

  render(){
    const {width,progress=0,title,percent,active=false} = this.props;
    return(
      <div>
        {
          title ?
            <span className={styles.title} style={{marginRight:10}}>{title}</span> : ''
        }

        <div style={{width:width,height:'20px'}} className={styles.backgroundProgress}>
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

        </div>
        {
          percent ?
            <span className={styles.title} style={{marginLeft:10}}>{percent}</span> : ''
        }

      </div>

    )
  }
}
