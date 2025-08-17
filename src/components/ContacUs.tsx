import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { User } from 'lucide-react';

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
      role: "Head | Shows and Exhibitions",
      phone: "+91 7842320365",
      image: "./ProfPhoto(1).jpg",
      speciality: "Exibition Planning & Coordination" // Person 1
    },
    {
      id: 2,
      name: "Vriddhi Venkateswaran",
      role: "Head | Shows and Exhibitions", 
      phone: "+91 9969955321",
      image: "./Image formal.jpg",
      speciality: "Industry Relations & Partnerships" // Person 2
    },
    {
      id: 3,
      name: "Shanmukh",
      role: "Head | Shows and Exhibitions",
      phone: "+91 9849920303",
      image: "PHOTO.jpg",
      speciality: "Logistics & Operations" // Person 3
    }
  ];

  return (
    <div className="min-h-screen text-white overflow-hidden relative">

      {/* Header Section */}
      <div className="relative z-10 text-center pt-16 pb-12 px-4">
        <h1 className="text-3xl md:text-6xl font-black bg-yellow-100  bg-clip-text text-transparent mb-4">
          CONTACT US
        </h1>
        <p className="text-grey-100 text-xl md:text-xl font-light tracking-wide mb-6 mt-10">
          Get in touch with our team
        </p>
      </div>

      {/* Contact Cards - Horizontal Flex */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-16">
        <div className="flex flex-col lg:flex-row gap-10 justify-center items-stretch">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className={`relative flex-1 max-w-sm h-90 mx-auto lg:mx-0 bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 rounded-2xl p-8 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 cursor-pointer overflow-hidden ${
                hoveredCard === contact.id ? 'border-yellow-400 shadow-2xl shadow-yellow-400/20' : ''
              }`}
              onMouseEnter={() => setHoveredCard(contact.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Avatar */}
              <div className="relative mb-6">
                <img 
                  src={contact.image} 
                  alt={contact.name} 
                  className={`w-24 h-24 mx-auto rounded-full object-cover transition-all duration-300 ${
                    hoveredCard === contact.id ? 'ring-4 ring-yellow-200 animate-pulse' : ''
                  }`}
                />
              </div>

              {/* Contact Info */}
              <div className="text-center space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-yellow-200 mb-2">{contact.name}</h3>
                  <div className="inline-flex items-center gap-2 bg-yellow-400/20 px-3 py-1 rounded-full">
                    <User className="w-3 h-3" />
                    <span className="text-gray-300 text-sm">{contact.role}</span>
                  </div>
                </div>

                {/* Contact Actions */}
                <div className="space-y-3 mt-6">
                  <a 
                    href={`tel:${contact.phone}`}
                    className="flex items-center justify-center gap-3 bg-yellow-100 hover:bg-yellow-150 text-black font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <Phone className="w-4 h-4" />
                    {contact.phone}
                  </a>
                </div>
              </div>

              {/* Speciality (appears on hover at bottom) */}
              <div
                className={`absolute bottom-5 left-1/2 -translate-x-1/2 text-center text-sm font-medium text-yellow-100 transition-all duration-500 ${
                  hoveredCard === contact.id 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-6'
                }`}
              >
                {contact.speciality}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
