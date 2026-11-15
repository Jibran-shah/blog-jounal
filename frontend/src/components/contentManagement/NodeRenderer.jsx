import { componentsRegistryRenderring } from "../../registeries/contentComponents.js";

function NodeRenderer({ node }) {
  const Component = componentsRegistryRenderring[node.type];
  if (!Component) return null;
  console.log("called")
  return <Component node={node} />;
}

export default NodeRenderer;