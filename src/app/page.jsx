"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Link from "next/link";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.main}>
          <h2>
            Show them <br /> Don't just tell
          </h2>
          <p>
            Help your friends and loved ones by creating and sending videos on
            how to get things done on a website.
          </p>
          {session?.user ? (
            <Link href="/helpmeout.zip">
              Install HelpMeOut <FaLocationArrow />
            </Link>
          ) : (
            <Link href="/register">
              Install HelpMeOut <FaLocationArrow />
            </Link>
          )}
        </div>
        <div className={styles.hero}>
          <div>
            <Image src={"/bg.png"} width={300} height={200} alt="banner" />{" "}
            <br /> <br />
            <Image src={"/bg2.png"} width={300} height={200} alt="banner" />
          </div>
          <div className={styles.innerGrid}>
            <Image
              className={styles.grid}
              src={"/grid.png"}
              width={300}
              height={200}
              alt="banner"
            />
            <Image
              className={styles.gridImage}
              src={"/bg3.png"}
              width={300}
              height={400}
              alt="banner"
            />
          </div>
        </div>
      </div>
      <div className={styles.divider}>
        <center>
          <h2>Features</h2>
          <p>Key Highlights of Our Extension</p>
        </center>
      </div>
      <div className={styles.features}>
        <div className={styles.wrap}>
          <div className={styles.detailFeature}>
            <div className={styles.image}>
              <Image src={"/rec.png"} width={40} height={40} alt="recording" />
            </div>
            <div className={styles.inner}>
              <h2>Simple Screen Recording</h2>
              <p>
                Effortless screen recording for everyone. Record with ease, no
                tech expertise required.
              </p>
            </div>
          </div>
          <div className={styles.detailFeature}>
            <div className={styles.image}>
              <Image src={"/map.png"} width={40} height={40} alt="recording" />
            </div>
            <div className={styles.inner}>
              <h2>Easy-to-Share URL</h2>
              <p>
                Share your recordings instantly with a single link. No
                attachments, no downloads.
              </p>
            </div>
          </div>
          <div className={styles.detailFeature}>
            <div className={styles.image}>
              <Image src={"/rev.png"} width={40} height={40} alt="recording" />
            </div>
            <div className={styles.inner}>
              <h2>Revisit Recordings</h2>
              <p>
                Access and review your past content effortlessly. Your
                recordings, always at your fingertips.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image src={"/video.png"} width={600} height={400} alt="video" />
        </div>
      </div>

      <center className={styles.work}>
        <h2>How it works</h2>
      </center>
      <div className={styles.workContainer}>
        <div className={styles.workInner}>
          <Image src={"/one.png"} width={40} height={40} alt="one" />
          <h2>Record Screen</h2>
          <p>
            Click the "Start Recording" button in our extension. choose which
            part of your screen to capture and who you want to send it to.
          </p>
          <Image
            className={styles.innerImage}
            src={"/record.png"}
            width={320}
            height={200}
            alt="record"
          />
        </div>
        <div className={styles.workInner}>
          <Image src={"/two.png"} width={40} height={40} alt="two" />
          <h2>Share Your Recording</h2>
          <p>
            We generate a shareable link for your video. Simply send it to your
            audience via email or copy the link to send via any platform.
          </p>
          <Image
            className={styles.innerImage}
            src={"/record.png"}
            width={320}
            height={200}
            alt="record"
          />
        </div>
        <div className={styles.workInner}>
          <Image src={"/three.png"} width={40} height={40} alt="three" />
          <h2>Learn Effortlessly</h2>
          <p>
            Recipients can access your video effortlessly through the provided
            link, with our user-friendly interface suitable for everyone.
          </p>
          <Image
            className={styles.innerImage}
            src={"/record.png"}
            width={320}
            height={200}
            alt="record"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
