import React,{Component} from 'react';
import ReactDom from 'react-dom';
import './index.css';

const name=['大毛','','三毛']
ReactDom.render(<div>{
    name.map(function (item,index) {
        return name.length>0?<span style={{backgroundColor:"blue",fontSize:'50px'}} key={index}>{item}</span>:null;
    })
}</div>,window.app);

/*
 class App extends Component{

 render(){
 return(
 <div>hello world</div>
 )
 }
 }

 ReactDom.render(<App/>,document.querySelector('#root'));
 */



