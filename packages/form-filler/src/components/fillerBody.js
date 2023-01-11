import React from 'react'
import { useEffect } from "react"
// import filler from '../../public/filler.svg'

const tiltShake = [
  { transform: 'skewY(-15deg)', offset: 0 },
  { transform: 'skewY(15deg)', offset: 0.25},
  { transform: 'skewY(-15deg)', offset: 0.5},
  { transform: 'skewY(15deg)', offset: 0.75},
  { transform: 'skewY(0deg))', offset: 1}
];

export default function FillerBody({ formsMap = [], fillerRef = {} }) {
  let posX, posY;
  let transtionTime = 500;

  useEffect(() => {
    addDragFunctionality();
    attachFillerClickListener();
    fillerPositionUpdate();
  }, []);

  const attachFillerClickListener = () => {
    fillerRef.current.childNodes[1].addEventListener('mouseup', () => {
      isNotDragging() && _fillDummyData();
    });
  }

  const isNotDragging = () => {
    let fillerElement = fillerRef.current;
    let newPosX = fillerElement.offsetLeft;
    let newPosY = fillerElement.offsetTop;
    let xDiff = Math.abs(newPosX - posX);
    let yDiff = Math.abs(newPosY - posY);
    return xDiff<5 && yDiff<5;
  }

  const fillerPositionUpdate = () => {
    let fillerElement = fillerRef.current;
    posX = fillerElement.offsetLeft;
    posY = fillerElement.offsetTop;
  }

  // function constructFillerElement() {

  //   let existingContainer = document.getElementById('filler-container');
  //   if (existingContainer) {
  //     existingContainer.remove();
  //   }

  //   return filler;
  // }

  const addDragFunctionality = () => {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    let fillerElement = fillerRef.current;
    fillerElement.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      fillerElement.style.top = (fillerElement.offsetTop - pos2) + 'px';
      fillerElement.style.left = (fillerElement.offsetLeft - pos1) + 'px';
    }

    const closeDragElement = () => {
      fillerPositionUpdate();
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    };
  }

  const inputFill = (element, value) => {
    element.value = value;
    // for all kinds of input, trigger onchange oninput events to sync data with the framework's data layer
    var changeEvent = new Event('change', { bubbles: true });
    var inputEvent = new Event('input', { bubbles: true });
    element.dispatchEvent(inputEvent);
    element.dispatchEvent(changeEvent);
  }

  const findFormFieldMap = () => {
    let formFieldMap = formsMap.find((fieldsMap) => !!document.querySelector(fieldsMap.selector)) || {};
    return formFieldMap.fields || null;
  }

  const addTimedStyle = (element, prop, value) => {
    element.style[prop]= value;
    setTimeout(() => {
      element.style[prop]= null;
    }, transtionTime);
  }

  async function _fillDummyData() {
    let formFieldMap = findFormFieldMap();
    let buttonElement = fillerRef.current.childNodes[1];
    if (!formFieldMap) {
      buttonElement.animate(tiltShake, transtionTime);
      addTimedStyle(buttonElement, 'border', '2px solid red');
      return;
    }

    addTimedStyle(buttonElement, 'border', '2px solid #1BAD71');

    // filler
    formFieldMap.forEach(async (field) => {
      let element = document.querySelector(field.selector);

      if (!element) {
        // eslint-disable-next-line no-console
        console.log('Cannot find valid element for :', field);
        return;
      }

      // eslint-disable-next-line no-console
      console.log('Filling  ', { el: element, field });

      element.focus();

      setTimeout(() => {
        if (field.type === 'select') {
          element.value = field.value;
          // To sync data with the framework's data layer
          var selectEvent = new Event('select', { bubbles: true });
          element.dispatchEvent(selectEvent);
        } else if (field.type === 'file-upload') {

          // let container = new DataTransfer();
          // container.items.add(field.value);

          // let inputElement = element.shadowRoot.querySelector('input');
          // inputElement.files = container.files;
          // inputElement.dispatchEvent(new Event('change', { bubbles: true }));
          // inputElement.dispatchEvent(new Event('input', { bubbles: true }));
        } else if (field.type === 'date') {
          element.value = field.value;

          element.dispatchEvent(new Event('select', { bubbles: true }));
          element.dispatchEvent(new Event('input', { bubbles: true }));
        } else {
          if (field.type === 'checkbox') {
            element.checked = true;
            // To sync data with the framework's data layer
            element.dispatchEvent(new Event('change', { bubbles: true }));
          }  else {
            inputFill(element, field.value);
          }
          element.blur();
        }
      }, 0);
    });

  }

  const FillerLogo = () => {
    return (
      <svg
        viewBox="-1 0 455 455.42933"
        width="26px"
        height="26px"
        style={{flexShrink: 0}}
      >
        <path d="m432.183594 412.761719h-384c-11.777344 0-21.335938 9.558593-21.335938 21.335937 0 11.773438 9.558594 21.332032 
          21.335938 21.332032h384c11.773437 0 21.332031-9.558594 21.332031-21.332032 0-11.777344-9.558594-21.335937-21.332031-21.335937zm0 0" />
        <path d="m180.023438 391.40625c16.0625 0 32.128906-6.121094 44.351562-18.34375l161.003906-161.003906c8.339844-8.339844 
          8.339844-21.824219 0-30.164063l-175.640625-175.636719c-8.339843-8.34375-21.824219-8.34375-30.164062 0l-161.023438 160.980469c-24.449219 
          24.445313-24.449219 64.253907 0 88.703125l117.097657 117.097656c12.246093 12.246094 28.308593 18.367188 44.375 18.367188zm14.632812-339.921875 
          145.472656 145.46875-2.472656 2.476563h-290.261719c.511719-.640626.746094-1.429688 1.34375-2.027344zm0 0" />
        <path d="m346.847656 336.324219c0 30.378906 23.9375 55.105469 53.335938 55.105469 29.394531 0 53.332031-24.726563 53.332031-55.105469 
          0-24.488281-30.589844-72.808594-39.976563-87.015625-5.910156-9.003906-20.800781-9.003906-26.710937 0-9.386719 14.207031-39.980469 
          62.527344-39.980469 87.015625zm0 0" />
      </svg>
    )
  }
  return (
    <button style={{padding: "0.43rem"}}>
      <FillerLogo />
    </button>
  )
}
