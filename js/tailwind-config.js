// Tailwind CDN configuration — colors, fonts, and custom shadows
// used throughout the "blueprint" visual language of the site.
tailwind.config = {
  theme: {
    extend: {
      colors: {
        cobalt: {
          DEFAULT: '#1a4ee8',
          hover: '#133cc0',
          faint: '#e8efff',
          subtle: '#c2d5ff',
          dark: '#0c2885'
        },
        slate: {
          950: '#070d18',
          900: '#0b162c',
          800: '#152544',
          600: '#475569',
          500: '#64748b',
          400: '#94a3b8'
        },
        paper: '#f8faff',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      boxShadow: {
        'blueprint': '4px 4px 0px #1a4ee8',
        'blueprint-sm': '2px 2px 0px #1a4ee8',
        'blueprint-dark': '4px 4px 0px #0b162c',
        'blueprint-lift': '6px 6px 0px #1a4ee8',
      }
    }
  }
}
