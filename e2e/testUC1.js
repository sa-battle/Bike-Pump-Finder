import { Selector } from 'testcafe';

fixture `UC1: Find nearest bike pump`
    .page `http://localhost:8080/index.html`
    .clientScripts({
        // content injected into every page stubs out getCurrentPosition()
        content: `navigator.geolocation.getCurrentPosition = function(fn) {
            fn({ coords: { latitude: 51.454514, longitude: -2.587910 }, timestamp: Date.now() })
        };`
    });

test('All map markers', async function(t) {
    await t
        .click('#find-on-map')
        .expect(Selector('#markerCount').value).eql('26');
});

test('Bike Tool Station map markers', async function(t) {
    await t
        .click('#find-by-type')
        .click('#bike-tool-station')
        .click('#find-on-map')
        .expect(Selector('#markerCount').value).eql('2');
});
