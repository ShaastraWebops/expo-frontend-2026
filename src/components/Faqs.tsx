import { useState } from 'react';

const FAQsPage = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const faqs = [
        {
            category: 'General',
            icon: '❓',
            question: 'What are the dates and location for Expo 2026?',
            answer: 'The Shaastra Expo will be held from January 2nd to 6th, 2026 at KV Grounds, IIT Madras.',
            tags: ['dates', 'location', 'venue', 'when', 'where']
        },
        {
            category: 'Audience',
            icon: '👥',
            question: 'Who will be the audience for this expo?',
            answer: 'The expo attracts students from various universities, faculty from IIT Madras and other universities, industry leaders, investors, media, and tech enthusiasts, offering a great platform for visibility, networking, and collaboration.',
            tags: ['audience', 'visitors', 'students', 'industry', 'networking']
        },
        {
            category: 'Registration',
            icon: '📝',
            question: 'How do I register as an exhibitor?',
            answer: 'Please click on the register button at the top of the webpage and fill in the details in the form. Once submitted, our team will reach out to you with further details and the next steps.',
            tags: ['registration', 'exhibitor', 'signup', 'form', 'apply']
        },
        {
            category: 'Pricing',
            icon: '💰',
            question: 'Is there any fee to exhibit at Expo?',
            answer: 'Please register through the official website or contact the Expo team to get detailed pricing details.',
            tags: ['fee', 'pricing', 'cost', 'payment', 'charges']
        },
        {
            category: 'Exhibition',
            icon: '🏢',
            question: 'What types of companies can exhibit?',
            answer: 'We welcome startups, established corporations, research labs, and premier institutions showcasing innovations in AI, robotics, biotech, clean energy, mobility, and other cutting-edge technologies.',
            tags: ['companies', 'startups', 'corporations', 'eligibility', 'tech domains']
        },
        {
            category: 'Benefits',
            icon: '🎯',
            question: 'What are the benefits of exhibiting at Shaastra Expo?',
            answer: 'Exhibitors gain maximum exposure to 70,000+ visitors, access to IIT Madras talent, national brand presence, networking with researchers, and opportunities for tech collaboration and hiring.',
            tags: ['benefits', 'exposure', 'networking', 'talent', 'collaboration']
        },
        {
            category: 'Logistics',
            icon: '📦',
            question: 'What facilities are provided to exhibitors?',
            answer: 'We provide booth space, basic furniture, power connections, WiFi access, security, and on-ground support throughout the event duration.',
            tags: ['facilities', 'booth', 'logistics', 'support', 'amenities']
        },
        {
            category: 'Timeline',
            icon: '⏰',
            question: 'What is the deadline for registration?',
            answer: 'Registration deadlines vary based on booth categories. Early bird registrations close by November 2025. Please contact our team for specific deadlines.',
            tags: ['deadline', 'timeline', 'registration', 'early bird']
        }
    ];

    const categories = ['All', ...new Set(faqs.map(faq => faq.category))];
    const [activeCategory, setActiveCategory] = useState('All');

    const toggleFAQ = (index: number): void => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const filteredFAQs = faqs.filter(faq => {
        const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
        const matchesSearch = searchTerm === '' ||
            faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

        return matchesCategory && matchesSearch;
    });

    return (
        <section id="faqs" className="py-16 px-4">
            <div className="max-w-6xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-6xl font-primary text-primary-yellow mb-4">
                        FAQs
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        Find answers about Shaastra Expo 2026.
                    </p>
                </div>

                {/* Search and Filter Section */}
                <div className="mb-10">
                    {/* Search Bar */}
                    <div className="relative mb-6">
                        <input
                            type="text"
                            placeholder="Search FAQs..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-secondary-black border border-white/10 rounded-lg py-3 px-4 pl-12 text-white placeholder-gray-400 focus:border-primary-yellow focus:outline-none transition"
                        />
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">
                            🔍
                        </div>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 rounded-md text-sm transition-colors ${activeCategory === category
                                        ? 'bg-primary-yellow text-black'
                                        : 'bg-secondary-black text-gray-300 border border-white/10 hover:bg-white/5'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {filteredFAQs.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="text-5xl mb-2">🤔</div>
                            <p className="text-gray-300">No FAQs found matching your search.</p>
                        </div>
                    ) : (
                        filteredFAQs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-secondary-black rounded-lg border border-white/10 overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-5 py-4 text-left flex justify-between items-center hover:bg-white/5 transition"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-xl">{faq.icon}</span>
                                        <div>
                                            <span className="text-base font-semibold text-white pr-2">
                                                {faq.question}
                                            </span>
                                            <span className="text-xs text-yellow-150">{faq.category}</span>
                                        </div>
                                    </div>
                                    <div className={`transform transition-transform text-yellow-200 text-2xl ${openFAQ === index ? 'rotate-45' : 'rotate-0'
                                        }`}>
                                        +
                                    </div>
                                </button>

                                <div className={`${openFAQ === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'} grid transition-all duration-300`}> 
                                    <div className="overflow-hidden px-5 pb-4">
                                        <div className="text-gray-300 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            {faq.tags.slice(0, 3).map((tag, tagIndex) => (
                                                <span key={tagIndex} className="text-xs bg-yellow-150 text-black px-2 py-1 rounded-full">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

            </div>
        </section>

    );
};

export default FAQsPage;
