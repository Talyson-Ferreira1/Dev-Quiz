import { useContext } from 'react';

import { Theme_Context } from '../../contexts/Theme_Conext';

import './mode.css';

export default function Mode() {
  const { theme, toggleTheme } = useContext(Theme_Context);

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <div className='Mode'>
      <label className="switch">
        <input
          type="checkbox"
          onChange={handleToggleTheme}
          checked={theme.mode === true}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
}
