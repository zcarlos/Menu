function $(selector) {
    return document.querySelector(selector);
}

function $$(selectors) {
    return document.querySelectorAll(selectors);
}

let dropdown_menu_ul_style = $$('.dropdown-menu');
const mediaScreenWidth = window.innerWidth;

window.onresize = clearStyleResizing;
function clearStyleResizing() {
	console.log("OUT" + $('body').clientWidth);
	if ($('body').clientWidth <= 625) {
		console.log("IN" + $('body').clientWidth);
		dropdown_menu_ul_style.forEach((item, i) => {
			dropdown_menu_ul_style[i].style.transform = 'none';
		})
	} else {
		dropdown_menu_ul_style.forEach((item, i) => {
			dropdown_menu_ul_style[i].style.transform = 'translateY(-100%)';
		})
	}

}

$$('.toggle-dropdown').forEach((item, i) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(mediaScreenWidth);
        /*console.log(getComputedStyle(dropdown_menu_ul_style[i]).transform);*/
        if (getComputedStyle(dropdown_menu_ul_style[i]).transform === 'matrix(1, 0, 0, 1, 0, -248)') {
            clear_dropdown_menu_styles();
            dropdown_menu_ul_style[i].style.transform = 'translateY(0%)';
        } else {
            clear_dropdown_menu_styles();
        }   
    });
});

function clear_dropdown_menu_styles() {
    dropdown_menu_ul_style.forEach((item, i) => {    	
        dropdown_menu_ul_style[i].style.transform = 'translateY(-100%)';    
    })
}

/**
 * Close the dropdown when clciked outside
 * If the translated box menu is down 
 */
window.onclick = function(e) {	
	if (!e.target.matches('.toggle-dropdown')) {
		dropdown_menu_ul_style.forEach((item, i) => {			
            if (getComputedStyle(item).transform === 'matrix(1, 0, 0, 1, 0, 0)') {
                item.style.transform = 'translateY(-100%)';
            }        
        });
	}
}


/*let dropdown_menu_ul_style = $$('.dropdown-menu');

$$('.toggle-dropdown').forEach((item, i) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        if (getComputedStyle(dropdown_menu_ul_style[i]).display === 'none') {
            clear_dropdown_menu_styles();
            dropdown_menu_ul_style[i].style.display = 'block';
        } else {
            clear_dropdown_menu_styles();
        }
    });
});

function clear_dropdown_menu_styles() {
    dropdown_menu_ul_style.forEach((item, i) => {
        dropdown_menu_ul_style[i].style.display = 'none';
    })
}

$$('.menu > li:not(.toggle-dropdown)').forEach((item, i) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        dropdown_menu_ul_style.forEach((item, i) => {
            if (getComputedStyle(item).display === 'block') {
                item.style.display = 'none';
            }
        });
    });
})*/