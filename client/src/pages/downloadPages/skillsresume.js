import React,{Component} from 'react'


export default class Skillresume extends Component{
    constructor(props) {
        super(props);
        this.state = { apiResponse: [] };
        
    }
    callAPI() {
        fetch("http://localhost:9000/skillcall")
            .then(res => res.text())
            .then(res=>JSON.parse(res))
            .then(res => this.setState({ apiResponse: res}));
             
    }
    componentWillMount() {
        this.callAPI();
    }
    render(){
        return(
            <>

            {this.state.apiResponse.map((skill)=>{return <>
            <ul>
                 <li>{skill.skillname}<span className="pull-right">{skill.percent}</span></li>	
            </ul>
                
            </>})}
            
         
            
            </>
        );
    }
}
