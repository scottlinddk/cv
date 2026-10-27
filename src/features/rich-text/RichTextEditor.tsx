import { useId } from 'react';
import { EditorContent, useEditor, useEditorState, type JSONContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Placeholder } from '@tiptap/extensions';
import styles from './RichTextEditor.module.css';

export interface RichTextLabels {
  label: string;
  placeholder: string;
  bold: string;
  italic: string;
  bulletList: string;
  orderedList: string;
}

interface RichTextEditorProps {
  labels: RichTextLabels;
  /** Language of the text, so the browser spell checks in the right language. */
  lang: string;
  onChange: (doc: JSONContent) => void;
}

/** Only what the letter can render: paragraphs, bold, italic and lists. Keep in sync with RichBody. */
const extensions = (placeholder: string) => [
  StarterKit.configure({
    blockquote: false,
    code: false,
    codeBlock: false,
    heading: false,
    horizontalRule: false,
    link: false,
    strike: false,
    underline: false,
  }),
  // Only while the whole document is empty, not on every new empty paragraph.
  Placeholder.configure({ placeholder: ({ editor }) => (editor.isEmpty ? placeholder : '') }),
];

/** Uncontrolled rich text field: the editor owns the document and reports it on every change. */
export function RichTextEditor({ labels, lang, onChange }: RichTextEditorProps) {
  const labelId = useId();
  const editor = useEditor({
    extensions: extensions(labels.placeholder),
    editorProps: {
      attributes: {
        role: 'textbox',
        'aria-multiline': 'true',
        'aria-labelledby': labelId,
        class: styles.content ?? '',
      },
    },
    onUpdate: ({ editor }) => onChange(editor.getJSON()),
  });
  const active = useEditorState({
    editor,
    selector: ({ editor }) => ({
      bold: editor.isActive('bold'),
      italic: editor.isActive('italic'),
      bulletList: editor.isActive('bulletList'),
      orderedList: editor.isActive('orderedList'),
    }),
  });

  const buttons = [
    { key: 'bold', text: 'B', run: () => editor.chain().focus().toggleBold().run() },
    { key: 'italic', text: 'I', run: () => editor.chain().focus().toggleItalic().run() },
    { key: 'bulletList', text: '•', run: () => editor.chain().focus().toggleBulletList().run() },
    { key: 'orderedList', text: '1.', run: () => editor.chain().focus().toggleOrderedList().run() },
  ] as const;

  return (
    <div className={styles.root}>
      <span id={labelId} className={styles.label}>
        {labels.label}
      </span>
      <div className={styles.editor}>
        <div role="toolbar" aria-label={labels.label} className={styles.toolbar}>
          {buttons.map(({ key, text, run }) => (
            <button
              key={key}
              type="button"
              className={styles.button}
              aria-pressed={active[key]}
              aria-label={labels[key]}
              title={labels[key]}
              onClick={run}
            >
              {text}
            </button>
          ))}
        </div>
        <EditorContent editor={editor} lang={lang} />
      </div>
    </div>
  );
}
