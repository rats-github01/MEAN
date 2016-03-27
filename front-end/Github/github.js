
// GithubService.search('iot').then(function (res) { console.log(res.data); });

angular.module('github', []).factory('GithubService', function ($http) {
    return {
        // search for repos
        search: function (query) {
            return $http.get('https://api.github.com/search/repositories', {
                params: {
                    q: query
                }
            });
        }
    }
});

