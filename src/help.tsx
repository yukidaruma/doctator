import { Box, Text } from "ink";

const HelpItem = ({
  shortcut,
  description,
}: {
  shortcut: string;
  description: string;
}) => (
  <Box>
    <Box width={10}>
      <Text bold>{shortcut}</Text>
    </Box>
    <Text>{description}</Text>
  </Box>
);

export const Help = () => {
  return (
    <Box flexDirection="column" gap={1}>
      <Box>
        <Text bold>Help</Text>
        <Text> (ESC to close)</Text>
      </Box>
      <Box marginLeft={2} flexDirection="column">
        <HelpItem shortcut="^P" description="Find file" />
        <HelpItem shortcut="^R" description="Find project" />
        <Box height={1} />
        <HelpItem shortcut="Tab" description="Navigate menu" />
        <HelpItem shortcut="Shift+Tab" description="Navigate back" />
        <HelpItem shortcut="↑/↓" description="Navigate menu" />
        <Box height={1} />
        <HelpItem shortcut="?" description="Show this help" />
        <HelpItem shortcut="q" description="Quit this application" />
      </Box>
    </Box>
  );
};
