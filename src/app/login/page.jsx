/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";

function Login() {
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setError(params.get("error"));
    setSuccess(params.get("success"));
    if (session.status === "authenticated") {
      router?.push("/video");
    }
  }, [params, session.status, router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    // Show loading indicator
    setSuccess("");
    setError("Logging in...");

    try {
      const response = await signIn("credentials", {
        email,
        password,
      });

      if (response.status === 200) {
        toast.success("Login successfully.", {
          autoClose: 5000,
          onClose: () => {
            // Redirect to the desired page upon successful login
            router.push("/video");
          },
        });
      } else {
        toast.error("Login error.", {
          autoClose: 5000,
          onClose: () => {
            history.push("/");
          },
        });
        setError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      // Handle errors here
      toast.error("Login error.", {
        autoClose: 5000,
        onClose: () => {
          history.push("/");
        },
      });
      setError("Login failed. Please check your credentials.");
    }
  };

  const handleGoogleSignIn = async () => {
    await signIn("google");
    router?.push("/video");
  };

  return (
    <div className={styles.container}>
      <ToastContainer />
      <Link href="/">
        <Image src={"/logomain.png"} width={200} height={50} alt="logo" />
      </Link>
      <center className={styles.register}>
        <div className={styles.social}>
          <h2>Log in or Sign up</h2>
          <p>
            Join millions of others in sharing successful <br /> moves on
            HelpMeOut.
          </p>
          <div>
            <div className={styles.socialBtn}>
              <button onClick={handleGoogleSignIn}>
                <Image src={"/google.png"} width={20} height={20} alt="logo" />{" "}
                Continue with Google
              </button>
              <button>
                <Image src={"/fb.png"} width={20} height={20} alt="logo" />{" "}
                Continue with Facebook
              </button>
              <Image src={"/or.png"} width={400} height={50} alt="logo" />
            </div>
          </div>
        </div>
        <form onSubmit={handleLogin}>
          <p>Email</p>
          <input type="email" placeholder="Enter your email address" />
          <p>Password</p>
          <input type="password" placeholder="Enter your password" />
          <button type="submit">Log In</button>
        </form>
        <p>
          Don't have an account? <Link href="/register">Register</Link>
        </p>
      </center>
    </div>
  );
}

export default Login;
