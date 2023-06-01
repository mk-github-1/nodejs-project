import express, { Request, Response, NextFunction } from "express";
// import path from "path";
import cookieParser from "cookie-parser";
import createError from "http-errors";
import logger from "morgan";

// import indexRouter from "./routes/index'";
// import usersRouter from './routes/users';

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "dist")));

// app.use("/", indexRouter);
// app.use('/users', usersRouter);

// const router = express.Router();

// 検証
app.get("/", (req, res) => {
  res.status(200).send("Hello, World!");
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/*
// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404));
});

// error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
 */

// export default app;
