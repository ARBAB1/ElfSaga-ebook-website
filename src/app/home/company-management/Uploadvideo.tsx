'use client';
import { useState } from 'react';
import Image from 'next/image';

type Video = {
    videoURL: string;
    thumbnailURL: string;
    addedOn: string;
};

export default function VideoLibraryDashboard() {
    const [showUploadForm, setShowUploadForm] = useState(false);
    const [videos, setVideos] = useState<Video[]>([]);

    const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const videoFile = formData.get('video') as File | null;
        const thumbnailFile = formData.get('thumbnail') as File | null;

        if (!videoFile || !thumbnailFile) return;

        // Show the video and thumbnail immediately in the UI
        const videoURL = URL.createObjectURL(videoFile);
        const thumbnailURL = URL.createObjectURL(thumbnailFile);

        setVideos((prev) => [
            ...prev,
            {
                videoURL,
                thumbnailURL,
                addedOn: new Date().toLocaleDateString(),
            },
        ]);

        // Create FormData to send to the backend
        const uploadData = new FormData();
        uploadData.append('video', videoFile);
        uploadData.append('thumbnail', thumbnailFile);

        try {
            const response = await fetch('http://localhost:3001/api/upload', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`, // Include the JWT token
                },
                body: uploadData,
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Video uploaded successfully:', data);
                setVideos((prev) => prev.map((video) => {
                    if (video.videoURL === videoURL) {
                        return { ...video, addedOn: new Date().toLocaleDateString() }; // Update the addedOn date
                    }
                    return video;
                }));
            } else {
                console.error('Upload failed:', data);
            }
        } catch (error) {
            console.error('Error uploading video:', error);
        }

        e.currentTarget.reset();
        setShowUploadForm(false);
    };

    return (
        <div className="min-h-screen bg-[#FFFFFF] p-6 relative w-full flex-1">
            <h1 className="text-3xl text-[#066863] font-bold mb-6">
                Playlist Of Tales From The North Pole
            </h1>

            {/* Upload Form */}
            {showUploadForm && (
                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <form onSubmit={handleUpload} className="space-y-6">
                        {/* Grid Row */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Choose Video */}
                            <div>
                                <label className="block mb-1 text-sm font-medium text-[#066863]">Video</label>
                                <label className="cursor-pointer bg-[#122031] text-white px-4 py-2 rounded inline-block hover:bg-[#000000] w-full text-center">
                                    Choose Video
                                    <input
                                        type="file"
                                        name="video"
                                        accept="video/*"
                                        required
                                        className="hidden"
                                    />
                                </label>
                            </div>

                            {/* Choose Thumbnail */}
                            <div>
                                <label className="block mb-1 text-sm font-medium text-[#066863]">Thumbnail</label>
                                <label className="cursor-pointer bg-[#122031] text-white px-2 py-2 rounded inline-block hover:bg-[#000000] w-full text-center">
                                    Choose Thumbnail
                                    <input
                                        type="file"
                                        name="thumbnail"
                                        accept="image/*"
                                        required
                                        className="hidden"
                                    />
                                </label>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-[#066863] text-white px-6 py-2 rounded hover:bg-[#122031]"
                        >
                            Add in Playlist
                        </button>
                    </form>
                </div>
            )}

            {/* Video Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {videos.map((video, i) => (
                    <div key={i} className="bg-white rounded-lg shadow-md p-4">
                        <Image
                            src={video.thumbnailURL}
                            alt="Thumbnail"
                            className="w-full h-40 object-cover rounded mb-2"
                        />
                        <video
                            src={video.videoURL}
                            controls
                            className="w-full rounded mb-2"
                        />
                        <p className="text-sm text-gray-500">Added on: {video.addedOn}</p>
                        <button className="mt-2 text-[#06C4A2] font-medium">
                            Publish to App
                        </button>
                    </div>
                ))}
            </div>

            {/* Floating Upload Button */}
            <button
                onClick={() => setShowUploadForm(true)}
                className="fixed bottom-8 right-8 bg-[#41FCB4] hover:bg-[#06C4A2] text-[#066863] text-3xl rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
            >
                +
            </button>
        </div>
    );
}
