import Box from "@mui/material/Box";
import { documentStore } from "../../../store/content.store";
import ImageIcon from "../../../assets/ImageIcon.png"

function Image({ node }) {

  const content = node.content ?? {};  

  const styles = content.styles ?? {};

  function handleClick(event) {
    event.stopPropagation();
    documentStore.selectNode(node.id);
  }

  if(!content.src){
    return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          height:"200px",
          justifyContent: "center",
          alignItems:"center",
          backgroundColor:"#FFFFFF",
          p: 3,
          ...styles,
        }}
      >
        <Box
          component="img"
          src={ImageIcon}
          sx={{
            flexGrow:"1",
            flexShrink:"1",
            flexBasis:"50px",
            objectFit: "contain",
            maxHeight:"100%",
            maxWidth:"100%",
            display: "block",
          }}
        />
      </Box>
    )
  }

  return (
    <Box
      onClick={handleClick}
      component="img"
      src={content.src}
      alt={content.alt ?? ""}
      sx={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        ...styles,
        minWidth:"50%"
      }}
    />
  )
}

export default Image;