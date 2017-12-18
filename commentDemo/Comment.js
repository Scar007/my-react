import React,{Component} from 'react';
import {render} from 'react-dom';

class Comment extends Component{
    render(){
        return(
            <div>
                <span className="col-xs-2">{this.props.comment.username}</span>
                <div className="col-xs-10">
                    {this.props.comment.content}
                </div>
            </div>
        )
    }
}

export default Comment