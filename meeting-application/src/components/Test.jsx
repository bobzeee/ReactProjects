import React, { useState } from "react";

const Test = () => {
  const [count, setCount] = useState(1);
  const [names, setName] = useState([
    { firstName: "", lastName: "" },
    { firstName: "", lastName: "" },
  ]);

  const handleChange = (index, event) => {
    console.log(index, event.target.name);
    const values = [...names];
    values[index][event.target.name] = event.target.value;
    setName(values);
  };

  const handleAddRow = (e) => {
    e.preventDefault();

    setName([...names, { firstName: "", lastName: "" }]);
  };

  return (
    <div style={{ display: "flex" }}>
      <button onClick={() => setCount(count - 1)}>-</button>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>

      <form>
        {names.map((name, index) => (
          <div key={index}>
            <input
              onChange={(event) => handleChange(index, event)}
              name="firstName"
              value={name.firstName}
              type="text"
              placeholder="firstname"
            />
            <input
              onChange={(event) => handleChange(index, event)}
              name="lastName"
              value={name.lastName}
              type="text"
              placeholder="lastname"
            />
            <button onClick={(e) => handleAddRow(e)}>Add</button>
          </div>
        ))}
      </form>
    </div>
  );
};

export default Test;
