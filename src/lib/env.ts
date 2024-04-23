import { object, string } from "zod";

const envSchema = object({
  DATABASE_URL: string().nonempty(),
  GOOGLE_CLIENT_ID: string().nonempty(),
  GOOGLE_CLIENT_SECRET: string().nonempty(),
  NEXTAUTH_URL: string().nonempty(),
  NEXTAUTH_SECRET: string().nonempty(),
});

export const env = envSchema.parse(process.env);
