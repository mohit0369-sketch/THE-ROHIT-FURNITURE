import { useEffect, useRef, useState } from 'react';
import type { FC, ReactNode } from 'react';
import { useLanguage } from '../../context/LanguageContext';

type Sketch = {
  title: string;
  subtitle: string;
  drawing: ReactNode;
};

const sketches: Sketch[] = [
  {
    title: 'The Bed',
    subtitle: 'Solid wood • Handcrafted',
    drawing: (
      <svg viewBox="0 0 700 500" className="sketch-svg">
        <g fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M120 330 L120 190 L570 190 L570 330" />
          <path d="M120 190 L170 145 L520 145 L570 190" />
          <path d="M170 145 L170 330" />
          <path d="M520 145 L520 330" />
          <path d="M95 330 L595 330" />
          <path d="M120 330 L110 390" />
          <path d="M570 330 L580 390" />
          <path d="M190 230 Q250 205 310 230 T430 230 T510 230" />
          <path d="M190 230 L190 280" />
          <path d="M510 230 L510 280" />
          <path d="M190 280 Q250 300 350 280 T510 280" />
        </g>

        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity=".45"
        >
          <path d="M105 170 L590 170" />
          <path d="M105 175 L590 175" />
          <path d="M105 345 L590 345" />
          <path d="M105 350 L590 350" />
          <path d="M140 130 L535 130" />
          <path d="M145 125 L540 125" />
        </g>
      </svg>
    ),
  },

  {
    title: 'The Sofa',
    subtitle: 'Comfort • Craftsmanship',
    drawing: (
      <svg viewBox="0 0 700 500" className="sketch-svg">
        <g fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M150 310 L150 220 Q150 175 195 175 L505 175 Q550 175 550 220 L550 310" />
          <path d="M115 310 L585 310" />
          <path d="M115 310 L115 355" />
          <path d="M585 310 L585 355" />
          <path d="M150 220 L210 245 L490 245 L550 220" />
          <path d="M210 245 L210 305" />
          <path d="M350 245 L350 305" />
          <path d="M490 245 L490 305" />
          <path d="M175 180 Q180 145 215 145 L485 145 Q520 145 525 180" />
          <path d="M180 355 L165 395" />
          <path d="M520 355 L535 395" />
        </g>

        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity=".45"
        >
          <path d="M125 320 L575 320" />
          <path d="M125 326 L575 326" />
          <path d="M160 210 Q350 190 540 210" />
          <path d="M165 215 Q350 195 535 215" />
        </g>
      </svg>
    ),
  },

  {
    title: 'The Dining Table',
    subtitle: 'Gather • Share • Belong',
    drawing: (
      <svg viewBox="0 0 700 500" className="sketch-svg">
        <g fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M125 215 Q350 170 575 215 L350 270 Z" />
          <path d="M125 215 L350 270 L575 215" />
          <path d="M180 230 L170 370" />
          <path d="M520 230 L530 370" />
          <path d="M260 255 L245 350" />
          <path d="M440 255 L455 350" />

          <path d="M90 310 L190 300 L190 410 L90 410 Z" />
          <path d="M510 300 L610 310 L610 410 L510 410 Z" />

          <path d="M95 310 L110 280 L170 275 L190 300" />
          <path d="M510 300 L530 275 L590 280 L605 310" />
        </g>

        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity=".45"
        >
          <path d="M130 220 Q350 180 570 220" />
          <path d="M135 225 Q350 185 565 225" />
          <path d="M145 370 L180 370" />
          <path d="M520 370 L555 370" />
        </g>
      </svg>
    ),
  },

  {
    title: 'The Wardrobe',
    subtitle: 'Storage • Detail • Wood',
    drawing: (
      <svg viewBox="0 0 700 500" className="sketch-svg">
        <g fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M180 390 L180 125 L520 125 L520 390" />
          <path d="M180 125 L215 95 L555 95 L520 125" />
          <path d="M520 125 L555 95 L555 360 L520 390" />
          <path d="M215 95 L215 360" />
          <path d="M215 360 L555 360" />
          <path d="M350 125 L350 360" />
          <circle cx="330" cy="245" r="6" />
          <circle cx="370" cy="245" r="6" />
          <path d="M225 155 L340 155" />
          <path d="M360 155 L505 155" />
          <path d="M225 170 L340 170" />
          <path d="M360 170 L505 170" />
        </g>

        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity=".45"
        >
          <path d="M165 390 L535 390" />
          <path d="M165 397 L535 397" />
          <path d="M200 110 L540 110" />
          <path d="M205 105 L545 105" />
        </g>
      </svg>
    ),
  },

  {
    title: 'The Door',
    subtitle: 'First impressions • Solid wood',
    drawing: (
      <svg viewBox="0 0 700 500" className="sketch-svg">
        <g fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M190 400 L190 110 L510 110 L510 400" />
          <path d="M220 400 L220 140 L480 140 L480 400" />
          <path d="M220 140 L250 110" />
          <path d="M480 140 L510 110" />
          <rect x="260" y="175" width="180" height="200" rx="4" />
          <path d="M260 275 L440 275" />
          <path d="M350 175 L350 375" />
          <circle cx="410" cy="275" r="7" />
          <path d="M165 400 L535 400" />
        </g>

        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity=".45"
        >
          <path d="M175 105 L525 105" />
          <path d="M180 100 L530 100" />
          <path d="M235 155 L465 155" />
          <path d="M235 390 L465 390" />
        </g>
      </svg>
    ),
  },

  {
    title: 'The Kitchen',
    subtitle: 'Built around your home',
    drawing: (
      <svg viewBox="0 0 700 500" className="sketch-svg">
        <g fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M100 350 L600 350" />
          <path d="M120 350 L120 200 L580 200 L580 350" />
          <path d="M120 200 L160 165 L620 165 L580 200" />
          <path d="M160 165 L160 350" />
          <path d="M300 200 L300 350" />
          <path d="M450 200 L450 350" />
          <path d="M500 220 L550 220 L550 270 L500 270 Z" />
          <circle cx="205" cy="245" r="28" />
          <circle cx="205" cy="315" r="28" />
          <path d="M330 240 L420 240" />
          <path d="M330 260 L420 260" />
          <path d="M330 300 L420 300" />
          <path d="M330 320 L420 320" />
        </g>

        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity=".45"
        >
          <path d="M110 185 L590 185" />
          <path d="M115 180 L595 180" />
          <path d="M135 365 L565 365" />
          <path d="M140 370 L560 370" />
        </g>
      </svg>
    ),
  },
];

