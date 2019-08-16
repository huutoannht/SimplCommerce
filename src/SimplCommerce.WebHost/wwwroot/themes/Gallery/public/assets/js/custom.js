/**
 * Created by Vilmantas on 2017.01.12.
 */
function isJSON (data) {
    if (typeof data != 'string')
        data = JSON.stringify(data);

    try {
        JSON.parse(data);
        return true;
    } catch (e) {
        return false;
    }
}

function goToById(id, extraposition = 0){

    $('html,body').animate({
            scrollTop: $("#"+id).offset().top + extraposition},
        'slow');
}