/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { Box, Button, Modal } from "@mui/material";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import axios from "axios";

function VideoDetailsCard() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [videoBlob, setVideoBlob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);

  const videoId = "6518c09773dc92622b06a7ea";
  useEffect(() => {
    axios
      .get(`https://vidrec.onrender.com/api/videos/${videoId}`, {
        responseType: "blob",
        withCredentials: true,
      })
      .then((response) => {
        const videoBlob = new Blob([response.data], { type: "video/webm" });
        console.log("Video Blob:", videoBlob);

        const videoUrl = URL.createObjectURL(videoBlob);

        if (videoRef.current) {
          videoRef.current.src = videoUrl;
        }

        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching video details:", error);
        setIsLoading(false);
      });
  }, [videoId]);

  // Check if 'videoUrl' exists and is not undefined
  if (isLoading) {
    return (
      <div className={styles.loading}>
        <Image src="/loader.svg" alt="loading" width={100} height={100} />
      </div>
    );
  }

  return (
    <div>
      <div className={styles.container}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <center>
            <Box className={styles.popup}>
              <AiOutlineCloseCircle
                className={styles.close}
                size={30}
                color="#120B48"
                onClick={handleClose}
              />
              <center>
                <FaTelegramPlane
                  size={150}
                  className={styles.fat}
                  color="#A24EB5"
                />
                <p>
                  Your video link has been sent to{" "}
                  <span>johnmark@gmail.com</span>
                </p>
                <h2>
                  Would you need to view this video later? <br />
                  Save to your account now!
                </h2>

                <Link href="/">
                  <button>Save Video</button>
                </Link>

                <br />
                <span className={styles.link}>
                  Don't have an account?{" "}
                  <Link href="/register">Create account</Link>
                </span>
              </center>
            </Box>
          </center>
        </Modal>
        <div className={styles.info}>
          <h2>Your video is ready</h2>
          <form>
            <p>Name</p>
            <div>
              <input
                className={styles.text}
                type="text"
                placeholder="untitled_video_20233509"
              />
              <Image src={"/edit.png"} width={30} height={30} alt="edit" />
            </div>
            <div className={styles.email}>
              <input
                className={styles.emailText}
                type="email"
                placeholder="enter email of receiver"
              />
              <Button onClick={handleOpen}> Send</Button>
            </div>
          </form>

          <div className={styles.videoContainer}>
            <p>Video Url</p>
            <div className={styles.videoUrl}>
              <p>https://www.helpmeout/Untitled_Video_20232509</p>
              <button>
                <Image src={"/copy.png"} width={30} height={30} alt="copy" />{" "}
                Copy
              </button>
            </div>
          </div>

          <div className={styles.shareContainer}>
            <p>Share your video</p>
            <div className={styles.shareBtn}>
              <Image
                src={"/facebook.png"}
                width={200}
                height={50}
                alt="facebook"
              />
              <Image
                src={"/whatsapp.png"}
                width={200}
                height={50}
                alt="whatsapp"
              />
              <Image
                src={"/telegram.png"}
                width={200}
                height={50}
                alt="telegram"
              />
            </div>
          </div>
        </div>
        <div className={styles.video}>
          <video ref={videoRef} controls>
            Your browser does not support the video tag.
          </video>
          <h2>Transcript</h2>
        </div>
      </div>
      <div className={styles.preFooter}>
        <center>
          <h2>
            To ensure the availability and privacy of your video, <br /> we
            recommend saving it to your account.
          </h2>
          <button>Save Video</button> <br />
          <span>
            Don't have an account? <Link href="/register">Create account</Link>
          </span>
        </center>
      </div>
    </div>
  );
}

export default VideoDetailsCard;
