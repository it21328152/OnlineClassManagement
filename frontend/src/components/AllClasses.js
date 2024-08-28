import React, {useState, useEffect,useRef} from 'react';
import axios from "axios";
import {useReactToPrint} from "react-to-print";

export default function AllClasses(){
    const conponentPDF = useRef();
    const[classes, setClasses] = useState([]);
    const[search, setsearch] = useState([]);
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

        
    
    } ) 

    


  
    
   const deleteClass= async(id)=>{
    console.warn(id)
    let result = await fetch(`http://localhost:8070/class/delete/${id}`,{
        method:"Delete"
    });
    result = await result.json();
    if(result)
    {
        
        alert("Delete Successfully")
        
    }
   }

   const generatePDF = useReactToPrint({
    content: ()=>conponentPDF.current,
    documentTitle: "userdata",
    onAfterPrint: ()=> alert("Download Successfully")
   });


    return(
        
        <div className="container" style={{width: '80%', float: 'right'}} >
            <br></br>
            <br></br>
            <h1 style={{color:'white'}}>All Classes</h1>
            <br></br>
            <form class="d-flex">
            <input class="form-control me-2 " type="text" onChange={(e) => setsearch(e.target.value)} placeholder="Search by Class Name" aria-label="Search"/>
            </form>
            <br></br>
            <div>
            <div ref={conponentPDF} style={{width:'100%'}}>
            <table class="table table-dark table-striped" style={{color:'white'}}>
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Class</th>
                        <th scope="col">Garde</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Link</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                {classes.filter((classes) => {
                    return search.toString().toLowerCase() === '' ? classes: classes.classname.toString().toLowerCase().includes(search);
                    
                }).map((classes, index) => {
                    return(
                    <tr key={classes._id}>
                        <th scoop="row">{index+1}</th>
                        <td><a href={`/get/${classes._id}`} style={{textDecoration:'none',color:'white'}}>{classes.classname} </a> </td> 
                        <td>{classes.grade}</td>
                        <td>{classes.date}</td>
                        <td>{classes.time}</td>
                        <td>{classes.link}</td>
                        <td>
                            <a className="btn btn-secondary" href={`/update/${classes._id}`}>
                                <i className="fas fa-edit"></i>&nbsp;Update
                            </a>

                            <h>    </h>
                            
                            <a className="btn btn-danger" href="#" onClick={()=>deleteClass(classes._id)}>
                                <i className="fas fa-trash-alt"></i>&nbsp;Delete
                            </a>
                            

                        </td>
                    </tr>
                    )
                    
                
                
               
            })}

                </tbody>
            </table>

            </div>

            <br></br>

                <a className="btn btn-outline-light" href="#" onClick={generatePDF}>
                    <i className="fas fa-download"></i>&nbsp;Download
                </a>

                <br></br>
            

            
        </div>
        </div>
        
    )

    
    
}
