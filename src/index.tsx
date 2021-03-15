import React from "react";
import ReactDOM from "react-dom";

import { store } from './store';
import { Main } from './components/main';

ReactDOM.render(<Main store={store} />, document.body);