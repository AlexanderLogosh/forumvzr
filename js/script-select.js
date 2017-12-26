// Функция очистки класса

function cleanSelect (select) {

    // Очищаем от стилей

    return $(select).removeClass('icon-ok').removeClass('icon-error')

}

 

// Формируем select и его обработчики

function formSelect() {

    // получаем выпадающий список с уже очищенными классами

    var select = cleanSelect('.select-events');

 

    // Добавляем класс, который соответствует выбранному элементу

    select.addClass(select.val() == '1' ? 'icon-ok' : 'icon-error');

 

    // Добавляем стили, чтобы у списка не было видно полосы прокрутки

    select.css({ height: 'auto', overflow: 'hidden', zIndex: '40000' });

 

    // Определяем обработчик на событие ухода мышки с области элемента

    select.on('mouseleave', function () {

        // Устанавливаем обычный размер

        this.size = 1;

        // Добавляем класс стиля в соответствии с выбранным элементом

        cleanSelect(this).addClass($(this).val() == '1' ? 'icon-ok' : 'icon-error');

    });

 

    // Определяем обработчик на событие ухода мышки с области элемента

    select.on('mouseover', function () {

        // Очищаем стиль списка, чтобы он не мешал отображению

        cleanSelect(this);

        // Устанавливаем размер, равный количеству элементов

        this.size = $(this).find('option').length;

    });

}

 

// После загрузки DOM - получаем список

$(function () {

    formSelect();

});
