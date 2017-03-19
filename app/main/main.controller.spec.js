(function() {
  'use strict';

  describe('controllers', function(){
    var vm;
    var $timeout;
    var toastr;

    beforeEach(module('protractorRecorder'));
    beforeEach(inject(function(_$rootScope_, _$controller_, _$location_, _$timeout_) {
		var $scope = _$rootScope_.$new();
		spyOn(_$location_, 'path').and.returnValue('/conf');
        vm = _$controller_('MainController', {$scope: $scope});
        $timeout = _$timeout_;
    }));

    it('should have a timestamp creation date', function() {
      expect(vm.creationDate).toEqual(jasmine.any(Number));
    });

    it('should define animate class after delaying timeout ', function() {
      $timeout.flush();
      expect(vm.classAnimation).toEqual('rubberBand');
    });

    it('should define more than 5 awesome things', function() {
      expect(angular.isArray(vm.awesomeThings)).toBeTruthy();
      expect(vm.awesomeThings.length === 5).toBeTruthy();
    });
  });
})();
