import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '../../components/ui/card';
import { Upload } from 'lucide-react';
import YoutubeEmbed from '../YoutubeEmbed/YoutubeEmbed';

const extractYoutubeId = (url) => {
  const urlParams = new URLSearchParams(new URL(url).search);
  return urlParams.get('v');
};

const DragDropUploader = () => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [youtubeId, setYoutubeId] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();

    if (e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      setFile(droppedFile);
      setImageUrl(null);
      setYoutubeId(null);
    } else if (e.dataTransfer.types.includes('text/plain')) {
      const droppedText = e.dataTransfer.getData('text/plain');
      const id = extractYoutubeId(droppedText);
      if (id) {
        setYoutubeId(id);
        setFile(null);
        setImageUrl(null);
      } else {
        setImageUrl(droppedText);
        setFile(null);
        setYoutubeId(null);
      }
    }
  };

return (
    <div className="w-2/3 p-4">
    <Card className="">
        <CardHeader>Drag and Drop Uploader</CardHeader>
        <CardContent>
            <div
                className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md cursor-pointer p-4"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                {file ? (
                    <div className="text-center">
                        <Upload className="text-gray-500 mb-2" />
                        <span>{file.name}</span>
                    </div>
                ) : imageUrl ? (
                    <img src={imageUrl} alt="Dropped Image" className="max-w-full max-h-full" />
                ) : youtubeId ? (
                    <div className="w-full h-full">
                        <YoutubeEmbed embedId={youtubeId} />
                    </div>
                ) : (
                    <div className="flex items-center space-x-2 text-gray-500">
                        <Upload className="text-gray-500" />
                        <span>Drop a file, image URL, or YouTube URL here</span>
                    </div>
                )}
            </div>
        </CardContent>
    </Card>
    </div>
);
};

export default DragDropUploader;