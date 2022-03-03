// get the inputs
//const inputs = [].slice.call(document.querySelectorAll('.controls input'));
const block_placements = [].slice.call(document.querySelectorAll('.controls .block-align input'));
const text_alignments = [].slice.call(document.querySelectorAll('.controls .text-align input'));
const text_valignments = [].slice.call(document.querySelectorAll('.controls .text-valign input'));
const text_style_top = document.querySelector('.text-styles--top');
const text_style_main = document.querySelector('.text-styles--main');
const text_style_bottom = document.querySelector('.text-styles--bottom');
const text_style_top_display = document.querySelector('.display-line__top');
const text_style_main_display = document.querySelector('.display-line__main');
const text_style_bottom_display = document.querySelector('.display-line__bottom');
const text_style_button1_display = document.querySelector('.display-line__button1');
const text_style_button2_display = document.querySelector('.display-line__button2');

var selected_style_top = '';
var selected_style_main = '';
var selected_style_bottom = '';

// listen for changes
//inputs.forEach(input => input.addEventListener('change', handleUpdate));

block_placements.forEach(block_placement => block_placement.addEventListener('change', handleBlockUpdate));

text_alignments.forEach(text_alignment => text_alignment.addEventListener('change', handleTextAlignUpdate));

text_valignments.forEach(text_valignment => text_valignment.addEventListener('change', handleTextVAlignUpdate));

text_style_top.addEventListener('change', (event) => {
  selected_style_top = event.target.value;
  handleTextStyleTopUpdate();
});

text_style_main.addEventListener('change', (event) => {
  selected_style_main = event.target.value;
  handleTextStyleMainUpdate();
});

text_style_bottom.addEventListener('change', (event) => {
  selected_style_bottom = event.target.value;
  handleTextStyleBottomUpdate();
});

text_style_top_display.addEventListener('change', handleDisplayTopUpdate);
text_style_main_display.addEventListener('change', handleDisplayMainUpdate);
text_style_bottom_display.addEventListener('change', handleDisplayBottomUpdate);
text_style_button1_display.addEventListener('change', handleDisplayCtaUpdate1);
text_style_button2_display.addEventListener('change', handleDisplayCtaUpdate2);

function handleUpdate(e) {
  document.querySelector(':root').style.setProperty(`--${this.id}`, this.value);
}


function handleDisplayTopUpdate(e) {
  document.querySelector(':root').style.setProperty(`--text-line-top-display`, this.checked);
  var viewport = document.getElementById('sg-viewport');
  viewport.contentWindow.document.querySelector(':root').style.setProperty(`--text-line-top-display`, this.checked);
  if (this.checked == true) {
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('hidden');
  } else if (this.checked == false) {
    viewport.contentWindow.document.querySelector('.text-top-line').classList.add('hidden');
  };
}

function handleDisplayMainUpdate(e) {
  document.querySelector(':root').style.setProperty(`--text-line-main-display`, this.checked);
  var viewport = document.getElementById('sg-viewport');
  viewport.contentWindow.document.querySelector(':root').style.setProperty(`--text-line-main-display`, this.checked);
  if (this.checked == true) {
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('hidden');
  } else if (this.checked == false) {
    viewport.contentWindow.document.querySelector('.text-main-line').classList.add('hidden');
  };
}

function handleDisplayBottomUpdate(e) {
  document.querySelector(':root').style.setProperty(`--text-line-bottom-display`, this.checked);
  var viewport = document.getElementById('sg-viewport');
  viewport.contentWindow.document.querySelector(':root').style.setProperty(`--text-line-bottom-display`, this.checked);
  if (this.checked == true) {
    viewport.contentWindow.document.querySelector('.text-bottom-line').classList.remove('hidden');
  } else if (this.checked == false) {
    viewport.contentWindow.document.querySelector('.text-bottom-line').classList.add('hidden');
  };
}

