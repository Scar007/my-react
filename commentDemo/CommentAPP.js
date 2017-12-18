import React from 'react';
import {Component} from 'react';
import CommentList from './ComponentList';
import CommentInput from './CommentInput';

class ComponentApp extends Component{
    constructor(){
        super();
        this.state={
            comments:[]
        }
    }

    handleSubmitComment=(comment)=>{
        if(!comment) return;
        if(!comment.username)return alert("请输入用户名");
        if(!comment.content)return alert("请输入内容");
        this.state.comments.push(comment);
        this.setState({
            comments:this.state.comments
        })
    };

    render(){
        return(
            <div className="commentApp">
                <CommentInput onSubmit={this.handleSubmitComment}/>
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}

export default ComponentApp