import React from 'react';
import { JournalEntry } from '../types/JournalEntry';

/**
 * Defines the props for the `JournalList` component.
 *
 * @param entries - An array of `JournalEntry` objects representing the journal entries to display.
 * @param onDelete - A function that is called when the "Delete" button is clicked for a journal entry, with the `id` of the entry as an argument.
 * @param onEdit - A function that is called when the "Edit" button is clicked for a journal entry, with the `JournalEntry` object as an argument.
 */
interface Props{
    entries: JournalEntry[];
    onDelete: (id: number) => void;
    onEdit: (entry: JournalEntry) => void;
}

/**
 * Renders a list of journal entries with options to delete or edit each entry.
 *
 * @param entries - An array of `JournalEntry` objects representing the journal entries to display.
 * @param onDelete - A function that is called when the "Delete" button is clicked for a journal entry, with the `id` of the entry as an argument.
 * @param onEdit - A function that is called when the "Edit" button is clicked for a journal entry, with the `JournalEntry` object as an argument.
 * @returns A React component that renders the journal entry list.
 */
const JournalList: React.FC<Props> = ({ entries, onDelete, onEdit }) => {
    return (
        <div>
            <h2>Journal Entries</h2>
            <ul>
                {entries.map((entry) => (
                    <li key={entry.id}>
                        <h3>{entry.title}</h3>
                        <p>{entry.content}</p>
                        <p>{entry.date.toLocaleString()}</p>
                        <button onClick={() => onDelete(entry.id)}>Delete</button>
                        <button onClick={() => onEdit(entry)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JournalList;