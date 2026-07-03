import { Platform } from "react-native";

const githubPagesBase = "/fitscan-ai";

export function appHref(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (Platform.OS === "web" && typeof window !== "undefined" && window.location.hostname.endsWith("github.io")) {
    return `${githubPagesBase}${normalized === "/" ? "" : normalized}`;
  }
  return normalized;
}
