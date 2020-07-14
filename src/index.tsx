import React from "react";
import ReactDOM from "react-dom";

const render = () => {
	const App = require("./App").default;
	ReactDOM.render(<App />, document.getElementById("root"));
};
render();

if (process.env.NODE_ENV === "development" && (module as any).hot) {
	console.log("reeeeeeeeeeeeeeeee");

	(module as any).hot.accept("./App", render);
}
