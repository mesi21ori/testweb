export const themes = {
  default: {
    background: "#FFFFFF",
    foreground: "#0F172A",
    primary: "#0F172A",
    primaryForeground: "#F8FAFC",
    secondary: "#F1F5F9",
    secondaryForeground: "#0F172A",
    accent: "#F1F5F9",
    accentForeground: "#0F172A",
    muted: "#F1F5F9",
    mutedForeground: "#64748B",
    border: "#E2E8F0",
    input: "#E2E8F0",
    ring: "#0F172A",
  },
  "team-theme": {
    background: "#F9F3EF", // team-off-white
    foreground: "#1B3C53", // team-dark-blue
    primary: "#456882", // team-medium-blue
    primaryForeground: "#F9F3EF", // team-off-white
    secondary: "#D2C1B6", // team-light-beige
    secondaryForeground: "#1B3C53", // team-dark-blue
    accent: "#456882", // team-medium-blue
    accentForeground: "#F9F3EF", // team-off-white
    muted: "#D2C1B6", // team-light-beige
    mutedForeground: "#1B3C53", // team-dark-blue (slightly adjusted for muted)
    border: "#D2C1B6", // team-light-beige
    input: "#D2C1B6", // team-light-beige
    ring: "#456882", // team-medium-blue
  },
}

export type ThemeName = keyof typeof themes
export type ThemeColors = (typeof themes)[ThemeName]
