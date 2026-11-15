import { useEditor, EditorContent, generateHTML } from "@tiptap/react";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import { documentStore } from "../../../store/content.store.js";
import { useDebouncedCallback } from "../../../hooks/useDebounceCallback.js";
import TypographyOverlay from "./TypographyOverlay.jsx";
import { typographyContentStyles, typographyPreviewStyles, typographyStyles } from "./typography.styles.js";
import { extensions } from "./config.js";

function Typography({ node, selected = false }) {

  const content = node.content ?? {};
  const styles = content.styles ?? {};

  const updateText = useDebouncedCallback((value) => {
    documentStore.updateNodeContent(node.id,{text: value});
  }, 300);

  function handleClick(event) {
    event.stopPropagation();
    documentStore.selectNode(node.id);
  }

  const editor = useEditor({
    extensions,
    content: content.text ?? {
      type: "doc",
      content: [{ type: "paragraph" }],
    },
    editable: selected,
    onUpdate: ({ editor }) => {
      updateText(editor.getJSON());
    },
  });

  useEffect(() => {
    editor?.setEditable(selected);
  }, [editor, selected]);

  if (!editor) return null;

  const html = content.text
    ? generateHTML(content.text, extensions)
    : "";

  return (
    <Box onClick={handleClick} sx={{...typographyStyles, ...styles}}>

      {selected && <TypographyOverlay editor={editor} />}

      <Box sx={typographyContentStyles}>
        {selected ? 
          ( <EditorContent editor={editor} /> ) : 
          ( <Box
                sx={typographyPreviewStyles}
                dangerouslySetInnerHTML={{ __html: html }}
            /> 
          )
        }
        </Box>
    </Box>
  );
}

export default Typography;


