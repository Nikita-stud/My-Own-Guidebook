//default values for missing fields
const postSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  content: z.string().min(1, 'Content is required'),
  published: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
});

//number validation
const restaurantSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  rating: z
    .number()
    .min(1, 'Rating must be at least 1')
    .max(5, 'Rating must not exceed 5'),
});

//zod can transform data too while validating
const userSchema = z.object({
  username: z.string().min(2),
  email: z
    .email('Must be a valid email')
    .transform((val) => val.trim().toLowerCase()),
});
