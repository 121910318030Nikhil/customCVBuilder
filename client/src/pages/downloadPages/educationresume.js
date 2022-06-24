import React,{Component} from 'react'



export default class EducationResume extends Component{
    constructor(props) {
        super(props);
        this.state = { apiResponse: [] };
        
    }
    
    callAPI() {
        fetch("http://localhost:9000/usercalleducation")
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
           
                
           
           
           
                <h3 style={{color:'#ea951d'}}>{item.degree}</h3>
            <p style={{color:'#ccc'}}>Branch:<span style={{fontStyle:'italic'}}>{item.branch}</span> </p>
            <p style={{color:'#ccc'}}>Year(s) Studied:<span style={{fontStyle:'italic'}}>{item.yoj} - {item.yop}</span></p>
            <p style={{color:'#ccc'}} className="">Institution:<span style={{fontStyle:'italic'}}>{item.institute}</span></p>
               
                
                    <h5>GPA:<span style={{color:'#ea951d'}}>{item.grade}</span></h5>
                    
                    
     
           
           
            

           
                
            </>})}
            

          
            
            </>
        );
    }
}
