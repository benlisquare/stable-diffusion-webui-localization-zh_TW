# stable-diffusion-webui-localization-zh_TW
Traditional Chinese translation extension for [Stable Diffusion web UI](https://github.com/AUTOMATIC1111/stable-diffusion-webui) by AUTOMATIC1111.

[![zh-TW translation](https://img.shields.io/badge/dynamic/json?color=blue&label=zh-TW&style=flat&logo=crowdin&query=%24.progress.0.data.translationProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13011757-570269.json)
![zh-TW proofreading](https://img.shields.io/badge/dynamic/json?color=green&label=zh-TW&style=flat&logo=crowdin&query=%24.progress.0.data.approvalProgress&url=https%3A%2F%2Fbadges.awesome-crowdin.com%2Fstats-13011757-570269.json)](https://crowdin.com/project/stable-diffsion-web-ui-localization-zh_TW)
![zh-TW proofreading](https://badges.awesome-crowdin.com/translation-13011757-570269.png)
## 正體中文
正體中文翻譯擴充功能，應用於AUTOMATIC1111的 [Stable Diffusion使用者介面](https://github.com/AUTOMATIC1111/stable-diffusion-webui)。

![image](https://user-images.githubusercontent.com/116663807/204528719-4f4e9418-b1d7-4c4f-ae18-e7f86d88339a.png)

## 安裝說明

總共有3種方法可以安裝這個擴充功能：

### 通過官方擴充列表

1. 點擊 `Extensions` 頁籤，然後點擊下面的 `Available` 頁籤
2. 取消 `localization` 的核取方塊，然後點擊橙色的 `Load from` 按鈕

![image](https://user-images.githubusercontent.com/116663807/204526214-420e117b-4590-4f54-b553-ee36fdc2238c.png)

3. 在 `zh_TW Localization` 這一項點擊 `Install` 按鈕

![image](https://user-images.githubusercontent.com/116663807/204526605-33a3c5ba-2786-476d-92ba-3682b3851b67.png)

### 通過GitHub倉庫網址

1. 點擊 `Extensions` 頁籤，然後點擊下面的 `Install from URL` 頁籤
2. 複製以下的網址，然後貼進 `URL for extension's git repository` 欄：

```
https://github.com/benlisquare/stable-diffusion-webui-localization-zh_TW
```

3. 點擊橙色的 `Install` 按鈕：

![image](https://user-images.githubusercontent.com/116663807/204526841-45f4c104-9958-48b0-81d7-6e1046e463c2.png)

### 下载ZIP壓縮檔案，手動安裝

1. [下載本GitHub倉庫](https://codeload.github.com/benlisquare/stable-diffusion-webui-localization-zh_TW/zip/refs/heads/main)為 ZIP 壓縮檔案

![image](https://user-images.githubusercontent.com/116663807/204527142-94e3225b-40fe-4ee6-b136-92a24fe8fc16.png)

2. 解壓後把資料夾放在 `stable-diffusion-webui` 根目錄裏面的 `extensions` 資料夾中：

![image](https://user-images.githubusercontent.com/116663807/204527428-174c17ed-716a-428e-b4f1-3ef3c11d5a3c.png)

### 更新

為了確保漢化語言包支持Stable Diffusion web UI的新功能，請記住定期更新此擴充。

1. 點擊 `Extensions`／`擴充功能` 頁籤，然後點擊下面的 `Installed`／`已安裝` 頁籤
2. 點擊 `Check for updates`／`檢查更新` 按鈕：

![image](https://user-images.githubusercontent.com/116663807/204525694-65bc1077-adf4-4a79-a902-50a0a12c4215.png)

![image](https://user-images.githubusercontent.com/116663807/204548204-4b0e7715-ecd2-4627-b574-a69d1b8bae7f.png)

3. 如果存在新版本的語言包，自動下載完成之後點擊 `Apply and restart UI`／`應用並重新啟動使用者介面` 橙色按鈕

## 使用說明

1. 在 `Settings` 頁籤中，把 `Localization (requires restart)` 的下拉式選單選成 `zh_TW`：

![image](https://user-images.githubusercontent.com/116663807/204527689-154521c0-de5e-493a-987e-45ef9b57ab1e.png)

2. 點擊頁面頂部的 `Apply settings` 橙色按鈕，以保存設定：

![image](https://user-images.githubusercontent.com/116663807/204528104-e81e55a8-f1de-427a-86e1-6bfb59367095.png)

3. 點擊頁面底部的 `Restart Gradio and Refresh components` 橙色按鈕，以重启使用者介面：

![image](https://user-images.githubusercontent.com/116663807/204528137-ae0c4d95-2b86-46e4-a646-1753baae9592.png)

## 參考
### 翻譯內容基底參考
[stable-diffusion-webui-old-localizations](https://github.com/AUTOMATIC1111/stable-diffusion-webui-old-localizations)
[stable-diffusion-webui-localization-zh_CN](https://github.com/dtlnor/stable-diffusion-webui-localization-zh_CN)  

### 本地化詞彙參考
[中國、台灣計算機術語對照表](https://zh.wikibooks.org/zh-tw/%E5%A4%A7%E9%99%86%E5%8F%B0%E6%B9%BE%E8%AE%A1%E7%AE%97%E6%9C%BA%E6%9C%AF%E8%AF%AD%E5%AF%B9%E7%85%A7%E8%A1%A8)

以此作為基底進行本地化
### 關於拆分擴充功能
因翻譯時依照StableDiffusion產出的localization.json將所有文本混和在一起，因此會發現有類似文本但卻不知道來源而不好進行翻譯。
以下是如何進行擴充功能拆分的步驟：
1. 安裝一個乾淨的StableDiffusion。
2. 透過「設定/動作/下載本地化模板」來生成翻譯模板。
3. 將生成的翻譯模板重新命名為"StableDiffusion.json"並移動至"/json/export/"。
4. 透過WebUI安裝要拆分的擴充功能，安裝完成重複步驟 2 來生成翻譯模板。
5. 將生成的翻譯模板重新命名"套件名稱.json"（依大駝峰式命名法）並移動至"/json/export/"。
6. 於終端執行"/json/export/extractor.py"，差集後的檔案儲存於"/json/source/extensions/"。
7. 額外對差集後的檔案進行人工修正，例如非必要翻譯之符號、下拉式選單的檔案名稱以及擴充功能git網址等，此步驟請自行斟酌處理。
**PS.多次進行擴充功能拆分作業，請將StableDiffusion安裝目錄下"\ebui\extensions\"的擴充功能資料夾刪除後，關閉執行終端讓程式完整重起。（避免複數擴充功能文本重複出線）**
### 翻譯工作流
使用[Crowdin](https://crowdin.com/project/stable-diffsion-web-ui-localization-zh_TW)進行翻譯，完成後同步至本地並進行合併作業。
以下是如何進行翻譯檔合併的步驟：
1. 將"/json/Merger.py"在終端機進行執行（需安裝python）。
2. 合併完成之檔案儲存於"/localizations/zh_TW.json"。
3. 查看"/json/merge_report.txt"是否有異常的重複問題（如果有大量重複內，需查看擴充功能拆分時是否有錯誤）。