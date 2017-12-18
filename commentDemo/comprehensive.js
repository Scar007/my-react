import React,{Component} from 'react';
import {render} from 'react-dom';
import './index.css'

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
            username:event.target.value
        })
    };

    handleContentChange=(event)=>{
        this.setState({
            content:event.target.value
        })
    };

    handleSubmit=()=>{
        if(this.props.onSubmit){
            const {username,content}=this.state;
            this.props.onSubmit({
                username,content
            })
        }
        this.setState({
            username:'',
            content:''
        })
    };

    render(){
        return(
            <div className="comment-input">
                <div className="comment-field">
                    <span className="comment-field-name">用户名：</span>
                    <div className="comment-field-input">
                        <input type="text" value={this.state.username}
                               onChange={this.handleUsernameChange}
                        />
                    </div>
                </div>
                <div className="comment-field">
                    <span className="comment-field-name">评论内容</span>
                    <div className="comment-field-input">
                        <textarea value={this.state.content}
                                  onChange={this.handleContentChange}
                        />
                    </div>
                </div>
                <div className="comment-field-button">
                    <button onClick={this.handleSubmit}>发布</button>
                </div>
            </div>
        )
    }
}

class CommentList extends Component{
    static defaultProps={
        comments:[]
    };

    render(){
        return(
            <div>
                {this.props.comments.map((comment,index)=>{
                    return <Comment comment={comment} key={index}/>
                })}
            </div>
        )
    }
}

class Comment extends Component{
    render(){
        return(
            <div className="comment">
                <div className="comment-user">
                    <span>{this.props.comment.username}</span>
                </div>
                <p>{this.props.comment.content}</p>
            </div>
        )
    }
}

class CommentApp extends Component{
    constructor(){
        super();
        this.state={
            comments:[]
        }
    }

    handleSubmitComment=(comment)=>{
        this.state.comments.push(comment);
        this.setState({
            comments:this.state.comments
        })
    };

    render(){
        return(
            <div className="wrapper">
                <CommentInput onSubmit={this.handleSubmitComment}/>
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}

class Index extends Component{
    render(){
        return(
            <div>
                <CommentApp/>
            </div>
        )
    }
}

render(<Index/>,document.getElementById('root'));