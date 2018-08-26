const kanbanBoard = $('#kanban-content');
const startBtn = $('.kanban-start');
const kanbanIntro = $('#intro');

$(document).ready(function(){
	kanbanBoard.hide();

	startBtn.on('click', function(){
		kanbanBoard.show();
		kanbanIntro.hide();
	})
})