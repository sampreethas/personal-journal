
/**
 * Imports the React library and the `useState` hook, as well as the `JournalEntry` type from the `../types/JournalEntry` module.
 */
import React, { useState } from 'react';
import { JournalEntry } from '../types/JournalEntry';


/**
 * An interface that defines the props for the `JournalForm` component.
 *
 * @property onAddEntry - A function that is called when a new journal entry is submitted. It takes a `JournalEntry` object as an argument.
 */
interface Props {
    onAddEntry: (entry: JournalEntry) => void;
}

/**
 * A React functional component that renders a form for adding a new journal entry.
 *
 * @param props - An object containing a function `onAddEntry` that is called when a new journal entry is submitted.
 * @returns A JSX element representing the journal form.
 */
const JournalForm: React.FC<Props> = ({onAddEntry}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = ( e: React.FormEvent) => {
        e.preventDefault();
        const newEntry: JournalEntry = {
            id: Date.now(),
            title,
            content,
            date: new Date(),
        };
        onAddEntry(newEntry);
        setTitle('');
        setContent('');
    };


// Render the journal form
/* The form has two input fields: one for the title and one for the content of the journal entry.
The form has a submit button that calls the `handleSubmit` function when clicked.
The `handleSubmit` function creates a new `JournalEntry` object with the current values of the title and content, and then calls the `onAddEntry` function passed in as a prop with the new entry as an argument.
The `handleSubmit` function also resets the title and content to empty strings. */
return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            // placeholder = "Title"
            // required
        />
        <textarea
            placeholder="Write your thoughts..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            // placeholder="Write your entry here..."
            // required
        />
        <button type="submit">Save Entry</button>
    </form>
);
};


// Export the JournalForm component as the default export of this module.
export default JournalForm;