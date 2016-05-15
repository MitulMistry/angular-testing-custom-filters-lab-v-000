describe('removeAllVowels Filter', function () {
	var $controller, removeAllVowels;

	beforeEach(module('app'));

	beforeEach(inject(function ($filter) {
		removeAllVowels = $filter('removeAllVowels');
	}));

	it('should remove all vowels', function () {
		expect(removeAllVowels('teaster')).toEqual('tstr');
	});

});
