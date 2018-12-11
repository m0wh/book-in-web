export function hideOnClickOutside(element) {
  const outsideClickListener = event => {
      if (!element.contains(event.target)) { // or use: event.target.closest(selector) === null
          if (isVisible(element)) {
              element.style.display = 'none'
              removeClickListener()
          }
      }
  }

  const removeClickListener = () => {
      document.removeEventListener('click', outsideClickListener)
  }

  document.addEventListener('click', outsideClickListener)
}

const isVisible = elem => !!elem && !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );