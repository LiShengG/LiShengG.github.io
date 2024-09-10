import os
import re

# 定义一个函数来删除 Markdown 文件中的 Front Matter
def remove_front_matter(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # 使用正则表达式匹配 Front Matter 并将其删除
    front_matter_pattern = re.compile(r'^---[\s\S]+?---\s*', re.M)
    new_content = re.sub(front_matter_pattern, '', content, count=1)

    # 将修改后的内容写回文件
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(new_content)

    print(f"Processed file: {file_path}")

# 定义递归处理目录的函数
def process_directory(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(".md"):  # 只处理 .md 文件
                file_path = os.path.join(root, file)
                remove_front_matter(file_path)

# 指定要处理的目录
directory = './docs/01.笔记'  # 这里填写你的 Markdown 文件所在的根目录
# directory = './docs/01.笔记'  # 这里填写你的 Markdown 文件所在的根目录
# directory = './docs/01.笔记'  # 这里填写你的 Markdown 文件所在的根目录
# 
print("----")
process_directory(directory)
