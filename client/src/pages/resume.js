import React from "react";
import ContactResume from "./downloadPages/contactResume";
import Expresume from "./downloadPages/expresume";
import Profileresume from "./downloadPages/profileResume";
import LanguageResume from "./downloadPages/languagesresume";
import EducationResume from "./downloadPages/educationresume";
import PersonalResume from "./downloadPages/personaldetails";
import Skillresume from "./downloadPages/skillsresume";
export default function Resume (){
    return(
        <>
 <div className="sheet">
   
        <section>
            <nav className="resumeprofile navh">
            <div className="container">
             <h1 className="heading">SAKETH RAO ANNAMANENI</h1>
             <h4>MY RESUME</h4>
             <br/>
                   <div>
                    <ContactResume/>
                   </div>
                   <div>
                    <img src="assets/images/img2234.jpg" className="imgp"/>
                    </div>  
            </div>
            </nav>
        </section>
        <section className="text-left">
            <div className="row">
            <div className="col-md-8">
                <div className="container line-to-right px-2 py-2">
                <div>
                <h2>profile</h2>
                <br/>
                  <Profileresume/>
              </div>
              <hr className="hrline"/>
              <div>
                <h2>experience</h2>
                <br/>
                <Expresume/>
              </div>
              <hr/>
              <div>
                <h2>education</h2>
               <EducationResume/>
              </div>
              <hr/>
              <div>
                <h3>skills</h3>
                  <Skillresume/>
              </div>
                    </div>    
              
    </div>

    <div className="col-md-4">
        <div>
            <h3>personal details</h3>
             <PersonalResume/>
        </div>
        <hr/>
        <div>
            <h3>languages</h3>
            <LanguageResume/>
        </div>
        
    </div> 

            </div>


        </section>
    
             
 </div>

        </>
    )
}