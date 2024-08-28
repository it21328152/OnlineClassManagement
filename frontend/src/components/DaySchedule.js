import React, {useState, useEffect,useRef} from 'react';
import axios from "axios";
import {useReactToPrint} from "react-to-print";

export default function DaySchedule(){
    const conponentPDF = useRef();
    const[classes, setClasses] = useState([]);
    const[search, setsearch] = useState([]);
    const[clockState, setClockState] = useState();
    console.log(search)
    
    

    useEffect(()=>{
        function getClasses() {
            axios.get("http://localhost:8070/class/").then((res)=>{
               setClasses(res.data);
               console.log(res);
        }).catch((err)=>{
            alert(err.message);
        })
        }
        getClasses();

        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
            
        }, 1000);
    
    } ) 

    const generatePDF = useReactToPrint({
        content: ()=>conponentPDF.current,
        documentTitle: "userdata",
        onAfterPrint: ()=> alert("Download Successfully")
       });
    

  
    
   
   


    return(
        
        <div className="container" ref={conponentPDF} style={{width: '80%', float: 'right'}}>
            <br></br>
            <h1 style={{color:'white'}}>Day Schedule</h1>
            <br></br>
            <div ><span class="p-3 mb-3 border border-danger body rounded" style={{fontSize:'20px',color:'white'}}><b>Time:</b> {clockState} </span>
            
            
            <br></br>
            <br></br>
            <br></br>
         

            <form class="d-flex" style={{marginRight:'72%'}}>
            <label for="grade" className="col-sm-2 col-form-label" style={{color:'white'}}>Date</label>
            <input class="form-select" type='date' onChange={(e) => setsearch(e.target.value)} placeholder="Search by date" aria-label="Search"/>
          
            </form>


            </div>
            <br></br>
           
            
    
            <div>
            
            <table class="table table-dark table-striped" style={{color:'white'}}>
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Time</th>
                        <th scope="col">Garde</th>
                        <th scope="col">Class</th>
                        
                    </tr>
                </thead>
                <tbody>
                {classes.filter((classes) => {
                    return search.toString().toLowerCase() === '' ? classes: classes.date.toString().toLowerCase().includes(search);
                    
                }).map((classes, index) => {
                    return(
                    <tr key={classes._id}>
                        <th scoop="row">{index+1}</th>
                        <td>{classes.time}</td> 
                        <td>{classes.grade}</td>
                        <td>{classes.classname}</td>
                       
                        
                      
                    </tr>
                    )
                    
                
                
               
            })}

                </tbody>
            </table>

            </div>

            <br></br>
            <br></br>

                <a className="btn btn-outline-light" href="#" onClick={generatePDF}>
                    <i className="fas fa-download"></i>&nbsp;Download
                </a>

                <br></br>

                

  
            

            
        </div>
      
        
    )

    
    
}
