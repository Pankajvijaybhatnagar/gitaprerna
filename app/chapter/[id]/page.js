'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { chapters } from '../../../data/chapters';
import { use } from 'react';

export default function ChapterPage({ params }) {
  const { id } = use(params);
  const chapterId = parseInt(id);
  const chapter = chapters.find(c => c.id === chapterId);

  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl">Chapter not found</p>
      </div>
    );
  }

  const prevChapter = chapterId > 1 ? chapterId - 1 : null;
  const nextChapter = chapterId < 18 ? chapterId + 1 : null;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg border-b" style={{
        background: 'rgba(255, 255, 255, 0.95)',
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
          <Link href="/chapters">
            <motion.button
              className="px-6 py-2 rounded-full text-sm font-semibold"
              style={{
                background: 'var(--biscuit)',
                color: 'var(--deep-brown)',
              }}
              whileHover={{
                background: 'var(--bhagwa)',
                color: 'white',
              }}
            >
              All Chapters
            </motion.button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, var(--bhagwa) 0%, var(--bhagwa-dark) 100%)',
      }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='20' y='60' font-family='serif' font-size='50' fill='white'%3Eॐ%3C/text%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }} />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            className="text-7xl font-bold mb-6"
            style={{ color: 'white' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            अध्याय {chapter.id}
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: 'white' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {chapter.titleHindi}
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl mb-6"
            style={{ color: 'var(--biscuit-light)', fontFamily: 'var(--font-display)', fontWeight: 300 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {chapter.titleEnglish}
          </motion.h2>

          <motion.div
            className="inline-block px-6 py-2 rounded-full text-lg font-semibold"
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              backdropFilter: 'blur(10px)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {chapter.verses} श्लोक | {chapter.verses} Verses
          </motion.div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-16 px-6" style={{ background: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="bg-white p-10 rounded-3xl shadow-lg"
            style={{ border: '2px solid var(--biscuit)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-6" style={{ color: 'var(--bhagwa)' }}>
              सारांश | Summary
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-3" style={{ color: 'var(--deep-brown)' }}>
                  हिंदी में:
                </h4>
                <p className="text-lg leading-relaxed" style={{ color: 'var(--brown)' }}>
                  {chapter.summaryHindi}
                </p>
              </div>
              <div className="h-px" style={{ background: 'var(--biscuit)' }} />
              <div>
                <h4 className="text-xl font-semibold mb-3" style={{ color: 'var(--deep-brown)' }}>
                  In English:
                </h4>
                <p className="text-lg leading-relaxed" style={{ color: 'var(--brown)' }}>
                  {chapter.summaryEnglish}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Teachings Section */}
      <section className="py-16 px-6" style={{ background: 'var(--biscuit-light)' }}>
        <div className="max-w-5xl mx-auto">
          <motion.h3
            className="text-4xl font-bold mb-12 text-center"
            style={{ color: 'var(--deep-brown)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            मुख्य शिक्षाएं | Key Teachings
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Hindi Teachings */}
            <motion.div
              className="bg-white p-8 rounded-3xl shadow-lg"
              style={{ border: '2px solid var(--biscuit)' }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-2xl font-bold mb-6" style={{ color: 'var(--bhagwa)' }}>
                हिंदी में
              </h4>
              <ul className="space-y-4">
                {chapter.keyTeachingsHindi.map((teaching, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <span className="text-2xl mt-1">•</span>
                    <span className="text-lg leading-relaxed" style={{ color: 'var(--brown)' }}>
                      {teaching}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* English Teachings */}
            <motion.div
              className="bg-white p-8 rounded-3xl shadow-lg"
              style={{ border: '2px solid var(--biscuit)' }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-2xl font-bold mb-6" style={{ color: 'var(--bhagwa)' }}>
                In English
              </h4>
              <ul className="space-y-4">
                {chapter.keyTeachingsEnglish.map((teaching, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <span className="text-2xl mt-1">•</span>
                    <span className="text-lg leading-relaxed" style={{ color: 'var(--brown)' }}>
                      {teaching}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Explanation Section */}
      <section className="py-16 px-6" style={{ background: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto">
          <motion.h3
            className="text-4xl font-bold mb-12 text-center"
            style={{ color: 'var(--deep-brown)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            विस्तृत व्याख्या | Detailed Explanation
          </motion.h3>

          <motion.div
            className="bg-white p-10 rounded-3xl shadow-lg mb-8"
            style={{ border: '2px solid var(--biscuit)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-2xl font-semibold mb-6" style={{ color: 'var(--bhagwa)' }}>
              हिंदी में विस्तृत व्याख्या
            </h4>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--brown)' }}>
              {chapter.detailedExplanationHindi}
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-10 rounded-3xl shadow-lg"
            style={{ border: '2px solid var(--biscuit)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-2xl font-semibold mb-6" style={{ color: 'var(--bhagwa)' }}>
              Detailed Explanation in English
            </h4>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--brown)' }}>
              {chapter.detailedExplanationEnglish}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-16 px-6" style={{ background: 'var(--biscuit-light)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between gap-8">
            {prevChapter ? (
              <Link href={`/chapter/${prevChapter}`} className="flex-1">
                <motion.div
                  className="p-6 rounded-2xl cursor-pointer text-left"
                  style={{
                    background: 'white',
                    border: '2px solid var(--biscuit)',
                  }}
                  whileHover={{
                    scale: 1.02,
                    borderColor: 'var(--bhagwa)',
                    boxShadow: '0 10px 40px rgba(255, 153, 51, 0.15)',
                  }}
                >
                  <div className="text-sm mb-2" style={{ color: 'var(--brown)', opacity: 0.7 }}>
                    ← Previous Chapter
                  </div>
                  <div className="text-xl font-bold" style={{ color: 'var(--deep-brown)' }}>
                    अध्याय {prevChapter}
                  </div>
                </motion.div>
              </Link>
            ) : (
              <div className="flex-1" />
            )}

            <Link href="/chapters">
              <motion.button
                className="px-8 py-4 rounded-full font-semibold"
                style={{
                  background: 'linear-gradient(135deg, var(--bhagwa) 0%, var(--bhagwa-dark) 100%)',
                  color: 'white',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                All Chapters
              </motion.button>
            </Link>

            {nextChapter ? (
              <Link href={`/chapter/${nextChapter}`} className="flex-1">
                <motion.div
                  className="p-6 rounded-2xl cursor-pointer text-right"
                  style={{
                    background: 'white',
                    border: '2px solid var(--biscuit)',
                  }}
                  whileHover={{
                    scale: 1.02,
                    borderColor: 'var(--bhagwa)',
                    boxShadow: '0 10px 40px rgba(255, 153, 51, 0.15)',
                  }}
                >
                  <div className="text-sm mb-2" style={{ color: 'var(--brown)', opacity: 0.7 }}>
                    Next Chapter →
                  </div>
                  <div className="text-xl font-bold" style={{ color: 'var(--deep-brown)' }}>
                    अध्याय {nextChapter}
                  </div>
                </motion.div>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
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
