# PhoneGap Build - APK 構建指南

PhoneGap Build 是構建 APK 最簡單的方式。無需安裝任何本地工具，完全在雲端進行。

## 快速開始（3 步）

### 步驟 1：訪問 PhoneGap Build

1. 訪問 https://build.phonegap.com/
2. 點擊 "Sign Up" 建立免費帳戶（或登入現有帳戶）
3. 驗證您的電子郵件

### 步驟 2：上傳應用程式

1. 點擊 "New App" 或 "+" 按鈕
2. 選擇 "Upload a .zip file"
3. 上傳 `calculator-app-phonegap.zip` 檔案
4. 點擊 "Create"

### 步驟 3：構建 APK

1. 應用程式會自動開始構建
2. 等待 Android 平台的構建完成（通常需要 2-5 分鐘）
3. 當狀態變為綠色勾號時，點擊下載按鈕
4. 下載 `.apk` 檔案

## 在手機上安裝 APK

### 方法 1：直接安裝（推薦）

1. 將 APK 檔案複製到 Android 手機
2. 打開檔案管理器，找到 APK 檔案
3. 點擊 APK 檔案
4. 允許安裝未知來源的應用
5. 點擊 "安裝"

### 方法 2：使用 ADB（高級用戶）

```bash
adb install calculator-app.apk
```

## 常見問題

### Q: 構建失敗了怎麼辦？

A: 檢查以下事項：
- 確保 `config.xml` 檔案存在且格式正確
- 確保 `index.html` 在根目錄
- 查看 PhoneGap Build 儀表板上的錯誤信息

### Q: 如何更新應用程式？

A: 
1. 修改代碼
2. 重新構建 Web App：`pnpm build`
3. 複製 `dist/public/*` 和 `config.xml` 到 `phonegap-build/`
4. 建立新的 ZIP 檔案
5. 上傳到 PhoneGap Build

### Q: 我可以上傳到 Google Play Store 嗎？

A: 可以，但需要：
1. 簽署 APK（PhoneGap Build 提供自動簽署）
2. 建立 Google Play 開發者帳戶
3. 準備應用程式圖標、描述和截圖
4. 上傳 APK 並發佈

### Q: APK 有多大？

A: 通常在 10-15 MB 之間

### Q: 我需要支付費用嗎？

A: PhoneGap Build 提供免費層級，可以構建公開應用程式。私有應用程式需要付費帳戶。

## 檔案說明

- `index.html` - 應用程式主頁面
- `assets/` - CSS 和 JavaScript 資源
- `config.xml` - PhoneGap 配置文件

## 下一步

1. **測試應用程式**
   - 在真實 Android 設備上測試所有功能
   - 檢查性能和用戶體驗

2. **發佈到 Google Play Store**
   - 建立 Google Play 開發者帳戶
   - 準備應用程式資訊
   - 上傳 APK 並發佈

3. **持續更新**
   - 修改代碼後重新構建
   - 上傳新版本到 PhoneGap Build
   - 發佈更新版本

## 技術支援

- PhoneGap Build 文檔：https://build.phonegap.com/docs
- PhoneGap 社區論壇：https://forums.adobe.com/community/phonegap
- GitHub 倉庫：https://github.com/Alemahone/calculator-app

---

祝您使用愉快！🎉
