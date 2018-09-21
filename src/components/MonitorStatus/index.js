import React, { PureComponent, Fragment } from 'react';
import styles from './index.less';
export default class MonitorStatus extends PureComponent{
  render(){
    const {
      title ,
      status ,
    } = this.props;
    return(

      <span
        className={
          status ==='success' && `${styles.container} ${styles.success}` ||
          status==='error' && `${styles.container} ${styles.error}` ||
          status==='warning' && `${styles.container} ${styles.warning}` ||
          status==='stop' && `${styles.container} ${styles.stop}`
        }
      >
        {title}
      </span>
    )
  }
}