export const Landing: FC<{ onDone: () => void }> = ({
  onDone,
}) => {
  const { language } = useLanguage();

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [leaving, setLeaving] = useState(false);

  const changingRef = useRef(false);

  const hi = language === 'hi';

  /*
   * Change furniture.
   *
   * Total time between sketches = 1 second.
   * Animation itself = 350ms.
   */
  const changeSketch = (dir: number) => {
    if (changingRef.current) return;

    changingRef.current = true;

    setDirection(dir);
    setLeaving(true);

    window.setTimeout(() => {
      setCurrent((prev) => {
        if (dir === 1) {
          return (prev + 1) % sketches.length;
        }

        return (
          (prev - 1 + sketches.length) %
          sketches.length
        );
      });

      setLeaving(false);

      window.setTimeout(() => {
        changingRef.current = false;
      }, 50);
    }, 350);
  };

  /*
   * Automatically change furniture every 1 second.
   */
  useEffect(() => {
    const timer = window.setInterval(() => {
      changeSketch(1);
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  /*
   * Automatically enter the main website
   * after exactly 7 seconds.
   */
  useEffect(() => {
    const timer = window.setTimeout(() => {
      onDone();
    }, 7000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [onDone]);

  const next = () => {
    changeSketch(1);
  };

  const previous = () => {
    changeSketch(-1);
  };

  const item = sketches[current];

  return (
    <>
      <style>{`
        .furniture-landing {
          position: fixed;
          inset: 0;
          z-index: 100;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 50% 45%,
              rgba(255,255,255,.75),
              transparent 42%
            ),
            #eee8dc;
          color: #29251f;
          font-family:
            Georgia,
            'Times New Roman',
            serif;
        }

        .furniture-landing::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: .28;
          background-image:
            repeating-linear-gradient(
              0deg,
              rgba(70,55,35,.025) 0px,
              rgba(70,55,35,.025) 1px,
              transparent 1px,
              transparent 4px
            );
        }

        .landing-top {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 92px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 5vw;
          z-index: 5;
        }

        .brand {
          font-size: clamp(18px, 2vw, 28px);
          letter-spacing: .16em;
          font-weight: 500;
        }

        .brand-small {
          display: block;
          margin-top: 5px;
          font-family: Arial, sans-serif;
          font-size: 8px;
          letter-spacing: .25em;
          opacity: .55;
        }

        .top-links {
          display: flex;
          gap: 28px;
          font-family: Arial, sans-serif;
          font-size: 10px;
          letter-spacing: .16em;
          text-transform: uppercase;
          opacity: .7;
        }

        .sketchbook {
          position: absolute;
          left: 50%;
          top: 50%;
          width: min(82vw, 1050px);
          height: min(67vh, 620px);
          transform:
            translate(-50%, -48%)
            rotate(-1deg);
          background: #f8f3e9;
          box-shadow:
            0 25px 70px rgba(55,43,28,.15),
            0 2px 4px rgba(55,43,28,.12);
          border: 1px solid rgba(70,55,35,.12);
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .page {
          position: relative;
          overflow: hidden;
          padding: clamp(30px, 5vw, 70px);
        }

        .page-left {
          border-right: 1px solid rgba(70,55,35,.14);
        }

        .page-left::after {
          content: '';
          position: absolute;
          right: -2px;
          top: 0;
          bottom: 0;
          width: 4px;
          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(70,55,35,.12),
              transparent
            );
        }

        .page-number {
          font-family: Arial, sans-serif;
          font-size: 9px;
          letter-spacing: .2em;
          opacity: .45;
        }

        .eyebrow {
          margin-top: 25px;
          font-family: Arial, sans-serif;
          font-size: 9px;
          letter-spacing: .25em;
          text-transform: uppercase;
          opacity: .55;
        }

        .main-title {
          margin-top: 14px;
          max-width: 370px;
          font-size: clamp(40px, 6vw, 82px);
          line-height: .88;
          font-weight: 400;
          letter-spacing: -.045em;
        }

        .description {
          position: absolute;
          left: clamp(30px, 5vw, 70px);
          bottom: clamp(35px, 5vw, 65px);
          max-width: 260px;
          font-family: Arial, sans-serif;
          font-size: 10px;
          line-height: 1.8;
          letter-spacing: .05em;
          opacity: .62;
        }

        .drawing-page {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .drawing-wrap {
          width: 100%;
          max-width: 540px;
          color: #514638;

          transition:
            transform .35s cubic-bezier(.76,0,.24,1),
            opacity .35s ease;
        }

        .drawing-wrap.leaving-next {
          transform:
            translateX(-80px)
            rotate(-3deg);
          opacity: 0;
        }

        .drawing-wrap.leaving-prev {
          transform:
            translateX(80px)
            rotate(3deg);
          opacity: 0;
        }

        .sketch-svg {
          width: 100%;
          height: auto;
          filter:
            drop-shadow(
              2px 4px 2px rgba(50,40,25,.06)
            );
        }

        .drawing-caption {
          margin-top: -10px;
          text-align: center;
        }

        .drawing-title {
          font-size: clamp(20px, 2.4vw, 31px);
          font-weight: 400;
          font-style: italic;
        }

        .drawing-subtitle {
          margin-top: 7px;
          font-family: Arial, sans-serif;
          font-size: 8px;
          letter-spacing: .22em;
          text-transform: uppercase;
          opacity: .5;
        }

        .arrows {
          position: absolute;
          bottom: 8%;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 12px;
          z-index: 10;
        }

        .arrow {
          width: 43px;
          height: 43px;
          border:
            1px solid rgba(50,40,30,.35);
          background:
            rgba(248,243,233,.72);
          cursor: pointer;
          font-family: Georgia, serif;
          font-size: 18px;
          transition: all .25s ease;
        }

        .arrow:hover {
          background: #29251f;
          color: #f8f3e9;
        }

        .enter-store {
          position: absolute;
          right: 5vw;
          bottom: 6%;
          border: 0;
          background: transparent;
          cursor: pointer;
          font-family: Arial, sans-serif;
          font-size: 10px;
          letter-spacing: .2em;
          text-transform: uppercase;
          color: #29251f;
        }

        .enter-store::after {
          content: '';
          display: block;
          width: 100%;
          height: 1px;
          margin-top: 7px;
          background: #29251f;
          transform-origin: left;
          transition:
            transform .3s ease;
        }

        .enter-store:hover::after {
          transform: scaleX(.55);
        }

        .counter {
          position: absolute;
          left: 5vw;
          bottom: 6%;
          font-family: Arial, sans-serif;
          font-size: 9px;
          letter-spacing: .15em;
          opacity: .5;
        }

        .corner-note {
          position: absolute;
          right: 5vw;
          top: 50%;
          transform:
            translateY(-50%)
            rotate(90deg);
          transform-origin: center;
          font-family: Arial, sans-serif;
          font-size: 8px;
          letter-spacing: .28em;
          opacity: .35;
          text-transform: uppercase;
        }

        @media (max-width: 700px) {
          .landing-top {
            height: 72px;
            padding: 0 24px;
          }

          .top-links {
            display: none;
          }

          .sketchbook {
            width: 88vw;
            height: 70vh;
            grid-template-columns: 1fr;
            top: 49%;
          }

          .page-left {
            display: none;
          }

          .drawing-page {
            padding: 25px;
          }

          .drawing-wrap {
            max-width: 500px;
          }

          .arrows {
            bottom: 10%;
          }

          .enter-store {
            right: 24px;
            bottom: 4%;
          }

          .counter {
            left: 24px;
            bottom: 4%;
          }

          .corner-note {
            display: none;
          }
        }
      `}</style>

      <div className="furniture-landing">
        <header className="landing-top">
          <div className="brand">
            THE ROHIT
            <span className="brand-small">
              FURNITURE · MAHENDRAGARH
            </span>
          </div>

          <nav className="top-links">
            <span>
              {hi ? 'संग्रह' : 'Collection'}
            </span>

            <span>
              {hi ? 'कारीगरी' : 'Craft'}
            </span>

            <span>
              {hi ? 'हमारे बारे में' : 'About'}
            </span>
          </nav>
        </header>

        <div className="sketchbook">
          <section className="page page-left">
            <div className="page-number">
              01 — SKETCHBOOK
            </div>

            <div className="eyebrow">
              {hi
                ? 'हस्तनिर्मित फर्नीचर'
                : 'Handcrafted Furniture'}
            </div>

            <h1 className="main-title">
              {hi ? (
                <>
                  घर के लिए
                  <br />
                  बनाया।
                </>
              ) : (
                <>
                  Made for
                  <br />
                  your home.
                </>
              )}
            </h1>

            <div className="description">
              {hi
                ? 'लकड़ी, कारीगरी और डिजाइन का मेल। महेंद्रगढ़ से आपके घर तक।'
                : 'A study of wood, craftsmanship and timeless design — from Mahendragarh to your home.'}
            </div>
          </section>

          <section className="page drawing-page">
            <div
              className={`drawing-wrap ${
                leaving
                  ? direction === 1
                    ? 'leaving-next'
                    : 'leaving-prev'
                  : ''
              }`}
            >
              {item.drawing}

              <div className="drawing-caption">
                <div className="drawing-title">
                  {item.title}
                </div>

                <div className="drawing-subtitle">
                  {item.subtitle}
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="corner-note">
          Designed by hand · Built to last
        </div>

        <div className="counter">
          {String(current + 1).padStart(2, '0')} /{' '}
          {String(sketches.length).padStart(2, '0')}
        </div>

        <div className="arrows">
          <button
            className="arrow"
            onClick={previous}
            aria-label="Previous sketch"
          >
            ←
          </button>

          <button
            className="arrow"
            onClick={next}
            aria-label="Next sketch"
          >
            →
          </button>
        </div>

        <button
          className="enter-store"
          onClick={onDone}
        >
          {hi
            ? 'स्टोर देखें →'
            : 'Enter the Store →'}
        </button>
      </div>
    </>
  );
};

export default Landing;