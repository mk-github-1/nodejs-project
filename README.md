## Node.js(React × Rest.js with TypeScript)の自習用リポジトリの自習用リポジトリ

Node.js で、React × Rest.js プロジェクトの Web アプリケーションを作成するための自習用リポジトリです。
TypeScript で書いています。TypeORM も使用できます。

ルートプロジェクト下のサブプロジェクトは cli をインストールしてから、コマンドプロンプトで下記を実行し、作成しています。

フロントエンドプロジェクト: create-react-app front-end --template typescript  
バックエンドプロジェクト : nest new back-end

## アーキテクチャ検討中

アーキテクチャのイメージ。Excel でまとめる

```
nodejs-project
    - front-end
        - components
            - model
        - containers
        - pages
        - test
        - utils

    - back-end
        - modules ※ここはモジュール単位でフォルダを作成します。
            - (例)login-user
                - (例)login-user.controller.ts
                - (例)login-user.dto.ts
                - (例)login-user.service.ts
                - (例)login-user.module.ts

        - providers ※モジュール型アーキテクチャなので見直し中
            - domain-model
                - constant
                - entity
                    - (例)login-user.ts
                - model
                    - (例)login-user.model.ts
                - resource

            - domain-service
                - in-memory
                - utility

        - test
```
