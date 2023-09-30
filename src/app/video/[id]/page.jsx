"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import axios from "axios";
import VideoDetailsCard from "@/components/VideoDetails";

function VideoDetails({ params }) {
  const [video, setVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const videoId = "6518500bbb8141870d29c785";

  //   useEffect(() => {
  //     const fetchVideoDetails = async () => {
  //       try {
  //         const response = await axios.get(
  //           `https://vidrec.onrender.com/api/videos/${videoId}`
  //         );
  //         const videoData = response.data;
  //         console.log(response.data);
  //         setVideo(videoData);
  //         setIsLoading(false);
  //       } catch (error) {
  //         console.error("Error fetching video details:", error);
  //         setIsError(true);
  //         setIsLoading(false);
  //       }
  //     };
  //     fetchVideoDetails();
  //   }, [videoId]);

  useEffect(() => {
    // Fetch games from the RAWG API
    axios
      .get(`https://vidrec.onrender.com/api/videos/${videoId}`)
      .then((response) => {
        const videoData = response.data.results;
        console.log(response.data);
        setVideo(videoData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching video details:", error);
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  // Check if 'id' exists and is not undefined
  if (videoId === undefined) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Navbar />
      {isLoading && (
        <div className="loading">
          <p>Loading...</p>
        </div>
      )}
      {isError && <p>Error fetching data</p>}
      {video &&
        video.map((item) => <VideoDetailsCard key={video.id} video={video} />)}
      <Footer />
    </div>
  );
}

export default VideoDetails;
