
import { useParams, useNavigate } from "react-router-dom"
import React, { useEffect,useState } from "react";

export default function UpdateClass(){

  const [classname, setClassName] = React.useState("");
  const [grade, setGrade] = React.useState("");
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  const [link, setLink] = React.useState("");
  const [error, setError] = useState("false")
  const params = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    getClassDetails();
  },[])

  

  const getClassDetails = async ()=>{
    console.warn(params)
    let result = await fetch(`http://localhost:8070/class/get/${params.id}`);
    result = await result.json();
    setClassName(result.classname);
    setGrade(result.grade);
    setDate(result.date);
    setTime(result.time);
    setLink(result.link);
  }



  const updateClass = async () =>{
    console.warn(classname,grade,date,time,link)
    let result = await fetch(`http://localhost:8070/class/update/${params.id}`,{
      method:'put',
      body:JSON.stringify({classname,grade,date,time,link}),
      headers:{
        'Content-Type':'Application/json'
      }

    });
    result = await result.json()
    if(result){
      
      navigate('/')
      alert("Update Successfully")
    }
    
  }

  const hadleSubmit=(e)=>{
    e.preventDefault();
    if(classname.length==0||grade.length==0||date.length==0||time.length==0||link.length==0)
    setError(true)
    if(classname&&grade&&date&&time&&link)
    {
      console.log("Name:",classname,"Grade:",grade,"Date:",date,"Time:",time,"Link:",link)
    }
  }
  


  

    return(
        //class create form
        
        <div className="container" style={{width: '80%', float: 'right'}}>

          <br></br>
          <br></br>
          <h2 style={{color:'white'}}>Update Class</h2>
          <br></br>
          <br></br>

        <div style={{width: '1100px', float: 'center',color:'white'}}>

        <div className="mb-3 row">
          <label for="classname" className="col-sm-2 col-form-label">Class</label>
          <div className="col-sm-10">
          <input type="text" className="form-control" id="classname" placeholder="Class Name" 
          value={classname}
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
          value={grade}
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
          value={date}
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
          value={time}
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
          value={link}
          onChange={(e)=>{ 

            setLink(e.target.value);

          }}/>
          </div>
          {error&&link.length<=0?<lable class="text" style={{color:'#FF0000'}}>Class Link can't be empty!</lable>:""}
        </div>

        <button type="submit" className="btn btn-secondary" onClick={updateClass}><i className="fas fa-edit"></i> Update</button>

        </div>
      
        </div>
      
    )
    
}


