// import express, { Application } from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import todoRoutes from "./api/routes/todoRoutes";
// import { errorHandler, notFound } from "./middleware/errorMiddleware";

// dotenv.config();

// const app: Application = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Routes
// app.use("/api/todos", todoRoutes);

// // Error Handling
// app.use(notFound);
// app.use(errorHandler);

// // Start Server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// export default app;
