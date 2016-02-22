import {createRenderer} from 'react-addons-test-utils';
import React from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import TodoList from './app/components/TodoList.js';


let repl = require("repl");

let replServer = repl.start({
  prompt: "my-app > ",
});

let renderer = createRenderer();
let click = () => {callbackObj.a = !callbackObj.a;}
renderer.render(<TodoList/>);
////renderer.getRenderOutput().props.onClick();

replServer.context.renderer = renderer;
replServer.context.to_s = reactElementToJSXString;
