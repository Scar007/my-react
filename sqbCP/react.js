import React from 'react';
import ReactDOM from 'react-dom';

//在设置语言中改变成jsx的语法报错
//render的含义就是把react元素渲染在容器内部
//jsx语法：javascript+html(xml的一种)的混合写法

ReactDOM.render(
    <h1>hello world</h1>,
    document.querySelector('#root')
);


/*
 //react元素是通过js对象来描述DOM结构的一种数据结构
 /!*
 转义成类似怎样的结构去插入都DOM结构中，因为上面的结构和语法浏览器不认
 {
 tagName:'h1';
 attr:null;
 children:['hello']
 }
 *!/
 ReactDOM.render(
 React.createElement('h1',null,['hello'])
 );
 */
