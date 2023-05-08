import React, { useEffect, useState } from 'react'
import { Checkmark } from 'react-checkmark'
import { ImCross } from "react-icons/im";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './List.css'
const ToDolist = () => {
    const [id,setId]=useState("")
    const [list,setList]=useState([])
    const [status,setstatus]=useState(false)
    async function getList(e) {
        console.log("function called")
        const req = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
          method:"GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        const data = await req.json();
        console.log("data is : ",data)
        setList(data)
        setstatus(true)
      }
      console.log(id)
      
  return (
<>
{!status && <div className='section'>
    <div className="form-group">
  <label htmlFor="exampleInputEmail1">Enter User ID</label>
  <input type="number" className="form-control" id="exampleInputEmail1"  placeholder="User ID" onChange={(e)=>setId(e.target.value)} />
<button class="btn btn-primary" onClick={getList}>Submit</button>

</div>
  
</div> }

{status && <div className='section'> <table >
  <tr>
    <th>Task Name</th>
    <th>Task Status</th>
   
  </tr>
  <tr>
    <td>{list.title}</td>
    {!list.completed && <td><ImCross/></td>}
    {list.completed && <td><Checkmark size='26px' /></td>}
    
  </tr>
  
</table></div> }

</>
    )
}

export default ToDolist