function handleDisplayCtaUpdate1(e) {
  var viewport = document.getElementById('sg-viewport');
  if (this.checked == true) {
    viewport.contentWindow.document.querySelector('[name="submit1"]').classList.remove('hidden');
  } else if (this.checked == false) {
    viewport.contentWindow.document.querySelector('[name="submit1"]').classList.add('hidden');
  };
}

function handleDisplayCtaUpdate2(e) {
  var viewport = document.getElementById('sg-viewport');
  if (this.checked == true) {
    viewport.contentWindow.document.querySelector('[name="submit2"]').classList.remove('hidden');
  } else if (this.checked == false) {
    viewport.contentWindow.document.querySelector('[name="submit2"]').classList.add('hidden');
  };
}

function handleBlockUpdate(e) {
  //document.querySelector(':root').style.setProperty(`--block-alignment`, this.value);
  var viewport = document.getElementById('sg-viewport');
  //viewport.contentWindow.document.querySelector('.component').style.setProperty(`--block-alignment`, this.value);
  if (this.value == 'left') {
    viewport.contentWindow.document.querySelector('.component').classList.remove('block-left');
    viewport.contentWindow.document.querySelector('.component').classList.remove('block-center');
    viewport.contentWindow.document.querySelector('.component').classList.remove('block-right');
    viewport.contentWindow.document.querySelector('.component').classList.add('block-left');
  } else if (this.value == 'center') {
    viewport.contentWindow.document.querySelector('.component').classList.remove('block-left');
    viewport.contentWindow.document.querySelector('.component').classList.remove('block-center');
    viewport.contentWindow.document.querySelector('.component').classList.remove('block-right');
    viewport.contentWindow.document.querySelector('.component').classList.add('block-center');
  } else if (this.value == 'right') {
    viewport.contentWindow.document.querySelector('.component').classList.remove('block-left');
    viewport.contentWindow.document.querySelector('.component').classList.remove('block-center');
    viewport.contentWindow.document.querySelector('.component').classList.remove('block-right');
    viewport.contentWindow.document.querySelector('.component').classList.add('block-right');
  };
}

function handleTextAlignUpdate(e) {
  document.querySelector(':root').style.setProperty(`--text-alignment`, this.value);
  var viewport = document.getElementById('sg-viewport');
  viewport.contentWindow.document.querySelector(':root').style.setProperty(`--text-alignment`, this.value);
  if (this.value == 'left') {
    viewport.contentWindow.document.querySelector('.component').classList.remove('text-left');
    viewport.contentWindow.document.querySelector('.component').classList.remove('text-center');
    viewport.contentWindow.document.querySelector('.component').classList.remove('text-right');
    viewport.contentWindow.document.querySelector('.component').classList.add('text-left');
  } else if (this.value == 'center') {
    viewport.contentWindow.document.querySelector('.component').classList.remove('text-left');
    viewport.contentWindow.document.querySelector('.component').classList.remove('text-center');
    viewport.contentWindow.document.querySelector('.component').classList.remove('text-right');
    viewport.contentWindow.document.querySelector('.component').classList.add('text-center');
  } else if (this.value == 'right') {
    viewport.contentWindow.document.querySelector('.component').classList.remove('text-left');
    viewport.contentWindow.document.querySelector('.component').classList.remove('text-center');
    viewport.contentWindow.document.querySelector('.component').classList.remove('text-right');
    viewport.contentWindow.document.querySelector('.component').classList.add('text-right');
  };
}

