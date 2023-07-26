/* eslint-disable prettier/prettier */
import { store } from '@store/index';
import { saveAs } from 'file-saver';

async function downloadMyData() {
  const state = store.getState();
  const jsonData = JSON.stringify(state);
  const blob = new Blob([jsonData], { type: 'application/json' });
  
  try {
    saveAs(blob, 'data.json');
  } catch (error) {
    console.log('Error creating or saving the file:', error);
  }
}

export { downloadMyData };

