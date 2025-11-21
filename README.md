# 計算機 App

一個簡潔、快速、精確的計算工具。

## 功能特性

- ✅ 基本四則運算（加、減、乘、除）
- ✅ 小數點支援
- ✅ 正負號切換
- ✅ 清除和刪除功能
- ✅ 浮點精度處理
- ✅ 響應式設計

## 技術棧

- **前端框架**: React 19 + TypeScript
- **樣式**: Tailwind CSS 4
- **UI 元件**: shadcn/ui
- **構建工具**: Vite
- **測試**: Vitest
- **部署**: EAS (Expo Application Services)

## 開發

### 安裝依賴

```bash
pnpm install
```

### 開發伺服器

```bash
pnpm dev
```

訪問 http://localhost:3000

### 構建

```bash
pnpm build
```

### 測試

```bash
pnpm exec vitest run
```

## APK 構建

本專案使用 GitHub Actions 和 EAS 自動構建 APK。

### 自動構建

每次推送到 `main` 分支時，GitHub Actions 會自動觸發 EAS 構建。

### 手動構建

```bash
npm install -g eas-cli
eas init
eas build --platform android
```

## 測試覆蓋

- 32 個單元測試，全部通過
- 涵蓋所有核心功能和邊界情況

## 許可證

MIT

## 作者

Calculator Team

---

**構建狀態**: [![Build APK with EAS](https://github.com/Alemahone/calculator-app/actions/workflows/build-apk.yml/badge.svg)](https://github.com/Alemahone/calculator-app/actions/workflows/build-apk.yml)
