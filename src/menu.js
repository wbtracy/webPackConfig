export default [{
  name: 'introduction',
  route: '/personal',
  svg: "",
  children: [{
    name: '个人介绍',
    route: '/personal/introduction',
    svg: ""
  }, {
    name: '学历',
    route: '/personal/education',
    svg: ""
  }, {
    name: '兴趣爱好',
    route: '/personal/hobbies',
    svg: ""
  }]
}, {
  name: 'project',
  route: '/project',
  svg: "",
  children: [{
    name: 'echarts',
    route: '/project/echarts',
    svg: ""
  }, {
    name: 'map',
    route: '/project/map',
    svg: ""
  }, {
    name: 'table',
    route: '/project/table',
    svg: ""
  }]
}, {
  name: '问题实验',
  route: '/test',
  svg: '',
  children: [{
    name: 'CssModules',
    route: '/test/cssModules',
    svg: ''
  }, {
    name: 'ImagePlay',
    route: '/test/imagePlay',
    svg: ''
  }, {
    name: 'DownloadCharts',
    route: '/test/downloadCharts',
    svg: ''
  }]
}]