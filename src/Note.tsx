import React from 'react';
import './note.css';

interface NoteProps {
    title: string;
    content: string;
}

const Note: React.FC<NoteProps> = (props) => {
    const { title, content } = props;
    return (
        <div className='note'>
            <span className='note__title'>{title}</span>
            <span className='note__content'>{content}</span>
        </div>
    )
}

export default Note;