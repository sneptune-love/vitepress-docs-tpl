

# Node相关知识

## 使用npx serve启动服务

``注意：node版本过低，会无法启动npx serve``

在需要启动的文件目录下执行 `npx serve` 即可启动一个一个本地服务来访问该文件目录



## 本地文件上传至服务器

:::tips 提示
如果需要加一些美观的提示，可以使用ora，但是注意6.0.0版本上都是ESM模式，仅支持import，v5.4.1以下才是支持require模式
:::

```js
const path = require('path')

const Client = require('ssh2-sftp-client');

// 端口默认22
const sftpConfig = {
  host: '',
  username: '',
  password: ''
}
startUpload().then(msg => {
  console.log(msg);
}).catch(err => {
  console.log(`main error: ${err.message}`);
});
  
async function startUpload() {
  const client = new Client('example-client');
  const src = path.join(__dirname, '..', 'dist');
  const dst = '/remote/dir';
  try {
    await client.connect(sftpConfig);
    client.on('upload', info => {
      console.log(`Listener: Uploaded ${info.source}`);
    });
    // 上传本地src目录下的所有文件 -> dst目录中，如果有重复文件，则覆盖
    let rslt = await client.uploadDir(src, dst);
    return rslt;
  } catch (err) {
    console.error(err);
  } finally {
    client.end();
  }
}

```