const headerEl = document.body.querySelector('header');
const footerEl = document.body.querySelector('footer');

const headerHeight = headerEl.clientHeight;
const footerHeight = footerEl.clientHeight;
const pageHeight = document.documentElement.clientHeight;
const minBoxHeight = pageHeight - headerHeight - footerHeight;
export const minBoxHeightPx = `${minBoxHeight}px`;
export const pageWidth = `${document.documentElement.clientWidth}px`;
