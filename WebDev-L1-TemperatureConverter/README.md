# 🌡️ Temperature Converter Web Tool

## 📌 Project Overview

An interactive web application that converts temperatures in real-time between **Celsius**, **Fahrenheit**, and **Kelvin**. Features input validation, edge-case safety checking for Absolute Zero violations, and clear formatted output displays.

This project was developed for the **Oasis Infobyte Internship Program (OIBSIP)** under the **Web Development & Designing Track (Level 1 — Task 3)**.

---

## ✨ Features Checklist

- [x] **Video Title Card Overlay:** Dedicated identification screen for demo video compliance.
- [x] **Numeric Input & Validation:** Rejects empty or non-numeric values with responsive error messages.
- [x] **Multi-Unit Selector:** Supports Celsius, Fahrenheit, and Kelvin input choices.
- [x] **Simultaneous Multi-Output:** Displays calculated conversions across all units at once.
- [x] **Absolute Zero Safeguard:** Alerts users if inputs fall below physical absolute zero limits (< 0 K or < -273.15 °C).
- [x] **Centred Responsive UI:** Clean card layout adhering to a nature-green theme.

---

## 🛠️ Tech Stack & Formulas

| Component | Usage Details |
| :--- | :--- |
| **HTML5** | Semantic layout and input controls |
| **CSS3** | Glassmorphic design, flexbox alignment, custom styling |
| **JavaScript** | Validation rules & conversion algorithms |

**Formulas Used:**
* °C to °F: `(C × 9/5) + 32`
* °C to K: `C + 273.15`
* °F to °C: `(F - 32) × 5/9`

---

## 📂 Folder Structure

```text
OIBSIP/
└── WebDev-L1-TemperatureConverter/
    ├── index.html        # Main app layout
    ├── style.css         # Styling rules
    ├── script.js         # Math formulas & DOM interaction
    └── README.md         # Project documentation