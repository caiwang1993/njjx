import React, { PureComponent, Fragment } from 'react';
import styles from './index.less';

class Tabs extends PureComponent{
  state={
    currentIndex:0
  };
  getTitleItem=(index)=>{
    this.setState({currentIndex: index})
  };
  render(){
    const {height} = this.props;
    return(
      <div>
        <nav className={styles.tabTitleItems}>
          {React.Children.map(this.props.children, (element, index) => {
            return (
              <div onClick={() => this.getTitleItem(index)}
                   className={this.state.currentIndex === index ?
                     `${styles.tabTitleItem} ${styles.active}` : styles.tabTitleItem}
              >
                  {element.props.name}
              </div>
            )
          })}
        </nav>
        <div className={styles.tabContentItems} style={{height:height}}>
          {React.Children.map(this.props.children, (element, index) => {
            return (
              <div className={this.state.currentIndex === index ?
                `${styles.tabContentItem} ${styles.active}` : styles.tabContentItem}>
                {element}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

class TabPane extends PureComponent{
  render(){
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
}

export { Tabs,TabPane};
