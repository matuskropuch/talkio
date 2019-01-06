import axios from 'axios';

import { fileUrl } from './config';

export const uploadFile = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append('Files', file);
  const uploadedFile = await axios.post(fileUrl, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'text/plain'
    }
  });

  const { data } = await axios.get(`${fileUrl}/${uploadedFile.data[0].id}/download-link`);
  return data.fileUri;
};
