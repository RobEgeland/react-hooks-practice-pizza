
import React, {useState} from "react";

function PizzaForm({handlePizzaUpdate, vegetarian, size, topping, setVegetarian, setTopping, setSize}) {

  function handleChange(event){
    setTopping(event.target.value)
  }

  function handleSizeChange(e) {
    setSize(e.target.value)
  }

  

  return (
    <form onSubmit={handlePizzaUpdate}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={topping}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <select onChange={handleSizeChange} value={size} className="form-control" name="size">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={vegetarian ? 'checked' : ''}
              onClick={() => setVegetarian(true)}
              
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={vegetarian ? '' : 'checked'}
              onClick={() => setVegetarian(false)}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
