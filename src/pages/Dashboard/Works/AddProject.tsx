"use client";
import React, { useState } from "react";
import Theme from "../Shared/Theme";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { TProject } from "@/Types";
import TagInput from "../Shared/TagInput";
import UploadInput from "../Shared/UploadInput";
import axios from "axios";

const AddProject = () => {
  const [file, setFile] = useState<File | null>(null);
  const [details, setDetails] = useState<TProject>({
    category: "",
    stack: [],
    title: "",
    description: "",
    image: "",
    live: "",
    github: "",
  });

  const detailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async () => {
    try {
      if (!file) {
        console.log("Please Select Image");
        return;
      }

      const formData = new FormData();
      formData.append("image", file);

      const response = await axios.post(
        "https://api.imgbb.com/1/upload",
        formData,
        {
          params: {
            key: process.env.NEXT_PUBLIC_IMAGE_BB_KEY, // Replace with your API key
          },
        }
      );

      if (response.data.data.url) {
        setDetails({
          ...details,
          image: response.data.data.url,
        });
      }

      if (details.image) {
        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_ROOT_URL}/dashboard/works/api`,
          details
        );
        if (data.acknowledged) {
          setDetails({
            category: "",
            stack: [],
            title: "",
            description: "",
            image: "",
            live: "",
            github: "",
          });
          setFile(null);
        }
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Theme name="Add Project">
      <Card className="w-full xl:w-[60%] m-auto">
        <CardHeader>
          <CardTitle>Create Project</CardTitle>
          <CardDescription>Write down your project details</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid grid-cols-1 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="category">Category</Label>
              <Select
                value={details.category}
                onValueChange={(v) => {
                  setDetails({
                    ...details,
                    category: v,
                  });
                }}
              >
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="web application">
                    Web Application
                  </SelectItem>
                  <SelectItem value="mobile application">
                    Mobile Application
                  </SelectItem>
                  <SelectItem value="desktop application">
                    Desktop Application
                  </SelectItem>
                  <SelectItem value="cmd">CMS</SelectItem>
                  <SelectItem value="micro services">Micro services</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="tags">Tags</Label>
              <div
                id="tags"
                className={`${
                  details.stack.length !== 0
                    ? "border border-accent p-2 rounded-md"
                    : ""
                }`}
              >
                <TagInput details={details} setDetails={setDetails} />
              </div>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subject">Live Link</Label>
            <Input
              value={details.live}
              name="live"
              onChange={detailsChange}
              id="subject"
              placeholder="Examples: mdzihadjs.me"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subject">Upload Image</Label>
            <UploadInput file={file} setFile={setFile} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subject">Github Link</Label>
            <Input
              value={details.github}
              name="github"
              onChange={detailsChange}
              id="subject"
              placeholder="Examples: https://github.com/ZIHAD22/portfolio"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subject">Title</Label>
            <Input
              name="title"
              value={details.title}
              onChange={detailsChange}
              id="subject"
              placeholder="Example: Portfolio project"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              value={details.description}
              name="description"
              onChange={(v) =>
                setDetails({
                  ...details,
                  description: v.target.value,
                })
              }
              id="description"
              placeholder="Please include all information relevant to your issue."
            />
          </div>
        </CardContent>
        <CardFooter className="justify-between space-x-2">
          <Button
            onClick={handleSubmit}
            variant="outline"
            className="w-full xl:w-1/5 mx-auto"
          >
            Create
          </Button>
        </CardFooter>
      </Card>
    </Theme>
  );
};

export default AddProject;
