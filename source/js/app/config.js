var config_module = angular.module('app.config', []);

var config_data = {
    'GENERAL_CONFIG': {
        'APP_NAME': 'themindsbestfriend',
        'APP_VERSION': '1.0',
        'HTML_5_MODE': true,
        'WHITE_LABEL_CLIENT_ID': 'IIAuUE9WHfPpxcHjlxBXmHHDyOiikYzu3SomGvud',
        'SOUNDCLOUD_CLIENT_ID': 'fb2ba8b85eb4cbe14ba0f63a563ce037',
        'DEFAULT_COLLECTION': 'weekly'
    }
};

angular.forEach(config_data, function(key, value) {
    config_module.constant(value, key);
});
