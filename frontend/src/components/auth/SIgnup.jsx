import React from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          action=""
          className="w-1/2 border border-gray-200 rounded-md p-5 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-2">
            <Label>Full Name</Label>
            <Input type="text" value="" placeholder="Shamim" className="mt-2" />
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input type="email" value="" placeholder="shamim@gmail.com" className="mt-2" />
          </div>
          <div className="my-2">
            <Label>Phone Number</Label>
            <Input type="number" value="" placeholder="9876543210" className="mt-2"/>
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input type="password" value="" placeholder="*****" className="mt-2"/>
          </div>
          <div className="flex items-center justify-between my-2">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center gap-3">
                <RadioGroupItem value="student" id="student" />
                <Label htmlFor="student">Student</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="recruiter" id="recruiter" />
                <Label htmlFor="recruiter">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
