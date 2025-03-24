import React from "react";
import "./SignaturePopup.css";

const SignaturePopup: React.FC = () => {
  const signatures = [
    "9IMB", "YBJM", "QSSH", "NCFK", "MDLN", "OOQP", "JJ4P", "KYLL", "WECQ",
    "FSRA", "FIJU", "AXKT", "5LD3", "LNE1", "23XU", "FBFA", "1IBB", "MBRL",
    "IBFF", "FO1Q",
  ];

  return (
    <div className="signature-popup">
      <p className="signature-title">🔗 Signature</p>
      <div className="signature-list">
        {signatures.map((code, index) => (
          <span key={index} className="signature-item">
            {code}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SignaturePopup;