function handleTextVAlignUpdate(e) {
  document.querySelector(':root').style.setProperty(`--text-valignment`, this.value);
  var viewport = document.getElementById('sg-viewport');
  viewport.contentWindow.document.querySelector(':root').style.setProperty(`--text-valignment`, this.value);
  if (this.value == 'top') {
    viewport.contentWindow.document.querySelector('.component').classList.remove('align-top');
    viewport.contentWindow.document.querySelector('.component').classList.remove('align-center');
    viewport.contentWindow.document.querySelector('.component').classList.remove('align-bottom');
    viewport.contentWindow.document.querySelector('.component').classList.add('align-top');
  } else if (this.value == 'center') {
    viewport.contentWindow.document.querySelector('.component').classList.remove('align-top');
    viewport.contentWindow.document.querySelector('.component').classList.remove('align-center');
    viewport.contentWindow.document.querySelector('.component').classList.remove('align-bottom');
    viewport.contentWindow.document.querySelector('.component').classList.add('align-center');
  } else if (this.value == 'bottom') {
    viewport.contentWindow.document.querySelector('.component').classList.remove('align-top');
    viewport.contentWindow.document.querySelector('.component').classList.remove('align-center');
    viewport.contentWindow.document.querySelector('.component').classList.remove('align-bottom');
    viewport.contentWindow.document.querySelector('.component').classList.add('align-bottom');
  };
}

function handleTextStyleTopUpdate(e) {
  var viewport = document.getElementById('sg-viewport');
  if (selected_style_top == 'level-7') {
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-7');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-7-bold');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-6');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-6-bold');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-5');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-4');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-3');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-2');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-1');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.add('level-7');
  } else if (selected_style_top == 'level-7-bold') {
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-7');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-7-bold');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-6');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-6-bold');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-5');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-4');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-3');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-2');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-1');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.add('level-7-bold');
  } else if (selected_style_top == 'level-6') {
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-7');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-7-bold');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-6');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-6-bold');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-5');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-4');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-3');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-2');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-1');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.add('level-6');
  } else if (selected_style_top == 'level-6-bold') {
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-7');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-7-bold');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-6');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-6-bold');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-5');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-4');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-3');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-2');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-1');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.add('level-6-bold');
  } else if (selected_style_top == 'level-5') {
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-7');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-7-bold');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-6');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-6-bold');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-5');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-4');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-3');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-2');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-1');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.add('level-5');
  } else if (selected_style_top == 'level-4') {
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-7');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-7-bold');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-6');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-6-bold');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-5');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-4');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-3');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-2');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-1');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.add('level-4');
  } else if (selected_style_top == 'level-3') {
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-7');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-7-bold');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-6');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-6-bold');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-5');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-4');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-3');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-2');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-1');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.add('level-3');
  } else if (selected_style_top == 'level-2') {
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-7');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-7-bold');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-6');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-6-bold');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-5');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-4');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-3');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-2');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-1');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.add('level-2');
  } else if (selected_style_top == 'level-1') {
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-7');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-7-bold');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-6');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-6-bold');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-5');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-4');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-3');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-2');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.remove('level-1');
    viewport.contentWindow.document.querySelector('.text-top-line').classList.add('level-1');
  };
}

function handleTextStyleMainUpdate(e) {
  var viewport = document.getElementById('sg-viewport');
  if (selected_style_main == 'level-7') {
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-7');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-7-bold');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-6');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-6-bold');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-5');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-4');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-3');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-2');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-1');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.add('level-7');
  } else if (selected_style_main == 'level-7-bold') {
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-7');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-7-bold');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-6');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-6-bold');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-5');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-4');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-3');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-2');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-1');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.add('level-7-bold');
  } else if (selected_style_main == 'level-6') {
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-7');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-7-bold');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-6');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-6-bold');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-5');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-4');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-3');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-2');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-1');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.add('level-6');
  } else if (selected_style_main == 'level-6-bold') {
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-7');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-7-bold');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-6');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-6-bold');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-5');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-4');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-3');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-2');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-1');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.add('level-6-bold');
  } else if (selected_style_main == 'level-5') {
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-7');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-6');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-5');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-4');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-3');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-2');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-1');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.add('level-5');
  } else if (selected_style_main == 'level-4') {
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-7');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-6');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-5');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-4');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-3');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-2');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-1');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.add('level-4');
  } else if (selected_style_main == 'level-3') {
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-7');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-6');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-5');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-4');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-3');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-2');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-1');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.add('level-3');
  } else if (selected_style_main == 'level-2') {
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-7');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-6');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-5');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-4');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-3');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-2');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-1');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.add('level-2');
  } else if (selected_style_main == 'level-1') {
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-7');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-6');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-5');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-4');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-3');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-2');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.remove('level-1');
    viewport.contentWindow.document.querySelector('.text-main-line').classList.add('level-1');
  };
}

