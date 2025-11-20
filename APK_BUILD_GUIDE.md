# 計算機 App - APK 構建指南

本指南說明如何使用線上服務將計算機 Web App 轉換為 Android APK 檔案。

## 方案 1：使用 EAS (Expo Application Services) - 推薦

EAS 是 Expo 提供的雲端構建服務，可以輕鬆為您生成 APK 檔案。

### 步驟 1：安裝必要工具

```bash
npm install -g eas-cli
```

### 步驟 2：初始化 EAS 專案

在您的計算機上克隆或下載此專案後，執行：

```bash
cd calculator_app
eas init
```

系統會要求您：
- 建立 Expo 帳戶（如果還沒有的話）
- 選擇專案名稱

### 步驟 3：構建 APK

執行以下命令構建 APK：

```bash
eas build --platform android --local
```

或使用雲端構建（推薦）：

```bash
eas build --platform android
```

### 步驟 4：下載 APK

構建完成後，您會獲得一個下載連結。下載 APK 檔案後，您可以：
- 直接在 Android 手機上安裝
- 上傳到 Google Play Store

---

## 方案 2：使用 Capacitor Cloud

Capacitor 是 Ionic 提供的框架，可以將 Web App 轉換為原生應用。

### 步驟 1：安裝 Capacitor

```bash
npm install @capacitor/core @capacitor/cli
npm install @capacitor/android
```

### 步驟 2：初始化 Capacitor

```bash
npx cap init
```

### 步驟 3：新增 Android 平台

```bash
npx cap add android
```

### 步驟 4：同步檔案

```bash
npx cap sync
```

### 步驟 5：開啟 Android Studio 並構建

```bash
npx cap open android
```

Android Studio 會開啟，您可以：
1. 點擊 "Build" 選單
2. 選擇 "Build Bundle(s) / APK(s)"
3. 選擇 "Build APK(s)"

---

## 方案 3：使用 PhoneGap Build

PhoneGap Build 是 Adobe 提供的雲端構建服務。

### 步驟 1：準備檔案

將以下檔案上傳到 PhoneGap Build：
- `dist/public/` 目錄中的所有檔案
- `config.xml` 配置文件（見下方）

### 步驟 2：建立 config.xml

在專案根目錄建立 `config.xml`：

```xml
<?xml version='1.0' encoding='utf-8'?>
<widget id="com.calculator.app" version="1.0.0" xmlns="http://www.w3.org/ns/widgets">
    <name>計算機</name>
    <description>簡潔、快速、精確的計算工具</description>
    <author email="support@calculator.app" href="https://calculator.app">
        Calculator Team
    </author>
    <content src="index.html" />
    <preference name="orientation" value="portrait" />
    <preference name="fullscreen" value="false" />
    <preference name="webviewbounce" value="false" />
</widget>
```

### 步驟 3：上傳到 PhoneGap Build

1. 訪問 https://build.phonegap.com/
2. 登入或建立帳戶
3. 上傳您的專案
4. 選擇 Android 平台進行構建
5. 下載生成的 APK

---

## 推薦方案

**EAS (Expo Application Services)** 是最簡單和最推薦的方案，因為：
- 完全雲端構建，無需本地安裝 Android SDK
- 自動化流程，只需幾個命令
- 支援多個平台（iOS、Android）
- 免費層級可用

---

## 常見問題

### Q: 我需要簽署 APK 嗎？
A: 如果您只是想在自己的手機上測試，不需要簽署。如果您想上傳到 Google Play Store，需要使用簽署金鑰。EAS 和 Capacitor 都提供自動簽署選項。

### Q: APK 檔案有多大？
A: 通常在 10-20 MB 之間，取決於依賴項和資源。

### Q: 我可以自訂應用程式圖標和啟動畫面嗎？
A: 可以。在 `capacitor.config.json` 或 `config.xml` 中配置相關選項。

### Q: 我需要 Apple 帳戶來構建 Android APK 嗎？
A: 不需要。Apple 帳戶只在構建 iOS 應用時需要。

---

## 技術支援

如有任何問題，請參考：
- EAS 文檔：https://docs.expo.dev/eas/
- Capacitor 文檔：https://capacitorjs.com/docs
- PhoneGap Build 文檔：https://build.phonegap.com/docs

---

## 下一步

構建完 APK 後，您可以：
1. 在 Android 手機上安裝並測試
2. 上傳到 Google Play Store 發佈
3. 分享給朋友和家人使用

祝您使用愉快！
