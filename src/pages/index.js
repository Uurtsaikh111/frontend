import { nanoid } from 'nanoid'
import { useState,useEffect } from 'react';

export default function Home() {

const BE_URL = "http://localhost:3001/add-user";

const [users, setUsers] = useState("")

  async function handleSubmit(e) {
    e.preventDefault();

    const newid = nanoid();
    const data = {
      name: e.target.name.value,
      age: Number(e.target.age.value),
      id:newid
    };
    console.log(data);

   const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
   };
const FETCHED_DATA = await fetch(BE_URL, options);
const FETCHED_JSON = await FETCHED_DATA.text();

setUsers(FETCHED_JSON);
console.log("array:",setUsers);




  }
return (
  <div className="w-[200px] m-auto flex flex-col gap-[10px]">
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-[10px]">
        <label>
        Add Person
        <input id="name" name="name"/>
      </label>
      <label>
        <input id="age" name="age"/>
      </label>
      <input type="submit" value="Save" />
      </div>
      <div>
        
      </div>
    </form>
    <div>
      {/* {setUsers.users.map((a)=> {
        return(
          <div>{a.name}</div>
          

        )
      })} */}
    </div>
  </div>
  );
}
