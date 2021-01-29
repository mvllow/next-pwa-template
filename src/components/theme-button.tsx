import { useState } from 'react'
import { getLightMode, toggleLightMode } from '../theme'

const ThemeButton = () => {
  const [light, setLight] = useState(getLightMode())

  function toggle() {
    setLight(!light)
    toggleLightMode()
  }

  return (
    <button type='button' onClick={toggle}>
      {light ? 'Light' : 'Dark'} mode
      <style jsx>{`
        button {
          color: var(--label);
          font-size: 14px;
          background: transparent;
          display: flex;
          align-items: center;
          border: none;
          outline: none;
          cursor: pointer;
          transition: var(--transition-colors);
        }

        button:hover,
        button:focus {
          color: var(--fg);
        }
      `}</style>
    </button>
  )
}

export default ThemeButton
