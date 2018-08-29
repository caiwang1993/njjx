import React, { PureComponent, Component } from 'react';
import BannerAnim, { Element } from 'rc-banner-anim';
import { Button, Modal } from 'antd';
import DPlayer from 'react-dplayer';
import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';
import banner3 from '../../assets/banner3.jpg';
import play from '../../assets/play.jpg';
import TweenOne from 'rc-tween-one';
import { connect } from 'dva';
import styles from './Video.less';
import 'rc-banner-anim/assets/index.css';
import Carousel3d from 'components/Carousel3d';

const BgElement = Element.BgElement;
const ModalPlayer = ({ modalVisible, handleAdd, handleModalVisible, Content }) => {
  return (
    <Modal
      onOk={handleAdd}
      //bodyStyle={{width:'700px'}}
      width={700}
      onCancel={handleModalVisible}
      visible={modalVisible}
      footer={null}
    >
      {/*<div>
        <Dplayer
          ref={dp => (this.dp = dp)}
          video={{url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4'}}/>
      </div>*/}
      {Content}
    </Modal>
  );
};
const list = [banner1, banner2, banner3];
@connect(({ windows, loading }) => {
  return {
    windows,
    loading: loading.effects['chart/fetch'],
  };
})
export default class Video extends React.Component {
  state = {
    loading: false,
    visible: false,
    play: false,
    url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
  };

  handleCancel = () => {
    this.setState({ visible: false });
    this.pause();
  };

  showModal = () => {
    this.setState({
      visible: true,
      url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4',
    });
  };
  onLoad = dp => {
    this.dp = dp;
    console.log(dp, dp.video);
  };
  pause = () => {
    this.dp.pause();
  };
  render() {
    let slides = [
      'https://picsum.photos/800/300/?random',
      'https://picsum.photos/800/301/?random ',
      'https://picsum.photos/800/302/?random',
      'https://picsum.photos/800/303/?random',
      'https://picsum.photos/800/304/?random',
    ];

    const children = slides.map((src, i) => (
      <div
        key={i.toString()}
        className={styles.imgWrapper}
        style={{
          backgroundImage: `url(${src})`,
        }}
      >
        <img onClick={this.showModal} className={styles.play} src={play} alt="" />
      </div>
    ));

    return (
      <div>
        <div className={styles.carouselDemoWrapper}>
          <Carousel3d className={styles.carouselDemo} childMaxLength={6}>
            {children}
          </Carousel3d>
        </div>

        {/*<BannerAnim prefixCls={styles.bannerUser} autoPlay autoPlaySpeed={8000} >
          {
            list.map((item)=>{
              return(
                <Element
                  prefixCls={styles.bannerUserElem}
                  key={item}
                >
                  <BgElement
                    key='bg'
                    className={styles.bg}

                    style={{
                      background: `url(${item}) `,
                      backgroundSize:`100% 100% `,
                    }}
                  />
                  <TweenOne className={styles.bannerUserTitle} animation={{ y: 30, opacity: 0, type: 'from' }}>
                    <img onClick={this.showModal} src={play} alt=""/>
                  </TweenOne>
                </Element>
              )
            })
          }

        </BannerAnim>*/}

        <ModalPlayer
          modalVisible={this.state.visible}
          handleModalVisible={this.handleCancel}
          Content={
            <div>
              <DPlayer
                danmaku={{
                  id: 'demo',
                  api: 'https://api.prprpr.me/dplayer3/',
                }}
                autoplay={true}
                video={{ url: this.state.url }}
                onLoad={this.onLoad}
              />
            </div>
          }
        />
      </div>
    );
  }
}
