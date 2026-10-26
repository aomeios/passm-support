# PassM 隱私權政策 (Privacy Policy / プライバシーポリシー)

**最後更新日期 / Last Updated / 最終更新日**：2026-10-26  
**適用產品 / Applicable Product**：PassM（iOS / Android）

---

## 繁體中文（Traditional Chinese）

### 1. 核心隱私承諾：100% 本地離線運算、零資料收集
PassM 是一款純離線、零知識（Zero-Knowledge）的本地密碼與私密資訊管理工具。**我們不擁有、不租用、也不運作任何可接收您密碼庫資料的後端伺服器。**
- **零個人資料收集**：PassM 不要求註冊帳號，亦不收集、不儲存、不傳輸您的姓名、電子郵件、電話號碼、裝置識別碼或位置資訊。
- **零密碼庫外傳**：您儲存於 PassM 內的所有帳號密碼、動態驗證碼（TOTP）種子、信用卡資訊、安全筆記與檢查清單，均僅存於您個人裝置的本地沙盒中。
- **零追蹤與零廣告 SDK**：PassM 未植入任何第三方分析（Analytics）、行為追蹤、廣告投放或崩潰自動回報 SDK。
- **Android 實體零網路權限**：PassM Android 版本已於應用程式資訊清單（`AndroidManifest.xml`）中移除 `android.permission.INTERNET` 與 `android.permission.ACCESS_NETWORK_STATE` 權限，從作業系統層級確保應用程式本體無法發起任何網路連線。

### 2. 資料加密與硬體安全儲存架構
您的敏感資料在裝置本地端全程受雙層認證加密與硬體金鑰保護：
1. **主密碼衍生與裝置綁定**：您的主密碼（Master Password）永不落盤儲存；系統透過 `PBKDF2-HMAC-SHA256`（600,000 次迭代）與 `HKDF-SHA256` 結合儲存在硬體安全模組（Android Keystore / iOS Keychain）中之 32-byte 裝置機密（Device Secret）衍生加密金鑰。
2. **雙層資料庫與欄位加密**：底層採用 SQLCipher（AES-256）全庫加密；密碼與敏感附加欄位（`secret_extras`）另以 `AES-256-GCM` 搭配 34-byte 關聯認證資料（AAD）進行第二層獨立封裝。
3. **生物辨識驗證**：當您啟用指紋、Face ID 或 Touch ID 快速解鎖時，生物特徵驗證完全由 Android 作業系統或 iOS LocalAuthentication / Secure Enclave 在本機執行；PassM 僅讀取硬體授權狀態，絕無法存取您的生物特徵原始資料。

### 3. 備份檔案（`.passmbak`）與匯入資料處理
- 當您使用匯出加密備份（`.passmbak`）或匯入 CSV／備份檔時，檔案僅透過系統原生的檔案選擇器（Android Storage Access Framework / iOS Document Picker）由您本人指定本機或個人雲端硬碟路徑讀寫。
- `.passmbak` 備份檔採用 `PBKDF2-HMAC-SHA256`（1,200,000 次迭代）與 `AES-256-GCM` 加密，開發者無法存取或解密您的備份檔案。

### 4. 應用程式內購買（PassM Pro）
- PassM Pro 永久買斷升級之付款與收據驗證，完全由官方應用商店（Apple App Store `StoreKit 2` / Google Play `BillingClient`）直接處理。
- 開發者不會經手或儲存您的信用卡號或付款帳單明細；App 僅於本機硬體安全區域保存經商店數位簽章驗證後的授權狀態與交易識別碼（`orderId` / `originalID`），以支援離線使用與購買恢復。

### 5. 使用者自主權與資料刪除
由於所有資料皆僅存於您的裝置本機：
- 您可隨時於 App 內檢視、編輯、匯出或刪除任何項目。
- 若您於 App 內執行「重設密碼庫（Reset Vault）」或直接從裝置卸載 PassM，本地加密資料庫將從裝置儲存空間中移除（iOS 使用者如需一併清除 Keychain 封印材料，請於卸載前使用解鎖畫面之 `RESET` 重設功能）。

### 6. 聯絡我們
若您對本隱私權政策或產品安全性有任何疑問，請透過以下公開管道聯繫我們（**切勿在信件或問題單中提供您的主密碼或 `.passmbak` 備份檔**）：
- **客服與支援頁面**：`https://github.com/aomeios/passm-support/blob/main/SUPPORT.md`
- **公開問題回報（GitHub Issues）**：`https://github.com/aomeios/passm-support/issues`
- **聯絡信箱**：`coolcrist@gmail.com`

---

## English

