import Plugin from 'stc-plugin';
import {extend, isArray} from 'stc-helper';
import path from 'path';

/**
 * Move file
 */
export default class MovePlugin extends Plugin {
  /**
   * run
   */
  async run(){
  }
  /**
   * update
   */
  update(data){
    let includeList = [],
      optionList = [],
      matchIndex = -1,
      targetPath = null;
    (isArray(this.include)) ? includeList = this.include : includeList.push(this.include);
    (isArray(this.options)) ? optionList = this.options : optionList.push(this.options);
    if(includeList.length !== optionList.length){
      this.fatal('Plugin config\'s include length must be equal to options length');
      return;
    }
    includeList.forEach((result, index) => {
      if(result.test(this.file.path)){
        matchIndex = index;
        targetPath = path.join(optionList[matchIndex].target, this.file.path.replace(optionList[matchIndex].without, ''));
        this.file.path = targetPath;
      }
    });
  }
  /**
   * use cluster
   */
  static cluster(){
    return false;
  }
  /**
   * enable cache
   */
  static cache(){
    return false;
  }
  /**
   * set default include file
   */
   static include() {
     return /\.*$/i;
   }
}