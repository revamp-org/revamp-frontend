import { z } from "zod";
import { goalSchemaValidation } from "./validations";

export type Goal = z.infer<typeof goalSchemaValidation>;
