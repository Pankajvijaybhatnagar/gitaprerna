'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { chapters } from '../../data/chapters';

export default function ChaptersPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg border-b" style={{
        background: 'rgba(255, 255, 255, 0.9)',
        borderColor: 'var(--biscuit)',
      }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <motion.div
              className="flex items-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-3xl">ॐ</span>
              <span className="text-2xl font-bold" style={{ color: 'var(--deep-brown)' }}>
                गीता प्रेरणा
              </span>
            </motion.div>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6" style={{
        background: 'linear-gradient(135deg, var(--bhagwa-light) 0%, var(--biscuit-light) 100%)',
      }}>
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6"
            style={{ color: 'var(--deep-brown)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            १८ अध्याय
          </motion.h1>
          <motion.h2
            className="text-4xl md:text-5xl mb-8"
            style={{ color: 'var(--brown)', fontFamily: 'var(--font-display)', fontWeight: 300 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            18 Chapters of bhagwad Gita
          </motion.h2>
          <motion.p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: 'var(--brown)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore the divine dialogue between Lord Krishna and Arjuna on the battlefield of Kurukshetra
          </motion.p>
        </div>
      </section>

      {/* Chapters Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chapters.map((chapter, index) => (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Link href={`/chapter/${chapter.id}`}>
                  <motion.div
                    className="p-8 rounded-3xl h-full cursor-pointer relative overflow-hidden"
                    style={{
                      background: 'white',
                      border: '2px solid var(--biscuit)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                    }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: '0 20px 60px rgba(255, 153, 51, 0.15)',
                      borderColor: 'var(--bhagwa)',
                    }}
                  >
                    {/* Chapter Number */}
                    <div className="absolute top-4 right-4 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold" style={{
                      background: 'linear-gradient(135deg, var(--bhagwa) 0%, var(--bhagwa-dark) 100%)',
                      color: 'white',
                    }}>
                      {chapter.id}
                    </div>

                    {/* Content */}
                    <div className="pr-20">
                      <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--deep-brown)' }}>
                        {chapter.titleHindi}
                      </h3>
                      <h4 className="text-lg mb-4" style={{ color: 'var(--brown)', opacity: 0.8 }}>
                        {chapter.titleEnglish}
                      </h4>
                    </div>

                    <p className="text-sm mb-6 line-clamp-3" style={{ color: 'var(--brown)' }}>
                      {chapter.summaryEnglish}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold" style={{ color: 'var(--bhagwa)' }}>
                        {chapter.verses} श्लोक | Verses
                      </div>
                      <motion.div
                        className="text-bhagwa-dark"
                        whileHover={{ x: 5 }}
                      >
                        →
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center" style={{ background: 'var(--deep-brown)' }}>
        <div className="text-4xl mb-4" style={{ color: 'var(--gold)' }}>ॐ</div>
        <p style={{ color: 'var(--biscuit-light)' }}>
          Gita Prerna © 2026 | गीता प्रेरणा
        </p>
      </footer>
    </div>
  );
}
