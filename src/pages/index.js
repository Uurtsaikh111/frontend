
export default function Home() {

const BE_URL = "http://localhost:3001/add-user";

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name: e.target.username.value,
      age: Number(e.target.age.value),
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

console.log(FETCHED_JSON)

  }
  return (
  <div className="w-[200px] m-auto flex flex-col gap-[10px]">
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-[10px]">
        <label for="name">
        Add Person
        <input id="name" name="name"/>
      </label>
      <label for="age">
        <input id="age" name="age"/>
      </label>
      <input type="submit" value="Save" />
      </div>
    </form>
  </div>
  );
}
