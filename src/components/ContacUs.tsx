import React, { useState } from "react";
import { Phone } from "lucide-react";
import { User } from "lucide-react";
import RetroCard from "./RetroCard";

interface Contact {
  id: number;
  name: string;
  role: string;
  phone: string;
  image: string;
  speciality: string;
}

const ContactPage: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const contacts: Contact[] = [
    {
      id: 1,
      name: "Sai Sathwik Chandaluri",
      role: "Head",
      phone: "+91 7842320365",
      image: "./ProfPhoto(1).jpg",
      speciality: "Exibition Planning & Coordination", // Person 1
    },
    {
      id: 2,
      name: "Vriddhi Venkateswaran",
      role: "Head",
      phone: "+91 9969955321",
      image: "./head2.jpg",
      speciality: "Industry Relations & Partnerships", // Person 2
    },
    {
      id: 3,
      name: "Shanmukh",
      role: "Head",
      phone: "+91 9849920303",
      image: "PHOTO.jpg",
      speciality: "Logistics & Operations", // Person 3
    },
  ];

  const cores: Contact[] = [
    {
      id: 1,
      name: "Abhinav Garapati",
      role: "Core",
      phone: "+91 95992 50069",
      image: "core1.JPG",
      speciality: "Logistics & Operations", // Person 3
    },
    {
      id: 2,
      name: "Pranavi",
      role: "Core",
      phone: "+91 9347759882",
      image: "core2.jpeg",
      speciality: "Logistics & Operations", // Person 3
    },
  ];

  return (
    <div className="min-h-screen text-white overflow-hidden relative mt-12">
      {/* Header Section */}
      <div className="relative z-10 text-center pt-16 pb-12 px-4">
        <h1 className="text-3xl md:text-6xl font-black bg-yellow-100  bg-clip-text text-transparent mb-4">
          CONTACT US
        </h1>
        <p className="text-grey-100 text-2xl md:text-2xl tracking-wide mb-6">
          Get in touch with our team
        </p>
      </div>

      {/* Contact Cards - Horizontal Flex */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-rows-2 gap-10 justify-center items-stretch">
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-10 md:px-[16.5%]">
            {cores.map((contact) => (
              <RetroCard>
                <div className="text-left space-y-5">
                  <div className="w-full h-48 bg-black dark:bg-white mx-auto flex items-center justify-center">
                    <div className="w-full h-full bg-gray-600 flex items-center justify-center text-white text-xs font-mono">
                      <img
                        src={contact.image}
                        alt={contact.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-mono font-bold">{contact.name}</h3>
                    <p className="font-mono text-sm text-gray-600 dark:text-gray-400">
                      {contact.role} | {contact.phone}
                    </p>
                  </div>
                </div>
              </RetroCard>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-12 md:mx-0">
            <div className="md:hidden grid grid-cols-1 md:grid-cols-2 gap-10">
              {cores.map((contact) => (
                <RetroCard>
                  <div className="text-left space-y-5">
                    <div className="w-full h-48 bg-black dark:bg-white mx-auto flex items-center justify-center">
                      <div className="w-full h-full bg-gray-600 flex items-center justify-center text-white text-xs font-mono">
                        <img
                          src={contact.image}
                          alt={contact.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-mono font-bold">{contact.name}</h3>
                      <p className="font-mono text-sm text-gray-600 dark:text-gray-400">
                        {contact.role} | {contact.phone}
                      </p>
                    </div>
                  </div>
                </RetroCard>
              ))}
            </div>
            {contacts.map((contact) => (
              <RetroCard>
                <div className="text-left space-y-5">
                  <div className="w-full h-48 bg-black dark:bg-white mx-auto flex items-center justify-center">
                    <div className="w-full h-full bg-gray-600 flex items-center justify-center text-white text-xs font-mono">
                      <img
                        src={contact.image}
                        alt={contact.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-mono font-bold">{contact.name}</h3>
                    <p className="font-mono text-sm text-gray-600 dark:text-gray-400">
                      {contact.role} | {contact.phone}
                    </p>
                  </div>
                </div>
              </RetroCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
