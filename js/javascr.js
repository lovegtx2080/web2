
$(document).ready(function(){
	var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
	
	$('.show-more').on('click', function () {
		var items = $('.catalog-item.hide'); //Получаем все скрытые блоки с осликами
		//Если их больше 0
		if (items.length > 0)
		{
			//Проходим по первым трем и показываем их, убирая класс hide
			for (var i = 0; i < 3; i++)
			{
				$(items[i]).removeClass('hide');
			}
		}		
	});
});