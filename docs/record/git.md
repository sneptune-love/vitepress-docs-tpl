
# Git相关

## git config

:::tip 提示
git config 设置Git外观和行为的配置变量，该变量存储在三个不同的位置

1、`/etc/gitconfig` 文件：包含系统上每一个用户及他们仓库的通用配置，在执行 `git config` 时加上 `--system` 即可获取该配置，但是需要注意获取该配置需要系统权限

2、`~/.gitconfig` 或者 `~/.config/git/config` 文件：只针对于当前用户，执行时加上 `--global` 即可对当前用户所有仓库生效

3、当前仓库目录下 `.git/config`文件：只针对当前仓库，默认执行参数 `--local`

优先级以就近原则为先
:::

### 查看用户配置

```bash
# 查看全局配置 - 用户名称
git config --global user.name
# 查看全局配置 - 用户邮箱
git config --global user.email

```