// document.getElementById('app').innerHTML = "Webpack works";

/*
es6箭头函数
 */
// let func = str => {
//     document.getElementById('app').innerHTML = str;
// }
//
// func("hello! babel");

/*
react
 */
// import React from 'react';
// import ReactDom from 'react-dom';
//
// ReactDom.render (
//     <div>
//         Hello! React!
//     </div>, document.getElementById('app')
// );

/*
引用react组件
 */
import Hello from './components/Hello/Hello';
import React from 'react';
import ReactDom, {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';

/*
引用路由
 */
import PageRouter from './router/router';

/*
初始化
 */
const  renderWithHotReload = App => {
     render(
        <AppContainer>
            <App />
        </AppContainer>,
        document.getElementById('app')
    );
}
renderWithHotReload(PageRouter);
/*
热更新
 */
if(module.hot) {
    module.hot.accept('./router/router', () => {
        const nextPageRouter = require('./router/router').default;
        renderWithHotReload(nextPageRouter);
    });
}

// ReactDom.render (
//    <PageRouter/>, document.getElementById('app')
// );
