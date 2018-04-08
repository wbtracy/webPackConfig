import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Home from '../pages/Home/Home';
import Page1 from '../pages/Page1/Page1';
import Breadcrumcustom from './BreadcrumCustom';
import {Menu} from 'antd';
import {Layout, Button, Icon} from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const SubMenu = Menu.SubMenu;

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
        console.log(this.state)
        return (
            <Router>
                <div>
                    <Layout>
                        <Sider style={{ overflow: 'auto', height: '100vh', left: 0 }}
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
                                <SubMenu key="sub1" title={<span><Icon type="user" /><span>内容管理</span></span>}>
                                    <Menu.Item key="1"><Link to="/contentmanage/onlinemanage">线上内容管理</Link></Menu.Item>
                                    <Menu.Item key="2"><Link to="/contentmanage/firsttrail">网络文章初审</Link></Menu.Item>
                                    <Menu.Item key="3"><Link to="/contentmanage/reexamine">网络文章复审</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" title={<span><Icon type="user" /><span>内容安全</span></span>}>
                                    <Menu.Item key="4"><Link to="/page3">敏感词管理</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" title={<span><Icon type="user" /><span>平台管理</span></span>}>
                                    <Menu.Item key="5"><Link to="/page4">审核记录查询</Link></Menu.Item>
                                    <Menu.Item key="6"><Link to="/page5">审核成员管理</Link></Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout>
                            <Content style={{ margin: '0 16px' }}>
                                <Switch>
                                    <Route exact path="/contentmanage/onlinemanage" component={Home}/>
                                    <Route path="/contentmanage/firsttrail" component={Page1}/>
                                </Switch>
                            </Content>
                        </Layout>
                    </Layout>
                </div>
            </Router>
        )
    }
}
