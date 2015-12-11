'use strict';

/* jasmine specs for services go here */

beforeEach(module('phonecatApp'));

it('check the existence of Phone factory', inject(function(Phone) {
    expect(Phone).toBeDefined();
}));