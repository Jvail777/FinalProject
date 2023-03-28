import { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/RegisterUser.css";

interface IRegisterUserProps{
  setName: Function
}

export function RegisterUser(props: IRegisterUserProps) {
  const [name, setName] = useState("");

  function handleOnSubmit(event: React.FormEvent<HTMLElement>) {
    event.preventDefault();
    props.setName(name);
  }

  return (
    <div className="RegisterUser">
      <form onSubmit={handleOnSubmit}>
        <label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            name="name"
            placeholder="Insert Name to Begin!"
          />
        </label>
        <button className="submit-btn" type="submit" value="Submit">
          Submit
        </button>
        
      </form>
    </div>
  );
}
