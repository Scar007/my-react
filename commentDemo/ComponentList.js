import React from 'react';
import {Component} from 'react';
import Comment from './Comment'

class ComponentList extends Component{
    static defaultProps={
        comments:[]
    };

    render(){
        return(
            <div className="commentList col-xs-12">
                {this.props.comments.map((comment,index)=>{return(
                    <Comment comment={comment} key={index}/>
                )})}
            </div>
        )
    }
}

export default ComponentList