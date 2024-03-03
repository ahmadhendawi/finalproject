import React, { useState, useEffect } from 'react';
import './Blog.css';


function Blog() {
  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem('notes');
    return storedNotes ? JSON.parse(storedNotes) : [];
  });
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteContent, setNewNoteContent] = useState('');

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleTitleChange = (event) => {
    setNewNoteTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setNewNoteContent(event.target.value);
  };

  const handleAddNote = () => {
    if (newNoteTitle.trim() !== '' && newNoteContent.trim() !== '') {
      const updatedNotes = [...notes, { title: newNoteTitle, content: newNoteContent }];
      setNotes(updatedNotes);
      setNewNoteTitle('');
      setNewNoteContent('');
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
    }
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  return (
    <div className="bigdiv">
      <div className="inputandbtn">
        <input className="Blogtitle" type="text" placeholder="Blog Title" value={newNoteTitle} onChange={handleTitleChange} />
        <input className="Blogbody" placeholder=" Blog Content" value={newNoteContent} onChange={handleContentChange} />
        <button class="button-84" onClick={handleAddNote}>Publish Blog</button>
      </div>
      <div className="notes-container">
        {notes.map((note, index) => (
          <div className="note" key={index}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button className="deletebtn" onClick={() => handleDeleteNote(index)}>Delete Blog</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;