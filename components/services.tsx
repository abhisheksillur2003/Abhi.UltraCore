'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus, Layers3, Code2, Workflow } from 'lucide-react';
import { services } from '@/data/content';
export function Services() {
  const [selected, setSelected] = useState<number | null>(0);
  return (
    <div className="services-layout">
      <div className="service-aside">
        <div className="service-diagram" aria-hidden="true">
          <div>
            <Code2 size={24} />
          </div>
          <span />
          <div>
            <Layers3 size={30} />
          </div>
          <span />
          <div>
            <Workflow size={24} />
          </div>
        </div>
        <p>
          From the interface
          <br />
          to the infrastructure.
        </p>
        <span className="mono">ONE CONNECTED PRODUCT.</span>
      </div>
      <div className="service-list">
        {services.map((service, i) => (
          <div
            className={`service-row ${selected === i ? 'selected' : ''}`}
            key={service.title}
          >
            <h3>
              <button
                onClick={() => setSelected(selected === i ? null : i)}
                aria-expanded={selected === i}
                aria-controls={`service-${i}`}
              >
                <span className="mono">0{i + 1}</span>
                {service.title}
                <Plus size={21} />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {selected === i && (
                <motion.div
                  id={`service-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="service-detail"
                >
                  <p>{service.description}</p>
                  <div className="service-tags">
                    {service.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
