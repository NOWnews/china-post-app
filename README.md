# ionic-app

版本資訊

```
- ionic 3.10.3
- typescript 2.3.4
- ionic-angular 3.6.1
```

需要套件

```
npm install -g cordova ionic
```

啟動

```
ionic serve
```

Build Android
```
ionic cordova build android --prod
```

Build IOS
```
ionic cordova build ios --prod
```

目前檔案架構 2017-09-21

```
china-post-app/
|
|-- resources/                         * 放置 IOS, Android Icon
|
|-- src/
|    |-- app/
|    |    ├── app.component.ts
|    |    └── app.module.ts
|    |    └── app.template.html
|    |    └── main.ts
|    |
|    |-- assets/
|    |    ├── data/
|    |    |    └── data.json
|    |    |
|    |    ├── fonts/
|    |    |     ├── ionicons.eot
|    |    |     └── ionicons.svg
|    |    |     └── ionicons.ttf
|    |    |     └── ionicons.woff
|    |    |     └── ionicons.woff2
|    |    |
|    |    ├── img/
|    |
|    |-- pages/                               * 所有的頁面都在這裡
│    │    ├── life/
│    │    │    ├── news.html                  * 版型
│    │    │    └── news.ts                    * 程式
│    │    │    └── news.scss                  * 樣式
│    │    │
│    │    ├── news/
│    │    │    ├── news.html                  * 版型
│    │    │    └── news.ts                    * 程式
│    │    │    └── news.scss                  * 樣式
│    │    │
│    │    │── ont-detail/
│    │    │    ├── ont-detail.html            * 版型
│    │    │    └── ont-detail.ts              * 程式
│    │    │
│    │    │── taiwan/
│    │    │    ├── news.html                  * 版型
│    │    │    └── news.ts                    * 程式
│    │    │    └── news.scss                  * 樣式
│    │    │
│    │    │── world/
│    │    │    ├── news.html                  * 版型
│    │    │    └── news.ts                    * 程式
│    │    │    └── news.scss                  * 樣式
│    │    │
│    │    │── tabs-page/                      * Tabs page 是最下面的那條
│    │         ├── tabs-page.html             * 版型
│    │         └── tabs-page.ts               * 程式
|    |
│    ├── providers/                           * 包含所有的資料取得
│    │     ├── life-data.ts
│    │     ├── news-data.ts
│    │     ├── taiwan-data.ts
│    │     ├── world-data.ts
│    │     └── one-data.ts
│    ├── theme/                               *  App 版型的樣式
|    |     ├── variables.scss                 * App Sass 變數
|    |
|    |-- index.html                           * 起始頁
|
|
├── .editorconfig                             * Defines coding styles between editors
├── .gitignore
├── README.md
├── config.xml                                * Cordova file
├── ionic.config.json                         * Ionic file
├── package.json
├── tsconfig.json                             * Defines the root files and the compiler options
├── tslint.json                               * Defines the rules for the TypeScript linter
```