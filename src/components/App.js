import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([])
  const [topping, setTopping] = useState("")
  const [size, setSize] = useState("")
  const [vegetarian, setVegetarian] = useState(false)
  const [id, setId] = useState("")

  useEffect(() => {
    fetch('http://localhost:3001/pizzas')
    .then(res => res.json())
    .then(pizza => setPizzas(pizza))
  }, [])

  function handlePizzaUpdate() {
    const updatedPizza = {
      "topping": topping,
      "size": size,
      "vegetarian": vegetarian
    }
    fetch(`http://localhost:3001/pizzas/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedPizza)
    })
    .then(res => res.json())
    .then(res => changePizzaDisplay(updatedPizza))
  }

  function changePizzaDisplay(updatedPizza) {
    const newPizzaList = pizzas.map((pizza) => {
      if(pizza.id === id) {
        return updatedPizza
      }else {
        return pizza
      }
    })
    setPizzas(newPizzaList)
  }

  return (
    <>
      <Header />
      <PizzaForm handlePizzaUpdate={handlePizzaUpdate} setVegetarian={setVegetarian} setSize={setSize} setTopping={setTopping} vegetarian={vegetarian} size={size} topping={topping} />
      <PizzaList setId={setId} setVegetarian={setVegetarian} setSize={setSize} setTopping={setTopping} pizzas={pizzas} />
    </>
  );
}

export default App;
