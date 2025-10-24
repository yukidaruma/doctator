import { Box, Text, useInput } from "ink";
import { useState } from "react";

interface MenuProps {
  items: string[];
  onSelect?: (index: number) => void;
}

export const Menu = ({ items, onSelect }: MenuProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useInput((input, key) => {
    if ((key.tab && key.shift) || key.upArrow) {
      setSelectedIndex((prev) => (prev - 1 + items.length) % items.length);
    } else if (key.tab || key.downArrow) {
      setSelectedIndex((prev) => (prev + 1) % items.length);
    } else if (key.return) {
      onSelect?.(selectedIndex);
    }
  });

  return (
    <Box flexDirection="column" paddingX={1} paddingY={1} borderStyle="single" borderRight={true} borderLeft={false} borderTop={false} borderBottom={false} borderColor="gray" width={12}>
      {items.map((item, index) => (
        <Text
          key={index}
          inverse={index === selectedIndex}
          bold={index === selectedIndex}
        >
          {item}
        </Text>
      ))}
    </Box>
  );
};
