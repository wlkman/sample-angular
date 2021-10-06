## 安装node版本v10.16.0

## 安装angular cli
npm install -g @angular/cli@11.2.14

## 创建项目
ng new demo-app
## exception： An unhandled exception occurred: Cannot find module '@angular-devkit/build-angular/package.json'
## 解决方案：降低node版本到v10.16.0

## 不好用的解决方案 start
## solution：change registry and install "build-angular"
npm config set registry https://registry.npm.taobao.org
npm install -save-dev @angular-devkit/build-angular
### exception: npm ERR! gyp ERR! stack Error: Could not find any Visual Studio installation to use
### solution：
npm install --global --production windows-build-tools
## 不好用的解决方案 end

## 设置权限
set-ExecutionPolicy RemoteSigned

## 运行程序
ng serve

## 安装sass
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install node-sass

## 安装bootstrap
npm install bootstrap@4.0.0-alpha.4
## 修改 angular.json配置
"styles": [
    "src/styles.css",
    "node_modules/bootstrap/dist/css/bootstrap.min.css"   //后加的内容
],