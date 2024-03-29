import { Selector } from 'testcafe';

fixture `UC2: Find public bike pump by type`
    .page `http://localhost:8080/index.html`;

test('Bike Tool Station count', async function(t) {
    await t
        .click('#find-by-type')
        .click('#bike-tool-station')
        .expect(Selector('table > tbody').childElementCount).eql(2);
});

test('On street bike pump length count', async function(t) {
    await t
        .click('#find-by-type')
        .click('#on-street-bike-pump')
        .expect(Selector('table > tbody').childElementCount).eql(18);
});

test('Bike Pump and Tool Station count', async function(t) {
    await t
        .click('#find-by-type')
        .click('#bike-pump-and-tool-station')
        .expect(Selector('table > tbody').childElementCount).eql(5);
});

