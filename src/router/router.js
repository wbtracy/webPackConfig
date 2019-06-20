import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from '../pages/Home';
import Breadcrumcustom from './BreadcrumCustom';
import { default as Routes } from '../manifest';
import {Menu} from 'antd';
import {Layout, Button, Icon} from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const SubMenu = Menu.SubMenu;

import menu from '../menu';

export default class PageRouter extends React.Component{

    rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];
    state = {
        openKeys: [],
        openSaveKeys: [],
        collapsed: false,
    };
    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys }, () => {
                this.setState({
                    openSaveKeys: this.state.openKeys,
                })
            });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
                openSaveKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }
    toggle = () => {
        const saveKeys = this.state.openSaveKeys;
        const collapsed = this.state.collapsed;
        let keys = [];
        collapsed == false ? keys = [] : keys = saveKeys;
        this.setState({
            collapsed: !this.state.collapsed,
            openKeys: keys,
        })
    }
    render() {
        return (
            <Router>
                <div>
                    <Layout style={{height: '100vh'}}>
                        <Header style={{height: '60px'}}>
                            <img style={{width: '60px', height: '60px'}} src='/image/lakers.jpg' />
                        </Header>
                        <Layout>
                            <Sider style={{ overflow: 'auto', minHeight: 'cal(100vh - 60px)', left: 0 }}
                                   collapsible
                                   collapsed={this.state.collapsed}
                                   onCollapse={this.toggle}
                            >
                                <div className="logo" style={{height: "30px"}}/>
                                <Menu theme="dark"
                                      mode="inline"
                                      openKeys={this.state.openKeys}
                                      onOpenChange={this.onOpenChange}
                                >
                                    <Menu.Item>
                                        <Link to='/'>
                                            <Icon type='home'/>首页
                                        </Link>
                                    </Menu.Item>
                                    {
                                        menu.map((item, i) =>
                                          <SubMenu key={`sub${i + 1}`}
                                            title={<span><Icon type={item.svg ? item.svg : "user"} />
                                                <span>{item.name}</span>
                                            </span>}>
                                              {
                                                  item.children ? item.children.map(
                                                    (ite, i) =>
                                                      <Menu.Item key={i}><Link to={ite.route}>
                                                          <Icon type={item.svg ? item.svg : "table"} />{ite.name}
                                                      </Link></Menu.Item>
                                                  ) : null
                                              }
                                          </SubMenu>
                                        )
                                    }
                                </Menu>
                            </Sider>
                            <Layout>
                                <Breadcrumcustom />
                                <Content style={{ backgroundColor: "#FFFFFF", margin: '0 16px' }}>
                                    <Switch>
                                        <Route exact path="/" component={Home}/>
                                    </Switch>
                                    {
                                        Object.keys(Routes).map((item, i) => React.createElement(Routes[item], {name: item, key: i}))
                                    }
                                </Content>
                            </Layout>
                        </Layout>
                    </Layout>
                </div>
            </Router>
        )
    }
}
