import React, { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Link as LinkIcon, RefreshCw } from 'lucide-react';
import './index.css';

function App() {
  const [url, setUrl] = useState('');
  const [currentQR, setCurrentQR] = useState('');
  const qrRef = useRef();

  const handleGenerate = (e) => {
    e.preventDefault();
    if (!url) return;
    setCurrentQR(url);
  };

  const downloadQR = () => {
    const canvas = qrRef.current.querySelector('canvas');
    if (!canvas) return;

    // Convert canvas to JPG
    // Note: Canvas defaults to PNG. We draw it on a white background first to support JPG (which doesn't have transparency)
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    const ctx = tempCanvas.getContext('2d');
    
    // Fill white background
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    
    // Draw QR code
    ctx.drawImage(canvas, 0, 0);

    const link = document.createElement('a');
    link.download = `smart-qr-${Date.now()}.jpg`;
    link.href = tempCanvas.toDataURL('image/jpeg', 0.9);
    link.click();
  };

  const handleReset = () => {
    setUrl('');
    setCurrentQR('');
  };

  return (
    <div className="App">
      <header style={{ justifyContent: 'center' }}>
        <h1 className="site-name">smart QR</h1>
      </header>

      <main>
        <div className="container">
          <AnimatePresence mode="wait">
            {!currentQR ? (
              <motion.div
                key="input-screen"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, y: 100 }}
                className="input-group"
              >
                <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>URL을 입력해줘!</h2>
                <form onSubmit={handleGenerate}>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="https://example.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    autoFocus
                  />
                  <button type="submit" className="submit-btn">QR 코드 생성하기</button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="qr-screen"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                className="container"
              >
                {/* QR Display Area */}
                <motion.div 
                  className="qr-display"
                  onClick={downloadQR}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  ref={qrRef}
                >
                  <QRCodeCanvas 
                    value={currentQR} 
                    size={256} 
                    level="H"
                    includeMargin={true}
                  />
                  <p className="qr-hint"><Download size={14} style={{ marginRight: 4 }} /> 클릭해서 JPG로 다운로드</p>
                </motion.div>

                {/* Input moves down */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="input-group"
                  style={{ marginTop: '1rem', padding: '1.5rem' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                    <LinkIcon size={18} color="#64748b" />
                    <span style={{ fontSize: '0.9rem', color: '#64748b', wordBreak: 'break-all' }}>{currentQR}</span>
                  </div>
                  <button onClick={handleReset} className="submit-btn" style={{ background: '#f1f5f9', color: '#475569' }}>
                    <RefreshCw size={16} style={{ marginRight: 8 }} /> 다른 URL 입력하기
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <footer>
        <p>© 2026 나나컴퍼니 smart QR. Designed by 은영 ✨</p>
      </footer>
    </div>
  );
}

export default App;
