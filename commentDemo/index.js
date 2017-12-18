import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';
import CommentApp from './CommentAPP';
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'


class Index extends Component{

    render(){
        return(
            <div className="">
                <CommentApp/>
            </div>
        )
    }
}

ReactDOM.render(<Index/>,document.querySelector("#root"));