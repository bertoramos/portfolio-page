import './ThemeToggle.css';

const ThemeToggle = ({ checked, onChange }: { checked: boolean, onChange: (event: React.ChangeEvent<HTMLInputElement>) => void }) => (
  <label className="switch">
    <input type="checkbox" checked={checked} onChange={onChange} />
    <span className="slider" />
  </label>
);

export default ThemeToggle;
