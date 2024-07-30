export const autoResize = (ref) => {
  const textarea = ref.current;
  textarea.style.height = "auto"; // Reset the height
  textarea.style.height = textarea.scrollHeight + "px"; // Set the height to the scrollHeight
};