function handleTextStyleBottomUpdate(e) {
  var viewport = document.getElementById('sg-viewport');
  if (selected_style_bottom == 'level-2') {
    viewport.contentWindow.document.querySelector('.text-bottom-line').classList.remove('level-7');
    viewport.contentWindow.document.querySelector('.text-bottom-line').classList.remove('level-6');
    viewport.contentWindow.document.querySelector('.text-bottom-line').classList.remove('level-5');
    viewport.contentWindow.document.querySelector('.text-bottom-line').classList.remove('level-4');
    viewport.contentWindow.document.querySelector('.text-bottom-line').classList.remove('level-3');
    viewport.contentWindow.document.querySelector('.text-bottom-line').classList.remove('level-2');
    viewport.contentWindow.document.querySelector('.text-bottom-line').classList.remove('level-1');
    viewport.contentWindow.document.querySelector('.text-bottom-line').classList.add('level-2');
  } else if (selected_style_bottom == 'level-1') {
    viewport.contentWindow.document.querySelector('.text-bottom-line').classList.remove('level-7');
    viewport.contentWindow.document.querySelector('.text-bottom-line').classList.remove('level-6');
    viewport.contentWindow.document.querySelector('.text-bottom-line').classList.remove('level-5');
    viewport.contentWindow.document.querySelector('.text-bottom-line').classList.remove('level-4');
    viewport.contentWindow.document.querySelector('.text-bottom-line').classList.remove('level-3');
    viewport.contentWindow.document.querySelector('.text-bottom-line').classList.remove('level-2');
    viewport.contentWindow.document.querySelector('.text-bottom-line').classList.remove('level-1');
    viewport.contentWindow.document.querySelector('.text-bottom-line').classList.add('level-1');
  };
}

/* Content Editing */

var viewport = document.getElementById('sg-viewport');
var contentTopLine = viewport.contentWindow.document.querySelector('.text-top-line');
var textareaContentTopLine = document.querySelector('.text-lines--input--top');
var htmlCodeTopLine = textareaContentTopLine.value;
var contentMainLine = viewport.contentWindow.document.querySelector('.text-main-line');
var textareaContentMainLine = document.querySelector('.text-lines--input--main');
var htmlCodeMainLine = textareaContentMainLine.value;
var contentBottomLine = viewport.contentWindow.document.querySelector('.text-bottom-line');
var textareaContentBottomLine = document.querySelector('.text-lines--input--bottom');
var htmlCodeBottomLine = textareaContentBottomLine.value;

function fillCode() {
	textareaContentTopLine.value = contentTopLine.innerHTML;
	textareaContentMainLine.value = contentMainLine.innerHTML;
	textareaContentBottomLine.value = contentBottomLine.innerHTML;
}

contentTopLine.addEventListener('input', fillCode);
contentMainLine.addEventListener('input', fillCode);
contentBottomLine.addEventListener('input', fillCode);
window.addEventListener('load', fillCode);

/*

  reset.addEventListener('click', function () {
    textareaHTML1.value = htmlCode1;
    textareaCSS1.value = cssCode1;
    textareaHTML2.value = htmlCode2;
    textareaCSS2.value = cssCode2;
    textareaHTML3.value = htmlCode3;
    textareaCSS3.value = cssCode3;
    fillCode();
  });


*/



