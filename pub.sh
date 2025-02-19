#!/bin/bash

# 保存当前目录
CURRENT_DIR=$(pwd)

# 进入 simple-mind-map 目录并执行 types
echo "正在生成类型文件..."
cd simple-mind-map
npm run types

# 返回原目录并进入 web 目录执行 buildLibrary
echo "正在构建库文件..."
cd "$CURRENT_DIR"
cd web
npm run buildLibrary

# 进入 simple-mind-map 目录执行登录和发布
echo "准备发布..."
cd "$CURRENT_DIR"
cd simple-mind-map

# 更新 package.json 中的版本号（patch 版本号加1）
npm version patch

# 登录并发布
npm login --registry=https://ued.zuoyebang.cc/npm/ --username=zhangmingzhao
npm publish --registry=https://ued.zuoyebang.cc/npm/

# 返回原始目录
cd "$CURRENT_DIR"