"use client";
import React, { ButtonHTMLAttributes, ReactNode, useState } from "react";
import SectionHeading from "./global/SectionHeading";
import FeaturesCard from "./FeaturesCard";
import { Mail, Minus, Plus, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function HowItWorks() {
  const cons = [
    "Manually create invoices",
    "Or pay up to $2 per invoice",
    "Waste hours in customer support",
    "Can’t update details once sent (VAT, Tax ID)",
    "Can't make invoices for previous purchases",
  ];
  const pros = [
    "Self-serve invoices",
    "One-time payment for unlimited invoices",
    "No more customer support",
    "Editable invoices to stay compliant",
    "Invoices for any payment, even past ones",
  ];
  const buttons = [
    {
      step: 1,
      title: "1.Connect Stripe accounts",
      content: <StepOne />,
      media: {
        type: "image",
        media: "/feature1.png",
      },
    },
    {
      step: 2,
      title: "2.Get your ZenVoice link",
      content: <StepTwo />,
      media: {
        type: "image",
        media: "/feature2.png",
      },
    },
    {
      step: 3,
      title: "3.Customers generate invoices",
      content: <StepThree />,
      media: {
        type: "video",
        media: "/feature3.mp4",
      },
    },
  ];
  const [activeBtn, setActiveBtn] = useState(buttons[0]);
  const mediaType = activeBtn.media.type;
  return (
    <div className="text-center dark:text-slate-800">
      <div className="pb-6">
        <SectionHeading title="How it works" />
      </div>
      <div className="py-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="pr-8 space-y-4 flex flex-col">
          {buttons.map((btn, i) => {
            const isLast = i === buttons.length - 1;
            console.log(i, buttons.length);
            const isActive = activeBtn.step === btn.step;
            const Component = btn.content;
            return (
              <Button
                className={cn("border-b pb-3", isLast && "border-0")}
                key={btn.step}
                onClick={() => setActiveBtn(btn)}
              >
                <div className="flex items-center justify-between text-xl">
                  <h2 className={cn("", isActive && "text-green-600")}>
                    {btn.title}
                  </h2>
                  {isActive ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
                {isActive && btn.content}
              </Button>
            );
          })}
        </div>
        <div className="">
          {mediaType === "image" ? (
            <Image
              className=""
              width={1080}
              height={951}
              alt=""
              src={activeBtn.media.media}
            />
          ) : (
            <video src={activeBtn.media.media} loop autoPlay muted></video>
          )}
        </div>
      </div>
    </div>
  );
}

function Button({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return (
    <button className="text-left" {...props}>
      {children}
    </button>
  );
}

function StepOne() {
  return (
    <div className="py-4">
      <p>
        Add one or multiple Stripe accounts to ZenVoice. It takes less than a
        minute. No coding required.
      </p>
      <div className="flex items-center font-semibold pt-3">
        <ShieldCheck className="w-5 h-5 mr-2" />
        <p>Secured with restricted API keys</p>
      </div>
    </div>
  );
}
function StepTwo() {
  return (
    <div className="py-4">
      <p>
        Your customers can retrieve any successful payments made on all your
        Stripe accounts.
      </p>
      <div className="space-y-1 py-2">
        <div className="flex items-center font-semibold ">
          <Mail className="w-5 h-5 mr-2" />
          <p>Send by Email</p>
        </div>
        <div className="flex items-center font-semibold ">
          <ShieldCheck className="w-5 h-5 mr-2" />
          <p>Show on Dashboard</p>
        </div>
      </div>
    </div>
  );
}
function StepThree() {
  return (
    <div className="py-4">
      <p>
        Once customers find a successful payment, they receive a secure link to
        generate, edit, and download invoices. They can add their VAT number,
        company details, fix typo.
      </p>
      <div className="space-y-1 py-2">
        <div className="flex items-center font-semibold">
          <ShieldCheck className="w-5 h-5 mr-2" />
          <p>Protected Data</p>
        </div>
        <div className="flex items-center font-semibold ">
          <ShieldCheck className="w-5 h-5 mr-2" />
          <p>Editable Invoices</p>
        </div>
      </div>
    </div>
  );
}
