import {createRenderer} from 'react-addons-test-utils';
import React from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import TodoList from './app/components/TodoList.js';
import Todo from './app/components/Todo.js';
import ClickableTodo from './app/containers/ClickableTodo.js';
import ClickableTodos from './app/containers/ClickableTodos.js';
import rootReducer from './app/reducers';
import { createStore } from 'redux'


let repl = require("repl");

let replServer = repl.start({
  prompt: "my-app > ",
});

const store = createStore(rootReducer);
let renderer = createRenderer();
let click = () => {callbackObj.a = !callbackObj.a;}
renderer.render(<ClickableTodos store={store}/>);
let rendered = renderer.getRenderOutput();
//renderer.getRenderOutput().props.onClick();

renderer.getRenderOutput().props.onDoubleClick();

replServer.context.renderer = renderer;
replServer.context.rendered = rendered;
replServer.context.to_s = reactElementToJSXString;
replServer.context.store = store;
