import React from 'react';
import { createStore } from 'redux';

const storeReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ONE':
            return state + 1;
        case 'TWO':
            return state + 2;
    }
    return state;
}

const store = createStore(storeReducer);

export default function Redux() {

    const myClick1 = () => {
        store.dispatch({type: 'ONE'});
        console.log(store.getState());
    }
    const myClick2 = () => {
        store.dispatch({type: 'TWO'});
        console.log(store.getState());
    }

    return (
        <div>{
            store.subscribe(() => {
                store.getState();
            })} <br/>
            <button onClick={myClick1}>1</button>
            <button onClick={myClick2}>2</button>
        </div>
    )
}