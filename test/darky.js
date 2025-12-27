
  // ... your existing code ...
  const darkmode = new Darky();
  darkmode.enable();

  // Custom code to make the button draggable
  window.addEventListener('DOMContentLoaded', () => {
    // 1. Find the button using its class name
    // DarkyJS v1.2.0+ typically uses 'darkmode--trigger'
    const button = document.querySelector('.darkmode--trigger');

    if (button) {
      makeElementDraggable(button);
    } else {
      console.warn('DarkyJS button not found. Check the class name.');
    }

    function makeElementDraggable(el) {
      let isDragging = false;
      let startX, startY, initialLeft, initialTop;

      el.addEventListener('mousedown', (e) => {
        // Prevent default browser dragging behavior
        e.preventDefault();
        
        isDragging = false;
        startX = e.clientX;
        startY = e.clientY;
        
        // Get current position
        const rect = el.getBoundingClientRect();
        initialLeft = rect.left;
        initialTop = rect.top;

        // Prepare element for positioning
        el.style.position = 'fixed';
        el.style.bottom = 'auto';
        el.style.right = 'auto';
        el.style.left = `${initialLeft}px`;
        el.style.top = `${initialTop}px`;
        el.style.cursor = 'grabbing';

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
      });

      function onMouseMove(e) {
        // Calculate distance moved
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;

        // If moved more than 5px, consider it a drag (to avoid accidental clicks)
        if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
          isDragging = true;
        }

        // Update position
        el.style.left = `${initialLeft + dx}px`;
        el.style.top = `${initialTop + dy}px`;
      }

      function onMouseUp(e) {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        el.style.cursor = 'pointer';

        // If it was a drag operation, prevent the click (toggle) action
        if (isDragging) {
          const preventClick = (clickEvent) => {
            clickEvent.stopImmediatePropagation();
            clickEvent.preventDefault();
            el.removeEventListener('click', preventClick, true);
          };
          el.addEventListener('click', preventClick, true);
        }
      }
    }
  });

