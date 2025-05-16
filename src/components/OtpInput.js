import { useRef } from 'react';

const OtpInput = ({ length = 6, onChange }) => {
  const inputs = useRef([]);

  const handleChange = (e, idx) => {
    const value = e.target.value;
    if (/^[0-9]?$/.test(value)) {

      const fullValue = inputs.current.map((input) => input.value).join('');
      onChange(fullValue);

      if (value && idx < length - 1) {
        inputs.current[idx + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === 'Backspace' && !e.target.value && idx > 0) {
      inputs.current[idx - 1].focus();
    }
  };

  return (
    <div className="flex gap-2 justify-center">
      {Array.from({ length }, (_, i) => (
        <input
          key={i}
          maxLength={1}
          ref={(el) => (inputs.current[i] = el)}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          className="w-14 h-14 text-center text-white text-xl bg-transparent border border-gray-500 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          inputMode="numeric"
        />
      ))}
    </div>
  );
};

export default OtpInput;
