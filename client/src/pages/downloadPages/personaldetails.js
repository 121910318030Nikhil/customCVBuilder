import React,{Component} from 'react'


export default class PersonalResume extends Component{
    constructor(props) {
        super(props);
        this.state = { apiResponse: [] };
        
    }
    
    callAPI() {
        fetch("http://localhost:9000/personalcall")
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
                <p>{this.state.apiResponse.fathername}</p> 
                <p>{this.state.apiResponse.mothername}</p>
                <p>{this.state.apiResponse.nationality}</p>           
           
            
            
            </>
        );
    }
}
