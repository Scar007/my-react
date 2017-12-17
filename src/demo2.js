import React,{Component} from 'react';
import ReactDOm from 'react-dom';

class LikeBtn extends Component{

    static defaultProps={
        like:'点赞',
        unLike:'取消'
    };

    constructor(){
        super();
        this.state={isLiked:true};
    }

    handleClick(){
        this.setState({
            isLiked:!this.state.isLiked
        })
    }

    render(){
        return(
            <button onClick={this.handleClick.bind(this)}>
                {this.state.isLiked?this.props.like:this.props.unLike}
            </button>
        )
    }
}

class Index extends Component{
    render(){
        return(
            <div>
                <LikeBtn/>
            </div>
        )
    }
}

ReactDOm.render(<Index/>,document.getElementById('root'));