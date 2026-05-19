#!/bin/bash

# 进入项目目录
cd "$(dirname "$0")"

# 启动开发服务器
npm run dev &

# 等待服务器启动
sleep 3

# 打开浏览器
open http://localhost:5173

# 保持脚本运行
wait
