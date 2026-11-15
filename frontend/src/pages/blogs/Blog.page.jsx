import { Box } from "@mui/material"
import { useId } from "react"
import { contentTreeTypeEnums } from "../../constants/contentTree.constants"
import NodeRenderer from "../../components/contentManagement/NodeRenderer"

const BlogPage = () => {
  
  const id = useId()
  return (
    <Box>
      <NodeRenderer node={{
        id,
        type:contentTreeTypeEnums.LAYOUT,
        data:{
          styles:{
            p:"10px"
          },
          direction:"row",
          spacing:"16px"
        },
        children:[{
          id,
          type:contentTreeTypeEnums.TYPOGRAPHY,
          data:{
            text:"this is heading",
            styles:{
              backgroundColor:"red"
            },
            variant:"h1"
          }
        },
        {
          id:"1",
          type:contentTreeTypeEnums.IMAGE,
          content:{
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81bNIEaGCzdwl2QV5sIrD4JXpsyk1smkr4psQ6MhDvA8lGy5_6Y4sEyk&s=10",
            styles:{
              backgroundColor:"red"
            },
          }
        }
      ]
      }}/>
    </Box>
  )
}

export default BlogPage