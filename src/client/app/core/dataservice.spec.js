/* jshint -W117, -W030 */
describe('dataservice', function() {

    beforeEach(function() {
        bard.appModule('app.core');
        bard.inject('$log', '$httpBackend', '$q', '$rootScope', 'dataservice', '$rootScope');

    });

    it('exists', function(){
       expect(dataservice).to.exists;
    });

    it('getMessageCount returns a value', function(){
        dataservice.getMessageCount().then(function(data){
           expect(data).exists;
        });
        // These needs to be at the end to flush the promise q
        $rootScope.$apply();
    });

    it('getPeople returns an array of people', function(){
        $httpBackend.when('GET', '/api/people').respond(200, [{}]);

        dataservice.getPeople().then(function(data){
            expect(data).to.exists;
        });

        $httpBackend.flush();

    });

    it('getPeople reporst error if server fails', function() {
        $httpBackend
            .when('GET', '/api/people')
            .respond(500, {description: 'you fail'});

        // Notice that we use catch not then to catch the 500 error
        dataservice.getPeople().catch(function(error){
           expect(error).to.match(/you fail/);
        });

        $httpBackend.flush();

    });
});
