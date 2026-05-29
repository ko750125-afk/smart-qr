import React, { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Link as LinkIcon, RefreshCw } from 'lucide-react';

function QRGenerator() {
  const [url, setUrl] = useState('');
  const [currentQR, setCurrentQR] = useState('');
  const qrRef = useRef();

  const handleGenerate = (e) => {
    e.preventDefault();
    if (!url) return;
    setCurrentQR(url);
  };

  const handleShareOrDownload = async () => {
    const canvas = qrRef.current.querySelector('canvas');
    if (!canvas) return;

    try {
      // 1. Convert canvas to JPG with white background
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      const ctx = tempCanvas.getContext('2d');
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
      ctx.drawImage(canvas, 0, 0);

      const dataUrl = tempCanvas.toDataURL('image/jpeg', 0.9);
      const fileName = `smart-qr-${Date.now()}.jpg`;

      // 2. Try native sharing first
      if (typeof navigator !== 'undefined' && navigator.share) {
        const response = await fetch(dataUrl);
        const blob = await response.blob();
        const file = new File([blob], fileName, { type: 'image/jpeg' });

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({
            files: [file],
            title: 'smart QR',
            text: 'Here is your QR code generated with smart QR!',
          });
          return; // Success!
        }
      }

      // 3. Fallback to download if sharing is not supported or fails
      triggerDownload(dataUrl, fileName);
    } catch (err) {
      console.error('Action failed:', err);
      // Final fallback
      const canvas = qrRef.current.querySelector('canvas');
      const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
      triggerDownload(dataUrl, `smart-qr-${Date.now()}.jpg`);
    }
  };

  const triggerDownload = (url, name) => {
    const link = document.createElement('a');
    link.download = name;
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert("This browser doesn't support sharing, so the image has been downloaded instead! 😊");
  };

  const handleReset = () => {
    setUrl('');
    setCurrentQR('');
  };

  return (
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
            <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Enter URL</h2>
            <form onSubmit={handleGenerate}>
              <input
                type="text"
                className="input-field"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                autoFocus
              />
              <button type="submit" className="submit-btn">Generate QR Code</button>
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
              onClick={handleShareOrDownload}
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
              <p className="qr-hint"><Download size={14} style={{ marginRight: 4 }} /> Click to share or download</p>
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
                <RefreshCw size={16} style={{ marginRight: 8 }} /> Enter another URL
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default QRGenerator;
