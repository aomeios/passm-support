(function () {
  var SUPPORTED = ["zh", "en", "ja"];
  var SUPPORT_EMAIL = "coolcrist@gmail.com";

  function detectInitialLang() {
    try {
      var params = new URLSearchParams(window.location.search);
      var q = (params.get("lang") || "").toLowerCase();
      if (q.indexOf("zh") === 0) return "zh";
      if (q.indexOf("ja") === 0) return "ja";
      if (q.indexOf("en") === 0) return "en";
      var saved = localStorage.getItem("passm_site_lang");
      if (SUPPORTED.indexOf(saved) !== -1) return saved;
    } catch (_) {}
    var nav = (navigator.language || "en").toLowerCase();
    if (nav.indexOf("zh") === 0) return "zh";
    if (nav.indexOf("ja") === 0) return "ja";
    return "en";
  }

  function buildMailtoHref(lang) {
    var subject, body;
    if (lang === "zh") {
      subject = "[PassM 支援回報] 問題描述標題";
      body = [
        "您好，我需要協助排查以下問題：",
        "",
        "• 平台與系統版本（如 iOS 18.7 / iOS 26 / Android 15）：",
        "• 手機或平板型號（如 iPhone 16 Pro / iPad Pro / Pixel 9）：",
        "• PassM 版本號（預設 1.1.0）：",
        "• 問題發生步驟與畫面提示訊息：",
        "",
        "---",
        "[安全確認] 我已知悉無密回報原則，信中未附帶主密碼、備份密碼、.passmbak 備份檔或未遮罩之機密截圖。"
      ].join("\n");
    } else if (lang === "ja") {
      subject = "[PassM サポート] お問い合わせ件名";
      body = [
        "以下の内容についてサポートをお願いします：",
        "",
        "• OS とバージョン（例：iOS 18.7 / iOS 26 / Android 15）：",
        "• 端末モデル（例：iPhone 16 Pro / iPad Pro / Pixel 9）：",
        "• PassM バージョン（例：1.1.0）：",
        "• 発生手順と表示されたエラーメッセージ：",
        "",
        "---",
        "[セキュリティ確認] マスターパスワード、バックアップパスワード、.passmbak ファイル、未マスクの機密スクリーンショットは添付していません。"
      ].join("\n");
    } else {
      subject = "[PassM Support] Issue Summary";
      body = [
        "Hello PassM Support,",
        "",
        "• OS & Version (e.g., iOS 18.7 / iOS 26 / Android 15):",
        "• Device Model (e.g., iPhone 16 Pro / iPad Pro / Pixel 9):",
        "• PassM App Version (e.g., 1.1.0):",
        "• Steps to Reproduce & Displayed Message:",
        "",
        "---",
        "[Security Check] Confirmed: NO Master Password, Backup Password, .passmbak file, CSV file, or unmasked screenshot is included."
      ].join("\n");
    }
    return "mailto:" + SUPPORT_EMAIL + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  }

  function applyLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = "en";
    document.documentElement.setAttribute("data-active-lang", lang);
    document.documentElement.setAttribute("lang", lang === "zh" ? "zh-Hant" : lang);
    try {
      localStorage.setItem("passm_site_lang", lang);
    } catch (_) {}

    var btns = document.querySelectorAll(".lang-btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.toggle("active", btns[i].getAttribute("data-set-lang") === lang);
    }

    var mailBtns = document.querySelectorAll("[data-mailto-template]");
    var href = buildMailtoHref(lang);
    for (var j = 0; j < mailBtns.length; j++) {
      mailBtns[j].setAttribute("href", href);
    }

    var searchInput = document.getElementById("faq-search");
    if (searchInput) {
      var ph = {
        zh: "搜尋常見問題（例如：恢復購買、100 筆上限、AutoFill、忘記密碼、備份）...",
        en: "Search FAQs (e.g., Restore Purchase, 100-item cap, AutoFill, Master Password, Backup)...",
        ja: "よくある質問を検索（例：購入の復元、100件上限、自動入力、パスワード紛失、バックアップ）..."
      };
      searchInput.setAttribute("placeholder", ph[lang] || ph.en);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyLang(detectInitialLang());

    var btns = document.querySelectorAll(".lang-btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        applyLang(this.getAttribute("data-set-lang"));
      });
    }

    var copyBtns = document.querySelectorAll("[data-copy-email]");
    var toast = document.getElementById("copy-toast");
    for (var c = 0; c < copyBtns.length; c++) {
      copyBtns[c].addEventListener("click", function () {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(SUPPORT_EMAIL);
        }
        if (toast) {
          toast.classList.add("show");
          setTimeout(function () {
            toast.classList.remove("show");
          }, 2200);
        }
      });
    }

    var searchInput = document.getElementById("faq-search");
    if (searchInput) {
      searchInput.addEventListener("input", function () {
        var q = this.value.trim().toLowerCase();
        var items = document.querySelectorAll("details.faq-item");
        for (var k = 0; k < items.length; k++) {
          var text = items[k].textContent.toLowerCase();
          items[k].style.display = (!q || text.indexOf(q) !== -1) ? "" : "none";
        }
      });
    }

    var androidModal = document.getElementById("android-modal");
    var lastModalTrigger = null;

    function openAndroidModal(trigger) {
      if (!androidModal) return;
      lastModalTrigger = trigger || document.activeElement;
      androidModal.classList.add("open");
      androidModal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
      var closeBtn = androidModal.querySelector("[data-close-android-modal]");
      if (closeBtn) closeBtn.focus();
    }

    function closeAndroidModal() {
      if (!androidModal || !androidModal.classList.contains("open")) return;
      androidModal.classList.remove("open");
      androidModal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
      if (window.location.hash === "#android-early-access" && window.history && window.history.replaceState) {
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }
      if (lastModalTrigger && typeof lastModalTrigger.focus === "function") {
        lastModalTrigger.focus();
      }
    }

    if (androidModal) {
      var openBtns = document.querySelectorAll("[data-open-android-modal]");
      for (var m = 0; m < openBtns.length; m++) {
        openBtns[m].addEventListener("click", function (e) {
          if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
          e.preventDefault();
          openAndroidModal(this);
        });
      }

      var closeBtns = androidModal.querySelectorAll("[data-close-android-modal]");
      for (var x = 0; x < closeBtns.length; x++) {
        closeBtns[x].addEventListener("click", closeAndroidModal);
      }

      androidModal.addEventListener("click", function (e) {
        if (e.target === androidModal) closeAndroidModal();
      });

      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && androidModal.classList.contains("open")) {
          closeAndroidModal();
        }
      });

      if (window.location.hash === "#android-early-access") {
        openAndroidModal(null);
      }
      window.addEventListener("hashchange", function () {
        if (window.location.hash === "#android-early-access") {
          openAndroidModal(null);
        }
      });
    }

    if (window.location.hash) {
      var targetFaq = document.querySelector(window.location.hash);
      if (targetFaq && targetFaq.tagName && targetFaq.tagName.toLowerCase() === "details") {
        targetFaq.setAttribute("open", "open");
      }
    }
  });
})();
