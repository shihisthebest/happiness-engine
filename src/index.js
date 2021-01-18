import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
//
// REACTDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(<App />, document.getElementById("root"));
// This is a happiness engine app that:
// a) Asks the user to input name
// b) Greets the user by name and one of three randomized catchphrases
// c) After three seconds, renders a page that allows user to select what kind of happiness they are looking for today
// d) User selects their mood and/or type of happiness
// e) Engine "thinks" for a moment with a dynamic image
// f) Engine outputs a video based on user's previous response
// g) Once video finishes, asks user if they would like more suggestions
// h) If yes, take user to page filled with repeated components (blocks) all featuring some kind of related video
