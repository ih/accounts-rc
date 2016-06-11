Package.describe({
  name: 'tunguska:accounts-recurse',
  version: '0.0.1',
  summary: 'OAuth2 for Recurse',
  git: 'https://github.com/ih/accounts-rc',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use(['underscore', 'random']);
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);

  api.use('accounts-oauth', ['client', 'server']);
  api.use('irvin:recurse@0.0.1', ['client', 'server']);

  api.addFiles('accounts-rc_login_button.css', 'client');

  api.addFiles('accounts-re.js');
});
