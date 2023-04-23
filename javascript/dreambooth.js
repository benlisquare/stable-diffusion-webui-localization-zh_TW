//更新翻譯時，複製 `translations` 分支的 '/template/zh_TW/extensions/tooltips/sd_dreambooth_extension.json' 內容至 'zh_TW_db_titles' 變數。
const zh_TW_db_titles = {
  "API Key": {
    key: "API 金鑰",
    tooltip:
      "用於保護 Web API。點選右側的重新整理按鈕以（重新）產生您的金鑰，點選垃圾桶圖示將其刪除。",
  },
  "AdamW Weight Decay": {
    key: "AdamW 權重衰減",
    tooltip:
      "AdamW 優化器的權重衰減。數值越接近 0，越能與訓練資料集匹配，數值越接近 1，越能泛化且與訓練資料集偏離。預設值為 1e-2，建議使用低於 0.1 的數值。",
  },
  "Amount of time to pause between Epochs (s)": {
    key: "每訓練週期之間暫停的時間（秒）",
    tooltip:
      "當「訓練 N 個 Epochs 後暫停」設置大於 0 時，表示訓練將會在指定秒數內暫停。",
  },
  "Apply Horizontal Flip": {
    key: "套用水平翻轉",
    tooltip: "隨機決定水平翻轉圖像。",
  },
  "Batch Size": {
    key: "每批數量",
    tooltip: "每個訓練步驟一次要處理多少圖像？",
  },
  "Cache Latents": {
    key: "快取潛在變數",
    tooltip:
      "選中此框時，將快取潛在變數。快取潛在變數將使用更多 VRAM，但會提高訓練速度。",
  },
  Cancel: {
    key: "取消",
    tooltip: "取消訓練。",
  },
  "Class Batch Size": {
    key: "類別每批數量",
    tooltip: "一次要產生多少分類 / 正則化圖像。",
  },
  "Class Images Per Instance Image": {
    key: "每個實例圖像的分類圖片數量",
    tooltip: "每個實例圖像要使用多少分類圖像。",
  },
  "Class Prompt": {
    key: "分類提示詞",
    tooltip: "生成分類/正則化圖像的提示。有關更多信息，請參閱自述文件。",
  },
  "Class Token": {
    key: "分類名稱",
    tooltip:
      "當使用 [filewords] 時，這是要在現有提示中使用/查找的類標識符。應該是一個單詞。",
  },
  "Classification CFG Scale": {
    key: "分類CFG比例",
    tooltip: "用於分類器/正則化圖像的無分類器指導量表。",
  },
  "Classification Dataset Directory": {
    key: "分類數據集目錄",
    tooltip: "包含分類/正則化圖像的目錄。",
  },
  "Classification Image Negative Prompt": {
    key: "分類圖像反向提示詞",
    tooltip: "生成類圖像時使用的否定提示。可留空。",
  },
  "Classification Steps": {
    key: "分類步驟",
    tooltip: "生成分類器/正則化圖像時使用的步驟數。",
  },
  "Clip Skip": {
    key: "Clip 跳過層",
    tooltip: "使用文字編碼器後面第 n 層的輸出 (n>=1)",
  },
  "Concepts List": {
    key: "概念列表",
    tooltip: "概念 JSON 文件或 JSON 字符串的路徑。",
  },
  "Constant/Linear Starting Factor": {
    key: "常數/線性起始因子",
    tooltip:
      "將初始學習率設定為 main_lr * 此值。如果您的目標 LR 為 .000006 並將其設定為 .5，則排程器將從 .000003 開始並增加直到達到 .000006。",
  },
  "Create From Hub": {
    key: "從 huggingface 建立",
    tooltip:
      "從Huggingface.co導入模型，而不是使用本地檢查點。Hub模型必須包含擴散權重。",
  },
  "Create Model": {
    key: "建立模型",
    tooltip: "創建一個新模型。",
  },
  Create: {
    key: "建立",
    tooltip: "已經創建了模型。",
  },
  "Custom Model Name": {
    key: "自定義模型名稱",
    tooltip: "保存 .ckpt 和 .pt 文件時使用的自定義名稱。子目錄也將以此命名。",
  },
  "Dataset Directory": {
    key: "實例圖像數據目錄",
    tooltip: "包含訓練圖像的目錄。",
  },
  "Debug Buckets": {
    key: "除錯",
    tooltip: "檢查實例和類圖像並報告沒有相應類圖像的任何實例圖像。",
  },
  "Discord Webhook": {
    key: "Discord 網絡鉤手",
    tooltip: "生成後將訓練樣本發送到 Discord 頻道。",
  },
  "Existing Prompt Contents": {
    key: "現有提示詞內容",
    tooltip: "如果使用 [filewords]，這將告訴字符串生成器現有提示的格式。",
  },
  "Extract EMA Weights": {
    key: "提取 EMA 權重",
    tooltip:
      "如果 EMA 權重保存在模型中，這些將被提取而不是完整的 Unet。可能不需要訓練或微調。",
  },
  "Freeze CLIP Normalization Layers": {
    key: "凍結 CLIP 正規化層",
    tooltip:
      "在訓練期間保持 CLIP 的規範化層凍結。進階用法，可能會提高模型效能和可編輯性。",
  },
  "Generate Ckpt": {
    key: "產生 Ckpt",
    tooltip: "在當前訓練級別產生一個模型權重存檔點。",
  },
  "Generate Class Images": {
    key: "產生分類圖片",
    tooltip: "在沒有訓練的情況下使用訓練設定建立分類圖像。",
  },
  "Generate Classification Images Using txt2img": {
    key: "使用文生圖產生分類圖",
    tooltip: "使用源模型權重存檔點和文生圖產生類圖像。",
  },
  "Generate Classification Images to match Instance Resolutions": {
    key: "生成與實例解析度相匹配的分類圖像",
    tooltip: "而不是產生正方形類圖像，它們將以與類圖像相同的分辨率產生。",
  },
  "Generate Graph": {
    key: "產生圖形",
    tooltip: "從訓練日誌中產生圖表，顯示訓練過程中的學習率和平均損失。",
  },
  "Generate Sample Images": {
    key: "產生樣本圖像",
    tooltip: "使用當前保存的模型產生樣本圖像。",
  },
  "Generate Samples": {
    key: "產生樣本",
    tooltip: "在下一個訓練週期後產生樣本。",
  },
  "Generate a .ckpt file when saving during training.": {
    key: "在訓練期間保存時產生 .ckpt 文件。",
    tooltip:
      '啟用後，將在訓練進行時以指定的訓練週期生成模型權重存檔點。這也可以在訓練進行時使用 "保存權重" 按鈕控製手動產生。',
  },
  "Generate a .ckpt file when training completes.": {
    key: "在訓練完成時產生 .ckpt 檔案。",
    tooltip: "啟用後，訓練成功完成後將產生一個模型權重存檔點。",
  },
  "Generate a .ckpt file when training is cancelled.": {
    key: "在訓練取消時產生 .ckpt 檔案。",
    tooltip: "啟用後，當用戶取消訓練時將產生一個模型權重存檔點。",
  },
  "Generate lora weights Generate lora weights for additional networks.": {
    key: "產生附加網路的 LoRA。（警告：如有使用 LoRA 擴充功能，此選項無效）",
    tooltip:
      "啟用後，將在 LoRA 目錄產生相容的 lora.safetensors 模型。與 LoRA 擴充不相容。",
  },
  "Generate lora weights when saving during training.": {
    key: "在訓練期間儲存時產生 LoRA。",
    tooltip:
      "啟用後，將在訓練期間在每個指定的訓練週期產生 lora .pt 文件。這也會影響手動點擊“保存權重”按鈕時是否產生 .pt 檔案。",
  },
  "Generate lora weights when training completes.": {
    key: "在訓練完成時產生 LoRA。",
    tooltip: "啟用後，訓練完成後將產生 lora .pt 文件。",
  },
  "Generate lora weights when training is canceled.": {
    key: "在訓練取消時產生 LoRA。",
    tooltip: "啟用後，當用戶取消訓練時，將產生 lora .pt 文件。",
  },
  "Gradient Accumulation Steps": {
    key: "梯度累積疊代步數",
    tooltip:
      "在進行反向傳播/更新之前累積的更新步驟數前。您應該嘗試將其設定為與您的批次大小相同。",
  },
  "Gradient Checkpointing": {
    key: "梯度進度記錄 - 以時間換顯存",
    tooltip:
      "這是一種通過清除某些層的激活並在向後傳遞期間重新計算它們來減少內存使用量的技術。實際上，這會以額外的計算時間來換取減少的內存使用量。",
  },
  "Graph Smoothing Steps": {
    key: "圖形平滑步驟",
    tooltip:
      "要平滑圖形數據的時間步長。較低的值表示圖形會更加崎嶇，但提供更多的信息，較高的值會使圖形變得更美觀，但略微不太準確。",
  },
  "Half Model": {
    key: "半精度模型",
    tooltip:
      "啟用此功能以產生具有 fp16 精度的模型。結果是更小的檢查點，品質幾乎沒有損失。",
  },
  "HuggingFace Token": {
    key: "HuggingFace 標記",
    tooltip: "您的Huggingface憑證，用於複製文件。",
  },
  "Instance Prompt": {
    key: "實例提示詞",
    tooltip:
      "描述主題的提示。使用[Filewords]解析圖像文件名/.txt，以將現有提示插入此處。",
  },
  "Instance Token": {
    key: "實例名稱",
    tooltip:
      "在使用 [filewords] 時，這是獨特於您的主題的實例識別符。應為單個單詞。",
  },
  "Learning Rate Scheduler": {
    key: "學習率調度器",
    tooltip:
      "要使用的學習率調度器。除了'constant'外，所有調度器都使用提供的熱身時間。",
  },
  "Learning Rate Warmup Steps": {
    key: "學習率預熱步數",
    tooltip:
      "lr調度器中用於熱身的步數。LR將從0開始並在指定的步數內增加到此值。",
  },
  "Learning Rate": {
    key: "學習率",
    tooltip: "模型學習的速率。默認值為2e-6。",
  },
  "Load Settings": {
    key: "載入設定",
    tooltip: "加載模型的上次保存的訓練參數。",
  },
  "Log Memory": {
    key: "記錄記憶體",
    tooltip: "記錄當前GPU內存使用情況。",
  },
  "Lora Model": {
    key: "LoRA 模型",
    tooltip: "繼續微調或產生檢查點時要載入的LoRA模型。",
  },
  "Use Lora Extended": {
    key: "使用 LoRA 擴充功能（Locon）",
    tooltip:
      "使用 ResNet 層來訓練 LoRA 模型。這將始終提高質量和可編輯性，但會導致更大的文件。",
  },
  "Lora UNET Rank": {
    key: "LoRA UNET等級",
    tooltip:
      "LoRA UNET 的等級（預設值為4）。等級越高，品質和可編輯性越好，但檔案大小也越大。等級越低，品質越低，檔案大小越小。不同值下的學習率有不同的工作方式。以高精度 （fp32）保存的 LoRA 會導致較大的 LoRA 檔案。",
  },
  "Lora Text Encoder Rank": {
    key: "LoRA 文字編碼器等級",
    tooltip:
      "LoRA 文本編碼器的等級（預設為 4）。等級越高，品質越好，但文件大小越大。等級越低，牺牲品質，文件大小越小。在不同的等級下，學習率的運作方式也不同。以高精度 (fp32) 保存的 LoRA 將導致更大的 LoRA 文件。",
  },
  "Lora Text Learning Rate": {
    key: "LoRA 文字學習率",
    tooltip: "用於訓練 LoRA 文字編碼器的學習速率。常規學習速率被忽略。",
  },
  "Lora Text Weight": {
    key: "LoRA 文本權重",
    tooltip: "在創建模型時應該將多少 LoRA 權重應用於文字編碼器。",
  },
  "Lora UNET Learning Rate": {
    key: "LoRA UNET 學習率",
    tooltip: "用於訓練LoRA UNet的學習速率。常規學習速率被忽略。",
  },
  "Lora Weight": {
    key: "LoRA 權重",
    tooltip: "在創建檢查點時應該將多少LoRA權重應用於UNet。",
  },
  "Max Resolution": {
    key: "最高解析度",
    tooltip: "輸入圖片的解析度。當使用 bucketing時，這是圖片的最大尺寸。",
  },
  "Max Token Length": {
    key: "最大標記長度",
    tooltip: "要讀取的最大提詞長度。您可能希望將其設定為 75。",
  },
  "Memory Attention": {
    key: "記憶體注意力",
    tooltip:
      "要使用的記憶體注意力機制。'Xformers' 會提供比 flash_attention 更好的效能，但需要另外安裝。",
  },
  "Min Learning Rate": {
    key: "最小學習率",
    tooltip: "學習率會隨時間降至的最小值。",
  },
  "Mixed Precision": {
    key: "混合精度",
    tooltip:
      "使用 FP16 或 BF16（如果可用）可以提高內存效能。當使用 'Xformers' 時必須使用。",
  },
  "Model Path": {
    key: "模型路徑",
    tooltip: "在 huggingface 上的模型 URL。格式應為 '開發者/模型名稱'。",
  },
  Model: {
    key: "模型",
    tooltip: "要訓練的模型。",
  },
  Name: {
    key: "名稱",
    tooltip: "要創建的模型名稱。",
  },
  "Number of Hard Resets": {
    key: "硬重置數量",
    tooltip: "cosine_with_restarts 調度器中 lr 的硬重置次數。",
  },
  "Number of Samples to Generate": {
    key: "產生樣本的數量",
    tooltip: "每個主題要產生的樣本數量。",
  },
  "Offset Noise": {
    key: "噪聲偏移",
    tooltip:
      "此功能允許模型在訓練期間更詳細地學習亮度和對比度。該值控制效果的強度，0 表示停用該功能。",
  },
  "Pad Tokens": {
    key: "填充標記",
    tooltip: "將輸入圖像的 token 長度填充到這個數量。建議這樣做。",
  },
  "Pause After N Epochs": {
    key: "N 階段後暫停",
    tooltip:
      "訓練多少個 epoch 後暫停指定時間。如果您想讓 GPU 休息一下，這很有用。",
  },
  "Performance Wizard (WIP)": {
    key: "效能嚮導（半成品）",
    tooltip: "嘗試根據 VRAM 自動設定訓練參數。仍在開發中。",
  },
  "Polynomial Power": {
    key: "多項式功率",
    tooltip: "多項式調度器的指數因子。",
  },
  "Pretrained VAE Name or Path": {
    key: "預訓練 VAE 名稱或路徑",
    tooltip: "若要使用替代 VAE，可以指定包含 pytorch_model.bin 的目錄路徑。",
  },
  "Preview Prompts": {
    key: "預覽提示",
    tooltip: "產生用於訓練的提示數據的 JSON。",
  },
  "Prior Loss Weight": {
    key: "先前損失權重",
    tooltip: "先前損失權重。",
  },
  "Sample CFG Scale": {
    key: "樣本CFG比例",
    tooltip: "用於預覽圖像的分類器自由指導比例尺。",
  },
  "Sample Image Prompt": {
    key: "樣本圖像提示詞",
    tooltip: "生成預覽圖像時要使用的提示。",
  },
  "Sample Negative Prompt": {
    key: "樣本反向提詞",
    tooltip: "生成預覽圖像時要使用的反向提詞。",
  },
  "Sample Prompt Template File": {
    key: "樣本提示詞範本檔案",
    tooltip:
      "用於樣本提示的txt文件的路徑。使用 [filewords] 或 [name] 在樣本提示中插入分類標記。",
  },
  "Sample Prompt": {
    key: "樣本提詞",
    tooltip: "產生樣本圖像時要使用的提示。",
  },
  "Sample Seed": {
    key: "樣本種子",
    tooltip: "生成樣本時要使用的種子。設定為 -1 以在每次使用時使用隨機種子。",
  },
  "Sample Steps": {
    key: "樣本步數",
    tooltip: "生成分類器/正則化圖像時使用的步驟數。",
  },
  "Sanity Sample Prompt": {
    key: "樣本提示詞",
    tooltip:
      '用於產生 "基準" 圖像的提示，此圖像將與其他樣本一起創建以驗證模型的忠實度。',
  },
  "Sanity Sample Seed": {
    key: "樣本種子",
    tooltip: "生成驗證樣本圖像時要使用的種子。不支援-1。",
  },
  "Save Checkpoint to Subdirectory": {
    key: "保存檢查點到子目錄",
    tooltip: "啟用時，將在所選檢查點文件夾的子目錄中保存檢查點。",
  },
  "Save Model Frequency (Epochs)": {
    key: "儲存模型頻率（訓練週期）",
    tooltip: "每N個訓練週期保存一個檢查點。",
  },
  "Save Model Frequency (Step)": {
    key: "保存模型頻率（訓練週期）",
    tooltip: "每N個訓練週期儲存一個檢查點。必須能夠被批次數整除。",
  },
  "Save Preview(s) Frequency (Epochs)": {
    key: "儲存預覽頻率（訓練週期）",
    tooltip: "每 N 個訓練週期產生一次預覽圖像。",
  },
  "Save Preview(s) Frequency (Step)": {
    key: "保存預覽頻率（訓練週期）",
    tooltip: "每 N 個訓練週期產生預覽圖像。必須能夠被批次數整除。",
  },
  "Save Settings": {
    key: "儲存設定",
    tooltip: "將當前訓練參數保存到模型配置文件中。",
  },
  "Save Weights": {
    key: "儲存權重",
    tooltip:
      "根據保存部分指定的方式，保存權重/檢查點/快照以在訓練期間進行保存。",
  },
  "Save and Test Webhook": {
    key: "儲存並測試 Webhook",
    tooltip: "保存當前輸入的webhook URL並向其發送測試消息。",
  },
  "Save separate diffusers snapshots when saving during training.": {
    key: "在訓練期間保存獨立的模型。",
    tooltip:
      "啟用時，每個指定的訓練週期間隔都會保存擴散權重的階段。這使用更多HDD空間（很多），但允許從訓練中恢復，包括優化狀態。",
  },
  "Save separate diffusers snapshots when training completes.": {
    key: "訓練完成後保存獨立的模型。",
    tooltip:
      "啟用時，在訓練完成時會保存擴散權重的階段。這會使用更多HDD空間，但允許從訓練中恢復，包括優化狀態。",
  },
  "Save separate diffusers snapshots when training is cancelled.": {
    key: "當訓練被取消時保存獨立的模型。",
    tooltip:
      "啟用時，當訓練被取消時，會保存擴散權重的階段。這會使用更多HDD空間，但允許從訓練中恢復，包括優化器狀態。",
  },
  "Save EMA Weights to Generated Models": {
    key: "將 EMA 權重儲存到產生的模型中",
    tooltip:
      "如果模型是使用 EMA weights 提取或訓練的，這些權重將被分別附加到模型上，以供稍後在訓練中使用。",
  },
  "Scale Position": {
    key: "比例位置",
    tooltip:
      "訓練百分比，在此百分比處應實現“最終”學習率。如果在 100 個訓練週期中將其設定為 0.25，則最終 LR 將在第 25 個訓練週期達到。",
  },
  Scheduler: {
    key: "排程器",
    tooltip: "使用的模型排程器。僅適用於 2.0 之前的模型。",
  },
  "Set Gradients to None When Zeroing": {
    key: "將梯度設定為 0 的時候設定為無",
    tooltip:
      "在進行反向傳遞時，梯度將設定為無，而不是建立一個新的空張量。這將稍微提高 VRAM。",
  },
  "Shuffle After Epoch": {
    key: "訓練週期後隨機排序",
    tooltip:
      "啟用後，將在第一個訓練週期後對數據集進行隨機排序。這將啟用文字編碼器訓練和潛在變數快取（更多 VRAM）。",
  },
  "Shuffle Tags": {
    key: "洗牌標籤",
    tooltip:
      '啟用後，提示詞中 "," 後的第一個標記將被隨機排序，有可能優化訓練。',
  },
  "Source Checkpoint": {
    key: "源模型權重存檔點",
    tooltip: "用於訓練的源檢查點。",
  },
  "Step Ratio of Text Encoder Training": {
    key: "文字編碼器訓練步驟比率",
    tooltip:
      "每個圖像（訓練週期）訓練文字編碼器的步數。將 0.5 設定為 50% 的 epoch。",
  },
  "Strict Tokens": {
    key: "嚴格的提詞",
    tooltip:
      "將以以下字符 [,;.!?] 分隔的實例提示解析，並在使用分詞器時防止拆分標記。如果您的提示被很多標記分隔，這將非常有用。",
  },
  "Total Number of Class/Reg Images": {
    key: "分類/正則化圖片的總數",
    tooltip:
      "要使用的分類 / 正則化圖像的總數。如果不存在圖像，將產生圖像。將其設定為 0 以停用先前的保留。",
  },
  "Train Imagic Only": {
    key: "僅意象訓練",
    tooltip:
      "使用 Imagic 進行訓練，而不是使用完整的 Dreambooth，這對於使用單個實例圖像進行訓練很有用。",
  },
  "Train Text Encoder": {
    key: "訓練文字編碼器",
    tooltip: "啟用此功能將提供更好的結果和可編輯性，但使用更多 VRAM。",
  },
  Train: {
    key: "訓練",
    tooltip: "開始訓練。",
  },
  "Training Steps Per Image (Epochs)": {
    key: "每張圖像的訓練步數（訓練週期）",
    tooltip: "這是在每個實例圖像上執行的總訓練步數。",
  },
  "Training Wizard (Object/Style)": {
    key: "訓練嚮導（物件 / 樣式）",
    tooltip:
      "根據示例圖像的數量計算非人類主體的訓練參數並設定學習率。停用先前保留功能。",
  },
  "Training Wizard (Person)": {
    key: "訓練嚮導（人物）",
    tooltip:
      "根據示例圖像的數量計算人類主體的訓練參數並設定學習率。啟用先前保留功能。",
  },
  "Unfreeze Model": {
    key: "解凍模型",
    tooltip: "解凍模型層並允許進行更好的訓練，但更有可能增加 VRAM 的使用。",
  },
  "Use 8bit Adam": {
    key: "使用8bit Adam",
    tooltip: "啟用此功能可節省 VRAM。",
  },
  "Use CPU Only (SLOW)": {
    key: "僅使用 CPU（慢）",
    tooltip: "雖然會極慢，但能夠在小於 8GB 的 GPU 上運行",
  },
  "Use Concepts List": {
    key: "使用概念列表",
    tooltip: "從 JSON 文件或字符串訓練多個概念。",
  },
  "Use EMA": {
    key: "使用 EMA",
    tooltip: "啟用此功能將提供更好的結果和可編輯性，但使用更多 VRAM。",
  },
  "Use EMA Weights for Inference": {
    key: "使用EMA權重進行推論",
    tooltip:
      "啟用此功能將會將 EMA UNET 的權重儲存為「正常」模型的權重並忽略常規 UNET 的權重。",
  },
  "Use Epoch Values for Save Frequency": {
    key: "啟用此功能時，保存頻率是基於訓練週期。當停用時，頻率是基於訓練步驟數的。",
    tooltip:
      "啟用此功能時，保存頻率是基於訓練週期。當停用時，頻率是基於訓練步驟數的。",
  },
  "Use LORA": {
    key: "使用 LoRA",
    tooltip:
      "使用低秩適應進行快速文本到圖像擴散微調。使用較少的 VRAM，保存為 .pt 文件而不是完整的檢查點",
  },
  "Use Lifetime Epochs When Saving": {
    key: "在保存時使用生命週期（Lifetime Epochs）",
    tooltip:
      "當勾選此選項時，將使用生命週期（Lifetime Epochs）來保存預覽圖像和檢查點，而不是使用當前的訓練週期（Current Training Epochs）。",
  },
  "Use Lifetime Steps When Saving": {
    key: "在保存時使用生命週期步數（Lifetime Steps）",
    tooltip:
      "當勾選此選項時，將使用生命週期步數（Lifetime Steps）來保存預覽圖像和檢查點，而不是使用當前的訓練步數（Current Training Steps）。",
  },
}

//處理以符合dreambooth的格式並取代db_titles內容
let new_db_titles = {}
for (const key in zh_TW_db_titles) {
  new_db_titles[zh_TW_db_titles[key].key] = zh_TW_db_titles[key].tooltip
}
db_titles = new_db_titles
