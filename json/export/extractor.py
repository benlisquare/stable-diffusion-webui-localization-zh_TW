import json
import os

# 設定來源檔案路徑
source_dir = './json/export/'
source_files = os.listdir(source_dir)
source_files.remove('StableDiffusion.json')
source_files.remove('extractor.py')
print('請選擇要處理的來源檔案：')
for i, file in enumerate(source_files):
    print(f'{i+1}. {file}')
selected_file_index = int(input()) - 1
source_file_path = source_dir + source_files[selected_file_index]
print(source_file_path)
# 設定目標檔案路徑
target_file_path = './json/export/StableDiffusion.json'

# 讀取來源檔案和目標檔案
with open(source_file_path, 'r', encoding='utf-8') as f:
    source_data = json.load(f)
with open(target_file_path, 'r', encoding='utf-8') as f:
    target_data = json.load(f)

# 刪除相同key的項目
for key in list(source_data.keys()):
    if key in target_data:
        del source_data[key]

# 如果现有数据中存在一个在源数据中不存在的键，它将被添加到源数据中
output_file_path = './json/source/extensions/' + os.path.basename(source_file_path)
if os.path.exists(output_file_path):
    with open(output_file_path, 'r', encoding='utf-8') as f:
        existing_data = json.load(f)
    for key, value in existing_data.items():
        if key not in source_data:
            source_data[key] = value

# 將處理後的內容寫入完成檔案
with open(output_file_path, 'w', encoding='utf-8') as f:
    json.dump(source_data, f, ensure_ascii=False, indent=4, sort_keys=True)

print(f'處理完成，結果已儲存至 {output_file_path}')
