import React,{Component} from 'react';
import {render} from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './index.css';

class ComponentInput extends Component{
    render(){
        return(
            <div className="component componentInput">
                <div>
                    <span className='col-xs-4'>用户名: <input type="text"/></span>
                </div>
                <div>
                    <span>评论内容：</span>
                    <textarea></textarea>
                </div>
            </div>
        )
    }
}

class ComponentList extends Component{
    render(){
        return(
            <div className="component">

            </div>
        )
    }
}

class ComponentApp extends Component{
    render(){
        return(
            <div className="component">
                <ComponentInput/>
                <ComponentList/>
            </div>
        )
    }
}


render(<ComponentApp/>,document.getElementById('root'));