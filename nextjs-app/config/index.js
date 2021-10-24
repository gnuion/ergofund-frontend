const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://ergofund-frontend-8l933qh67-gnuion.vercel.app/";
