import * as z from "zod";

export const userSchema = z.object({
  name: z
    .string("Escribe un nombre valido")
    .trim()
    .min(1, "Esta seccion es obligatoria")
    .min(3, "El nombre debe incluir almenos 3 letras"),
  age: z
    .number("Escribe una edad valida")
    .min(1, "Esta seccion es obligatoria")
    .positive("La edad debe ser un numero positivo"),
  email: z
    .email("Escribe un correo valido")
    .trim()
    .min(1, "Este campo es obligatorio")
    .toLowerCase(),
  role: z
    .string()
    .trim()
    .min(1, "Este campo es obligatorio")
    .min(3, "El role debe incluir almenos 3 letras"),
});

export type CreateUserFormData = z.infer<typeof userSchema>;
