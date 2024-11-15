import type { CapacitorConfig } from "@capacitor/cli"

const config: CapacitorConfig = {
  appId: "lumi.weather.app",
  appName: "Lumi weather",
  webDir: "dist",
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  },
  android: {
    backgroundColor: "#000000",
  },
}

export default config
