# stable-diffusion-webui-localization-zh_TW

![translation progress badge](https://img.shields.io/badge/dynamic/json?color=green&label=正體中文&style=flat&logo=crowdin&query=%24.progress.0.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13011757-570269.json)

正體中文本地化擴充功能，應用於 AUTOMATIC1111 的 [Stable Diffusion web UI](https://github.com/AUTOMATIC1111/stable-diffusion-webui)。

> 推薦搭配 [Bilingual Localization（雙語翻譯對照）](https://github.com/journey-ad/sd-webui-bilingual-localization) 一起使用。

![image](https://user-images.githubusercontent.com/5777085/227784005-1448d6c3-0183-49b1-abd4-59ed442deb66.png)

# 安裝說明

1. 在 webui 中點選 `Extensions` 頁籤，然後點選下面的 `Available` 頁籤
2. 取消 `localization` 的核取方塊，然後點選橙色的 `Load from` 按鈕

![image](https://user-images.githubusercontent.com/5777085/227784125-4dd583f4-b541-4eac-8e31-1588ecedecdb.png)

3. 找到 `stable-diffusion-webui-localization-zh_TW` 點選 `Install` 按鈕
4. 等待 `Installing` 按鈕消失，即代表安裝完成。

![image](https://user-images.githubusercontent.com/5777085/227784152-08e61081-851f-4dca-aa30-8f37d39ad7ae.png)

4. 點選 `Installed` 頁籤，再點選 `Apply and restart UI` 套用擴充功能，使用者介面會重新啟動。

![image](https://user-images.githubusercontent.com/5777085/227784328-fee7ec95-ac71-48ba-9bf4-d94b2dffa741.png)

# 使用說明

1. 點選 `Settings` 頁籤，然後點選 `User interface` 選單
2. 將最底下 `Localization (requires restart)` 的下拉式選單更改為 `zh_TW`
3. 點選頁面頂部的 `Apply settings` 按鈕，然後點選 `Reload UI` 按鈕，等待使用者介面重新啟動

![image](https://user-images.githubusercontent.com/5777085/227785247-ad901985-f70e-4cb4-84cd-81a00d365a6f.png)

# 安裝更新

依照以下步驟更新正體中文本地化語言包，推薦不定期檢查更新。

1. 點選 `擴充功能` 頁籤，然後點選 `已安裝` 頁籤
2. 點選 `檢查更新` 按鈕，等待檢查更新跑完
3. 如果 `stable-diffusion-webui-localization-zh_TW` 顯示 `有可用更新`，即可點選 `應用並重新啟動使用者介面` 以更新擴充功能。

![image](https://user-images.githubusercontent.com/5777085/227784356-4ce1210d-b4b8-46b7-a47f-3f7a418e1141.png)

# 參考資料

## 翻譯內容基底參考

1. [stable-diffusion-webui-old-localizations](https://github.com/AUTOMATIC1111/stable-diffusion-webui-old-localizations)
2. [stable-diffusion-webui-localization-zh_CN](https://github.com/dtlnor/stable-diffusion-webui-localization-zh_CN)

## 本地化詞彙參考

以 [中國、台灣計算機術語對照表](https://zh.wikibooks.org/zh-tw/%E5%A4%A7%E9%99%86%E5%8F%B0%E6%B9%BE%E8%AE%A1%E7%AE%97%E6%9C%BA%E6%9C%AF%E8%AF%AD%E5%AF%B9%E7%85%A7%E8%A1%A8) 此作為基底進行本地化（已加入 Crowdin 術語表）

# 協助翻譯

**stable diffusion webui 正體中文本地化**非常需要廣大社群的幫忙，才能盡可能的保持完整與最新的翻譯內容。
目前翻譯全部在 Crowdin 上進行，這有許多好處，例如翻譯記憶、術語表提示、螢幕截圖對照、重複自動翻譯以及翻譯批准等功能，請依下列步驟加入 Crowdin 專案。

## 成為翻譯者

1. 註冊 [Crowdin](https://crowdin.com/project/stable-diffsion-web-ui-localization-zh_TW) 帳號。
2. 點此連結加入專案並成為翻譯者：[加入 Crowdin](https://crowdin.com/project/stable-diffsion-web-ui-localization-zh_TW/invite?h=91acfca2c381f37b8562935bc9e40d501625831)。
3. 挑選想翻譯的檔案進行翻譯。

## 新增 / 修改原文

如果需要新增或修改原文，請至 [stable-diffusion-webui-localization-source](https://github.com/harukaxxxx/stable-diffusion-webui-localization-source) 參考相關說明操作。

## 譯文更新

此 repository 每 24 小時從 [harukaxxxx/stable-diffusion-webui-localization-zh_TW](https://github.com/harukaxxxx/stable-diffusion-webui-localization-zh_TW) 獲取最新的翻譯檔案。
