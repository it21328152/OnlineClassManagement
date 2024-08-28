import {useNavigate} from "react-router-dom"
import React, {useState} from "react";
import axios from "axios";

export default function AddClass(){

  const [classname, setClassName] = useState("");
  const [grade, setGrade] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [link, setLink] = useState("");
  const [error, setError] = useState("false")
  const navigate = useNavigate();

  function sendData(e){
    e.preventDefault();
    
    const newClass ={
      classname,
      grade,
      date,
      time,
      link
    }
    axios.post("http://localhost:8070/class/add",newClass).then(()=>{
      alert("Class Added")
      setClassName("");
      setGrade("");
      setDate("");
      setTime("");
      setLink("");

      if(classname.length==0||grade.length==0||date.length==0||time.length==0||link.length==0)
    setError(true)
    if(classname&&grade&&date&&time&&link)
    {
      console.log("Name:",classname,"Grade:",grade,"Date:",date,"Time:",time,"Link:",link)
    }
      
    }).catch((err)=>{
      alert(err)
    })

    navigate('/')
    
  
  }

  const hadleSubmit=(e)=>{
    e.preventDefault();
    
  }

  

    return(
        //class create form
        
        <div className="container" style={{width: '80%', float: 'right'}}>

          <br></br>
          <br></br>
          <h2 style={{color:'white'}}>Create Class</h2>
          <br></br>
          <br></br>

        <div style={{width: '1100px', float: 'center',color:'white'}}>

        <div className="mb-3 row"  >
          <label for="classname" className="col-sm-2 col-form-label">Class</label>
          <div className="col-sm-10">
          <input type="text" className="form-control" id="classname" placeholder="Class Name" 
          onChange={(e)=>{

            setClassName(e.target.value);

          }}/>
          </div>
          {error&&classname.length<=0?<lable class="text" style={{color:'#FF0000'}}>Class Name can't be empty!</lable>:""}
        </div>

        <div className="mb-3 row">
          <label for="grade" className="col-sm-2 col-form-label">Grade</label>
          <div className="col-sm-10">
          <select type="text" className="form-select" id="grade" placeholder="Grade"
          onChange={(e)=>{

            setGrade(e.target.value);

          }}>
            <option value=""></option>
            <option value="10"> 10 </option>
            <option value="11"> 11 </option>
            <option value="12"> 12 </option>
            <option value="13"> 13 </option>
            </select>
          </div>
          {error&&grade.length<=0?<lable class="text" style={{color:'#FF0000'}}>Grade can't be empty!</lable>:""}
        </div>

        <div className="mb-3 row">
          <label for="date" className="col-sm-2 col-form-label">Date</label>
          <div className="col-sm-10">
          <input type="date" className="form-control" id="date" placeholder="Date"
          onChange={(e)=>{

            setDate(e.target.value);

          }}/>
          </div>
          {error&&date.length<=0?<lable class="text" style={{color:'#FF0000'}}>Date can't be empty!</lable>:""}
        </div>

        <div className="mb-3 row">
          <label for="time" className="col-sm-2 col-form-label">Time</label>
          <div className="col-sm-10">
          <input type="time" className="form-control" id="time" placeholder="Time"
          onChange={(e)=>{

            setTime(e.target.value);

          }}/>
          </div>
          {error&&time.length<=0?<lable class="text" style={{color:'#FF0000'}}>Time can't be empty!</lable>:""}
        </div>

        <div className="mb-3 row">
          <label for="link" className="col-sm-2 col-form-label">Link</label>
          <div className="col-sm-10">
          <input type="url" className="form-control" id="link" placeholder="Online Class Link"
          onChange={(e)=>{

            setLink(e.target.value);

          }}required/>
          </div>
          {error&&link.length<=0?<lable class="text" style={{color:'#FF0000'}}>Class Link can't be empty!</lable>:""}
        </div>

        <br></br>
        <br></br>

        <button type="submit" className="btn btn-secondary" onClick={sendData} ><i class="fa fa-folder-open" aria-hidden="true"></i> Submit</button>

        </div>
      
        </div>
      
    )
    
}