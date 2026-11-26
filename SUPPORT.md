# PassM 客戶支援與安全回報指南 (Support & No-Secret Reporting Guide)

**最後更新日期 / Last Updated**：2026-11-26  
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

### Q5：移除或重新安裝 App 後，原本的本機密碼資料還在嗎？iOS 重裝後如何重建金庫？
- **繁體中文**：PassM 採 **100% 零知識無雲端架構**，移除 App 時作業系統會一併刪除本機加密資料庫，**移除 App 或換機前請務必先匯出 `.passmbak` 加密備份**。若於 iOS 重新安裝，可直接於解鎖畫面輸入**原始舊主密碼**驗證身分（點擊「驗證原密碼並重建金庫」），系統將自動清除殘留舊鑰並以全新隨機金鑰建立空白金庫（進入後至「設定 ➔ 匯入加密備份」選取 `.passmbak` 即可還原）；若忘記舊主密碼，亦可透過勾選確認與輸入大寫 `RESET` 的高門檻確認流程重設。Android 重裝後可直接建立新金庫並匯入 `.passmbak` 還原。
- **English**: Because PassM uses a **100% zero-knowledge, cloud-free architecture**, uninstalling the app deletes the local encrypted database — **always export a `.passmbak` encrypted backup before uninstalling or switching devices**. After reinstalling on iOS, enter your **original Master Password** on the Unlock screen ("Verify password and rebuild vault") to purge residual keys and build a new empty vault with fresh random keys (then import `.passmbak` in Settings); if you forgot your old Master Password, use the high-threshold uppercase `RESET` flow.
- **日本語**：PassM は **100% ゼロ知識・クラウドなし設計**のため、アプリ削除時に端末内のローカル暗号化データベースも消去されます。**削除や機種変更の前に必ず `.passmbak` バックアップをエクスポートしてください。**iOS 再インストール後は、ロック解除画面で**元の古いマスターパスワード**を入力して本人確認を行うと古い鍵が消去され新しいランダム鍵で空の保管庫が作成されます（その後「設定」から `.passmbak` を復元可能）。元のパスワードを忘れた場合は高閾値 `RESET` フローで初期化できます。

### Q6：首頁的「離線備份提醒」如何運作？可以調整頻率或關閉嗎？
- **繁體中文**：雙平台採用非阻斷式智慧提醒：當「**首次達 3 筆未備份（或首筆滿 3 天）**」、「**距上次備份累積達 5 筆變更**」或「**有未備份變更且逾 14 天**」（及逾 90 天定期檢視）時於首頁溫和提示一鍵匯出 `.passmbak`，支援「**稍後提醒**」（靜音 7 天，右上角設定圖示保留微圓點提醒），並可於「**設定 ➔ 備份與資料管理**」自由調整為每 7 天、14 天預設、30 天或關閉首頁橫幅。
- **English**: Both platforms provide a non-blocking smart offline reminder on the home screen when **3 items are stored without a first backup (or the first item reaches 3 days old)**, **5 changes accumulate since your last backup**, or **unsaved changes pass 14 days** (plus a 90-day freshness check). It supports **"Remind me later"** (snoozes for 7 days while keeping a subtle dot on the Settings gear icon) and can be configured under **Settings ➔ Backup & Data Management** to every 7 days, 14-day default, every 30 days, or Turn off home banner.
- **日本語**：両 OS で非ブロック型のスマートオフライン通知を採用しており、「**初回未バックアップで 3 件到達（または最初の項目から 3 日経過）**」「**前回バックアップから 5 件の変更蓄積**」「**未保存の変更があり 14 日経過**」（および 90 日定期確認）時にホーム画面でワンタップ出力を案内します。「**後で通知**」（7 日間ミュート・設定アイコンに微細ドット保持）に対応し、「**設定 ➔ バックアップとデータ管理**」で 7日ごと・14日標準・30日ごと・ホームバナーをオフへ変更できます。
