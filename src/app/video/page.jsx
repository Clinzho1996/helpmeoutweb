"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

function Video() {
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setError(params.get("error"));
    setSuccess(params.get("success"));
    if (session.status === "unauthenticated") {
      router?.push("/login");
    }
  }, [params, session.status, router]);
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default Video;
