(function (domeApp, undefined) {
	'use strict';
	if (typeof domeApp === 'undefined') return;
	domeApp.controller('InstanceLogModalCtr', ['$scope', 'instanceInfo', '$location', function ($scope, instanceInfo, $location) {
		var requestUrl = 'ws://' + $location.host();
		if ($location.port()) {
			requestUrl += ':' + $location.port();
		}
		if (!instanceInfo.containers) {
			instanceInfo.containers = [];
		}
		for (var i = 0, l = instanceInfo.containers.length; i < l; i++) {
			var url = encodeURIComponent(requestUrl + '/api/deploy/instance/log/realtime?clusterid=' + instanceInfo.clusterId + '&namespace=' + instanceInfo.namespace + '&instancename=' + instanceInfo.instanceName + '&containername=' + instanceInfo.containers[i].containerName);
			instanceInfo.containers[i].pageTxt = instanceInfo.containers[i].containerId.substring(0, 12) + '(' + instanceInfo.containers[i].imageName + ')';
			instanceInfo.containers[i].href = '/log/log.html?url=' + url;
		}
		$scope.instanceInfo = instanceInfo;
	}]);
})(window.domeApp);