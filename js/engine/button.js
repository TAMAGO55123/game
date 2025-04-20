const button_click_sound_start = () => {
    if(text_running == false)(new Sound('/music/textsound.mp3')).start();
    else return;
}

button.attack.addEventListener('click', button_click_sound_start);
button.magic.addEventListener('click', button_click_sound_start);
button.guard.addEventListener('click', button_click_sound_start);
button.mydata.addEventListener('click', button_click_sound_start);
