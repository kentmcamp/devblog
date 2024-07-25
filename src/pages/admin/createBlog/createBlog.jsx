import { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

function CreateBlog() {
    const [blogs, setBlogs] = useState('');

    const [text, settext] = useState('');
    console.log("Value: ", );
    console.log("text: ", text);
    return (
        <div className=' container mx-auto max-w-5xl'>
             <Editor
                    apiKey='t0lvn58qlkwdgdonwvobf0qh88m479u7myrj4f0leak5ewwa'
                    onEditorChange={(newValue, editor) => {
                        setBlogs({ blogs, content: newValue });
                        settext(editor.getContent({ format: 'text' }));
                    }}
                    onInit={(evt, editor) => {
                        settext(editor.getContent({ format: 'text' }));
                    }}
                    init={{
                        plugins: 'advlist  anchor  autolink autoresize autosave  charmap  code codesample directionality  emoticons    fullscreen help image importcss  insertdatetime link linkchecker lists media    nonbreaking pagebreak    preview quickbars save searchreplace table  template  tinydrive   visualblocks visualchars wordcount'
                    }}
                />
        </div>
    )
}

export default CreateBlog
