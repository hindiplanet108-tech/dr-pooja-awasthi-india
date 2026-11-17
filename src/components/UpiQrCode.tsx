import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';

interface UpiQrCodeProps {
  upiId: string;
  accountHolder: string;
  customImageUrl?: string | null;
  className?: string;
  alt?: string;
}

const isPlaceholderOrPortrait = (url?: string | null): boolean => {
  if (!url) return true;
  const trimmed = url.trim();
  if (!trimmed) return true;
  if (
    trimmed.includes('pooja_portrait') ||
    trimmed.includes('api.qrserver.com') ||
    trimmed === '/upi-qr-9105731969.svg'
  ) {
    return true;
  }
  return false;
};

export const UpiQrCode: React.FC<UpiQrCodeProps> = ({
  upiId,
  accountHolder,
  customImageUrl,
  className = 'w-40 h-40 object-contain rounded-lg',
  alt,
}) => {
  const [generatedQrDataUrl, setGeneratedQrDataUrl] = useState<string>('');
  const [customFailed, setCustomFailed] = useState<boolean>(false);

  const hasGenuineCustomImage = !customFailed && !isPlaceholderOrPortrait(customImageUrl);

  useEffect(() => {
    setCustomFailed(false);
  }, [customImageUrl]);

  useEffect(() => {
    let active = true;
    const cleanUpi = (upiId || '9105731969@upi').trim();
    const cleanName = (accountHolder || 'Pooja Awasthi').trim();
    const upiUri = `upi://pay?pa=${cleanUpi}&pn=${encodeURIComponent(cleanName)}&cu=INR`;

    QRCode.toDataURL(upiUri, {
      width: 360,
      margin: 2,
      errorCorrectionLevel: 'M',
      color: {
        dark: '#1E162B',
        light: '#FFFFFF',
      },
    })
      .then((dataUrl) => {
        if (active) setGeneratedQrDataUrl(dataUrl);
      })
      .catch(() => {
        // Fallback handled cleanly by static SVG asset
      });

    return () => {
      active = false;
    };
  }, [upiId, accountHolder]);

  const resolvedSrc = hasGenuineCustomImage
    ? (customImageUrl as string)
    : generatedQrDataUrl || '/upi-qr-9105731969.svg';

  return (
    <img
      src={resolvedSrc}
      alt={alt || `UPI QR Code - ${accountHolder} (${upiId})`}
      className={className}
      loading="eager"
      onError={() => {
        if (hasGenuineCustomImage) {
          setCustomFailed(true);
        }
      }}
    />
  );
};
