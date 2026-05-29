import React, { useEffect } from 'react';

function AdSenseContainer({ slot, format = 'auto', style = {} }) {
  useEffect(() => {
    // Try to trigger AdSense push when component mounts
    try {
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.warn("AdSense push waiting or failed:", e);
    }
  }, [slot]);

  return (
    <div 
      className="ad-wrapper" 
      style={{ 
        margin: '35px 0', 
        padding: '5px 0', 
        textAlign: 'center', 
        clear: 'both',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        ...style 
      }}
    >
      {/* Policy Label: Clearly identify the area as advertisement to avoid accidental click violations */}
      <span style={{ 
        display: 'block', 
        fontSize: '0.75rem', 
        color: '#94a3b8', 
        marginBottom: '6px', 
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        fontWeight: 700
      }}>
        Advertisement
      </span>

      {/* Card Wrapper with min-height to prevent Cumulative Layout Shift (CLS) */}
      <div style={{ 
        width: '100%', 
        minHeight: '100px', 
        background: 'rgba(241, 245, 249, 0.45)', 
        border: '1px dashed #cbd5e1', 
        borderRadius: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        transition: 'all 0.3s ease'
      }}>
        {slot ? (
          <ins className="adsbygoogle"
               style={{ display: 'block', width: '100%' }}
               data-ad-client="ca-pub-2626222961397868"
               data-ad-slot={slot}
               data-ad-format={format}
               data-full-width-responsive="true"></ins>
        ) : (
          <div style={{ padding: '1.5rem', color: '#94a3b8', fontSize: '0.85rem', fontStyle: 'italic', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span>AdSense Container Slot</span>
            <span style={{ fontSize: '0.75rem', color: '#cbd5e1' }}>(Pass slot ID to activate live Ads)</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdSenseContainer;
