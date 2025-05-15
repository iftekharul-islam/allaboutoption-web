
const DropdownSelect = ({ label, options, selected, onChange }) => {
  return (
    <div className="w-full">
      <label className="block mb-1 text-sm text-gray-400">{label}</label>
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 mt-1 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="" disabled>
          -- Select an option --
        </option>
        {options.map((opt, index) => (
            <option key={index} value={opt?.value}>
                {opt?.label}
            </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownSelect;