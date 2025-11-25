const AIS = [
  { id: 'chatgpt', label: chrome.i18n.getMessage('chatgpt') },
  { id: 'claude', label: chrome.i18n.getMessage('claude') },
  { id: 'perplexity', label: chrome.i18n.getMessage('perplexity') }
];

// Localize HTML
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-i18n]').forEach(elem => {
    const key = elem.getAttribute('data-i18n');
    elem.textContent = chrome.i18n.getMessage(key);
  });
});

// Load settings
chrome.storage.sync.get({
  chatgpt: true,
  claude: true,
  perplexity: true
}, (items) => {
  const container = document.getElementById('options');
  
  AIS.forEach(ai => {
    const div = document.createElement('div');
    div.className = 'option';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = ai.id;
    checkbox.checked = items[ai.id];
    
    const label = document.createElement('label');
    label.htmlFor = ai.id;
    label.textContent = ai.label;
    
    checkbox.addEventListener('change', () => {
      // Prevent all unchecked
      const checkedCount = Array.from(container.querySelectorAll('input[type="checkbox"]'))
        .filter(cb => cb.checked).length;
      
      const status = document.getElementById('status');
        
      if (checkedCount === 0) {
        checkbox.checked = true;
        status.textContent = chrome.i18n.getMessage('errorAtLeastOne');
        return; 
      }
      
      // Clear error message on valid change
      status.textContent = '';
      
      const settings = {};
      settings[ai.id] = checkbox.checked;
      chrome.storage.sync.set(settings);
    });
    
    div.appendChild(checkbox);
    div.appendChild(label);
    container.appendChild(div);
  });
});
