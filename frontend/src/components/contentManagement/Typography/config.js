import StarterKit from "@tiptap/starter-kit";
import FontFamily from "@tiptap/extension-font-family";
import Color from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import { TextStyle } from "@tiptap/extension-text-style";


const FontSize = TextStyle.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      fontSize: {
        default: null,
        parseHTML: (element) => element.style.fontSize || null,
        renderHTML: (attributes) => {
          if (!attributes.fontSize) return {};
          return {
            style: `font-size: ${attributes.fontSize}`,
          };
        },
      },
    };
  },

  addCommands() {
    return {
      setFontSize:
        (fontSize) =>
        ({ chain }) =>
          chain().setMark(this.name, { fontSize }).run(),

      unsetFontSize:
        () =>
        ({ chain }) =>
          chain().setMark(this.name, { fontSize: null }).run(),
    };
  },
});


export const extensions = [
  StarterKit.configure({
    underline: false,
    link: false,
  }),

  FontSize,

  FontFamily.configure({ types: ["textStyle"] }),
  Color.configure({ types: ["textStyle"] }),
  Highlight.configure({ multicolor: true }),
  TextAlign.configure({ types: ["heading", "paragraph"] }),

  Link.configure({
    openOnClick: false,
    autolink: true,
    defaultProtocol: "https",
  }),
];
