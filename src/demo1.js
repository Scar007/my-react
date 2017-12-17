import React,{Component} from 'react';
import ReactDOM from 'react-dom';



class LikeBtn extends Component{
    constructor(){
        super();
        this.state={isLiked:true}
    }
    handleClick(){
        this.setState({
            isLiked:!this.state.isLiked
        });
        if(this.props.onClick){
            this.props.onClick();
        }
    }
    render(){
        /*
         const likeBtn=this.props.likeBtn||'点赞';
         const nolikeBtn=this.props.nolikeBtn||'取消';
         */
        const worlds=this.props.worlds||{
                likeBtn:'点赞',
                nolikeBtn:'取消'
            };
        return(
            <button onClick={this.handleClick.bind(this)}>
                {/*{this.state.isLiked?likeBtn:nolikeBtn}*/}
                {this.state.isLiked?worlds.likeBtn:worlds.nolikeBtn}
            </button>
        )
    }
}
class Index extends Component{
    render(){
        return(
            <div>
                {/*<LikeBtn likeBtn="赞" nolikeBtn="已赞"/>*/}
                <LikeBtn worlds={{likeBtn:"赞",nolikeBtn:"已赞"}} onClick={()=>console.log('hello world')}/>
            </div>
        )
    }
}
ReactDOM.render(<Index/>,document.getElementById('root'));