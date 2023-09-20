import React, { useState } from 'react'

const map_obj={
  "c2":["Lorem 2.0","Lorem 2.1","Lorem 2.2","Lorem 2.3","Lorem 2.4","Lorem 2.5","Lorem 2.6","Lorem 2.7"],
  "c1":["Lorem 1.0","Lorem 1.1","Lorem 1.2","Lorem 1.3","Lorem 1.4","Lorem 1.5","Lorem 1.6","Lorem 1.7",],

};


function no_backspaces(event){
  var backspace = 8;
  if (event.keyCode == backspace) event.preventDefault();
}



const App = () => {
 
  const [txtbox,Settxtbox]=useState("nishan/ ");

  const [customchecked,Setcustomchecked]=useState(false);

  function maintain_checkbox() {
    var main_str="nishan/";
    for(var i=1;i<=2;i++){
      let cc="c"+i;
      if(document.getElementById(cc).checked){
        main_str+=map_obj[cc];
  
      }
      
    }
    document.getElementById('txtbox').value=main_str;
  
  }



  
  return (
    <>

<div className='flex'>

<div>
<input onChange={()=>{Setcustomchecked(document.getElementById('custom').checked)}} type="checkbox" id="custom" name="custom" value="custom"/>
  <label for="custom"> custom </label>
  <br/>
{console.log("nishan")}
<input type="checkbox" id="c1" name="c1" value="c1" onChange={()=>{maintain_checkbox()}} />
  <label for="c1"> c1</label>
  <br/>

<input type="checkbox" id="c2" name="c2" value="c2" onChange={()=>{maintain_checkbox()}} />
  <label for="c2"> c2</label>
  <br/>
</div>
<div className=''>
{
customchecked? (<input  type="text" id='txtbox'  className='w-[700px] h-[500px] border-[3px] border-red-200 mx-10' defaultValue={"nishan/ "} onChange={(e)=>{Settxtbox(e.target.value)}} onKeyDown={(e)=>{if(txtbox=="nishan/" || txtbox=="nishan/ ") no_backspaces(e)}}/>):(<input readOnly type="text" id='txtbox'  className='w-[700px] h-[500px] border-[3px] border-red-200 mx-10' defaultValue={"nishan/ "} onChange={(e)=>{Settxtbox(e.target.value)}} onKeyDown={(e)=>{if(txtbox=="nishan/" || txtbox=="nishan/ ") no_backspaces(e)}}/>)

}
</div> 

</div>
<button onClick={()=>{document.getElementById('txtid').value="nishan/";Settxtbox("nishan/");alert(customchecked);}} className='border-4 border-pink-600'>submit</button>

    </>

      
  )
}

export default App
