import { writable } from 'svelte/store';

export const todoDb = writable([
  {
    content: 'ciao a tutti',
    done: false,
  },
]);
