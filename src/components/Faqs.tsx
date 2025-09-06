import { useState } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./RetroAccordion"; // Adjust the import path if needed

const faqs = [
  {
    question: "What are the dates and location for Expo 2026?",
    answer:
      "The Shaastra Expo will be held from January 2nd to 6th, 2026 at KV Grounds, IIT Madras.",
  },
  {
    question: "Who will be the audience for this expo?",
    answer:
      "The expo attracts students from various universities, faculty from IIT Madras and other universities, industry leaders, investors, media, and tech enthusiasts, offering a great platform for visibility, networking, and collaboration.",
  },
  {
    question: "How do I register as an exhibitor?",
    answer:
      "Please click on the register button at the top of the webpage and fill in the details in the form. Once submitted, our team will reach out to you with further details and the next steps.",
  },
  {
    question: "Is there any fee to exhibit at Expo?",
    answer:
      "Please register through the official website or contact the Expo team to get detailed pricing details.",
  },
  {
    question: "What types of companies can exhibit?",
    answer:
      "We welcome startups, established corporations, research labs, and premier institutions showcasing innovations in AI, robotics, biotech, clean energy, mobility, and other cutting-edge technologies.",
  },
  {
    question: "What are the benefits of exhibiting at Shaastra Expo?",
    answer:
      "Exhibitors gain maximum exposure to 70,000+ visitors, access to IIT Madras talent, national brand presence, networking with researchers, and opportunities for tech collaboration and hiring.",
  },
  {
    question: "What facilities are provided to exhibitors?",
    answer:
      "We provide booth space, basic furniture, power connections, WiFi access, security, and on-ground support throughout the event duration.",
  },
  {
    question: "What is the deadline for registration?",
    answer:
      "Registration deadlines vary based on booth categories. Early bird registrations close by November 2025. Please contact our team for specific deadlines.",
  },
];

function FAQsPage() {
  // Split FAQs into two halves
  const mid = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, mid);
  const rightFaqs = faqs.slice(mid);

  return (
    <>
      <div className="mt-25">
        {/* Header Section */}
        <div className="text-center mb-16 ">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-yellow-100 mb-4">
            FAQs
          </h1>
          <p className="text-md md:text-2xl text-gray-300 max-w-3xl mx-5 sm:mx-25 md:mx-auto">
            Got questions? We've got answers! Find everything you need to know
            about Shaastra Expo 2026.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4 max-w-6xl mx-10">
            {/* Left Column */}
            <Accordion type="single" collapsible className="w-full">
              {leftFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="p-4 text-gray-300">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Right Column */}
            <Accordion type="single" collapsible className="w-full">
              {rightFaqs.map((faq, index) => (
                <AccordionItem key={index + mid} value={`item-${index + mid}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="p-4 text-gray-300">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQsPage;
