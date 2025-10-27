import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Dev helper: if the URL contains ?debugOverflow=1, add a CSS class
// that outlines elements so we can find which element causes vertical overflow.
try {
	const params = new URLSearchParams(window.location.search);
	if (params.get('debugOverflow') === '1') {
		document.documentElement.classList.add('overflow-debug');
	}
	// Respect reduced-motion preference and low-resource devices.
	const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	const hardwareConcurrency = typeof navigator !== 'undefined' && navigator.hardwareConcurrency ? navigator.hardwareConcurrency : 4;
	const paramsNoAnim = params.get('noAnim') === '1';
	if (prefersReduced || hardwareConcurrency <= 2 || paramsNoAnim) {
		document.documentElement.classList.add('no-anim');
	}
} catch (e) {
	// ignore in non-browser environments
}

createRoot(document.getElementById("root")).render(<App />);