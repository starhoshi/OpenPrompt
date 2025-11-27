# Open Prompt

A Chrome extension that lets you send your Google search query to ChatGPT, Claude, or Perplexity with one click.

[日本語版 README はこちら](./README_ja.md)

## Features

- One-click access to AI services from Google search
- Supports ChatGPT, Claude, and Perplexity
- Seamlessly integrated into Google's search interface
- Choose which AI buttons to display
- Light/Dark mode support
- Multi-language support (English, Japanese)

## Installation

### Local Development

1. Open `chrome://extensions/` in Chrome
2. Enable "Developer mode" (top right)
3. Click "Load unpacked"
4. Select the `extension/` folder

### Chrome Web Store

[Install from Chrome Web Store](https://chromewebstore.google.com/detail/open-prompt/gkbeibjbkgchailochempflgljkeofkh)

## Directory Structure

```
open_prompt/
├── extension/              # Production-ready extension files
│   ├── manifest.json
│   ├── content.js
│   ├── background.js
│   ├── styles.css
│   ├── options.html
│   ├── options.js
│   ├── icon16.png
│   ├── icon48.png
│   ├── icon128.png
│   └── _locales/           # Internationalization
│       ├── en/
│       │   └── messages.json
│       └── ja/
│           └── messages.json
├── design/                 # Design assets
│   └── icon.png
└── README.md
```

## Development

### Updating Icons

```bash
# Generate from design/icon.png
cd /path/to/open_prompt
sips -z 16 16 design/icon.png --out extension/icon16.png
sips -z 48 48 design/icon.png --out extension/icon48.png
sips -z 128 128 design/icon.png --out extension/icon128.png
```

### Adding Languages

1. Create a new folder in `extension/_locales/` (e.g., `fr/`)
2. Copy `messages.json` from `en/` or `ja/`
3. Translate all message values

### Release Process

1. Verify contents of `extension/` directory
2. Create ZIP file:
   ```bash
   cd extension
   zip -r ../open-prompt.zip .
   ```
3. Upload to Chrome Web Store Developer Dashboard

## Technical Implementation

### Chrome APIs Used

- **Chrome Storage API** (`chrome.storage.sync`)
  - Stores user preferences for which AI buttons to display
  - Syncs settings across devices

- **Chrome i18n API** (`chrome.i18n`)
  - Full internationalization support
  - Automatic language selection based on browser settings

### DOM Detection Strategy

This extension uses a robust approach to detect Google's UI elements:

- **SVG Path Matching**: Identifies buttons by their icon SVG paths (e.g., close button, voice search)
- **ViewBox Detection**: Uses SVG viewBox attributes to identify Material Symbols icons
- **DOM Traversal**: Navigates from the search textarea to find the correct insertion point
- **No Class Name Dependencies**: Avoids relying on Google's obfuscated CSS class names

### Security Features

- **Content Script Isolation**: Runs in isolated context
- **Manifest V3**: Uses the latest Chrome extension security standards
- **Minimal Permissions**: Only requests `storage` permission

## Supported Languages

- English (default)
- Japanese (日本語)

## License

MIT
