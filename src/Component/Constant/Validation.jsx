import * as yup from "yup";

const productSchema = yup.object({
  title: yup
    .string()
    .trim()
    .min(2, "Product name must be at least 2 characters")
    .required("Product name is required"),

  description: yup
    .string()
    .trim()
    .min(10, "Description must be at least 10 characters")
    .required("Description is required"),

  category: yup
    .string()
    .required("Please select a category"),

  price: yup
    .number()
    .typeError("Price must be a number")
    .positive("Price must be greater than 0")
    .required("Price is required"),

  stock: yup
    .number()
    .typeError("Stock must be a number")
    .integer("Stock must be a whole number")
    .min(0, "Stock cannot be negative")
    .required("Stock is required"),

  brand: yup
    .string()
    .trim()
    .required("Brand is required"),

  discountPercentage: yup
    .number()
    .typeError("Discount must be a number")
    .min(0, "Discount cannot be negative")
    .max(100, "Discount cannot exceed 100%")
    .required("Discount is required"),

  thumbnail: yup
    .string()
    .url("Please enter a valid image URL")
    .required("Image URL is required"),
});

export default productSchema;