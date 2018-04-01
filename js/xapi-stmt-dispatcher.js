$(document).ready(function () {
    ADL.XAPIWrapper.changeConfig({
        'endpoint': 'https://ars.mylearnerportal.com/data/xAPI/',
        "auth" : "Basic " + toBase64('5d268b008e90fc0dc7c23a4c1fbac868b9dbf76a:0b57251a9e834aa4b11f4e9638816311ac393eb5')

    });
    H5P.externalDispatcher.on('xAPI', function(event) {
        console.log(event.data.statement);
        var stmt = new ADL.XAPIStatement(
            event.data.statement.actor,
            event.data.statement.verb,
            event.data.statement.object);
        stmt.generateId();
        stmt.generateRegistration();
        console.log(JSON.stringify(stmt));
        ADL.XAPIWrapper.sendStatement(stmt);

    });
});