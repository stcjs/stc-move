# stc-move-file

Stc plugin for moving file

## Install

```sh
npm install stc-move-file
```

## How to use

```
var stcmovefile = require('stc-move-file');
stc.workflow({
  stcmovefile: {
    plugin: stcmovefile,
    include: /resource\/abc\/.*\.js$/, options: {
      dest: function(source){
        var target = 'test/'+source;
        return target;
      }
    }
  }
});
```

##dest 可以为字符串或者function:
* 1.当dest为字符串时，新路径为path.join(this.options.dest, this.file.path);
* 2.当dest为function时，新路径为function的返回值,source 参数为原始路径

