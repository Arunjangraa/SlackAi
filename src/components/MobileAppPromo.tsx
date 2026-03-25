import qrImage from '@assets/qr.png';

export const MobileAppPromo = () => (
  <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-bg-main px-6 text-center">
    <div className="w-full max-w-[320px] bg-bg-card p-10 rounded-[28px] border border-border-light shadow-sm flex flex-col items-center">
      <h1 className="text-2xl font-bold text-text-heading mb-3 tracking-tight">
        Download the App
      </h1>
      <p className="text-text-secondary mb-8 text-[15px] leading-relaxed">
        For the best experience, scan the QR code to download our mobile application.
      </p>

      <div className="p-4 bg-white rounded-2xl mb-6 shadow-sm border border-gray-100">
        <img src={qrImage} alt="QR Code" className="w-40 h-40 object-contain" />
      </div>

      <p className="text-[11px] font-bold text-brand-blue uppercase tracking-[0.2em]">
        Scan to Download
      </p>
    </div>
  </div>
);
