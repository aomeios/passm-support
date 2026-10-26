# PassM 客戶支援與安全回報指南 (Support & No-Secret Reporting Guide)

**最後更新日期 / Last Updated**：2026-10-26  
**適用平台 / Platforms**：iOS / Android

---

> [!CAUTION]
> **安全鐵律（無密回報警告 / No-Secret Reporting Warning）**  
> PassM 採 100% 離線零知識架構，支援團隊**絕不會**在任何情況下向您索取以下資訊。回報問題時，**請絕對不要提供**：
> 1. 您的**主密碼（Master Password）**或備份密碼
> 2. 您的 **`.passmbak` 加密備份檔**或匯出的 CSV 檔案
> 3. 含有真實密碼、TOTP 驗證碼、信用卡號、CVV 或安全筆記之**未遮罩螢幕截圖**

---

## 1. 官方聯絡與問題回報管道 (Official Support Channels)

- **公開問題追蹤單（GitHub Issues，推薦）**：  
  `https://github.com/aomeios/passm-support/issues`
- **官方支援網頁**：  
  `https://github.com/aomeios/passm-support/blob/main/SUPPORT.md`
- **客服聯絡信箱（Support Email）**：  
  `coolcrist@gmail.com`

回報問題時，建議僅提供以下**非敏感環境資訊**以加速排查：
- 平台與系統版本（例如：iOS 18.2 / Android 15）
- 裝置型號（例如：iPhone 16 Pro / Pixel 9）
- PassM 應用程式版本號（可於「設定 ➔ 關於」查看）
- 問題發生步驟描述與 App 畫面顯示之錯誤訊息

---

## 2. 常見問題排除 (FAQ & Troubleshooting)

### Q1：購買 PassM Pro 後重裝 App 或更換手機，如何恢復 Pro 資格？
- 請確保裝置已登入當初購買時使用的 **Apple ID（App Store）** 或 **Google Play 帳號**，並保持網路連線。
- 開啟 PassM ➔ 前往 **「設定 (Settings)」** ➔ **「PassM Pro」** 區塊 ➔ 點擊 **「恢復購買 (Restore Purchases)」**。
- 系統向商店核對有效交易後，即會自動解鎖無限筆數並寫入本機硬體安全快取。

### Q2：為什麼達到免費版 100 筆上限後無法新增第 101 筆？舊資料會被鎖住嗎？
- 免費版提供最多 **100 筆**手動新增額度。
- **絕不鎖庫承諾**：即使達到 100 筆上限（或退款退回免費版），您既有的所有項目**永久可完整檢視、複製密碼、編輯、刪除、使用系統自動填寫（Autofill），以及匯出 `.passmbak` 加密備份與匯入資料**，絕不會扣留您的任何資料。

### Q3：忘記主密碼（Master Password）可以請官方協助重設或救回資料嗎？
- **無法救回**。PassM 為 100% 離線零知識架構，無任何雲端伺服器或後門金鑰。主密碼一旦遺忘且無事先匯出且記得密碼之 `.passmbak` 備份檔，任何人均無法解密資料庫。
- 若您決定放棄舊資料並重新建立新金庫：
  - **iOS**：於解鎖畫面點擊「重設密碼庫」，勾選確認並輸入大寫 `RESET` 即可抹除舊庫重新開始。
  - **Android**：於系統設定清除 PassM 應用程式儲存空間（或重新安裝 App）即可重新建立新金庫。

### Q4：如何在 iOS / Android 啟用系統自動填寫（AutoFill）？
- **iOS**：前往系統 **「設定 ➔ 一般 ➔ 自動填寫與密碼 (AutoFill & Passwords)」** ➔ 開啟「自動填寫密碼與通行密鑰」，並在下方來源清單勾選 **PassM**。
- **Android**：前往系統 **「設定 ➔ 密碼與帳號（或系統 ➔ 語言與輸入法）➔ 自動填寫服務」** ➔ 選擇 **PassM**。
