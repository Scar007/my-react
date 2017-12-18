import React from 'react';
import {Component} from 'react';

class CommentInput extends Component{
    constructor(){
        super();
        this.state={
            username:'',
            content:''
        }

    }

    handleUsernameChange=(event)=>{
        this.setState({
            username:event.target.value,
        });
    };
    handleContentChange=(event)=>{
        this.setState({
            content:event.target.value
        })
    };
    handleSubmit=()=>{
        if(this.props.onSubmit){
            const {username,content}=this.state;
            this.props.onSubmit({username,content})
        }
        this.setState({
            username:'',
            content:''
        })
    };

    render(){
        return(
            <div className="commentInput col-xs-12">
                <div>
                    <span className="col-xs-2">用户名：</span>
                    <input className="col-xs-10" type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
                </div>
                <div>
                    <span className="col-xs-2">内容区域：</span>
                    <textarea className="col-xs-10" name="" id="" cols="5" rows="5" value={this.state.content} onChange={this.handleContentChange}></textarea>
                </div>
                <div>
                    <button className="pull-right btn btn-primary" onClick={this.handleSubmit}>发布</button>
                </div>
            </div>
        )
    }
}

export default CommentInput