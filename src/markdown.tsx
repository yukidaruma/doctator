import { Text } from "ink";
import { marked } from "marked";
import { useMemo } from "react";

interface MarkdownProps {
  children: string;
}

export const Markdown = ({ children }: MarkdownProps) => {
  const rendered = useMemo(() => {
    return marked.parse(children, { async: false }) as string;
  }, [children]);

  return <Text>{rendered}</Text>;
};
