describe('#click', function () {
  beforeEach(function () {
    Helper.create('#el');
  });

  xit('is called on star click', function () {
    // given
    var raty = new Raty('#el', {
      click: function () {
        this.called = true;
      },
    }).init();

    var star = Helper.last(raty.self.querySelectorAll('img'));

    // when
    Helper.trigger(star, 'click');

    // then
    expect(raty.self.called).toEqual(true);
  });

  xit('has "this" as context', function () {
    // given
    var raty = new Raty('#el', {
      click: function () {
        this.result = this;
      },
    }).init();

    var star = Helper.last(raty.self.querySelectorAll('img'));

    // when
    Helper.trigger(star, 'click');

    // then
    expect(raty.self.result).toBe(document.querySelector('#el'));
  });

  xit('receives the score as argument', function () {
    // given
    var raty = new Raty('#el', {
      click: function (score) {
        this.result = score;
      },
    }).init();

    var star = Helper.last(raty.self.querySelectorAll('img'));

    // when
    Helper.trigger(star, 'click');

    expect(raty.self.result).toEqual(5);
  });

  context('with return as undefined', function () {
    xit('executes click behavior', function () {
      // given
      var raty = new Raty('#el', {
        click: function () {},
      }).init();

      var star = Helper.last(raty.self.querySelectorAll('img'));

      // when
      Helper.trigger(star, 'click');

      // then
      expect(raty.self.querySelector('input').value).toEqual('5');
    });

    xit('turns on the stars', function () {
      // given
      var raty = new Raty('#el', {
        click: function () {},
      }).init();

      var stars = raty.self.querySelectorAll('img');

      // when
      Helper.trigger(stars[0], 'click');

      // then
      expect(Helper.extension(stars[0].src)).toEqual('star-on.png');
      expect(Helper.extension(stars[1].src)).toEqual('star-off.png');
      expect(Helper.extension(stars[2].src)).toEqual('star-off.png');
      expect(Helper.extension(stars[3].src)).toEqual('star-off.png');
      expect(Helper.extension(stars[4].src)).toEqual('star-off.png');
    });
  });

  context('with return as true', function () {
    xit('applies the score', function () {
      // given
      var raty = new Raty('#el', {
        click: function () {
          return true;
        },
      }).init();

      var star = Helper.last(raty.self.querySelectorAll('img'));

      // when
      Helper.trigger(star, 'click');

      // then
      expect(raty.self.querySelector('input').value).toEqual('5');
    });

    xit('turns on the stars', function () {
      // given
      var raty = new Raty('#el', {
        click: function () {
          return true;
        },
      }).init();

      var stars = raty.self.querySelectorAll('img');

      // when
      Helper.trigger(stars[0], 'click');

      // then
      expect(Helper.extension(stars[0].src)).toEqual('star-on.png');
      expect(Helper.extension(stars[1].src)).toEqual('star-off.png');
      expect(Helper.extension(stars[2].src)).toEqual('star-off.png');
      expect(Helper.extension(stars[3].src)).toEqual('star-off.png');
      expect(Helper.extension(stars[4].src)).toEqual('star-off.png');
    });
  });

  context('with return as false', function () {
    xit('does not applies the score', function () {
      // given
      var raty = new Raty('#el', {
        click: function () {
          return false;
        },
      }).init();

      var star = raty.self.querySelector('img');

      // when
      Helper.trigger(star, 'click');

      // then
      expect(raty.self.querySelector('input').value).toEqual('');
    });

    xit('does not turns on the stars', function () {
      // given
      var raty = new Raty('#el', {
        click: function () {
          return false;
        },
      }).init();

      var stars = raty.self.querySelectorAll('img');

      // when
      Helper.trigger(stars[0], 'click');

      // then
      expect(Helper.extension(stars[0].src)).toEqual('star-off.png');
      expect(Helper.extension(stars[1].src)).toEqual('star-off.png');
      expect(Helper.extension(stars[2].src)).toEqual('star-off.png');
      expect(Helper.extension(stars[3].src)).toEqual('star-off.png');
      expect(Helper.extension(stars[4].src)).toEqual('star-off.png');
    });
  });

  context('with :cancel', function () {
    xit('executes the callback', function () {
      // given
      var raty = new Raty('#el', {
        cancelButton: true,
        click: function () {
          this.called = true;
        },
      }).init();

      var cancel = raty.self.querySelector('.raty-cancel');

      // when
      Helper.trigger(cancel, 'click');

      expect(raty.self.called).toEqual(true);
    });
  });

  context('on click without mouseover', function () {
    xit('changes the stars to on', function () {
      // given
      var raty = new Raty('#el').init();
      var stars = raty.self.querySelectorAll('img');

      // when
      Helper.trigger(Helper.last(stars), 'click');

      // then
      expect(Helper.extension(stars[0].src)).toEqual('star-on.png');
      expect(Helper.extension(stars[1].src)).toEqual('star-on.png');
      expect(Helper.extension(stars[2].src)).toEqual('star-on.png');
      expect(Helper.extension(stars[3].src)).toEqual('star-on.png');
      expect(Helper.extension(stars[4].src)).toEqual('star-on.png');
    });
  });
});
