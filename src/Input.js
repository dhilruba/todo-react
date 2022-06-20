import React from 'react'
import {useState} from 'react'


const Input = () => {
    console.log("here")
//hooks help the data to store and provide 
// first argument to get the data from hooks
// second argument to set the data to hooks and it will further send to first argumet of hooks 
    const [abc,setAbc]=useState()
    const [data,setData]=useState([])
    console.log(data);
    console.log(abc);
    //abc=
    //data=[rice,chips]
    const typing = (e)=>{
      e.preventDefault()
       // setAbc is taking the data from input field and sending the data to  abc via usestate hook

       //e.target.value that means value of targeted e(event )
setAbc(e.target.value)

        
    }

    const adddata =(e)=>{
      e.preventDefault()
      setData([...data,abc])//setData([...data,abc])
      setAbc('')

     // console.log(data);

    }
// return is main to display what had inside 


  return (
    <>
    <form type="submit"> 
    <input type='text' placeholder='enter something'  value={abc} onChange={typing}></input><br></br><br></br>
    <button onClick={adddata}>submit to addd</button>
    </form>

    {/* to display the data from hooks what we stored in abc we can display like that */}
    <ol>
    {data.map((elem)=>{
      return <li>{elem}</li>
    })}
    </ol>
    </>

  )
}

export default Input