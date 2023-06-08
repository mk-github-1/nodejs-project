## Node.js(typescript, React, Express.js, TypeORM)の自習用リポジトリ

Node.js で、typescript, React, Express.js の  
Web アプリケーションを作成するための自習用リポジトリです。

ルートプロジェクト下のサブプロジェクトは次のコマンドで作成しています。

フロントエンドプロジェクト: create-react-app front-end --template typescript  
バックエンドプロジェクト : npx typeorm init --name back-end --database mysql --express

## アーキテクチャ検討中

こんな感じのイメージにしようと考えている。Excel でまとめる

nodejs-project

-   front-end

    -   pages
    -   front-end-model
    -   utility
    -   test

-   back-end

    -   api

        -   controller
        -   authorize

    -   infrastructure

        -   in-memory-impl
        -   repository-impl

    -   application-service ※トランザクション単位でもある

        -   use-case
        -   use-case-impl

    -   domain-service

        -   service
        -   service-impl
        -   in-memory
        -   repository
        -   utility

    -   domain-model

        -   constant
        -   entity
        -   model
        -   resource
        -   ※dto を使用しない設計にする予定

    -   test
        -   api/controller
        -   api/authorize
        -   application-service/service
        -   domain-service/domain-service
        -   domain-service/in-memory
        -   domain-service/repository
