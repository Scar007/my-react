import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';

class LikeBtn extends Component{
    /*static defaultProps={
     like:'like',
     unlike:'hate'
     };*/
    constructor(){
        super();
        this.state={isLiked:true}
    }
    handleClick(){
        this.setState({
            isLiked:!this.state.isLiked
        })
    }
    render(){
        return(
            <button onClick={this.handleClick.bind(this)}>
                {this.state.isLiked?this.props.like:this.props.unlike}
            </button>
        )
    }
}

class Child extends Component{
    constructor(){
        super();
        this.state={
            like:'like',
            unlike:'hate'
        }
    }

    handleClick(){
        this.setState({
            like:'点赞',
            unlike:'取消'
        })
    }

    render(){
        return(

            <div>
                <LikeBtn
                    like={this.state.like}
                    unlike={this.state.unlike}
                />
                <button onClick={this.handleClick.bind(this)}>修改</button>
            </div>

        )
    }
}

ReactDOM.render(<Child/>,document.querySelector("#root"));