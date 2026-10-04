import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import { Link } from "react-router-dom";
import AppliedJobsTable from "./AppliedJobsTable";
import UpdateProfile from "./UpdateProfile";
import { useSelector } from "react-redux";

const skills = ["Skill 1", "Skill 2", "Skill 3"]

const Profile = () => {
  const isResume = true;

  const [ open, setOpen ] = useState(false);
  const { user } = useSelector(store => store.auth);

  

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-gray-200 my-5 p-8">
        <div className="flex justify-between ">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/company-logo-design-template-e089327a5c476ce5c70c74f7359c5898_screen.jpg?ts=1672291305" />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Unde,commodi.
              </p>
            </div>
          </div>
          <Button 
            onClick={() => setOpen(true)}
            className="text-right" 
            variant="outline"
          >
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex gap-3 items-center my-2">
            <Mail />
            <span>abc@gmail.com</span>
          </div>
          <div className="flex gap-3 items-center my-2">
            <Contact />
            <span>9876543210</span>
          </div>
        </div>
        <div className="my-5">
          <h1>Skills</h1>
          <div className="flex items-center gap-1">
            {
              skills.length != 0 ? skills.map((item, index) => <Badge key={index}>{item}</Badge>) : <span>NA</span>
            }
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-base font-bold">Resume</Label>
          {
            isResume ? <Link className="hover:underline text-blue-600" target="blank" to="https://youtube.com/@s-reja-a">Link</Link> : <span>NA</span>
          }
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
        <AppliedJobsTable/>
      </div>
      <UpdateProfile open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
