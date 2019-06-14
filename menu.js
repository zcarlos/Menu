function $(selector) {
    return document.querySelector(selector);
}

function $$(selectors) {
    return document.querySelectorAll(selectors);
}

let dropdown_menu_ul_style = $$('.dropdown-menu');

window.onresize = clearStyleOnResizing;

function clearStyleOnResizing() {	
	if ($('body').clientWidth <= 625) {
		dropdown_menu_ul_style.forEach((item, i) => {
			dropdown_menu_ul_style[i].style.cssText = 'transform: none;';
		})
	} else {
		dropdown_menu_ul_style.forEach((item, i) => {
			dropdown_menu_ul_style[i].style.cssText = 'transform: translateY(-100%);';
		})
	}
}

$$('.toggle-dropdown').forEach((item, i) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        if (getComputedStyle(dropdown_menu_ul_style[i]).transform === 'matrix(1, 0, 0, 1, 0, -248)') {
            clear_dropdown_menu_styles();
            dropdown_menu_ul_style[i].style.cssText = 'transform: translateY(0%);';
        } else {
            clear_dropdown_menu_styles();
        }   
    });
});

function clear_dropdown_menu_styles() {
    dropdown_menu_ul_style.forEach((item, i) => {
        dropdown_menu_ul_style[i].style.cssText = 'transform: translateY(-100%);'; 
    })
}

/**
 * Close the dropdown when clicked outside if the translated box menu is down 
 */
window.onclick = function(e) {	
	if (!e.target.matches('.toggle-dropdown')) {
		dropdown_menu_ul_style.forEach((item, i) => {			
            if (getComputedStyle(item).transform === 'matrix(1, 0, 0, 1, 0, 0)') {
                item.style.cssText = 'transform: translateY(-100%);';
            }        
        });
	}
}
