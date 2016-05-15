describe('Favorite Food Filter', function () {
	var $controller, favoriteFood;

	beforeEach(module('app'));

	beforeEach(inject(function ($filter) {
		favoriteFood = $filter('favoriteFood');
	}));

	it('should filter by favorite food', function () {
		var list = [
			{
				name: 'Bob',
				favoriteFood: 'burger'
			},
			{
				name: 'Bob2',
				favoriteFood: 'carrots'
			},
			{
				name: 'Bob3',
				favoriteFood: 'burger'
			}
		];

		var results = favoriteFood(list, 'burger');

		expect(results.length).toBe(2);
		expect(results[0].name).toBe('Bob');
	});

});
