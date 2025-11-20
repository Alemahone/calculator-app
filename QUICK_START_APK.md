# 快速開始：將計算機 App 轉換為 APK

## 最簡單的方法（3 分鐘）

### 使用 EAS Cloud Build

1. **安裝 EAS CLI**
   ```bash
   npm install -g eas-cli
   ```

2. **初始化專案**
   ```bash
   cd calculator_app
   eas init
   ```
   - 建立或登入 Expo 帳戶
   - 選擇專案名稱

3. **構建 APK**
   ```bash
   eas build --platform android
   ```

4. **等待構建完成**
   - 系統會在終端顯示進度
   - 構建完成後會提供下載連結

5. **下載並安裝**
   - 點擊下載連結或在 EAS 儀表板下載 APK
   - 在 Android 手機上安裝 APK

---

## 為什麼選擇 EAS？

✅ **完全免費** - 無需支付任何費用  
✅ **無需本地工具** - 不需要安裝 Android SDK  
✅ **自動簽署** - 自動為 APK 簽署  
✅ **快速構建** - 通常在 5-10 分鐘內完成  
✅ **支援多平台** - 同時支援 iOS 和 Android  

---

## 安裝 APK 到手機

### 方法 1：直接安裝（推薦）
1. 在手機上下載 APK 檔案
2. 打開檔案管理器，找到 APK 檔案
3. 點擊 APK 檔案進行安裝
4. 允許安裝未知來源的應用

### 方法 2：使用 ADB（高級用戶）
```bash
adb install calculator_app.apk
```

---

## 故障排除

### 問題：「無法連接到 Expo」
**解決方案：** 檢查網路連接，確保可以訪問 https://expo.dev

### 問題：「構建失敗」
**解決方案：** 
- 檢查 `package.json` 是否有效
- 確保所有依賴項都已安裝
- 查看 EAS 儀表板上的詳細錯誤信息

### 問題：「APK 無法在手機上安裝」
**解決方案：**
- 確保手機 Android 版本 >= 5.0
- 允許安裝未知來源的應用
- 檢查手機存儲空間是否充足

---

## 後續步驟

構建完 APK 後，您可以：

1. **測試應用**
   - 在真實設備上測試所有功能
   - 檢查性能和用戶體驗

2. **上傳到 Google Play Store**
   - 建立 Google Play 開發者帳戶
   - 準備應用圖標、描述和截圖
   - 上傳 APK 並發佈

3. **分享給他人**
   - 通過 QR 碼分享 APK 下載連結
   - 邀請朋友和家人使用

---

## 需要幫助？

- **EAS 文檔：** https://docs.expo.dev/eas/
- **Expo 社區論壇：** https://forums.expo.dev/
- **GitHub Issues：** 在本專案的 GitHub 倉庫提交問題

---

祝您使用愉快！🎉
