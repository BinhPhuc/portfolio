import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const clientEnv = createEnv({
  client: {},
  experimental__runtimeEnv: {},
  emptyStringAsUndefined: true,
});
