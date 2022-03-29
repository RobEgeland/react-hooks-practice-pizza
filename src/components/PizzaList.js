import React from "react";
import Pizza from "./Pizza";

function PizzaList({setId, pizzas, setTopping, setSize, setVegetarian}) {
  
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {pizzas.map((pizza) => <Pizza setId={setId} id={pizza.id} key={pizza.id} setVegetarian={setVegetarian} setSize={setSize} setTopping={setTopping} topping={pizza.topping} size={pizza.size} vegetarian={pizza.vegetarian} />)}
      </tbody>
    </table>
  );
}

export default PizzaList;
