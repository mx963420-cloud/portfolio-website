#!/bin/bash

PROJECT_DIR="$(dirname "$0")"
cd "$PROJECT_DIR"

echo "🚀 启动 React 项目..."
npm run dev &
VITE_PID=$!

sleep 4

echo "🌐 启动 Cloudflare Tunnel..."
echo "请稍候，获取公网链接..."
echo ""

~/.local/bin/cloudflared tunnel --url http://localhost:5173 2>&1 | tee /tmp/tunnel.log &
TUNNEL_PID=$!

sleep 5

# 从日志中查找链接
TUNNEL_URL=$(grep -o 'https://[a-z0-9-]*\.trycloudflare\.com' /tmp/tunnel.log | head -1)

if [ -n "$TUNNEL_URL" ]; then
  echo ""
  echo "✅ 成功！"
  echo "🔗 $TUNNEL_URL"
  echo ""
  echo "$TUNNEL_URL" | pbcopy
  echo "✓ 链接已复制到剪贴板"
  echo ""
  echo "按 Ctrl+C 停止"
fi

wait
