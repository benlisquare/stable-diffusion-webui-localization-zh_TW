import json

# 讀取舊檔案以及新檔案
with open('./diff/old.json', 'r', encoding='utf-8') as f:
    old_data = json.load(f)
with open('./diff/new.json', 'r', encoding='utf-8') as f:
    new_data = json.load(f)

# 建立空字典來儲存兩個檔案共同擁有的項目
both_data = {}

# 尋找遺失項目
missing_data = {}
for key in old_data:
    if key not in new_data:
        missing_data[key] = old_data[key]

# 尋找共同項目以及其數值
for key in old_data:
    if key in new_data:
        if old_data[key] == new_data[key]:
            both_data[key] = old_data[key]
        else:
            both_data[key] = {"old_value": old_data[key], "new_value": new_data[key]}

# 儲存遺失項目到檔案
with open('./diff/missing.json', 'w', encoding='utf-8') as f:
    json.dump(missing_data, f, ensure_ascii=False, indent=4)

# 儲存共同項目到檔案
with open('./diff/both.json', 'w', encoding='utf-8') as f:
    json.dump(both_data, f, ensure_ascii=False, indent=4)
