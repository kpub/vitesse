// define application array
const apps = [
  {
    title: 'DOA',
    url: 'https://doa.envision-aesc.cn/',
    icon: 'https://doa.envision-aesc.cn/favicon.ico',
    intro: 'Envision AESC OA System',
    x: 1,
    y: 1,
    w: 2,
    h: 2,
  }, {
    title: '2PP',
    url: 'http://tech.envision-aesc.cn/tpp/index',
    icon: 'http://tech.envision-aesc.cn/tpp/favicon2.ico',
    intro: 'The Second Production Platform',
    x: 1,
    y: 1,
    w: 3,
    h: 1,
  }, {
    title: 'ESB',
    url: 'http://tech.envision-aesc.cn/esb-web',
    icon: 'http://tech.envision-aesc.cn/esb-web/static/img/logon_icon.c743a45f.png',
    intro: 'Enterprise Service Bus',
    x: 1,
    y: 1,
    w: 1,
    h: 1,
  },
]

// push 40 test items to apps
for (let i = 0; i < 40; i++) {
  apps.push({
    title: `Test${i}`,
    url: `http://tech.envision-aesc.cn/test${i}`,
    icon: `http://tech.envision-aesc.cn/test${i}/static/img/logon_icon.c743a45f.png`,
    intro: `Test${i}`,
  })
}

// export apps
export default apps
