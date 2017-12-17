import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Hello extends Component{
    render(){
        return(
            <div>
                hello
            </div>
        )
    }
}

class Html extends Component{
    render(){
        return(
            <div>
                <Hello/>
                html
            </div>
        )
    }
}

class Css extends Component{
    render(){
        return(
            <div>
                css
            </div>
        )
    }
}

class Javascript extends Component{
    render(){
        return(
            <div>
                javascript
            </div>
        )
    }
}
class Index extends Component{
    render(){
        return(
            <div>
                <Html/>
                <Css/>
                <Javascript/>
            </div>
        )
    }
}
ReactDOM.render(<Index/>,document.querySelector('#root'))