Package.describe({
	summary: "Stripe.js and Node-Stripe brought to Meteor.",
	version: "4.0.0",
	name: "benjick:stripe",
	git: "https://github.com/benjick/stripe-meteor.git"
});

Npm.depends({ "stripe": "4.0.0" });

Package.onUse(function(api) {
	api.versionsFrom('1.0.1');
	if (api.export) api.export('STRIPEMETEOR');
	api.use(['templating'], 'client');
	api.addFiles('stripe_client.html', 'client');
	api.addFiles('stripe_server.js', 'server');
});

Package.onTest(function(api) {
	api.use(['tinytest','benjick:stripe']);
	api.add_files([ "tests/client.js", "tests/checkout.js" ], 'client');
	api.add_files([ "tests/server.js" ], 'server');
});
