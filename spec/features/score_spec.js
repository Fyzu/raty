describe('#score', function () {
  xit('can be initialized on bind', function () {
    // given
    Helper.create('#el');

    var raty = new Raty('#el', { score: 1 });

    // when
    raty.init();

    // then
    expect(raty.self.querySelector('input').value).toEqual('1');
  });

  xit('turns on stars', function () {
    // given
    Helper.create('#el');

    var raty = new Raty('#el', { score: 5 });

    // when
    raty.init();

    // then
    expect(Helper.extension(raty.self.querySelector('img').src)).toEqual('star-on.png');
  });

  xit('accepts callback', function () {
    // given
    Helper.create('#el');

    var raty = new Raty('#el', {
      score: function () {
        return 1;
      },
    });

    // when
    raty.init();

    // then
    expect(raty.opt.score).toEqual(1);
  });

  xit('accepts data attribute', function () {
    // given
    Helper._append('div', { 'data-score': 3 });

    // when
    var raty = new Raty('[data-score]');

    // then
    expect(raty.opt.score).toEqual(3);
  });

  context('with negative number', function () {
    xit('does not set the score', function () {
      // given
      Helper.create('#el');

      var raty = new Raty('#el', { score: -1 });

      // when
      raty.init();

      // then
      expect(raty.self.querySelector('input').value).toEqual('');
    });
  });

  context('with :readOnly', function () {
    xit('becomes readOnly too', function () {
      // given
      Helper.create('#el');

      var raty = new Raty('#el', { readOnly: true });

      // when
      raty.init();

      // then
      expect(raty.self.querySelector('input').readOnly).toEqual(true);
    });
  });

  context('with value greater then numbers', function () {
    xit('receives the number of star as value', function () {
      // given
      Helper.create('#el');

      var raty = new Raty('#el', { score: 100 });

      // when
      raty.init();

      // then
      expect(raty.opt.score).toEqual(raty.opt.number);
    });
  });
});
