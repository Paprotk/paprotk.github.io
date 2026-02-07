function injectSpinningBob() {
  const headerLogo = document.querySelector('.md-header__button.md-logo');
  
  // Only inject if the logo exists and Bob isn't already there
  if (headerLogo && !headerLogo.querySelector('.spinning-bob-overlay')) {
    const bobImg = document.createElement('img');
    
    bobImg.src = "/images/logo/spinning_bob.webp"; 
    
    bobImg.classList.add('spinning-bob-overlay');
    bobImg.alt = "";
    headerLogo.appendChild(bobImg);
  }
}

// 1. Run on initial load
document.addEventListener("DOMContentLoaded", injectSpinningBob);

// 2. Watch for changes for navigation.instant)
const observer = new MutationObserver(injectSpinningBob);
observer.observe(document.body, { childList: true, subtree: true });

// 3. Fallback for MkDocs Material specifically
if (typeof document.subscribe === "function") {
  document.subscribe(injectSpinningBob);
}