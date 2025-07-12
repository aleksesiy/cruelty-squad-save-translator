interface CreateElementOptions {
  tag?: keyof HTMLElementTagNameMap;
  text?: string;
  parent?: HTMLElement;
  classes?: string[];
  id?: string;
}

/**
 * Function to create an HTML element with specified parameters.
 * @param {Object} options - Object containing parameters for creating the element.
 * @param {string=} options.tag - HTML element tag (default is 'div').
 * @param {string=} options.text - Text content of the element (default is an empty string).
 * @param {HTMLElement=} options.parent - Parent HTML element to which the created element is appended (default is null).
 * @param {Array=} options.classes - Array of classes to be added to the created element (default is an empty array).
 * @returns {HTMLElement} - Created HTML element.
 */
function createElement<T extends keyof HTMLElementTagNameMap>(
  options: { tag: T } & CreateElementOptions,
): HTMLElementTagNameMap[T] {
  // Default values
  const { tag, text = "", parent, classes = [], id } = options;

  const element = document.createElement(tag);
  element.textContent = text;

  // Adding classes if provided
  if (classes.length > 0) {
    element.classList.add(...classes);
  }
  // Adding id if provided
  if (id !== undefined) {
    element.id = id;
  }

  // Adding the element to the parent element if necessary
  if (parent != undefined) {
    parent.append(element);
  }

  return element; // Returning the created element for further manipulations
}

export { createElement };
