
function Card(id, name) {
	var self = this;
	
	this.id = id;
	this.name = name;
	this.element = createCard();

	function createCard(name) {
		var card = $('<li class="card"></li>');
		var cardDescription = $('<p class="card-description"></p>');
		var cardDeleteBtn = $('<button class="btn-delete btn-2">x</button>');

		
		cardDeleteBtn.click(function(){
			self.removeCard();
		});
		
		cardDescription.text(self.name);
		card.append(cardDescription)
		card.append(cardDeleteBtn);
		
		return card;
	}
}
Card.prototype = {
	removeCard: function() {
		var self = this;
		$.ajax({
			url: baseUrl + '/card/' + self.id,
			method: 'DELETE',
			success: function(){
			self.element.remove();
      		}
    	});
	},
}