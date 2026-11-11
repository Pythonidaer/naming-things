/* Exact close SVG from Pythonidaer/design-lab johnny-icons.js, sha 30b0dff6566203d499556bfd93b0305d60012cbb. */
'use strict';
const TypeStudyIcons=Object.freeze({close:'<svg class="dl-ui-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="currentColor" aria-hidden="true" focusable="false"><g transform="rotate(45 16 16)"><path d="M5,14.666666666666666L27,14.666666666666666L27,17.333333333333332L5,17.333333333333332Z"/><path d="M14.666666666666666,5L17.333333333333332,5L17.333333333333332,27L14.666666666666666,27Z"/></g></svg>'});
document.querySelectorAll('[data-icon]').forEach(el=>{el.innerHTML=TypeStudyIcons[el.dataset.icon]||''});
