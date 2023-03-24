import { useState } from "react";

interface IRegisterUserProps{
SetName: Function; 
}




export function RegisterUser(props:IRegisterUserProps) {


const [name, setName] = useState('');

function handleOnSubmit(event:React.FormEvent<HTMLElement>){
event.preventDefault();
props.SetName(name)
}



  return (
    <div className="RegisterUser">
      <form onSubmit={handleOnSubmit}>
        <label>
          Insert Name to Begin!
          <input type="text" onChange={(e) => setName(e.target.value)} name="name" />
        </label>
        <button type="submit" value="Submit" />
      </form>
    </div>
  );
}
