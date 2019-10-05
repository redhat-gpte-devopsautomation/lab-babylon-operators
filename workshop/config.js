function initialize(workshop) {
    workshop.load_workshop();

    workshop.data_variable('GUID', process.env['GUID']);
}

exports.default = initialize;

module.exports = exports.default;
