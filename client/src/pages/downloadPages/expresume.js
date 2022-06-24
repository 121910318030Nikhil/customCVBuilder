import React,{Component} from 'react'


export default class Expresume extends Component{
    constructor(props) {
        super(props);
        this.state = { apiResponse: [] };
        
    }
    
    callAPI() {
        fetch("http://localhost:9000/experiencecall")
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
    
            {this.state.apiResponse.map((item)=>{return <>
            
            <h3>{item.title}</h3>
            <div>
            <h4 className="experience-title accent">{item.company}</h4>
				<h5>{item.from} - {item.to}</h5>
				<h6>{item.description}</h6>
            </div>
     
            </>})}        
            </>
        );
    }
}
