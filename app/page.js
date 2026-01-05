'use client';

import { useState, useEffect } from 'react';
// Import your data from data folder
// import { heroData, aboutData, donationData, videosData, galleryData, chapters } from '@/data';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState(null);

  // Sample data structure - replace with your actual data imports
  const data = {
    hero: {
      title: "भगवद गीता का ज्ञान",
      subtitle: "Empowering Communities Through Spiritual Wisdom",
      description: "Join us in spreading the timeless teachings of the Bhagavad Gita across India",
      ctaText: "Support Our Mission"
    },
    about: {
      title: "About Our Mission",
      description: "We are dedicated to serving our nation through spiritual guidance, educational programs, and spreading the sacred knowledge of Bhagavad Gita.",
      stats: [
        { number: "10,000+", label: "Lives Touched" },
        { number: "50+", label: "Cities" },
        { number: "100+", label: "Programs" },
        { number: "500+", label: "Volunteers" }
      ]
    },
    services: {
      title: "Our Services",
      items: [
        {
          icon: "📚",
          title: "Gita Classes",
          description: "Regular classes and workshops on Bhagavad Gita teachings"
        },
        {
          icon: "🎓",
          title: "Youth Programs",
          description: "Special programs to engage youth with spiritual wisdom"
        },
        {
          icon: "🏛️",
          title: "Temple Services",
          description: "Support and maintain temples dedicated to Lord Krishna"
        },
        {
          icon: "📖",
          title: "Publications",
          description: "Free distribution of Bhagavad Gita and spiritual literature"
        },
        {
          icon: "🎭",
          title: "Cultural Events",
          description: "Organize festivals and cultural programs"
        },
        {
          icon: "🙏",
          title: "Spiritual Guidance",
          description: "Personal counseling based on Gita teachings"
        }
      ]
    },
    donation: {
      title: "Support Our Cause",
      description: "Your contribution helps us spread the sacred knowledge of Bhagavad Gita",
      qrCode: "/images/donation-qr.png",
      upiId: "gitafoundation@upi",
      amounts: [500, 1000, 2500, 5000]
    },
    videos: {
      title: "Gita Teachings",
      description: "Watch our spiritual discourse and teachings",
      videoIds: [
        "dQw4w9WgXcQ",
        "dQw4w9WgXcQ",
        "dQw4w9WgXcQ",
        "dQw4w9WgXcQ"
      ]
    },
    gallery: {
      title: "Gallery",
      description: "Glimpses from our events and programs",
      images: [
        { src: "/images/gallery1.jpg", alt: "Gita Class" },
        { src: "/images/gallery2.jpg", alt: "Youth Program" },
        { src: "/images/gallery3.jpg", alt: "Temple Event" },
        { src: "/images/gallery4.jpg", alt: "Distribution" },
        { src: "/images/gallery5.jpg", alt: "Festival" },
        { src: "/images/gallery6.jpg", alt: "Cultural Program" },
        { src: "/images/gallery7.jpg", alt: "Community Service" },
        { src: "/images/gallery8.jpg", alt: "Spiritual Discourse" }
      ]
    }
  };

  // Bhagavad Gita Chapters Data
  const chapters = [
    {
      id: 1,
      titleHindi: "अर्जुन विषाद योग",
      titleEnglish: "Arjuna Visada Yoga",
      verses: 47,
      summaryHindi: "यह अध्याय महाभारत युद्ध के समय अर्जुन के मोह और विषाद का वर्णन करता है।",
      summaryEnglish: "This chapter describes Arjuna's dejection and reluctance to fight.",
      keyTeachingsHindi: ["मोह और आसक्ति मनुष्य को कर्तव्य से विमुख कर देते हैं"],
      image: "🏹"
    },
    {
      id: 2,
      titleHindi: "सांख्य योग",
      titleEnglish: "Sankhya Yoga",
      verses: 72,
      summaryHindi: "श्रीकृष्ण अर्जुन को आत्मा की अमरता और कर्म योग का उपदेश देते हैं।",
      summaryEnglish: "Lord Krishna teaches about the immortality of the soul and Karma Yoga.",
      keyTeachingsHindi: ["आत्मा अजर, अमर और अविनाशी है"],
      image: "🕉️"
    },
    {
      id: 3,
      titleHindi: "कर्म योग",
      titleEnglish: "Karma Yoga",
      verses: 43,
      summaryHindi: "कर्म योग का विस्तार से वर्णन और निष्काम भाव से कर्म करने का उपदेश।",
      summaryEnglish: "Elaboration on Karma Yoga and performing actions without attachment.",
      keyTeachingsHindi: ["कर्म करना अनिवार्य है, निष्क्रियता संभव नहीं"],
      image: "⚔️"
    },
    {
      id: 4,
      titleHindi: "ज्ञान कर्म संन्यास योग",
      titleEnglish: "Jnana Karma Sanyasa Yoga",
      verses: 42,
      summaryHindi: "भगवान के दिव्य जन्म का रहस्य और ज्ञान की महिमा।",
      summaryEnglish: "Mystery of divine incarnation and glory of knowledge.",
      keyTeachingsHindi: ["भगवान युग-युग में धर्म की रक्षा के लिए अवतार लेते हैं"],
      image: "🌟"
    },
    {
      id: 5,
      titleHindi: "कर्म संन्यास योग",
      titleEnglish: "Karma Sanyasa Yoga",
      verses: 29,
      summaryHindi: "संन्यास और कर्मयोग की तुलना और दोनों का महत्व।",
      summaryEnglish: "Comparison of Sannyasa and Karma Yoga.",
      keyTeachingsHindi: ["कर्मयोग संन्यास से श्रेष्ठ है"],
      image: "🧘"
    },
    {
      id: 6,
      titleHindi: "ध्यान योग",
      titleEnglish: "Dhyana Yoga",
      verses: 47,
      summaryHindi: "ध्यान योग की विधि और मन को वश में करने के उपाय।",
      summaryEnglish: "Method of meditation yoga and controlling the mind.",
      keyTeachingsHindi: ["मन को एकाग्र करने की विधि"],
      image: "🪷"
    },
    {
      id: 7,
      titleHindi: "ज्ञान विज्ञान योग",
      titleEnglish: "Jnana Vijnana Yoga",
      verses: 30,
      summaryHindi: "भगवान की प्रकृति, माया और भक्ति का विवरण।",
      summaryEnglish: "Description of God's nature, Maya and devotion.",
      keyTeachingsHindi: ["कृष्ण सृष्टि के मूल कारण हैं"],
      image: "🔱"
    },
    {
      id: 8,
      titleHindi: "अक्षर ब्रह्म योग",
      titleEnglish: "Aksara Brahma Yoga",
      verses: 28,
      summaryHindi: "ब्रह्म और अंत समय में भगवान को स्मरण करने की महिमा।",
      summaryEnglish: "Glory of remembering God at the time of death.",
      keyTeachingsHindi: ["अंत समय में जो स्मरण करते हैं, वही प्राप्त होता है"],
      image: "🕉️"
    },
    {
      id: 9,
      titleHindi: "राज विद्या राज गुह्य योग",
      titleEnglish: "Raja Vidya Raja Guhya Yoga",
      verses: 34,
      summaryHindi: "भक्ति योग की महिमा और भगवान की विभूतियां।",
      summaryEnglish: "Glory of Bhakti Yoga and divine manifestations.",
      keyTeachingsHindi: ["भक्ति योग सबसे सरल और श्रेष्ठ मार्ग है"],
      image: "💖"
    },
    {
      id: 10,
      titleHindi: "विभूति योग",
      titleEnglish: "Vibhuti Yoga",
      verses: 42,
      summaryHindi: "भगवान की दिव्य विभूतियों का विस्तृत वर्णन।",
      summaryEnglish: "Detailed description of divine manifestations.",
      keyTeachingsHindi: ["भगवान की विभूतियां अनंत हैं"],
      image: "✨"
    },
    {
      id: 11,
      titleHindi: "विश्वरूप दर्शन योग",
      titleEnglish: "Vishvarupa Darshana Yoga",
      verses: 55,
      summaryHindi: "अर्जुन को भगवान के विश्वरूप का दर्शन।",
      summaryEnglish: "Arjuna witnesses the Universal Form.",
      keyTeachingsHindi: ["भगवान का विश्वरूप अद्भुत और भयानक है"],
      image: "🌌"
    },
    {
      id: 12,
      titleHindi: "भक्ति योग",
      titleEnglish: "Bhakti Yoga",
      verses: 20,
      summaryHindi: "भक्ति मार्ग की श्रेष्ठता और सच्चे भक्त के लक्षण।",
      summaryEnglish: "Superiority of devotion and characteristics of true devotee.",
      keyTeachingsHindi: ["साकार उपासना सगुण भक्ति सरल है"],
      image: "🙏"
    },
    {
      id: 13,
      titleHindi: "क्षेत्र क्षेत्रज्ञ विभाग योग",
      titleEnglish: "Kshetra Kshetrajna Vibhaga Yoga",
      verses: 35,
      summaryHindi: "शरीर और आत्मा के भेद का विवरण।",
      summaryEnglish: "Distinction between body and soul.",
      keyTeachingsHindi: ["शरीर क्षेत्र है और आत्मा क्षेत्रज्ञ है"],
      image: "⚡"
    },
    {
      id: 14,
      titleHindi: "गुणत्रय विभाग योग",
      titleEnglish: "Gunatraya Vibhaga Yoga",
      verses: 27,
      summaryHindi: "प्रकृति के तीन गुणों का विस्तृत वर्णन।",
      summaryEnglish: "Detailed description of three modes of nature.",
      keyTeachingsHindi: ["सत्व, रज, तम - तीन गुण आत्मा को बांधते हैं"],
      image: "⚖️"
    },
    {
      id: 15,
      titleHindi: "पुरुषोत्तम योग",
      titleEnglish: "Purushottama Yoga",
      verses: 20,
      summaryHindi: "संसार रूपी वृक्ष और पुरुषोत्तम का वर्णन।",
      summaryEnglish: "Description of the world tree and Supreme Person.",
      keyTeachingsHindi: ["संसार उल्टे अश्वत्थ वृक्ष के समान है"],
      image: "🌳"
    },
    {
      id: 16,
      titleHindi: "दैवासुर संपद्विभाग योग",
      titleEnglish: "Daivasura Sampad Vibhaga Yoga",
      verses: 24,
      summaryHindi: "दैवी और आसुरी गुणों का विभाजन।",
      summaryEnglish: "Division of divine and demoniac qualities.",
      keyTeachingsHindi: ["दैवी संपत्ति मुक्ति की ओर ले जाती है"],
      image: "😇"
    },
    {
      id: 17,
      titleHindi: "श्रद्धात्रय विभाग योग",
      titleEnglish: "Shraddhatraya Vibhaga Yoga",
      verses: 28,
      summaryHindi: "तीन प्रकार की श्रद्धा और कर्मों का वर्णन।",
      summaryEnglish: "Description of three types of faith and actions.",
      keyTeachingsHindi: ["श्रद्धा तीन प्रकार की होती है"],
      image: "🔥"
    },
    {
      id: 18,
      titleHindi: "मोक्ष संन्यास योग",
      titleEnglish: "Moksha Sanyasa Yoga",
      verses: 78,
      summaryHindi: "गीता का समापन और सभी शिक्षाओं का सार।",
      summaryEnglish: "Conclusion of Gita with essence of all teachings.",
      keyTeachingsHindi: ["सर्वधर्मान् परित्यज्य मामेकं शरणं व्रज"],
      image: "🕊️"
    }
  ];

  return (
    <div style={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#2b2b2b',
      background: '#fdf6e3',
      lineHeight: '1.7'
    }}>
      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        background: 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 2px 20px rgba(255, 103, 31, 0.1)',
        zIndex: 1000,
        animation: 'slideDown 0.8s ease'
      }}>
        <nav style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '1.2rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            fontSize: '1.8rem',
            fontWeight: '900',
            background: 'linear-gradient(135deg, #FF671F, #FF9933)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.5px'
          }}>
           Gita Prerna
          </div>

          {/* Desktop Menu */}
          <ul style={{
            display: 'flex',
            listStyle: 'none',
            gap: '2.5rem',
            alignItems: 'center'
          }} className="desktop-menu">
            {['Home', 'About', 'Chapters', 'Services', 'Donate', 'Gallery'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} style={{
                  textDecoration: 'none',
                  color: '#2b2b2b',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  padding: '0.5rem 0'
                }}>
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a href="#donate" style={{
                background: 'linear-gradient(135deg, #FF671F, #FF9933)',
                color: 'white',
                padding: '0.8rem 1.8rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '0.95rem',
                boxShadow: '0 4px 15px rgba(255, 103, 31, 0.3)',
                transition: 'all 0.3s ease',
                display: 'inline-block'
              }}>
                Donate Now
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              fontSize: '1.8rem',
              cursor: 'pointer',
              color: '#FF671F'
            }}
            className="mobile-menu-btn"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div style={{
            background: 'white',
            padding: '1rem 2rem 2rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }} className="mobile-menu">
            {['Home', 'About', 'Chapters', 'Services', 'Donate', 'Gallery'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsMenuOpen(false)}
                style={{
                  display: 'block',
                  padding: '1rem',
                  color: '#2b2b2b',
                  textDecoration: 'none',
                  fontWeight: '600',
                  borderBottom: '1px solid #f0f0f0'
                }}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #fdf6e3 0%, #fff4db 50%, #ffe8c5 100%)',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '80px'
      }}>
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(255, 103, 31, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite'
        }}></div>

        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '4rem 2rem',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #FF671F, #FF9933)',
            color: 'white',
            padding: '0.5rem 1.5rem',
            borderRadius: '50px',
            fontSize: '0.9rem',
            fontWeight: '700',
            marginBottom: '1.5rem',
            boxShadow: '0 4px 15px rgba(255, 103, 31, 0.3)'
          }}>
            🙏 श्रीमद्भगवद्गीता
          </div>
          
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: '900',
            lineHeight: '1.1',
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #FF671F, #FF9933, #FFBF00)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-1px'
          }}>
            {data.hero.title}
          </h1>
          
          <h2 style={{
            fontSize: 'clamp(1.3rem, 3vw, 2rem)',
            fontWeight: '600',
            color: '#4a4a4a',
            marginBottom: '1.5rem'
          }}>
            {data.hero.subtitle}
          </h2>
          
          <p style={{
            fontSize: '1.15rem',
            color: '#666',
            marginBottom: '2.5rem',
            maxWidth: '700px',
            margin: '0 auto 2.5rem'
          }}>
            {data.hero.description}
          </p>
          
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a href="#chapters" style={{
              background: 'linear-gradient(135deg, #FF671F, #FF9933)',
              color: 'white',
              padding: '1.2rem 2.5rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '1.1rem',
              boxShadow: '0 8px 25px rgba(255, 103, 31, 0.4)',
              display: 'inline-block'
            }}>
              Explore Chapters →
            </a>
            <a href="#donate" style={{
              background: 'white',
              color: '#FF671F',
              padding: '1.2rem 2.5rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '1.1rem',
              border: '2px solid #FF671F',
              display: 'inline-block'
            }}>
              {data.hero.ctaText}
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{
        padding: '6rem 2rem',
        background: 'white'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}>
            <div style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #FF671F, #FF9933)',
              color: 'white',
              padding: '0.5rem 1.5rem',
              borderRadius: '50px',
              fontSize: '0.9rem',
              fontWeight: '700',
              marginBottom: '1rem'
            }}>
              About Us
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '900',
              color: '#2b2b2b',
              marginBottom: '1.5rem'
            }}>
              {data.about.title}
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#666',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              {data.about.description}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {data.about.stats.map((stat, index) => (
              <div key={index} style={{
                background: 'linear-gradient(135deg, #fdf6e3, #fff4db)',
                padding: '3rem 2rem',
                borderRadius: '20px',
                textAlign: 'center',
                border: '2px solid #FF9933',
                boxShadow: '0 10px 30px rgba(255, 103, 31, 0.1)'
              }}>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: '900',
                  background: 'linear-gradient(135deg, #FF671F, #FF9933)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '0.5rem'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#4a4a4a'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bhagavad Gita Chapters Section */}
      <section id="chapters" style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(180deg, white 0%, #fdf6e3 100%)'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}>
            <div style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #FF671F, #FF9933)',
              color: 'white',
              padding: '0.5rem 1.5rem',
              borderRadius: '50px',
              fontSize: '0.9rem',
              fontWeight: '700',
              marginBottom: '1rem'
            }}>
              📖 Sacred Knowledge
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '900',
              color: '#2b2b2b',
              marginBottom: '1.5rem'
            }}>
              भगवद गीता के 18 अध्याय
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#666',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              Explore the 18 chapters of timeless wisdom from the Bhagavad Gita
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {chapters.map((chapter, index) => (
              <div 
                key={chapter.id}
                onClick={() => setSelectedChapter(chapter)}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  border: '2px solid transparent',
                  animation: `fadeInUp 0.6s ease ${index * 0.05}s both`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 15px 50px rgba(255, 103, 31, 0.2)';
                  e.currentTarget.style.borderColor = '#FF9933';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.08)';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                {/* Card Header with Emoji */}
                <div style={{
                  background: 'linear-gradient(135deg, #FF671F, #FF9933)',
                  padding: '2rem',
                  textAlign: 'center',
                  position: 'relative'
                }}>
                  <div style={{
                    fontSize: '4rem',
                    marginBottom: '0.5rem',
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
                  }}>
                    {chapter.image}
                  </div>
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(10px)',
                    color: 'white',
                    padding: '0.4rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '700'
                  }}>
                    Chapter {chapter.id}
                  </div>
                </div>

                {/* Card Content */}
                <div style={{
                  padding: '1.8rem'
                }}>
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: '700',
                    color: '#2b2b2b',
                    marginBottom: '0.5rem',
                    lineHeight: '1.3'
                  }}>
                    {chapter.titleHindi}
                  </h3>
                  <p style={{
                    fontSize: '0.95rem',
                    color: '#666',
                    marginBottom: '1rem',
                    fontStyle: 'italic'
                  }}>
                    {chapter.titleEnglish}
                  </p>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '1rem',
                    padding: '0.5rem 1rem',
                    background: '#fdf6e3',
                    borderRadius: '10px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: '#FF671F'
                  }}>
                    📜 {chapter.verses} Verses
                  </div>
                  <p style={{
                    color: '#555',
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                    marginBottom: '1rem'
                  }}>
                    {chapter.summaryHindi.substring(0, 100)}...
                  </p>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#FF671F',
                    fontWeight: '700',
                    fontSize: '0.95rem'
                  }}>
                    Read More →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter Modal */}
      {selectedChapter && (
        <div 
          onClick={() => setSelectedChapter(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            animation: 'fadeIn 0.3s ease'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'white',
              borderRadius: '30px',
              maxWidth: '900px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative',
              animation: 'scaleIn 0.3s ease'
            }}
          >
            {/* Modal Header */}
            <div style={{
              background: 'linear-gradient(135deg, #FF671F, #FF9933)',
              padding: '3rem 2rem',
              borderRadius: '30px 30px 0 0',
              textAlign: 'center',
              position: 'relative'
            }}>
              <button
                onClick={() => setSelectedChapter(null)}
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  background: 'rgba(255, 255, 255, 0.3)',
                  border: 'none',
                  color: 'white',
                  fontSize: '1.8rem',
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '300',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.5)';
                  e.currentTarget.style.transform = 'rotate(90deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                  e.currentTarget.style.transform = 'rotate(0deg)';
                }}
              >
                ✕
              </button>

              <div style={{
                fontSize: '5rem',
                marginBottom: '1rem',
                filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))'
              }}>
                {selectedChapter.image}
              </div>
              <div style={{
                background: 'rgba(255, 255, 255, 0.3)',
                color: 'white',
                padding: '0.5rem 1.5rem',
                borderRadius: '25px',
                fontSize: '0.9rem',
                fontWeight: '700',
                display: 'inline-block',
                marginBottom: '1rem'
              }}>
                अध्याय {selectedChapter.id} • {selectedChapter.verses} श्लोक
              </div>
              <h2 style={{
                color: 'white',
                fontSize: '2.2rem',
                fontWeight: '900',
                marginBottom: '0.8rem',
                textShadow: '0 2px 10px rgba(0,0,0,0.2)'
              }}>
                {selectedChapter.titleHindi}
              </h2>
              <p style={{
                color: 'rgba(255, 255, 255, 0.95)',
                fontSize: '1.2rem',
                fontStyle: 'italic'
              }}>
                {selectedChapter.titleEnglish}
              </p>
            </div>

            {/* Modal Content */}
            <div style={{
              padding: '3rem 2.5rem'
            }}>
              {/* Summary Section */}
              <div style={{
                marginBottom: '2.5rem'
              }}>
                <h3 style={{
                  fontSize: '1.6rem',
                  fontWeight: '700',
                  color: '#FF671F',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  📝 सारांश (Summary)
                </h3>
                <div style={{
                  background: '#fdf6e3',
                  padding: '1.5rem',
                  borderRadius: '15px',
                  borderLeft: '4px solid #FF9933',
                  marginBottom: '1rem'
                }}>
                  <p style={{
                    fontSize: '1.05rem',
                    lineHeight: '1.8',
                    color: '#2b2b2b',
                    marginBottom: '1rem'
                  }}>
                    {selectedChapter.summaryHindi}
                  </p>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    color: '#555',
                    fontStyle: 'italic'
                  }}>
                    {selectedChapter.summaryEnglish}
                  </p>
                </div>
              </div>

              {/* Key Teachings */}
              <div style={{
                marginBottom: '2.5rem'
              }}>
                <h3 style={{
                  fontSize: '1.6rem',
                  fontWeight: '700',
                  color: '#FF671F',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  ✨ मुख्य शिक्षाएं (Key Teachings)
                </h3>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}>
                  {selectedChapter.keyTeachingsHindi.map((teaching, index) => (
                    <div key={index} style={{
                      background: 'white',
                      padding: '1.2rem 1.5rem',
                      borderRadius: '12px',
                      border: '2px solid #ffe8c5',
                      display: 'flex',
                      alignItems: 'start',
                      gap: '1rem',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                    }}>
                      <span style={{
                        background: 'linear-gradient(135deg, #FF671F, #FF9933)',
                        color: 'white',
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.9rem',
                        fontWeight: '700',
                        flexShrink: 0
                      }}>
                        {index + 1}
                      </span>
                      <p style={{
                        fontSize: '1rem',
                        lineHeight: '1.7',
                        color: '#2b2b2b',
                        margin: 0
                      }}>
                        {teaching}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                justifyContent: 'center',
                paddingTop: '1rem',
                borderTop: '2px solid #f0f0f0'
              }}>
                <button style={{
                  background: 'linear-gradient(135deg, #FF671F, #FF9933)',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '50px',
                  border: 'none',
                  fontSize: '1rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(255, 103, 31, 0.3)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 103, 31, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 103, 31, 0.3)';
                }}>
                  🙏 Read Full Chapter
                </button>
                <button style={{
                  background: 'white',
                  color: '#FF671F',
                  padding: '1rem 2rem',
                  borderRadius: '50px',
                  border: '2px solid #FF9933',
                  fontSize: '1rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#fdf6e3';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                  📖 Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Services Section */}
      <section id="services" style={{
        padding: '6rem 2rem',
        background: 'white'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}>
            <div style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #FF671F, #FF9933)',
              color: 'white',
              padding: '0.5rem 1.5rem',
              borderRadius: '50px',
              fontSize: '0.9rem',
              fontWeight: '700',
              marginBottom: '1rem'
            }}>
              What We Do
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '900',
              color: '#2b2b2b',
              marginBottom: '1.5rem'
            }}>
              {data.services.title}
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {data.services.items.map((service, index) => (
              <div key={index} style={{
                background: 'linear-gradient(135deg, #fdf6e3, #fff4db)',
                padding: '2.5rem',
                borderRadius: '20px',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease',
                border: '2px solid #FF9933'
              }}>
                <div style={{
                  fontSize: '3.5rem',
                  marginBottom: '1.5rem'
                }}>
                  {service.icon}
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#2b2b2b',
                  marginBottom: '1rem'
                }}>
                  {service.title}
                </h3>
                <p style={{
                  color: '#666',
                  fontSize: '1rem',
                  lineHeight: '1.7'
                }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(180deg, white 0%, #fdf6e3 100%)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}>
            <div style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #FF671F, #FF9933)',
              color: 'white',
              padding: '0.5rem 1.5rem',
              borderRadius: '50px',
              fontSize: '0.9rem',
              fontWeight: '700',
              marginBottom: '1rem'
            }}>
              Make a Difference
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '900',
              color: '#2b2b2b',
              marginBottom: '1.5rem'
            }}>
              {data.donation.title}
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#666',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              {data.donation.description}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}>
            {/* QR Code */}
            <div style={{
              background: 'white',
              padding: '3rem',
              borderRadius: '30px',
              textAlign: 'center',
              border: '3px dashed #FF9933',
              boxShadow: '0 15px 50px rgba(255, 103, 31, 0.15)'
            }}>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#2b2b2b',
                marginBottom: '1.5rem'
              }}>
                Scan to Donate
              </h3>
              <div style={{
                background: 'linear-gradient(135deg, #fdf6e3, #fff4db)',
                padding: '2rem',
                borderRadius: '20px',
                marginBottom: '1.5rem',
                display: 'inline-block'
              }}>
                <div style={{
                  width: '250px',
                  height: '250px',
                  background: 'linear-gradient(135deg, #FF671F, #FF9933)',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem',
                  color: 'white'
                }}>
                  📱
                </div>
              </div>
              <p style={{
                fontSize: '1rem',
                color: '#666',
                marginBottom: '1rem'
              }}>
                UPI ID: <strong style={{ color: '#FF671F' }}>{data.donation.upiId}</strong>
              </p>
            </div>

            {/* Quick Donate */}
            <div>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#2b2b2b',
                marginBottom: '2rem',
                textAlign: 'center'
              }}>
                Quick Donate
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.5rem',
                marginBottom: '2rem'
              }}>
                {data.donation.amounts.map((amount, index) => (
                  <button key={index} style={{
                    background: 'white',
                    border: '2px solid #FF9933',
                    padding: '1.5rem',
                    borderRadius: '15px',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#FF671F',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 5px 20px rgba(255, 103, 31, 0.1)'
                  }}>
                    ₹{amount}
                  </button>
                ))}
              </div>
              <button style={{
                width: '100%',
                background: 'linear-gradient(135deg, #FF671F, #FF9933)',
                color: 'white',
                padding: '1.3rem',
                borderRadius: '15px',
                border: 'none',
                fontSize: '1.2rem',
                fontWeight: '700',
                cursor: 'pointer',
                boxShadow: '0 8px 25px rgba(255, 103, 31, 0.4)'
              }}>
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" style={{
        padding: '6rem 2rem',
        background: 'white'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}>
            <div style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #FF671F, #FF9933)',
              color: 'white',
              padding: '0.5rem 1.5rem',
              borderRadius: '50px',
              fontSize: '0.9rem',
              fontWeight: '700',
              marginBottom: '1rem'
            }}>
              Our Videos
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '900',
              color: '#2b2b2b',
              marginBottom: '1.5rem'
            }}>
              {data.videos.title}
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#666'
            }}>
              {data.videos.description}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {data.videos.videoIds.map((videoId, index) => (
              <div key={index} style={{
                background: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                border: '2px solid #ffe8c5'
              }}>
                <div style={{
                  position: 'relative',
                  paddingBottom: '56.25%',
                  height: 0
                }}>
                  <iframe
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 'none'
                    }}
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={`Video ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(180deg, white 0%, #fdf6e3 100%)'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}>
            <div style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #FF671F, #FF9933)',
              color: 'white',
              padding: '0.5rem 1.5rem',
              borderRadius: '50px',
              fontSize: '0.9rem',
              fontWeight: '700',
              marginBottom: '1rem'
            }}>
              Memories
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '900',
              color: '#2b2b2b',
              marginBottom: '1.5rem'
            }}>
              {data.gallery.title}
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#666'
            }}>
              {data.gallery.description}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            {data.gallery.images.map((image, index) => (
              <div key={index} style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '20px',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                aspectRatio: '1/1',
                border: '3px solid #FF9933'
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #FF671F, #FF9933)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem',
                  color: 'white'
                }}>
                  📸
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: 'linear-gradient(135deg, #2b2b2b 0%, #1a1a1a 100%)',
        color: 'white',
        padding: '4rem 2rem 2rem'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem'
          }}>
            <div>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '900',
                background: 'linear-gradient(135deg, #FF671F, #FF9933)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '1rem'
              }}>
                🕉️ Gita Prerna
              </h3>
              <p style={{
                color: '#aaa',
                lineHeight: '1.8',
                marginBottom: '1.5rem'
              }}>
                Spreading the sacred wisdom of Bhagavad Gita for spiritual enlightenment.
              </p>
              <div style={{
                display: 'flex',
                gap: '1rem'
              }}>
                {['📘', '🐦', '📷', '📹'].map((icon, index) => (
                  <a key={index} href="#" style={{
                    width: '45px',
                    height: '45px',
                    background: 'rgba(255, 103, 31, 0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.3rem',
                    textDecoration: 'none'
                  }}>
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                marginBottom: '1.5rem',
                color: '#FF9933'
              }}>
                Quick Links
              </h4>
              <ul style={{
                listStyle: 'none'
              }}>
                {['About', 'Chapters', 'Services', 'Donate', 'Gallery'].map((link) => (
                  <li key={link} style={{ marginBottom: '0.8rem' }}>
                    <a href={`#${link.toLowerCase()}`} style={{
                      color: '#aaa',
                      textDecoration: 'none',
                      fontSize: '1rem'
                    }}>
                      → {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                marginBottom: '1.5rem',
                color: '#FF9933'
              }}>
                Contact
              </h4>
              <ul style={{
                listStyle: 'none'
              }}>
                <li style={{
                  marginBottom: '1rem',
                  color: '#aaa',
                  display: 'flex',
                  gap: '0.8rem'
                }}>
                  <span>📍</span>
                  <span>123 Temple Road, New Delhi - 110001</span>
                </li>
                <li style={{
                  marginBottom: '1rem',
                  color: '#aaa',
                  display: 'flex',
                  gap: '0.8rem'
                }}>
                  <span>📧</span>
                  <span>contact@gitafoundation.org</span>
                </li>
                <li style={{
                  color: '#aaa',
                  display: 'flex',
                  gap: '0.8rem'
                }}>
                  <span>📞</span>
                  <span>+91 98765 43210</span>
                </li>
              </ul>
            </div>
          </div>

          <div style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '2rem',
            textAlign: 'center'
          }}>
            <p style={{
              color: '#888',
              fontSize: '0.95rem'
            }}>
              © 2024 Gita Prerna. All rights reserved. | Registered under Section 80G
            </p>
            <p style={{
              color: '#666',
              fontSize: '0.85rem',
              marginTop: '0.5rem'
            }}>
              🙏 हरे कृष्णा हरे कृष्णा कृष्णा कृष्णा हरे हरे
            </p>
          </div>
        </div>
      </footer>

      {/* Animations */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        a:hover {
          transform: translateY(-2px);
        }

        button:hover {
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }

          .mobile-menu-btn {
            display: block !important;
          }
        }

        @media (min-width: 769px) {
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}