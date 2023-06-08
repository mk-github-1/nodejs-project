import express from "express";

// 古い書き方のためコメントアウト
// import * as express from "express";
// import * as bodyParser from "body-parser";

import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "./data-source";
import { Routes } from "./routes";
import cors from "cors";
import cookieParser from "cookie-parser";
import createError from "http-errors";
import helmet from "helmet";
import logger from "morgan";
import session from "express-session";
// multer
// passport
// connect-flash
// rate-limiter

// 未設定
import { InversifyExpressServer } from "inversify-express-utils";

import { User } from "./domain-model/entity/User";

AppDataSource.initialize()
    .then(async () => {
        // create express app
        const app = express();

        // 古い書き方のためコメントアウト
        // app.use(bodyParser.json());

        // JSON ボディを解析するミドルウェア
        app.use(express.json());

        // URL エンコードされたボディを解析するミドルウェア
        app.use(express.urlencoded({ extended: true }));

        // CORSミドルウェアの登録
        app.use(cors());

        // cookie-parserミドルウェアの登録
        app.use(cookieParser());

        // helmetミドルウェアの登録
        app.use(helmet());

        // loggerミドルウェアの登録
        app.use(logger("dev"));

        // express-sessionミドルウェアを使用する前に、セッションの設定を定義
        app.use(
            session({
                secret: "YourSecretKey",
                resave: false,
                saveUninitialized: false,
                // 追加の設定オプション...
            })
        );

        // express-sessionミドルウェアの登録
        /*
        app.use(
            session({
                // セッションの設定...
            })
        );
         */

        // register express routes from defined application routes

        // Routes.forEachは、定義されたルートの配列（Routes）を反復処理しています。
        // 各ルートは、HTTPメソッド、パス、およびアクション（コントローラ内のメソッド）を持っています。
        Routes.forEach((route) => {
            // (app as any)[route.method]は、指定されたHTTPメソッドに基づいてExpressアプリケーションの対応するメソッド（GET、POST、PUTなど）を選択します。
            // これにより、特定のHTTPメソッドに対応するルートが設定されます。
            (app as any)[route.method](
                // route.routeは、ルートのパスを表します。
                // 例えば、"/users"や"/products"などの具体的なパスが指定されます。
                route.route,

                // (req: Request, res: Response, next: Function)は、ルートハンドラ関数を定義しています。
                // この関数は、リクエストとレスポンスオブジェクトを受け取り、指定されたアクション（コントローラ内のメソッド）を呼び出します。
                (req: Request, res: Response, next: Function) => {
                    // new (route.controller as any)()は、ルートに関連付けられたコントローラのインスタンスを作成しています。
                    // (route.controller as any)は、型のキャストを行っています。
                    // [route.action]は、指定されたアクション（コントローラ内のメソッド）を選択します。これにより、リクエストが処理されます。
                    const result = new (route.controller as any)()[route.action](req, res, next);

                    // result instanceof Promiseは、アクションの実行結果がPromiseであるかどうかを確認しています。
                    // Promiseの場合、結果を待機し、結果があればそれをレスポンスとして送信します。
                    if (result instanceof Promise) {
                        // res.send(result)は、結果をレスポンスとして送信します。
                        // 結果がnullまたはundefinedでない場合にのみレスポンスが送信されます。
                        result.then((result) =>
                            result !== null && result !== undefined ? res.send(result) : undefined
                        );
                    } else if (result !== null && result !== undefined) {
                        // res.json(result)は、結果をJSON形式でレスポンスとして送信します。
                        res.json(result);
                    }
                }
            );
        });

        // setup express app here
        // ...

        // start express server ※Reactでポート3000を使用するため、ポート変更
        // app.listen(3000);
        app.listen(5000);

        // insert new users for test
        await AppDataSource.manager.save(
            AppDataSource.manager.create(User, {
                firstName: "Timber",
                lastName: "Saw",
                age: 27,
            })
        );

        await AppDataSource.manager.save(
            AppDataSource.manager.create(User, {
                firstName: "Phantom",
                lastName: "Assassin",
                age: 24,
            })
        );

        // エラーハンドリングミドルウェア
        app.use((req: Request, res: Response, next: NextFunction) => {
            next(createError(404));
        });

        // エラーレスポンスミドルウェア
        app.use((err: createError.HttpError, req: Request, res: Response, next: NextFunction) => {
            res.status(err.status || 500);
            res.json({
                error: {
                    message: err.message,
                },
            });
        });

        console.log(
            // "Express server has started on port 3000. Open http://localhost:3000/users to see results"
            "Express server has started on port 5000. Open http://localhost:5000/users to see results"
        );
    })
    .catch((error) => console.log(error));

