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
                - (例)loginUser.controller.ts
                - (例)loginUser.service.ts
                - (例)loginUser.module.ts

        - providers
            - domain-model
                - constant
                - dto
                    - (例)loginUser.dto.ts
                - entity
                    - (例)loginUser.ts
                - model
                    - (例)loginUser.model.ts
                - resource

            - domain-service
                - domain-service
                    - (例)loginUser.logic.ts
                - domain-service-impl
                    - (例)loginUser.logic.impl.ts
                - in-memory
                - repository
                    - (例)loginUser.repository.ts
                - utility

            - infrastructure
                - in-memory-impl
                - repository-impl
                    - (例)loginUser.repository.impl.ts

        - test
```
