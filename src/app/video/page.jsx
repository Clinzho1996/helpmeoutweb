"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./page.module.css";
import { FiSearch } from "react-icons/fi";
import Footer from "@/components/footer/Footer";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";

function Video() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setError(params.get("error"));
    setSuccess(params.get("success"));
    if (session && session.status === "unauthenticated") {
      router?.push("/login");
    }
  }, [params, session, router]);

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div>
          <div>
            {session?.user ? (
              <h2> Hello, {session.user.name}</h2>
            ) : (
              <h2>Hello</h2>
            )}
          </div>
          <p>Here are your recorded videos</p>
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
        <div>
          <form>
            <input type="text" placeholder="Search for a particular video" />
            <FiSearch />
          </form>
        </div>
      </div>
      <div className={styles.recent}>
        <h2>Recent Files</h2>
        <div className={styles.videoCont}>
          <div className={styles.video}>
            <video src="/screen-recording.webm" />
            <h2>How to create a facebook Ad Listing</h2>
            <p>SEPTEMBER 23, 2023</p>
          </div>
          <div className={styles.video}>
            <video src="/screen-recording.webm" />
            <h2>How to create a facebook Ad Listing</h2>
            <p>SEPTEMBER 23, 2023</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Video;
