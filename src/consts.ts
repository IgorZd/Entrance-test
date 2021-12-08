export const API_URL = (window as any)._env_
  ? (window as any)._env_.API_URL
  : process.env.API_URL || "http://164.90.161.80:3000";
