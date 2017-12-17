import React,{Component} from 'react';
import ReactDOM from 'react-dom';

const users = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
];

class Child extends Component{
    render(){
        //这里的user取得是props里边的其中的一个值(user),所以需要解构赋值(user,xxx),因为是一个值，所以也可以不解构赋值,直接user=this.props.user
        const {user}=this.props;
        return(
            <div>
                <p>姓名：{user.username}</p>
                <p>年龄：{user.age}</p>
                <p>性别：{user.gender}</p>
                <hr/>
            </div>
        )
    }
}

class Index extends Component{

    render(){
        return (<div>{users.map((user,index)=> <Child user={user} key={index}/>)}</div>)
    }
}


ReactDOM.render(<Index/>,document.getElementById('root'));
