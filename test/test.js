var assert = require('assert');

describe('#getElementsByClass()', function (classMask) {
  it('Функция должна вернуть тип данных - массив при удачном вызове', function () {
    assert.isArray(getElementsByClass("toggled"), 'Тип данных не является массивом');
  });
  it('Три элемента с классом toggled', function () {
      var actual = getElementsByClass("toggled");
      assert.equal(actual.length, 3, 'Функция не верно посчитала элементы дом моделис классом toggled');
  });

  it('0 элементов с классом toggled test', function () {
    var actual = getElementsByClass("toggled test");
    assert.equal(actual.length, 0, 'Функция не верно посчитала элементы дом моделис классом toggled test');
  });

  it('0 элементов с классом toggled test', function () {
    var actual = getElementsByClass("toggled test");
    assert.equal(actual.length, 0, 'Функция не верно посчитала элементы дом моделис классом toggled test');
  });

  it('Два класса - первый строка, второй число', function () {
    var actual = getElementsByClass("toggled 2");
    assert.equal(actual.length, 1, 'Функция не верно посчитала элементы с классом toggled 2');
  });

  it('Два класса - первый число, второй строка', function () {
    var actual = getElementsByClass("2 toggled");
    assert.equal(actual.length, 1, 'Функция не верно посчитала элементы с классом toggled 2');
  });

  it('Имя класса написано не полностью', function () {
    var actual = getElementsByClass("toggle");
    assert.equal(actual.length, 0, 'Функция не должна найти класс, имя которого написано не полностью');
  });

  it('Пробел перед именем класса', function () {
    var actual = getElementsByClass(" toggled");
    assert.equal(actual.length, 3, 'Функция должна найти класс, перед которым есть пробел');
  });

  it('Пробел после имени класса', function () {
    var actual = getElementsByClass("toggled ");
    assert.equal(actual.length, 3, 'Функция должна найти класс, после которого есть пробел');
  });

  it('Пробел между двух классов', function () {
    var actual = getElementsByClass("toggled      2");
    assert.equal(actual.length, 1, 'Функция должна найти все классы, имена которых разделены несколькими пробелами');
  });

  it('Без аргумента', function () {
    var actual = getElementsByClass();
    assert.equal(actual.length, 0);
  });

  it('Пустой аргумент', function () {
    var actual = getElementsByClass("");
    assert.equal(actual.length, 0);
  });

  it('Аргумент - астерикс * ', function () {
    var actual = getElementsByClass("*");
    assert.equal(actual.length, 0);
  });

  it('Аргумент - не строка * ', function () {
    var actual = getElementsByClass([4,3]);
    assert.equal(actual.length, 0);
  });

});
