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
  heading2: string;
  heading3: string;
  link: string;
  linkPrompt: string;
  bulletList: string;
  orderedList: string;
}

interface RichTextEditorProps {
  labels: RichTextLabels;
  /** Language of the text, so the browser spell checks in the right language. */
  lang: string;
  onChange: (doc: JSONContent) => void;
}

/** Only what the letter can render: paragraphs, headings, bold, italic, links and lists. Keep in sync with RichBody. */
const extensions = (placeholder: string) => [
  StarterKit.configure({
    blockquote: false,
    code: false,
    codeBlock: false,
    heading: { levels: [2, 3] },
    horizontalRule: false,
    // Links are typed in through the toolbar, never followed while editing, and limited to the same
    // protocols RichBody renders.
    link: { openOnClick: false, protocols: ['mailto'], defaultProtocol: 'https' },
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
      heading2: editor.isActive('heading', { level: 2 }),
      heading3: editor.isActive('heading', { level: 3 }),
      link: editor.isActive('link'),
      bulletList: editor.isActive('bulletList'),
      orderedList: editor.isActive('orderedList'),
    }),
  });

  const toggleLink = () => {
    if (editor.isActive('link')) {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }
    const href = window.prompt(labels.linkPrompt)?.trim();
    if (href) editor.chain().focus().setLink({ href }).run();
  };

  const buttons = [
    { key: 'bold', text: 'B', run: () => editor.chain().focus().toggleBold().run() },
    { key: 'italic', text: 'I', run: () => editor.chain().focus().toggleItalic().run() },
    {
      key: 'heading2',
      text: 'H2',
      run: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
    },
    {
      key: 'heading3',
      text: 'H3',
      run: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
    },
    { key: 'link', text: '🔗', run: toggleLink },
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
