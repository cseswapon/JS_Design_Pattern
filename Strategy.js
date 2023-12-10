// The strategy class that can encapsulate all hosting providers
function HostingProvider() {
  // store the provider
  this.provider = "";

  // set the provider
  this.setProvider = function (provider) {
    this.provider = provider;
  };

  // set the website configuration for which each hosting provider would calculate costs
  this.setConfiguration = function (configuration) {
    this.configuration = configuration;
  };

  // the generic estimate method that calls the provider's unique methods to calculate the costs
  this.estimateMonthlyCost = function () {
    return this.provider.estimateMonthlyCost(this.configuration);
  };
}

// Foo Hosting charges for each second and KB of hosting usage
function FooHosting() {
  this.name = "FooHosting";
  this.rate = 0.0000027;

  this.estimateMonthlyCost = function (configuration) {
    return configuration.duration * configuration.workloadSize * this.rate;
  };
}

// Bar Hosting charges per minute instead of seconds
function BarHosting() {
  this.name = "BarHosting";
  this.rate = 0.00018;

  this.estimateMonthlyCost = function (configuration) {
    return (
      (configuration.duration / 60) * configuration.workloadSize * this.rate
    );
  };
}

// Baz Hosting assumes the average workload to be of 10 MB in size
function BazHosting() {
  this.name = "BazHosting";
  this.rate = 0.032;

  this.estimateMonthlyCost = function (configuration) {
    return configuration.duration * this.rate;
  };
}

function run() {
  // Create a website configuration for a website that is up for 24 hours and takes 10 MB of hosting space
  let workloadConfiguration = {
    duration: 84700,
    workloadSize: 10240,
  };

  // Create the hosting provider instances
  let fooHosting = new FooHosting();
  let barHosting = new BarHosting();
  let bazHosting = new BazHosting();

  // Create the instance of the strategy class
  let hostingProvider = new HostingProvider();

  // Set the configuration against which the rates have to be calculated
  hostingProvider.setConfiguration(workloadConfiguration);

  // Set each provider one by one and print the rates
  hostingProvider.setProvider(fooHosting);
  console.log("FooHosting cost: " + hostingProvider.estimateMonthlyCost());
  // Output: FooHosting cost: 2341.7856

  hostingProvider.setProvider(barHosting);
  console.log("BarHosting cost: " + hostingProvider.estimateMonthlyCost());
  // Output: BarHosting cost: 2601.9840

  hostingProvider.setProvider(bazHosting);
  console.log("BarHosting cost: " + hostingProvider.estimateMonthlyCost());
  // Output: BarHosting cost: 2710.4000
}

run();