// 'ish' js stuff 
(function(w){
	var sw = document.body.clientWidth, //Viewport Width
		minViewportWidth = 320, //Minimum Size for Viewport
		maxViewportWidth = 2600, //Maxiumum Size for Viewport
		viewportResizeHandleWidth = 14, //Width of the viewport drag-to-resize handle
		$sgWrapper = $('#sg-gen-container'), //Wrapper around viewport
		$sgViewport = $('#sg-viewport'), //Viewport element
		$sizePx = $('.sg-size-px'), //Px size input element in toolbar
		$sizeEms = $('.sg-size-em'), //Em size input element in toolbar
		$bodySize = 16, //Body size of the document
		discoID = false,
		fullMode = true,
		discoMode = false,
		hayMode = false,
		hash = window.location.hash.replace(/^.*?#/,'');
	
	//URL Form Submission
	$('#url-form').submit(function(e) {
		var urlVal = $('#url').val();
		var regex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;

		if(regex.test(urlVal)) {
			return;
		} else {
			var newURL = "http://"+urlVal;
			$('#url').val(newURL);
			return;
		}
		
	});
	
	$(w).resize(function(){ //Update dimensions on resize
		sw = document.body.clientWidth;	
		
		if(fullMode == true) {
			sizeFull();
		}
	});

	/* Nav Active State */
	function changeActiveState(link) {
		var $activeLink = link;
		$('.sg-size-options a').removeClass('active');

		if(link) {
			$activeLink.addClass('active');
		}
	}

	/* Pattern Lab accordion dropdown */
	$('.sg-acc-handle').on("click", function(e){
		var $this = $(this),
			$panel = $this.next('.sg-acc-panel');
		e.preventDefault();
		$this.toggleClass('active');
		$panel.toggleClass('active');
	});

	//Size Trigger
	$('#sg-size-toggle').on("click", function(e){
		e.preventDefault();
		$(this).parents('ul').toggleClass('active');
	});
	
	//Size View Events

	//Click Size Small Button
	$('#sg-size-s').on("click", function(e){
		e.preventDefault();
		killDisco();
		killHay();
		fullMode = false;
		window.location.hash = 's';
		changeActiveState($(this));
		sizeSmall();
	});
	
	//Click Size Medium Button
	$('#sg-size-m').on("click", function(e){
		e.preventDefault();
		killDisco();
		killHay();
		fullMode = false;
		window.location.hash = 'm';
		changeActiveState($(this));
		sizeMedium();
	});
	
	//Click Size Large Button
	$('#sg-size-l').on("click", function(e){
		e.preventDefault();
		killDisco();
		killHay();
		fullMode = false;
		window.location.hash = 'l';
		changeActiveState($(this));
		sizeLarge();
	});

	//Click Full Width Button
	$('#sg-size-full').on("click", function(e){ //Resets 
		e.preventDefault();
		killDisco();
		killHay();
		changeActiveState($(this));
		fullMode = true;
		window.location.hash = '';
		sizeiframe(sw);
	});
	
	//Click Random Size Button
	$('#sg-size-random').on("click", function(e){
		e.preventDefault();
		fullMode = false;
		sizeRandom();
		window.location.hash = 'random';
	});

	//Size Small
	function sizeSmall() {
		sizeiframe(getRandom(minViewportWidth,500));
	}
	
	//Size Medium
	function sizeMedium() {
		sizeiframe(getRandom(500,800));
	}
	
	//Size Large
	function sizeLarge() {
		sizeiframe(getRandom(800,1200));
	}

	//Size Random Size
	function sizeRandom() {
		killDisco();
		killHay();
		fullMode = false;
		changeActiveState($('#sg-size-random'));
		sizeiframe(getRandom(minViewportWidth,sw));
	}
	
	//Size Full
	function sizeFull() {
		sizeiframe(sw, false);
		updateSizeReading(sw);
	}
	
	//Click for Disco Mode, which resizes the viewport randomly
	$('#sg-size-disco').on("click", function(e){
		e.preventDefault();
		killHay();
		fullMode = false;

		if (discoMode) {
			killDisco();
			changeActiveState();
			window.location.hash = '';

		} else {
			startDisco();
			changeActiveState($(this));
			window.location.hash = 'disco';
		}
	});

	/* Disco Mode */
	function disco() {
		sizeiframe(getRandom(minViewportWidth,sw));
	}
	
	function killDisco() {
		discoMode = false;
		clearInterval(discoID);
		discoID = false;
	}
	
	function startDisco() {
		discoMode = true;
		discoID = setInterval(disco, 800);
	}

	//Stephen Hay Mode - "Start with the small screen first, then expand until it looks like shit. Time for a breakpoint!"
	$('#sg-size-hay').on("click", function(e){
		e.preventDefault();
		killDisco();

		if (hayMode) {
			killHay();
			changeActiveState();
			window.location.hash = '';
		} else {
			startHay();
			changeActiveState($(this));
			window.location.hash = 'hay';
		}
	});

	//Stop Hay! Mode
	function killHay() {
		var currentWidth = $sgViewport.width();
		hayMode = false;
		$sgViewport.removeClass('hay-mode');
		$sgWrapper.removeClass('hay-mode');
		sizeiframe(Math.floor(currentWidth));
	}
	
	// start Hay! mode
	function startHay() {
		hayMode = true;
		$sgWrapper.removeClass("vp-animate").width(minViewportWidth+viewportResizeHandleWidth);
		$sgViewport.removeClass("vp-animate").width(minViewportWidth);
		
		window.setTimeout(function(){
			$sgWrapper.addClass('hay-mode').width(maxViewportWidth+viewportResizeHandleWidth);
			$sgViewport.addClass('hay-mode').width(maxViewportWidth);
			
			setInterval(function(){ var vpSize = $sgViewport.width(); updateSizeReading(vpSize); },100);
		}, 200);
	}

	//Pixel input
	$sizePx.on('keydown', function(e){
		var val = Math.floor($(this).val());

		if(e.keyCode === 38) { //If the up arrow key is hit
			val++;
			sizeiframe(val,false);
			window.location.hash = val;
		} else if(e.keyCode === 40) { //If the down arrow key is hit
			val--;
			sizeiframe(val,false);
			window.location.hash = val;
		} else if(e.keyCode === 13) { //If the Enter key is hit
			e.preventDefault();
			sizeiframe(val); //Size Iframe to value of text box
			window.location.hash = val;
			$(this).blur();
		}
		changeActiveState();
	});

	$sizePx.on('keyup', function(){
		var val = Math.floor($(this).val());
		updateSizeReading(val,'px','updateEmInput');
	});

	//Em input
	$sizeEms.on('keydown', function(e){
		var val = parseFloat($(this).val());

		if(e.keyCode === 38) { //If the up arrow key is hit
			val++;
			sizeiframe(Math.floor(val*$bodySize),false);
		} else if(e.keyCode === 40) { //If the down arrow key is hit
			val--;
			sizeiframe(Math.floor(val*$bodySize),false);
		} else if(e.keyCode === 13) { //If the Enter key is hit
			e.preventDefault();
			sizeiframe(Math.floor(val*$bodySize)); //Size Iframe to value of text box
		}
		changeActiveState();
		
		window.location.hash = parseInt(val*$bodySize);
	});

	$sizeEms.on('keyup', function(){
		var val = parseFloat($(this).val());
		updateSizeReading(val,'em','updatePxInput');
	});
	
	// handle the MQ click
	$('#sg-mq a').on("click", function(e){
		e.preventDefault();
		var val = $(this).html();
		var type = (val.indexOf("px") !== -1) ? "px" : "em";
		val = val.replace(type,"");
		var width = (type === "px") ? val*1 : val*$bodySize;
		sizeiframe(width,true);
	});
	
	//Resize the viewport
	//'size' is the target size of the viewport
	//'animate' is a boolean for switching the CSS animation on or off. 'animate' is true by default, but can be set to false for things like nudging and dragging
	function sizeiframe(size,animate) {
		var theSize;

		if(size>maxViewportWidth) { //If the entered size is larger than the max allowed viewport size, cap value at max vp size
			theSize = maxViewportWidth;
		} else if(size<minViewportWidth) { //If the entered size is less than the minimum allowed viewport size, cap value at min vp size
			theSize = minViewportWidth;
		} else {
			theSize = size;
		}

		//Conditionally remove CSS animation class from viewport
		if(animate===false) {
			$sgWrapper.removeClass("vp-animate");
			$sgViewport.removeClass("vp-animate"); //If aninate is set to false, remove animate class from viewport
		} else {
			$sgWrapper.addClass("vp-animate");
			$sgViewport.addClass("vp-animate");
		}

		$sgWrapper.width(theSize+viewportResizeHandleWidth); //Resize viewport wrapper to desired size + size of drag resize handler
		$sgViewport.width(theSize); //Resize viewport to desired size

		updateSizeReading(theSize); //Update values in toolbar
	}
	

	
	
	//Update Pixel and Em inputs
	//'size' is the input number
	//'unit' is the type of unit: either px or em. Default is px. Accepted values are 'px' and 'em'
	//'target' is what inputs to update. Defaults to both
	function updateSizeReading(size,unit,target) {
		if(unit=='em') { //If size value is in em units
			emSize = size;
			pxSize = Math.floor(size*$bodySize);
		} else { //If value is px or absent
			pxSize = size;
			emSize = size/$bodySize;
		}
		
		if (target == 'updatePxInput') {
			$sizePx.val(pxSize);
		} else if (target == 'updateEmInput') {
			$sizeEms.val(emSize.toFixed(2));
		} else {
			$sizeEms.val(emSize.toFixed(2));
			$sizePx.val(pxSize);
		}
	}
	
	/* Returns a random number between min and max */
	function getRandom (min, max) {
	    var num = Math.random() * (max - min) + min;
	    
	    return parseInt(num);
	}
	
	function updateViewportWidth(size) {
		$sgViewport.width(size);
		$sgWrapper.width(size*1 + 14);
		
		updateSizeReading(size);
	}

	// handles widening the "viewport"
	//   1. on "mousedown" store the click location
	//   2. make a hidden div visible so that it can track mouse movements and make sure the pointer doesn't get lost in the iframe
	//   3. on "mousemove" calculate the math, save the results to a cookie, and update the viewport
	$('#sg-rightpull').mousedown(function(event) {
		
		// capture default data
		var origClientX = event.clientX;
		var origViewportWidth = $sgViewport.width();
		
		fullMode = false;
		
		// show the cover
		$("#sg-cover").css("display","block");
		
		// add the mouse move event and capture data. also update the viewport width
		$('#sg-cover').mousemove(function(event) {
			
			viewportWidth = (origClientX > event.clientX) ? origViewportWidth - ((origClientX - event.clientX)*2) : origViewportWidth + ((event.clientX - origClientX)*2);
			
			if (viewportWidth > minViewportWidth) {
				
				
				window.location.hash = viewportWidth;
				sizeiframe(viewportWidth,false);
			}
		});
	});

	// on "mouseup" we unbind the "mousemove" event and hide the cover again
	$('body').mouseup(function(event) {
		$('#sg-cover').unbind('mousemove');
		$('#sg-cover').css("display","none");
	});

	// capture the viewport width that was loaded and modify it so it fits with the pull bar
	var origViewportWidth = $sgViewport.width();
	$sgWrapper.width(origViewportWidth);
	$sgViewport.width(origViewportWidth - 14);
	updateSizeReading($sgViewport.width());



	//Read Hash In URL
	if(hash === 'hay') { 
		startHay(); ///Start Hay mode if hash says 'hay'
	} else if(hash === 'disco') {
		startDisco(); //Start disco mode if hash says 'disco'
	} else if(hash === 'random') {
		sizeRandom(); ///Random screen size if hash says 'random'
	} else if(hash === 'l') {
		sizeLarge();
	} else if(hash === 'm') {
		sizeMedium();
	} else if(hash === 's') {
		sizeSmall();
	} else if(!isNaN(hash) && hash !== '') { //if screen size is a number
		sizeiframe(parseInt(hash));
		console.log('this is a number');
	} else {
		sizeFull();
		console.log('this is not a number');
	}

})(this);

