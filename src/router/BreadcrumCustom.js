import React, { Component } from 'react';
import { Breadcrumb, Switch, Icon } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import menu from './resolveMenu';
//具体导航的名称

class BreadcrumbCustom extends Component {
    //利用PropTypes记住所跳转每个页面的位置
    static contextTypes = {
        router: PropTypes.object
    }
    constructor(props) {
        super(props);
        this.state = {
            extraBreadcrumbItems: []
        }
    }
    getPath() {
        //对路径进行切分，存放到this.state.pathSnippets中
        const path = this.context.router.history.location.pathname.split('/').filter(i => {
            return i
        });
        const breadItem = path
          .map((_, index) => `/${path.slice(0, index + 1).join('/')}`);
        //将切分的路径读出来，形成面包屑，存放到this.state.extraBreadcrumbItems
        this.setState({
            extraBreadcrumbItems: breadItem
        })
    }

    componentWillMount() {
        //首次加载的时候调用，形成面包屑
        this.getPath();
    }
    componentWillReceiveProps(){
        //任何子页面发生改变，均可调用，完成路径切分以及形成面包屑
        this.getPath();
    }
    render() {
        const { extraBreadcrumbItems } = this.state;
        console.log(extraBreadcrumbItems);
        return (
            <span>
                <Breadcrumb style={{ margin: '12px 0 12px 16px', color: "#000000" }}>
                    {
                        extraBreadcrumbItems.length === 0 ?
                          <Breadcrumb.Item key={0}>
                              <Link to='/'>
                                  首页
                              </Link>
                          </Breadcrumb.Item> :
                          extraBreadcrumbItems.map(item =>
                          <Breadcrumb.Item key={item}>
                              <Link to={item}>
                                  {menu[item]}
                              </Link>
                          </Breadcrumb.Item>
                        )
                    }
                </Breadcrumb>
            </span>
        )
    }
}
export default BreadcrumbCustom;