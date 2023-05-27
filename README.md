## Node.js(typescript, React, Express.js)の自習用リポジトリ
Node.jsで、typescript, React, Express.jsの  
Webアプリケーションを作成するための自習用リポジトリです。  

## アーキテクチャ検討中
Excelでまとめる

nodejs-project
  - front-end
    - pages
    - front-end-model
    - front-logic
    - utility
    - test
    - 認証

  - back-end
    - api
      - api
      - back-end-model
      - 認証

  - infrastructure
    - in-memory-impl
    - repository-impl

  - application-service ※トランザクション単位でもある
    - use-case
    - use-case-impl

  - domain-service
    - service
    - service-impl
    - in-memory
    - repository
    - utility

  - domain-model
    - constant
    - entity
    - dto ※dtoを使用しない設計にするかも
    - model
    - resource

  - test
    - api/api
    - application-service/service
    - domain-service/domain-service
    - domain-service/in-memory
    - domain-service/repository

