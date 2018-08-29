import React, { PureComponent, Fragment } from 'react';
import { List, Avatar, Icon } from 'antd';

class NewsList extends PureComponent {
  render() {
    const { listData, avatar } = this.props;
    return (
      <List
        itemLayout="vertical"
        size="small"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 2,
        }}
        dataSource={listData}
        footer={
          <div>
            <b>ant design</b> footer part
          </div>
        }
        renderItem={item => (
          <List.Item
            key={item.title}
            extra={<img width={110} height={90} alt="logo" src={item.avatar} />}
          >
            <List.Item.Meta
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
          </List.Item>
        )}
      />
    );
  }
}
export default NewsList;
