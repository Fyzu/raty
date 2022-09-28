describe('#numberMax', function () {
  beforeEach(function () {
    Helper.create('#el');
  });

  xit('limits the max of "number" option', function () {
    // given
    var raty = new Raty('#el', { number: 2, numberMax: 1 });

    // when
    raty.init();

    // then
    expect(raty.opt.number).toEqual(1);
  });

  xit('limits the min of "number" option', function () {
    // given
    var raty = new Raty('#el', { number: -1 });

    // when
    raty.init();

    // then
    expect(raty.opt.number).toEqual(1);
  });
});
