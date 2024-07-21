import React from "react";
import NavBar from "./NavBar.jsx";
//import Text from "./Text.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

const Perfil = () => {
	return (
		<div >
			<NavBar />
			<Text />
			<div className="row align-center">
            <form>
  <fieldset disabled>
    <legend>Mi perfil</legend>
    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">Gender</label>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input">
    </div>
    <div class="mb-3">
      <label for="disabledSelect" class="form-label">Birth date</label>
      <select id="disabledSelect" class="form-select">
        <option>Weight</option>
      </select>
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled>
       
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Continue</button>
  </fieldset>
</form>
			</div>
			<Footer />
		</div>

	);
};

export default Perfil;