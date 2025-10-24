import { Box, Text, useApp, useInput, useStdout } from "ink";
import { useState } from "react";
import { Help } from "./help";
import { Markdown } from "./markdown";
import { Menu } from "./menu";

export const App = () => {
  const menuItems = ["#1", "#2", "#3"];
  const [mode, setMode] = useState<
    "normal" | "findFile" | "findProject" | "help"
  >("normal");

  const { exit } = useApp();
  const { stdout } = useStdout();
  const terminalHeight = stdout.rows;

  useInput((input, key) => {
    if (input === "q") {
      exit();
    } else if (input === "?") {
      setMode("help");
    } else if (key.ctrl && input === "p") {
      setMode("findFile");
    } else if (key.ctrl && input === "r") {
      setMode("findProject");
    } else if (key.escape) {
      setMode("normal");
    }
  });

  const handleMenuSelect = (index: number) => {
    // TODO: Handle menu selection
  };

  if (mode === "help") {
    return (
      <Box flexDirection="column" height={terminalHeight}>
        <Box flexGrow={1} padding={1}>
          <Help />
        </Box>
      </Box>
    );
  }

  return (
    <Box flexDirection="column" height={terminalHeight}>
      <Box flexGrow={1}>
        <Menu items={menuItems} onSelect={handleMenuSelect} />
        <Box flexGrow={1} padding={1} flexDirection="column">
          {mode === "normal" && (
            <Markdown>
              {
                "# Hello Markdown\n\nThis is a **bold** text and *italic* text.\n```js\nconsole.log('Hello, World!')\n```"
              }
            </Markdown>
          )}
          {mode === "findFile" && (
            <Box flexDirection="column">
              <Text bold>Find File</Text>
              <Text dimColor>Press ESC to cancel</Text>
            </Box>
          )}
          {mode === "findProject" && (
            <Box flexDirection="column">
              <Text bold>Find Project</Text>
              <Text dimColor>Press ESC to cancel</Text>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};
