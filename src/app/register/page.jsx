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

function Register() {
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setError(params.get("error"));
    setSuccess(params.get("success"));
    if (session.status === "authenticated") {
      router?.push("/login");
    }
  }, [params, session.status, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const response = await axios.post("/api/auth/register", {
        name,
        email,
        password,
      });

      if (response.status === 201) {
        toast.success("Account created successfully.", {
          autoClose: 5000,
          onClose: () => {
            // Redirect to the login page upon successful registration
            router.push("/login");
          },
        });
      } else {
        toast.error("Registration failed", {
          autoClose: 3000,
        });
      }
    } catch (err) {
      // Handle errors here
      setError(err);
      console.log(err);
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
        <form onSubmit={handleSubmit}>
          <p>Full Name</p>
          <input type="text" placeholder="Enter your name" />
          <p>Email</p>
          <input type="email" placeholder="Enter your email address" />
          <p>Password</p>
          <input type="password" placeholder="Enter your password" />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link href="/login">Log in</Link>
        </p>
      </center>
    </div>
  );
}

export default Register;
