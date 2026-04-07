# Sydney Tile Website

一个面向澳大利亚悉尼瓷砖业务的宣传网站，适合展示：

- 商业空间贴瓷砖服务
- 住宅贴砖、翻新和修补服务
- 联系电话、邮箱、服务区域
- 图片与视频案例展示

## 运行方式

进入目录后，用本地静态服务打开：

```bash
cd /Users/caspian/Documents/笔试练习/sydney_tile_website
python3 -m http.server 8080
```

然后浏览器访问：

```text
http://127.0.0.1:8080
```

## 站长功能

页面右上角有 `Owner Panel`，可以：

- 修改电话、邮箱、服务区域和宣传文案
- 上传项目图片和视频
- 删除案例内容
- 自动展示 `tiles/` 目录下的网站内置图片和视频素材

## 说明

- 联系方式和文案保存在浏览器 `localStorage`。
- 图片和视频案例保存在当前浏览器的 `IndexedDB`。
- 这意味着内容会在当前浏览器里保留，但不会自动同步到别的设备。
- 如果后续你想要真正线上可用的后台上传，我可以继续帮你接一个服务端管理系统。

## 发布到 GitHub Pages（公开域名）

这个项目是纯静态网站（`index.html` + `styles.css` + `app.js`），可以直接部署到 GitHub Pages。

### 1）初始化并提交本地代码

```bash
cd /Users/caspian/Documents/笔试练习/sydney_tile_website
git init
git add .
git commit -m "Initial commit: Sydney tile website"
```

### 2）在 GitHub 创建仓库并推送

先在 GitHub 网页新建一个公开仓库（例如：`sydney-tile-website`），然后执行：

```bash
cd /Users/caspian/Documents/笔试练习/sydney_tile_website
git branch -M main
git remote add origin https://github.com/<你的用户名>/sydney-tile-website.git
git push -u origin main
```

### 3）开启 GitHub Pages

在 GitHub 仓库页面：

1. 进入 `Settings` → `Pages`
2. `Build and deployment` 里选择 `Deploy from a branch`
3. `Branch` 选择 `main`，目录选择 `/ (root)`
4. 点击 `Save`

等待 1~3 分钟后，会得到公开地址：

```text
https://<你的用户名>.github.io/sydney-tile-website/
```

### 4）可选：绑定你自己的域名

如果你有自己的域名（例如 `www.yourdomain.com`）：

1. 在 `Settings` → `Pages` 的 `Custom domain` 填入域名并保存
2. 在域名解析后台添加 CNAME 记录，指向：

```text
<你的用户名>.github.io
```

GitHub 会自动申请 HTTPS 证书（通常几分钟到几十分钟生效）。
