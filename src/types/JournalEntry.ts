/**
 * Represents a single entry in a journal or diary.
 * @property {number} id - The unique identifier for the journal entry.
 * @property {string} title - The title or subject of the journal entry.
 * @property {string} content - The full text content of the journal entry.
 * @property {Date} date - The date and time the journal entry was created.
 */
export interface JournalEntry {
    id: number;
    title: string;
    content: string;
    date: Date;
}