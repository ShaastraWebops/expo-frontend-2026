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
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-primary text-primary-yellow mb-2">Contact Us</h2>
          <p className="text-gray-300">Get in touch with our team</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 justify-center items-stretch">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className={`relative flex-1 max-w-sm mx-auto lg:mx-0 bg-secondary-black border border-white/10 rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden ${
                hoveredCard === contact.id ? 'ring-1 ring-primary-yellow' : ''
              }`}
              onMouseEnter={() => setHoveredCard(contact.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative mb-4">
                <img 
                  src={contact.image} 
                  alt={contact.name} 
                  className={`w-20 h-20 mx-auto rounded-full object-cover ${
                    hoveredCard === contact.id ? 'ring-4 ring-yellow-200' : ''
                  }`}
                />
              </div>

              <div className="text-center space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-yellow-200">{contact.name}</h3>
                  <div className="inline-flex items-center gap-2 bg-white/5 px-2 py-1 rounded">
                    <User className="w-3 h-3" />
                    <span className="text-gray-300 text-xs">{contact.role}</span>
                  </div>
                </div>

                <div className="space-y-2 mt-4">
                  <a 
                    href={`tel:${contact.phone}`}
                    className="flex items-center justify-center gap-2 bg-primary-yellow text-black font-semibold py-2 px-3 rounded hover:brightness-110"
                  >
                    <Phone className="w-4 h-4" />
                    {contact.phone}
                  </a>
                </div>
              </div>

              <div
                className={`absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-xs font-medium text-yellow-100 transition-all ${
                  hoveredCard === contact.id 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-2'
                }`}
              >
                {contact.speciality}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
