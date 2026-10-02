## 2024-10-02 - Form Validation UX
**Learning:** Found that custom form validation logic just hid/showed error text using `d-none` without any visual cues (color, size) or accessibility tags (like `role="alert"`), making errors difficult to notice against dark backgrounds or screen readers.
**Action:** Adding Bootstrap validation utility classes (`text-danger`, `small`, `mt-1`) and semantic ARIA roles (`role="alert"`) ensures all users notice validation issues immediately.
