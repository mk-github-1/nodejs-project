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

    -   Rest.js では controller から service まで機能単位になるかもしれない

    -   infrastructure ※検討中、Rest.js で Repository をデフォルトで利用できるかもしれない

    -   application-service ※検討中

        -   use-case
        -   use-case-impl

    -   domain-service

        -   service
        -   service-impl
        -   in-memory
        -   repository
        -   utility

    -   domain-model ※dto は廃止検討中

        -   constant
        -   entity
        -   model
        -   resource

    -   test
