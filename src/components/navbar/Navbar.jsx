"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FiLogOut, FiSearch } from "react-icons/fi";
import { signOut, useSession } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Navbar() {
  const { data: session, status } = useSession();
  const [value, setValue] = useState("");
  const router = useRouter();

  const getNameInitials = (name) => {
    if (!name) return "";
    const initials = name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("");
    return initials.toUpperCase();
  };

  const handleSignOut = async () => {
    await signOut();
    toast.success("You are successfully signed out.", {
      autoClose: 5000,
      onClose: () => {
        // Redirect to the login page upon successful registration
        router.push("/login");
      },
    });
  };

  return (
    <>
      <ToastContainer />
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={"/logomain.png"} alt="logo" width={200} height={50} />
        </div>
        <div>
          {session?.user ? (
            <div className={styles.userContainer}>
              {session.user.image ? (
                <Image
                  src={session.user.image}
                  alt="profile"
                  width={30}
                  height={30}
                />
              ) : (
                <div className={styles.nameDetails}>
                  <h2>{getNameInitials(session.user.name)}</h2>
                </div>
              )}
              <h3>{session.user.name}</h3>
              <FiLogOut
                onClick={handleSignOut}
                className={styles.signOut}
                size={25}
              />
            </div>
          ) : (
            <div className={styles.workHeader}>
              <div className={styles.work}>
                <Link href="/features">Features</Link>
                <Link href="/how-it-works">How It Works</Link>
              </div>
              <div className={styles.start}>
                <Link href="/get-started">Get Started</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
