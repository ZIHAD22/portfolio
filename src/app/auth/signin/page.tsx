"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { dbConnect } from "@/lib/dbConnect";
import React, { useState } from "react";
import { signIn, useSession } from "next-auth/react";

const SignInPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async () => {
    const responds = await signIn("credentials", {
      email: loginData.email,
      password: loginData.password,
      redirect: true,
      callbackUrl: "/dashboard",
    });

    console.log(responds);
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="xl:w-[500px]">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Login</CardTitle>
          <CardDescription className="text-center">
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="m@example.com"
              required
              value={loginData.email}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              name="password"
              required
              onChange={handleChange}
              value={loginData.password}
            />
          </div>
          <div>
            <span className="text-sm cursor-pointer">Forget Password</span>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" variant="outline" onClick={handleSubmit}>
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignInPage;
