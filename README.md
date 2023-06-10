## Node.js(React × Rest.js with TypeScript)の自習用リポジトリの自習用リポジトリ

Node.js で、React × Rest.jsプロジェクトのWeb アプリケーションを作成するための自習用リポジトリです。
TypeScriptで書いています。TypeORMも使用できます。

ルートプロジェクト下のサブプロジェクトはcliをインストールしてから、コマンドプロンプトで下記を実行し、作成しています。

フロントエンドプロジェクト: create-react-app front-end --template typescript  
バックエンドプロジェクト : nest new back-end

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
