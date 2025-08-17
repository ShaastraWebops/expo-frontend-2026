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
        <div className="min-h-screen py-16 px-4">
            <div className="max-w-6xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-yellow-100 mb-6">
                        FAQs
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Got questions? We've got answers! Find everything you need to know about Shaastra Expo 2026.
                    </p>
                </div>

                {/* Search and Filter Section */}
                <div className="mb-12">
                    {/* Search Bar */}
                    <div className="relative mb-8">
                        <input
                            type="text"
                            placeholder="Search FAQs..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-2xl py-4 px-6 pl-14 text-white placeholder-gray-400 focus:border-yellow-200 focus:outline-none transition-all duration-300"
                        />
                        <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">
                            🔍
                        </div>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${activeCategory === category
                                        ? 'bg-gradient-to-r from-yellow-200 to-green-200 text-black-100 shadow-lg'
                                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* FAQ Items */}
                <div className="space-y-6">
                    {filteredFAQs.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="text-6xl mb-4">🤔</div>
                            <p className="text-xl text-gray-300">No FAQs found matching your search.</p>
                        </div>
                    ) : (
                        filteredFAQs.map((faq, index) => (
                            <div
                                key={index}
                                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-600 hover:border-yellow-200 transition-all duration-300 overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-700/50 transition-all duration-300"
                                >
                                    <div className="flex items-center space-x-4">
                                        <span className="text-2xl">{faq.icon}</span>
                                        <div>
                                            <span className="text-lg font-semibold text-white pr-4">
                                                {faq.question}
                                            </span>
                                            <div className="text-xs text-yellow-150 mt-1">
                                                {faq.category}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`transform transition-transform duration-300 text-yellow-200 text-3xl ${openFAQ === index ? 'rotate-45' : 'rotate-0'
                                        }`}>
                                        +
                                    </div>
                                </button>

                                <div className={`px-8 transition-all duration-500 ease-in-out overflow-hidden ${openFAQ === index
                                        ? 'pb-6 opacity-100 max-h-96'
                                        : 'pb-0 opacity-0 max-h-0'
                                    }`}>
                                    <div className={`text-gray-300 leading-relaxed transform transition-transform duration-500 ${openFAQ === index ? 'translate-y-0' : '-translate-y-4'
                                        }`}>
                                        {faq.answer}
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {faq.tags.slice(0, 3).map((tag, tagIndex) => (
                                            <span key={tagIndex} className="text-xs bg-yellow-150 text-black-100 px-2 py-1 rounded-full">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>


            </div>
        </div>

    );
};

export default FAQsPage;
