Package.describe({
  name: 'rcy:selectize-google-contacts',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Input for multiple google contacts using selectize',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['templating', 'jeremy:selectize', 'percolate:google-api']);
  api.addFiles(['selectize-google-contacts.html', 'selectize-google-contacts.js'], 'client');
});