// SVG icon paths for AI services
const ICONS = {
  chatgpt: {
    viewBox: "0 0 24 24",
    path: "M21.55 10.004a5.416 5.416 0 00-.478-4.501c-1.217-2.09-3.662-3.166-6.05-2.66A5.59 5.59 0 0010.831 1C8.39.995 6.224 2.546 5.473 4.838A5.553 5.553 0 001.76 7.496a5.487 5.487 0 00.691 6.5 5.416 5.416 0 00.477 4.502c1.217 2.09 3.662 3.165 6.05 2.66A5.586 5.586 0 0013.168 23c2.443.006 4.61-1.546 5.361-3.84a5.553 5.553 0 003.715-2.66 5.488 5.488 0 00-.693-6.497v.001zm-8.381 11.558a4.199 4.199 0 01-2.675-.954c.034-.018.093-.05.132-.074l4.44-2.53a.71.71 0 00.364-.623v-6.176l1.877 1.069c.02.01.033.029.036.05v5.115c-.003 2.274-1.87 4.118-4.174 4.123zM4.192 17.78a4.059 4.059 0 01-.498-2.763c.032.02.09.055.131.078l4.44 2.53c.225.13.504.13.73 0l5.42-3.088v2.138a.068.068 0 01-.027.057L9.9 19.288c-1.999 1.136-4.552.46-5.707-1.51h-.001zM3.023 8.216A4.15 4.15 0 015.198 6.41l-.002.151v5.06a.711.711 0 00.364.624l5.42 3.087-1.876 1.07a.067.067 0 01-.063.005l-4.489-2.559c-1.995-1.14-2.679-3.658-1.53-5.63h.001zm15.417 3.54l-5.42-3.088L14.896 7.6a.067.067 0 01.063-.006l4.489 2.557c1.998 1.14 2.683 3.662 1.529 5.633a4.163 4.163 0 01-2.174 1.807V12.38a.71.71 0 00-.363-.623zm1.867-2.773a6.04 6.04 0 00-.132-.078l-4.44-2.53a.731.731 0 00-.729 0l-5.42 3.088V7.325a.068.068 0 01.027-.057L14.1 4.713c2-1.137 4.555-.46 5.707 1.513.487.833.664 1.809.499 2.757h.001zm-11.741 3.81l-1.877-1.068a.065.065 0 01-.036-.051V6.559c.001-2.277 1.873-4.122 4.181-4.12.976 0 1.92.338 2.671.954-.034.018-.092.05-.131.073l-4.44 2.53a.71.71 0 00-.365.623l-.003 6.173v.002zm1.02-2.168L12 9.25l2.414 1.375v2.75L12 14.75l-2.415-1.375v-2.75z"
  },
  perplexity: {
    viewBox: "0 0 24 24",
    path: "M19.785 0v7.272H22.5V17.62h-2.935V24l-7.037-6.194v6.145h-1.091v-6.152L4.392 24v-6.465H1.5V7.188h2.884V0l7.053 6.494V.19h1.09v6.49L19.786 0zm-7.257 9.044v7.319l5.946 5.234V14.44l-5.946-5.397zm-1.099-.08l-5.946 5.398v7.235l5.946-5.234V8.965zm8.136 7.58h1.844V8.349H13.46l6.105 5.54v2.655zm-8.982-8.28H2.59v8.195h1.8v-2.576l6.192-5.62zM5.475 2.476v4.71h5.115l-5.115-4.71zm13.219 0l-5.115 4.71h5.115v-4.71z"
  },
  claude: {
    viewBox: "0 0 24 24",
    path: "M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z"
  }
};

// SVG path patterns for detecting Google's UI elements
// These are stable identifiers that won't change with CSS class name rebuilds
const SVG_PATTERNS = {
  // Close button (X icon) - path starts with "M19 6.41"
  CLOSE_ICON: 'M19 6.41',
  // Voice/Camera search icons use viewBox with negative values (Material Symbols)
  VOICE_CAMERA_VIEWBOX: '-960'
};

function createButton(text, baseUrl, inputElement, iconKey) {
  const btn = document.createElement('a');
  btn.className = 'open-prompt-btn';
  btn.target = '_blank';
  btn.setAttribute('aria-label', chrome.i18n.getMessage('searchWith', [text]));

  const updateHref = () => {
    const query = inputElement.value;
    btn.href = baseUrl + encodeURIComponent(query);
  };

  updateHref();
  inputElement.addEventListener('input', updateHref);

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "open-prompt-icon");
  svg.setAttribute("viewBox", ICONS[iconKey].viewBox);
  svg.setAttribute("fill", "currentColor");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", ICONS[iconKey].path);

  svg.appendChild(path);
  btn.appendChild(svg);

  return btn;
}

/**
 * Check if an element contains Google's close (X) button by examining SVG paths
 */
function hasCloseIcon(element) {
  const paths = element.querySelectorAll('svg path');
  for (const path of paths) {
    const d = path.getAttribute('d') || '';
    if (d.includes(SVG_PATTERNS.CLOSE_ICON)) {
      return true;
    }
  }
  return false;
}

