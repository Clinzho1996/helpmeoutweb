"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import axios from "axios";
import VideoDetailsCard from "@/components/VideoDetails";

function VideoDetails({ videoId }) {
  return (
    <div>
      <Navbar />
      <VideoDetailsCard videoId="6518c09773dc92622b06a7ea" />
      <Footer />
    </div>
  );
}

export default VideoDetails;
