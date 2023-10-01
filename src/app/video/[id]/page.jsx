"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import axios from "axios";
import VideoDetailsCard from "@/components/VideoDetails";

function VideoDetails() {
  return (
    <div>
      <Navbar />
      <VideoDetailsCard />
      <Footer />
    </div>
  );
}

export default VideoDetails;
