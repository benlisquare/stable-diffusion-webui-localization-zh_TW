# 協助翻譯
可以透過下列兩種方式協助翻譯，不論哪一種方式都對此專案有非常大的幫助。

## 成為翻譯者
如果你想成為翻譯者，請參考下列兩種方式加入。
### 使用 Crowdin 
Crowdin 有許多好處，例如翻譯記憶、術語表提示、螢幕截圖對照、重複自動翻譯以及翻譯批准等功能，如果你想透過 Crowdin 協助翻譯，請依下列步驟加入 Crowdin 專案。
1. 註冊 [Crowdin](https://crowdin.com/project/stable-diffsion-web-ui-localization-zh_TW) 帳號。
2. 點此連結加入專案並成為翻譯者：[加入 Crowdin](https://crowdin.com/project/stable-diffsion-web-ui-localization-zh_TW/invite?h=91acfca2c381f37b8562935bc9e40d501625831)。
3. 挑選想翻譯的檔案進行翻譯。
### 直接修改 json 檔案
不想使用 Crowdin 進行翻譯的話，也可以下載 `'/json/zh_TW/'` 內的 json 檔案進行翻譯，完成翻譯後將翻譯完成的 json 內容張貼到 Discussions，後續管理者再上傳至 Crowdin 更新翻譯。

> **⚠️直接 PR 是不能保留翻譯的，需透過 Crowdin 管理與更新才行。**

## 新增 / 修改原文
如果需要新增原文時，請參考下列說明。
### 既有文本
如果要修改 SD 本體或是擴充功能的原文，請 fork 一份 repo，並修改 `'/json/source/'`內的 json 檔案，修改完畢直接 PR。
### 新增文本
如果要新增原文時，請依照下列步驟拆分擴充功能。
1. 安裝一個乾淨的StableDiffusion。
2. 透過 `設定 > 動作 > 下載本地化模板` 來生成翻譯模板。
3. 將生成的翻譯模板重新命名為 `StableDiffusion.json` 並移動至 `json/export/`。
4. 安裝要拆分的擴充功能，安裝完成重複步驟 2 來生成有擴充功能的翻譯模板。
5. 將生成的翻譯模板重新命名為 `套件名稱.json` （依擴充功能列表命名）並移動至 `json/export/`。
6. 於終端執行 `'json/export/extractor.py'` ，差集後的檔案將儲存於 `'json/source/extensions/'`。
7. 對 `'json/source/extensions/'` 內新生成的 json 檔案進行人工修正，例如非必要翻譯之符號、下拉式選單的檔案名稱以及擴充功能的 git 網址等（斟酌修正）。
8. 完成後 PR 等待批准。

> **⚠️多次進行擴充功能拆分作業，請將 StableDiffusion 安裝目錄下 `'\webui\extensions\'` 的 `extensions` 資料夾刪除後，關閉執行終端讓程式完整重起（避免複數擴充功能文本重複出現）。**

> **⚠️透過上述方式拆分之擴充功能翻譯樣板，偶爾會發生原文缺漏的錯誤（如 textarea 的 placeholder 或是 tooltips 等），必要時需手動修改**
## 譯文合併作業
不論是用哪一種方式翻譯，最後都需要管理者進行合併作業步驟。
### 手動合併
1. 從 Crowdin 將翻譯內容同步到 GitHub（依設定最快能每小時自動更新）。
2. 批准 Crowdin 的 PR，將翻譯內容從 `I10n_main_` 合併回 `main`。
3. 將 `'json/Merger.py'` 在終端機進行合併作業。
4. 合併完成之檔案會自動儲存於 `localizations/zh_TW.json`。
5. 查看 `'json/merge_report.txt'` 是否有異常的重複問題（非必要）。
6. commit 並 push 到 HitHub。

### 自動合併
1. 點選 Github 的 Actions 標籤。
2. 點選 Actions 下的 Merge Translates。
3. 點選 Run workflow 後，確定 Branch 為 main，再按下 Run workflow 按鈕。
4. 等待 workflow 運行。 