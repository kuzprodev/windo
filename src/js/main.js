import changeModalState from './modules/changeModalState'
import forms from './modules/forms'
import images from './modules/images'
import modals from './modules/modals'
import tabs from './modules/tabs'
import timer from './modules/timer'
import './slider'


window.addEventListener('DOMContentLoaded', () => {
    'use strict'
    // let modalState = {
    //     form: 0,
    //     type: "tree"
    // } //якщо юзер не зробив вибір то такі данні підуть у форму, якщо зробив то ті шо зробив
    let modalState = {}
    let deadline = '2024-02-01'

    changeModalState(modalState)
    modals()
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active')
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click')
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block')
    forms(modalState)
    timer('.container1', deadline)
    images()
})