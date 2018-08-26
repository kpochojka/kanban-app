var board = {
	name: 'To Do List',
	createColumn: function(column) {
	  this.element.append(column.element);
	  initSortable();
	},
	element: $('#board .column-container')
};
$('.create-column').click(function(){
	var columnName = prompt("Add column's name");
	//board.createColumn(new Column(columnName));
	$.ajax({
		url: baseUrl + '/column',
		method: 'POST',
		data: {
			name: columnName
		},
		success: function(response){
			var column = new Column(response.id, columnName);
			board.createColumn(column);
		}
	});
});
	
	
function initSortable() {
    $('.card-list').sortable({
      connectWith: '.card-list',
      placeholder: 'card-placeholder'
    }).disableSelection();
}