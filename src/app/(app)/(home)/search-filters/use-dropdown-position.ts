export const useDropdownPosition = (
  ref: React.RefObject<HTMLDivElement | null> | React.RefObject<HTMLDivElement>,
) => {
  const getDropdownPosition = () => {
    if (!ref.current) {
      return { top: 0, left: 0 };
    }

    const rect = ref.current.getBoundingClientRect();
    const dropdownWidth = 240; // Width of the dropdown in pixels (w-60 = 15rem = 240px)

    // Calculate the initial position
    let left = rect.left + window.scrollX;
    const top = rect.bottom + window.scrollY;

    // Check if the dropdown will overflow on the left side
    if (left + dropdownWidth > window.innerWidth) {
      left = rect.right + window.scrollX - dropdownWidth;

      if (left < 0) {
        left = window.innerWidth - dropdownWidth - 16;
      }
    }

    if (left < 0) {
      left = 16;
    }

    return { top: top, left: left };
  };

  return {
    getDropdownPosition,
  };
};
