import React from "react";

import { YellowBox } from "react-native";

YellowBox.ignoreWarnings(["Unrecognized WebSocket connection options(s)"]);
console.disableYellowBox = true;

import Routes from "./routes";

const App = () => <Routes />;

export default App;
