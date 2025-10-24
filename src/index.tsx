import { render } from "ink";
import { marked } from "marked";
import { markedTerminal } from "marked-terminal";
import { App } from "./app";

marked.use((markedTerminal as any)());

render(<App />);
