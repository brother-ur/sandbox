import React from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react-lite";

import { store, StoreType } from './store';

setInterval(() => {
	store.increaseTimer();
}, 1000);

const getListFromServer = async() => {
	console.log('start')
	await store.getList()
}

// A function component wrapped with observer will reacts to any
// future change in an observable it used before
const TimerView = observer(({ store }: { store: StoreType }) => (
	<span onClick={() =>getListFromServer()}>Seconds passed: {store.secondsPassed}</span>
));

ReactDOM.render(<TimerView store={store} />, document.body);