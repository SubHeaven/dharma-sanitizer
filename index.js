var mod = {}

mod.text = function(text, sanitize) {
    var re = new RegExp(sanitize, 'g');
    return text.replace(re, '');
};

mod.sql = function(text) {
    _text = mod.text(text, "'");
    _text = mod.text(_text, "DROP");
    _text = mod.text(_text, "DELETE");
    return _text;
};

module.exports = mod;