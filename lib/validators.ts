import { z } from "zod";

export const inquirySchema = z.object({
  name: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please provide a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9+\s-]{10,15}$/, "Please enter a valid phone number"),
  destination: z.string().optional(),
  travelDate: z.string().optional(),
  travelers: z.coerce.number().min(1, "At least 1 traveler is required").default(2),
  message: z.string().max(1000, "Message is too long").optional(),
  packageId: z.string().optional(),
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export type InquiryFormData = z.infer<typeof inquirySchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;

