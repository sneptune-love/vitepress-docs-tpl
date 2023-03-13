#!/bin/sh

# 本地打包目录
localPath=./dist/

# 服务端IP
serverIp=39.107.158.148
# 用户名
userName=root
# 服务器地址
serverPath=/usr/share/nginx/html/xf-doc/

# 异常处理
function error_exit {
  echo "$1" 1>&2
  exit 1
}

# echo '当前node版本'

# node --version

# source ~/.nvm/nvm.sh

# echo '切换node版本'

# nvm use

# # 执行构建打包输出到指定目录

# echo "--- 开始执行打包构建 --- "

# npm run build || error_exit "构建失败"

# echo "--- 打包完成，开始连接服务器，进行文件传输 --- "

sshpass -f /etc/imoneyTest.password ssh $userName@$serverIp "cd /usr/share/nginx/html/xf-doc/ && touch test.txt" 

# echo "--- 文件传输完成 ---"

# echo "--- 脚本全部执行完成 ---"