/**
 * Check if an element contains voice/camera search icons by examining SVG viewBox
 * Google's Material Symbols use viewBox with negative values like "0 -960 960 960"
 */
function hasVoiceCameraIcon(element) {
  const svgs = element.querySelectorAll('svg');
  for (const svg of svgs) {
    const viewBox = svg.getAttribute('viewBox') || '';
    if (viewBox.includes(SVG_PATTERNS.VOICE_CAMERA_VIEWBOX)) {
      return true;
    }
  }
  return false;
}

/**
 * Find a separator span (empty span without SVG) within an element
 */
function findSeparatorSpan(element) {
  const spans = element.querySelectorAll('span');
  for (const span of spans) {
    if (!span.querySelector('svg')) {
      return span;
    }
  }
  return null;
}

/**
 * Find the insertion point by traversing from the search textarea
 * This approach is resilient to CSS class name changes as it relies on:
 * - Standard HTML attributes (name="q", role="search", type="submit")
 * - SVG path data which is stable (icon shapes don't change)
 * - DOM structure relationships (parent/sibling traversal)
 */
function findInsertionInfo() {
  const textarea = document.querySelector('textarea[name="q"]') ||
    document.querySelector('input[name="q"]');
  if (!textarea) return null;

  let current = textarea.parentElement;

  // Traverse up the DOM to find the tools area (contains clear button and voice/camera search)
  while (current && current.parentElement) {
    const parent = current.parentElement;
    const siblings = Array.from(parent.children);

    for (const sibling of siblings) {
      if (sibling === current || sibling.tagName !== 'DIV') continue;

      // Check if this div contains the close button
      if (!hasCloseIcon(sibling)) continue;

      // Found the tools area - now analyze its children
      const toolsArea = sibling;
      let clearButtonContainer = null;
      let voiceCameraContainer = null;
      let separator = null;

      const children = Array.from(toolsArea.children);
      for (const child of children) {
        if (child.tagName !== 'DIV') continue;

        if (hasCloseIcon(child)) {
          clearButtonContainer = child;
          separator = findSeparatorSpan(child);
          continue;
        }

        if (hasVoiceCameraIcon(child)) {
          voiceCameraContainer = child;
        }
      }

      return { toolsArea, clearButtonContainer, voiceCameraContainer, separator };
    }

    current = parent;
  }

  return null;
}

function addAiLinks(settings = { chatgpt: true, claude: true, perplexity: true }) {
  // Prevent duplicate injection
  const existingContainer = document.querySelector('.open-prompt-container');
  if (existingContainer) {
    existingContainer.remove();
  }

  const searchInput = document.querySelector('textarea[name="q"]') ||
    document.querySelector('input[name="q"]');

  if (!searchInput) return;

  const container = document.createElement('div');
  container.className = 'open-prompt-container';

  if (settings.chatgpt) {
    container.appendChild(createButton('ChatGPT', 'https://chatgpt.com/?prompt=', searchInput, 'chatgpt'));
  }
  if (settings.claude) {
    container.appendChild(createButton('Claude', 'https://claude.ai/new?q=', searchInput, 'claude'));
  }
  if (settings.perplexity) {
    container.appendChild(createButton('Perplexity', 'https://www.perplexity.ai/?q=', searchInput, 'perplexity'));
  }

  let inserted = false;
  const info = findInsertionInfo();

  if (info) {
    const { toolsArea, clearButtonContainer, voiceCameraContainer, separator } = info;

    if (voiceCameraContainer) {
      // Insert before voice/camera search buttons
      if (separator) {
        const separatorClone = separator.cloneNode(true);
        separatorClone.removeAttribute('jsname');
        separatorClone.removeAttribute('id');
        separatorClone.classList.add('open-prompt-separator');
        container.appendChild(separatorClone);
      } else {
        container.classList.add('with-separator');
      }
      toolsArea.insertBefore(container, voiceCameraContainer);
      inserted = true;
    } else if (clearButtonContainer) {
      // Fallback: insert after clear button if no voice/camera buttons
      toolsArea.insertBefore(container, clearButtonContainer.nextSibling);
      container.classList.add('with-separator');
      inserted = true;
    }
  }

  // Last resort fallback
  if (!inserted) {
    const form = searchInput.closest('form');
    const searchBtn = form ? form.querySelector('button[type="submit"]') : null;
    if (searchBtn) {
      searchBtn.parentNode.insertBefore(container, searchBtn.nextSibling);
    } else if (searchInput.parentNode) {
      searchInput.parentNode.appendChild(container);
    }
  }
}

function init() {
  chrome.storage.sync.get({
    chatgpt: true,
    claude: true,
    perplexity: true
  }, (settings) => {
    addAiLinks(settings);
  });
}

// Initialize on page load
window.addEventListener('load', init);

// Re-run on dynamic updates (Google Search is a SPA)
const observer = new MutationObserver(() => {
  if (!document.querySelector('.open-prompt-container')) {
    init();
  }
});
observer.observe(document.body, { childList: true, subtree: true });

// Update buttons when settings change
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === 'sync') {
    init();
  }
});
