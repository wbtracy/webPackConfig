export default [{
  name: '个人简介',
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
  name: '完成项目',
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
}]