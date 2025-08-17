import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { User } from 'lucide-react';

interface Contact {
  id: number;
  name: string;
  role: string;
  phone: string;
  email: string;
  image: string;
}

const ContactPage: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const contacts: Contact[] = [
    {
      id: 1,
      name: "Sai Sathwik Chandaluri",
      role: "Head | Shows and Exhibitions",
      phone: "+91 7842320365",
      image: "./ProfPhoto(1).jpg" // Person 1
    },
    {
      id: 2,
      name: "Vriddhi Venkateswaran",
      role: "Head | Shows and Exhibitions", 
      phone: "+91 9969955321",
      image: "./Image formal.jpg" // Person 2
    },
    {
      id: 3,
      name: "Shanmukh",
      role: "Head | Shows and Exhibitions",
      phone: "+91 9849920303",
      image: "PHOTO.jpg" // Person 3
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* Header Section */}
      <div className="relative z-10 text-center pt-16 pb-12 px-4">
        <h1 className="text-3xl md:text-6xl font-black bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent mb-4">
          CONTACT US
        </h1>
        <p className="text-grey-100 text-xl md:text-xl font-light tracking-wide mb-6 mt-10">
          Get in touch with our team
        </p>
      </div>

      {/* Contact Cards - Horizontal Flex */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-16">
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className={`flex-1 max-w-sm mx-auto lg:mx-0 bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 rounded-2xl p-8 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 cursor-pointer ${
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
                    hoveredCard === contact.id ? 'ring-4 ring-yellow-400 animate-pulse' : ''
                  }`}
                />
              </div>

              {/* Contact Info */}
              <div className="text-center space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">{contact.name}</h3>
                  <div className="inline-flex items-center gap-2 bg-yellow-400/20 px-3 py-1 rounded-full">
                    <User className="w-3 h-3" />
                    <span className="text-gray-300 text-sm">{contact.role}</span>
                  </div>
                </div>

                {/* Contact Actions */}
                <div className="space-y-3 mt-6">
                  <a 
                    href={`tel:${contact.phone}`}
                    className="flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <Phone className="w-4 h-4" />
                    {contact.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
