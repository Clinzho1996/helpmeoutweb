"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import Link from "next/link";
import { Box, Button, Modal, Typography } from "@mui/material";
import { AiOutlineCloseCircle } from "react-icons/ai";
import axios from "axios";
import VideoDetailsCard from "@/components/VideoDetails";

function VideoDetails({ params }) {
  const [video, setVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { videoId } = params;

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await axios.get(
          `https://vidrec.onrender.com/api/videos/${videoId}`
        );
        const videoData = response.data;
        setVideo(videoData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching video details:", error);
        setIsError(true);
        setIsLoading(false);
      }
    };
    fetchVideoDetails();
  }, [videoId]);

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
      {video && <VideoDetailsCard video={video} />}
      <Footer />
    </div>
  );
}

export default VideoDetails;
