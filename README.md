## Node.js(React × Rest.js with TypeScript)の自習用リポジトリの自習用リポジトリ

Node.js で、React × Rest.js プロジェクトの Web アプリケーションを作成するための自習用リポジトリです。
TypeScript で書いています。TypeORM も使用できます。

ルートプロジェクト下のサブプロジェクトは cli をインストールしてから、コマンドプロンプトで下記を実行し、作成しています。

フロントエンドプロジェクト: create-react-app front-end --template typescript  
バックエンドプロジェクト : nest new back-end

## スクリーンショット

React の SPA で画面遷移するサンプルです。

![react](https://github.com/mk-github-1/nodejs-project/assets/32920703/35aa8687-a4f5-4e45-bf5f-aed2e9cb170e)

## アーキテクチャ検討中

アーキテクチャのイメージ。Excel でまとめる

```
nodejs-project
    - front-end
        - components
            - Shared (アプリ全体で使用するもの)
　　            - LoginPartial.tsx
            - utils
        - containers (?)

        - pages
            - (例)LoginUser
                - LoginUser.tsx (画面)
                - loginUserLogic.ts (ロジック)
        - test

    - back-end
        - modules ※ここはモジュール単位でフォルダを作成します。
            - (例)login-user
                - dto
                    - login-user.dto.ts
                - login-user.controller.ts
                - login-user.service.ts
                - login-user.module.ts
                - login-user.repository.ts ※RepositoryはTypeORMの基本のものを使用し、module単位でまとめる？？ 追加メソッドをどうするか検討必要

        - providers ※Repositoryもmodule単位にするので、providersは適切でない
            - domain-model
                - constant (定数)
                    - Constant.ts
                - entity (DBのEntity)
                    - (例)login-user.ts
                - model (プログラムで使用するModel)
                    - (例)login-user.model.ts
                - resource (言語リソース)

        - test
```
