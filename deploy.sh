#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# https://github.com/LiShengG/LiShengG.github.io
# git@github.com:LiShengG/LiShengG.github.io.git
git push -f git@github.com:LiShengG/LiShengG.github.io.git master
