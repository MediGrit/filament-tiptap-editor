import { Node, mergeAttributes, Extension, Mark } from "@tiptap/core";
import { Fragment } from "prosemirror-model";

export const MathML = Node.create({
    name: 'mathml',

    atom: true,

    inline: true,

    group: 'inline math',

    content: 'inline*',

    selectable: true,

    marks: '_',

    addAttributes() {
        return ['content', 'style', 'tag', 'accent', 'accent', 'accentunder', 'actiontype', 'align', 'background', 'close', 'contenteditable', 'color', 'columnalign', 'columnlines', 'columnspacing', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'fence', 'fontfamily', 'fontsize', 'fontstyle', 'fontweight', 'frame', 'framespacing', 'from', 'height', 'href', 'id', 'linethickness', 'lspace', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'superscriptshift', 'symmetric', 'voffset', 'width', 'xmlns'].reduce((obj, attr, index) => {
            obj[attr] = null;
            return obj;
        }, {});
    },

    parseHTML() {
        return ['math', 'maction', 'annotation', 'annotation-xml', 'menclose', 'merror', 'mfenced', 'mfrac', 'mi', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mprescripts', 'mroot', 'mrow', 'ms', 'semantics', 'mspace', 'msqrt', 'mstyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover', 'math', 'mi', 'mn', 'mo', 'ms', 'mspace', 'mtext', 'menclose', 'merror', 'mfenced', 'mfrac', 'mpadded', 'mphantom', 'mroot', 'mrow', 'msqrt', 'mstyle', 'mmultiscripts', 'mover', 'mprescripts', 'msub', 'msubsup', 'msup', 'munder', 'munderover', 'mtable', 'mtd', 'mtr', 'maction', 'annotation', 'annotation-xml', 'semantics'].map(tag => {
            return {
                tag,
                getAttrs: (dom) => {
                    const attrs = {
                        tag: tag
                    };

                    if (dom.tagName === 'math') {
                        attrs.content = dom.innerHTML;
                    }

                    return attrs;
                }
            };
        });
    },


    // parseHTML() {
    //     return [
    //         {
    //             tag: "mymath",
    //             // getContent(node, schema) {
    //             //     return Fragment.from(schema.text(node.innerHTML));
    //             // },
    //             // getAttrs(node) {
    //             //     return {
    //             //         'data-content': node.innerHTML,
    //             //         'tag': 'math'
    //             //     }
    //             // }
    //         }
    //     ];
    // },

    renderHTML({ HTMLAttributes, node }) {
        return [node.attrs.tag, mergeAttributes(HTMLAttributes, {tag: null, content: null}), 0];
    },

    addNodeView() {
        return ({node}) => {
            const dom = document.createElement('span');
            dom.innerHTML = `<math xmlns="http://www.w3.org/1998/Math/MathML">${node.attrs.content}</math>`;
            return {
                dom
            };
        }
    }
});
