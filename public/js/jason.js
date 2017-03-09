/**
 * Created by jack on 2017/3/3.
 */
$(function () {
    $('#goHome').on('click',function () {
        location.href = "https://jason-chen-2017.github.io/Jason-Chen-2017/";
    });

    //meditor 默认点开全屏
    $('.fa-arrows-alt').click();
});

function goHome() {
    location.href = "https://jason-chen-2017.github.io/Jason-Chen-2017/";
}

function goFreeBook() {
    window.open("https://universsky.github.io/",'_blank');
}



