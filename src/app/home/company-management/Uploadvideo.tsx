import { useEffect, useState } from 'react';
import Image from 'next/image';

type Video = {
    video: string;
    thumbnail: string;
    addedOn: string;
    fileId: string;
};

const BASE_URL = 'https://talesfromthenorthpole.xyz:3001';

export default function VideoLibraryDashboard() {
    const [showUploadForm, setShowUploadForm] = useState(false);
    const [videos, setVideos] = useState<Video[]>([]);
    const [loading, setLoading] = useState(true);
    const [videoName, setVideoName] = useState('');
    const [thumbnailName, setThumbnailName] = useState('');

    const getVideos = async () => {
        try {
            const response = await fetch(`${BASE_URL}/videos?page=1&limit=10`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                },
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch videos: ${response.statusText}`);
            }

            const data = await response.json();
            console.log('Fetched videos:', data.videos);
            setVideos(data.videos);
        } catch (error) {
            console.error('Error fetching videos:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getVideos();
    }, []);

    const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const videoFile = formData.get('video') as File | null;
        const thumbnailFile = formData.get('thumbnail') as File | null;

        if (!videoFile || !thumbnailFile) return;

        const video = URL.createObjectURL(videoFile);
        const thumbnail = URL.createObjectURL(thumbnailFile);

        setVideos((prev) => [
            ...prev,
            {
                video,
                thumbnail,
                addedOn: new Date().toLocaleDateString(),
                fileId: Math.random().toString(36).substring(2),
            },
        ]);

        const uploadData = new FormData();
        uploadData.append('chunkIndex', '0'); // single chunk
        uploadData.append('totalChunks', '1');
        uploadData.append('chunk', videoFile);
        uploadData.append('thumbnail', thumbnailFile);

        try {
            const response = await fetch(`${BASE_URL}/upload`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                },
                body: uploadData,
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Video uploaded successfully:', data);
            } else {
                console.error('Upload failed:', data);
            }
        } catch (error) {
            console.error('Error uploading video:', error);
        }

        e.currentTarget.reset();
        setVideoName('');
        setThumbnailName('');
        setShowUploadForm(false);
    };

    const deleteVideo = async (fileId: string) => {
        try {
            const response = await fetch(`${BASE_URL}/video/${fileId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                },
            });
            const data = await response.json();
            if (response.ok) {
                setVideos((prev) => prev.filter((video) => video.fileId !== fileId));
                console.log('Video deleted successfully:', data);
            } else {
                console.error('Deletion failed:', data);
            }
        } catch (error) {
            console.error('Error deleting video:', error);
        }
    };

    if (loading) {
        return <div>Loading videos...</div>;
    }

    return (
        <div className="min-h-screen bg-[#FFFFFF] p-6 relative w-full flex-1">
            <h1 className="text-3xl text-[#066863] font-bold mb-6">
                Paid Playlist Of Tales From The North Pole Upload video by clicking + icon

            </h1>

            {showUploadForm && (
                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <form onSubmit={handleUpload} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block mb-1 text-sm font-medium text-[#066863]">
                                    Video {videoName && <span className="text-green-500 ml-2">({videoName})</span>}
                                </label>
                                <label className="cursor-pointer bg-[#122031] text-white px-4 py-2 rounded inline-block hover:bg-[#000000] w-full text-center">
                                    Choose Video
                                    <input
                                        type="file"
                                        name="video"
                                        accept="video/*"
                                        required
                                        className="hidden"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0];
                                            if (file) setVideoName(file.name);
                                        }}
                                    />
                                </label>
                            </div>

                            <div>
                                <label className="block mb-1 text-sm font-medium text-[#066863]">
                                    Thumbnail {thumbnailName && <span className="text-green-500 ml-2">({thumbnailName})</span>}
                                </label>
                                <label className="cursor-pointer bg-[#122031] text-white px-2 py-2 rounded inline-block hover:bg-[#000000] w-full text-center">
                                    Choose Thumbnail
                                    <input
                                        type="file"
                                        name="thumbnail"
                                        accept="image/*"
                                        required
                                        className="hidden"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0];
                                            if (file) setThumbnailName(file.name);
                                        }}
                                    />
                                </label>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="bg-[#066863] text-white px-6 py-2 rounded hover:bg-[#122031]"
                        >
                            Add in Playlist
                        </button>
                    </form>
                </div>
            )}

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {videos.map((video) => {
                    const thumbnail = true
                        ? `${BASE_URL}${video.thumbnail}`
                        : '/default-thumbnail.jpg';

                    const videoSrc = video.video
                        ? `${BASE_URL}${video.video}`
                        : '/default-video.mp4';

                    const isBlobThumb = video.thumbnail?.startsWith('blob:');
                    const isRemoteThumb = thumbnail.startsWith('http');

                    return (
                        <div key={video.fileId} className="bg-white rounded-lg shadow-md p-4">
                            {/* Handle blob or fallback thumbnail */}
                            {isRemoteThumb && !isBlobThumb ? (
                                <Image
                                    src={thumbnail}
                                    alt="Thumbnail"
                                    width={500}
                                    height={300}
                                    className="w-full h-40 object-cover rounded mb-2"
                                />
                            ) : (
                                <img
                                    src={video.thumbnail || '/default-thumbnail.jpg'}
                                    alt="Fallback Thumbnail"
                                    className="w-full h-40 object-cover rounded mb-2"
                                />
                            )}

                            {/* Video preview */}
                            <video
                                src={videoSrc}
                                controls
                                className="w-full rounded mb-2"
                            />

                            <p className="text-sm text-gray-500">Added on: {video.addedOn}</p>

                            <button
                                className="mt-2 text-[#06C4A2] font-medium"
                                onClick={() => deleteVideo(video.fileId)}
                            >
                                Delete
                            </button>
                        </div>
                    );
                })}
            </div>


            <button
                onClick={() => setShowUploadForm(true)}
                className="fixed bottom-8 right-8 bg-[#41FCB4] hover:bg-[#06C4A2] text-[#066863] text-3xl rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
            >
                +
            </button>
        </div>
    );
}