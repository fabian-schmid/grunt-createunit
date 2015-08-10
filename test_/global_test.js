
exports['test'] = function(assert) {
    var done = assert.done || assert.async();
    
    assert.strictEqual( Crisp.name, 'OpenCrisp' );

    done();
};
