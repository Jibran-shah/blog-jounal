import Box from "@mui/material/Box";
import NodeRenderer from "../NodeEditorRenderer";
import { documentStore } from "../../../store/content.store";

function VerticalLayout({ node, selected = false }) {

  const styles = node.content?.styles ?? {};

  function handleClick(event) {
    event.stopPropagation();
    documentStore.selectNode(node.id);
  }


  return (
    <Box
      onClick={handleClick}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: `${styles.gap ?? 16}px`,
        width: styles.width ?? "100%",
        boxSizing: "border-box",
        ...styles
      }}
    >
      {node.children?.map((child) => (
        <NodeRenderer key={child.id} node={child} />
      ))}
    </Box>
  );
}

export default VerticalLayout;
