# stc-move

Stc plugin for moving file

## Install

```sh
npm install stc-move
```

## How to use

```
var stcmove = require('stc-move');
stc.workflow({
  //JSCompress: {plugin: uglify, include: /\.js$/},
  stcmove: {plugin: stcmove, include: [/resource\/abc\/.*\.js$/, /resource\/ abd\/.*\.js$/], options: [
        {without: 'resource/abc', target: 'abd2'},
        {without: 'resource/abd', target: 'abc2'}
      ]
  }
});
```

说明: stcmove 的include 配置项的个数必须等于其options的配置项个数，如果个数为1可以为字符串
    options: without是在匹配路径中去除的路径
             target是在去除without路径之后添加的路径
    如例子运行结果如下：
    ![如上配置运行结果](http://i4.piimg.com/4851/362d786dae89bb7a.png)


