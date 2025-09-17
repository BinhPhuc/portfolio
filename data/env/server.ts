import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const serverEnv = createEnv({
  server: {
    BACKEND_API_URL: z.string().url(),
  },
  experimental__runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
