test("hideyokids - hide/show children of demo area", function() {

	cloneDemoContent();

	var fixture = $('#qunit-fixture');
	var visibleSelector = '[style="display: block;"]'
	var invisibleSelector = '[style="display: none;"]'

	fixture.hideyokids();

	ok(fixture.find(invisibleSelector).length === fixture.children().length, "Demo area has right number of invisible children");
	ok(fixture.find(visibleSelector).length === 0, "Demo area has 0 visible children");
	ok(fixture.css('display') === 'block', "Demo area still has display set to block");

	fixture.showyokids();

	ok(fixture.find(visibleSelector).length === fixture.children().length, "Demo area has right number of visible children");
	ok(fixture.find(invisibleSelector).length === 0, "Demo area has 0 invisible children");
	ok(fixture.css('display') === 'block', "Demo area still has display set to block");


});

test("hideyowife - hide/show the first sibling of demo area", function() {


	var fixture = $('#qunit-fixture');

	fixture.html('<div class="demo-area">demo area</div><div class="sibling"><span>a child</span></div>');

	var element = fixture.find('.demo-area');
	var wife = element.next();
	var visibleSelector = '[style="display: block;"]';
	var invisibleSelector = '[style="display: none;"]';

	element.hideyowife();

	strictEqual(element.css('display'), 'block', "Demo area still has display set to block");
	strictEqual(wife.css('display'), 'none', "Sibling has display set to none");
	strictEqual(wife.children().first().css('display'), 'inline', "Child of that sibling did not have display changed");

	element.showyowife();

	strictEqual(element.css('display'), 'block', "Demo area still has display set to block");
	strictEqual(wife.css('display'), 'block', "Sibling has display set to block");
	strictEqual(wife.children().first().css('display'), 'inline', "Child of that sibling did not have display changed");

});

function cloneDemoContent(){
	$('#text-content').clone().appendTo('#qunit-fixture');
}