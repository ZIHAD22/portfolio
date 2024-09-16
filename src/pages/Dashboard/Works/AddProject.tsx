import React from "react";
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

const AddProject = () => {
  return (
    <Theme name="Add Project">
      <Card className="w-[60%] m-auto">
        <CardHeader>
          <CardTitle>Create Project</CardTitle>
          <CardDescription>Write down your project details</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="area">Category</Label>
              <Select defaultValue="billing">
                <SelectTrigger id="area">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="team">Team</SelectItem>
                  <SelectItem value="billing">Billing</SelectItem>
                  <SelectItem value="account">Account</SelectItem>
                  <SelectItem value="deployments">Deployments</SelectItem>
                  <SelectItem value="support">Support</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="security-level">Tags</Label>
              <Select defaultValue="2">
                <SelectTrigger
                  id="security-level"
                  className="w-[200px] truncate"
                >
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Severity 1 (Highest)</SelectItem>
                  <SelectItem value="2">Severity 2</SelectItem>
                  <SelectItem value="3">Severity 3</SelectItem>
                  <SelectItem value="4">Severity 4 (Lowest)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subject">Live Link</Label>
            <Input id="subject" placeholder="Examples: mdzihadjs.me" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subject">Upload Image</Label>
            <Input type="file" id="subject" className="cursor-pointer" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subject">Github Link</Label>
            <Input
              id="subject"
              placeholder="Examples: https://github.com/ZIHAD22/portfolio"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subject">Title</Label>
            <Input id="subject" placeholder="Example: Portfolio project" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Please include all information relevant to your issue."
            />
          </div>
        </CardContent>
        <CardFooter className="justify-between space-x-2">
          <Button variant="outline" className="w-1/5 mx-auto">
            Create
          </Button>
        </CardFooter>
      </Card>
    </Theme>
  );
};

export default AddProject;
