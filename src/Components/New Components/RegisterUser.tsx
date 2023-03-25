import { useState } from "react";
import "../../css/RegisterUser.css";

interface IRegisterUserProps {
  SetName: Function;
}

export function RegisterUser(props: IRegisterUserProps) {
  const [name, setName] = useState("");

  function handleOnSubmit(event: React.FormEvent<HTMLElement>) {
    event.preventDefault();
    props.SetName(name);
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
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
}
