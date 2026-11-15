import Box from "@mui/material/Box";
import NodeRenderer from "../NodeEditorRenderer";
import { documentStore } from "../../../store/content.store";

function HorizontalLayout({ node }) {

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
        flexDirection: "row",
        overflow:"wrap",
        width: "100%",
        backgroundColor:"#413f3f12",
        ...styles
      }}
    >
      {node.children?.map((child) => (
        <NodeRenderer key={child.id} node={child} />
      ))}
    </Box>
  );
}

export default HorizontalLayout;
