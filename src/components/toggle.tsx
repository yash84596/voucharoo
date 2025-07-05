import { useLayoutEffect, useState } from 'react';
import { Switch } from '@heroui/react';
import { Sun, Moon } from 'lucide-react';

/**
 * Global day‑/night switch.
 * Uses layout‑effect so the class flips before the first paint ➜ zero delay.
 */
export default function ThemeToggle() {
  // read once, avoid hydration mismatch
  const [dark, setDark] = useState<boolean>(() =>
    typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark'
  );

  // flip .dark immediately (layout‑effect = runs before paint)
  useLayoutEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <Switch
      size="md"
      isSelected={dark}
      onValueChange={() => setDark(!dark)}
      thumbIcon={dark ? <Moon size={12} /> : <Sun size={12} />}
      aria-label="Toggle dark mode"
      className="transition-transform duration-200" /* tiny bounce effect */
    />
  );
}
