import React from 'react';
import { Layout, Menu, Breadcrumb, Calendar } from 'antd'; //npm install antd
import './App.css';
import Calender from './calender'

const { Header, Content, Footer } = Layout;
const names = ['Main','Service','Member','Gallery','Calender','Etc','Contact'];//카테고리

const App = () => (
  
  <div className="App">
   <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        {new Array(7).fill(null).map((_, index) => {
          const key = index + 1;
          return <Menu.Item key={key}>{`${names[key-1]}`}</Menu.Item>; //key 값을 이용해 전달받기
        })}
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }} />
      <div className="site-layout-content"><Calendar /></div>
    </Content>
        
    <Footer style={{ textAlign: 'center' }}>COLLA-STUDY 2021</Footer>
  </Layout>
  </div>
);

export default App;