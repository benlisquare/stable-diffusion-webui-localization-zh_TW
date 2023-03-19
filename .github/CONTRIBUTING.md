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

不想使用 Crowdin 進行翻譯的話，也可以下載 `'/template/zh_TW/'` 內的 json 檔案進行翻譯，完成翻譯後將翻譯完成的 json 內容張貼到 Discussions，後續管理者再上傳至 Crowdin 更新翻譯。

> **⚠️ 直接 PR 是不能保留翻譯的，需透過 Crowdin 管理與更新才行。**

## 新增 / 修改原文

如果需要新增或修改原文，請至 [stable-diffusion-webui-localization-source](https://github.com/harukaxxxx/stable-diffusion-webui-localization-source) 參考相關說明。

## 譯文合併

不論是用哪一種方式翻譯，最後都需要進行譯文合併作業。

> Crowdin 完成的翻譯內容每一個小時會自動更新一次，需人工批准 Crowdin 的 PR，將翻譯內容從 `I10n_main_` 合併回 `main`。

### 自動合併

透過 Github Actions 每六個小時自動執行一次合併作業。

### 半自動合併

1. 點選 Github 的 Actions 標籤。
2. 點選 Actions 下的 Merge localization。
3. 點選 Run workflow 後，確定 Branch 為 main，再按下 Run workflow 按鈕。
4. 等待 workflow 運行完成。

### 手動合併

1. clone 此 repo 後，將 `'/template/Merger.py'` 在終端機執行。
2. 合併完成之檔案會自動儲存於 `localizations/zh_TW.json`。
3. 查看 `'/template/merge_report.txt'` 是否有異常的重複問題（非必要）。
4. commit 並 push 到 GitHub。
