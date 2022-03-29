import React from "react";

function Pizza({topping, size, vegetarian, setVegetarian, setTopping, setSize, id, setId}) {
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td>
        <button onClick={() => {
          setVegetarian(vegetarian);
          setSize(size);
          setTopping(topping);
          setId(id)
        }} type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