### 1. Core Privacy Commitment: 100% Local Offline Processing, Zero Data Collection
PassM is a strictly offline, zero-knowledge local password and secret manager. **We do not own, operate, or use any backend servers capable of receiving your vault data.**
- **No Personal Data Collected**: PassM requires no user account and does not collect, store, or transmit your name, email address, phone number, device identifiers, or location data.
- **No Vault Data Transmitted**: All passwords, TOTP seeds, credit card details, secure notes, and checklists remain exclusively within your device's local sandbox.
- **No Tracking or Ad SDKs**: PassM contains zero third-party analytics, telemetry, advertising, or automatic crash-reporting SDKs.
- **Zero Network Permissions on Android**: The Android release explicitly strips `android.permission.INTERNET` and `android.permission.ACCESS_NETWORK_STATE` in `AndroidManifest.xml`, ensuring at the OS level that the app cannot initiate network connections.

### 2. Local Encryption & Hardware-Backed Security
1. **Master Password Derivation & Device Binding**: Your Master Password is never stored on disk. Keys are derived locally using `PBKDF2-HMAC-SHA256` (600,000 iterations) and `HKDF-SHA256` combined with a 32-byte hardware-protected Device Secret stored in Android Keystore or iOS Keychain.
2. **Dual-Layer Encryption**: The vault database is encrypted with SQLCipher (`AES-256`), and sensitive secret fields (`password`, `secret_extras`) are additionally sealed with `AES-256-GCM` bound to a 34-byte Authenticated Associated Data (AAD) header.
3. **Biometric Authentication**: Fingerprint, Face ID, and Touch ID checks are performed strictly by the operating system (`BiometricPrompt` / `LocalAuthentication`). PassM never accesses raw biometric templates.

### 3. Backups (`.passmbak`) & File Imports
- Exporting `.passmbak` backups or importing CSV/backup files uses the system file picker (Android SAF / iOS Document Picker) to read or write only the specific file you select.
- `.passmbak` files are encrypted locally with `PBKDF2-HMAC-SHA256` (1,200,000 iterations) and `AES-256-GCM`.

### 4. In-App Purchases (PassM Pro)
- PassM Pro lifetime unlock transactions are processed directly by Apple App Store (`StoreKit 2`) or Google Play (`BillingClient`).
- We never receive your payment card details. PassM stores only the cryptographically verified entitlement status and transaction identifier (`orderId` / `originalID`) in local hardware-backed storage for offline access and purchase restoration.

### 5. Contact Us
If you have any questions regarding this Privacy Policy, please contact us (**never include your Master Password or `.passmbak` backup files**):
- **Support Page**: `https://github.com/aomeios/passm-support/blob/main/SUPPORT.md`
- **Issue Tracker**: `https://github.com/aomeios/passm-support/issues`
- **Email**: `coolcrist@gmail.com`

---

## 日本語（Japanese）

### 1. プライバシーに関する基本方針：完全ローカル・オフライン動作、データ収集ゼロ
PassM は完全オフライン・ゼロ知識（Zero-Knowledge）設計のローカルパスワード管理アプリです。**開発者は、お客様の保管庫データを受信するサーバーを一切保有・運用していません。**
- **個人情報の収集なし**：アカウント登録は不要であり、氏名、メールアドレス、電話番号、端末識別子、位置情報などを収集・送信することは一切ありません。
- **保管庫データの外部送信なし**：パスワード、TOTP シード、クレジットカード情報、セキュアメモ、チェックリストはすべてお使いの端末内にのみ保存されます。
- **追跡・広告 SDK なし**：第三者の分析（Analytics）、広告、自動クラッシュ送信 SDK は一切含まれていません。
- **Android 版の通信権限ゼロ**：Android 版では `AndroidManifest.xml` から `INTERNET` および `ACCESS_NETWORK_STATE` 権限を完全に削除しており、OS レベルで外部通信が遮断されています。

### 2. ローカル暗号化とハードウェア保護
- マスターパスワードは端末内に保存されず、`PBKDF2-HMAC-SHA256`（600,000 回反復）および `HKDF-SHA256` と Android Keystore / iOS Keychain 内の 32 バイト Device Secret を組み合わせて鍵を導出します。
- データベース全体は SQLCipher（`AES-256`）で暗号化され、機密フィールドはさらに 34 バイト AAD 付きの `AES-256-GCM` で二重に暗号化されます。

### 3. アプリ内課金（PassM Pro）とお問い合わせ
- PassM Pro（買い切り）の決済は Apple App Store（`StoreKit 2`）または Google Play（`BillingClient`）によって直接処理され、開発者が決済情報を取得することはありません。
- お問い合わせ先（**マスターパスワードや `.passmbak` バックアップファイルは絶対に送信しないでください**）：
  - **サポートページ**：`https://github.com/aomeios/passm-support/blob/main/SUPPORT.md`
  - **GitHub Issues**：`https://github.com/aomeios/passm-support/issues`
  - **メール**：`coolcrist@gmail.com`
