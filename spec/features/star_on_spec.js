describe('#starOn', function () {
  xit('accepts data attribute', function () {
    // given
    Helper._append('div', { 'data-star-on': 'custom' });

    // when
    var raty = new Raty('[data-star-on]').init();

    // then
    expect(raty.opt.starOn).toEqual('custom');
  });

  context('on mouseover', function () {
    beforeEach(function () {
      Helper.create('#el');
    });

    xit('changes the stars on', function () {
      // given
      var raty = new Raty('#el', { starOn: 'star-half.png' }).init();
      var stars = raty.self.querySelectorAll('img');

      // when
      Helper.trigger(Helper.last(stars), 'mouseover');

      // then
      expect(Helper.extension(stars[0].src)).toEqual('star-half.png');
      expect(Helper.extension(stars[1].src)).toEqual('star-half.png');
      expect(Helper.extension(stars[2].src)).toEqual('star-half.png');
      expect(Helper.extension(stars[3].src)).toEqual('star-half.png');
      expect(Helper.extension(stars[4].src)).toEqual('star-half.png');
    });

    context('with :starType', function () {
      xit('uses the given element', function () {
        // given
        var raty = new Raty('#el', { starType: 'i' }).init();
        var stars = raty.self.querySelectorAll('i');

        // when
        Helper.trigger(Helper.last(stars), 'mouseover');

        // then
        expect(stars[0].tagName).toEqual('I');
        expect(stars[1].tagName).toEqual('I');
        expect(stars[2].tagName).toEqual('I');
        expect(stars[3].tagName).toEqual('I');
        expect(stars[4].tagName).toEqual('I');
      });

      xit('normalizes the class name', function () {
        // given
        var raty = new Raty('#el', { starType: 'i' }).init();
        var stars = raty.self.querySelectorAll('i');

        // when
        Helper.trigger(Helper.last(stars), 'mouseover');

        // then
        expect(stars).toHaveClass('star-on-png');
      });

      xit('does not create "src" attribute', function () {
        // given
        var raty = new Raty('#el', { starType: 'i' }).init();
        var stars = raty.self.querySelectorAll('i');

        // when
        Helper.trigger(Helper.last(stars), 'mouseover');

        // then
        expect(stars).not.toHaveAttr('src');
      });

      xit('creates "data-alt" attribute', function () {
        // given
        var raty = new Raty('#el', { starType: 'i' }).init();
        var stars = raty.self.querySelectorAll('i');

        // when
        Helper.trigger(Helper.last(stars), 'mouseover');

        // then
        expect(stars).toHaveAttr('data-alt');
      });

      xit('does not create "alt" attribute', function () {
        // given
        var raty = new Raty('#el', { starType: 'i' }).init();
        var stars = raty.self.querySelectorAll('i');

        // when
        Helper.trigger(Helper.last(stars), 'mouseover');

        // then
        expect(stars).not.toHaveAttr('alt');
      });
    });
  });
});
