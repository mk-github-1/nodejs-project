## Node.js(React × Rest.js with TypeScript)の自習用リポジトリの自習用リポジトリ

Node.js で、React × Rest.jsプロジェクトのWeb アプリケーションを作成するための自習用リポジトリです。
TypeScriptで書いています。TypeORMも使用できます。

ルートプロジェクト下のサブプロジェクトはcliをインストールしてから、コマンドプロンプトで下記を実行し、作成しています。

フロントエンドプロジェクト: create-react-app front-end --template typescript  
バックエンドプロジェクト : nest new back-end

## アーキテクチャ検討中

アーキテクチャのイメージ。Excel でまとめる

```
nodejs-project
    - front-end
        - pages
        - front-end-model
        - utility
        - test

    - back-end
        - modules ※例、ここはモジュール単位でフォルダを作成します。
            - login-user  
                - loginUser.controller.ts
                - loginUser.service.ts
                - loginUser.module.ts

        - providers
            - infrastructure
                - in-memory-impl
                - repository-impl

            - domain-service
                - domain-service
                - domain-service-impl
                - in-memory
                - repository
                - utility

            - domain-model ※dto は廃止検討中
                - constant
                - entity
                - model
                - resource

        - test
```    
