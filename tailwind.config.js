/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        discord_blue: "#295DE7",
        discord_blurple: "#7289da",
        discord_purple: "#5865f2",
        discord_green: "#3ba55c",
        discord_serverBg: '#36393f',
        discord_serversBg: '#202225',
        discord_channelsBg: '#2f3136',
        discord_serverNameHoverBg: '#34373c',
      },
      borderRadius: ['hover', 'focus'],
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
