/**
 * Let's say you're trying to build an online store. It will have multiple components and
 * complex business logic. In the example below, you will find a tiny segment of an online
 * store composed together using the Facade design pattern. The various manager and helper
 * classes are defined first of all.
 */

function CartManager() {
  this.getItems = function () {
    // logic to return items
    return [];
  };

  this.clearCart = function () {
    // logic to clear cart
  };
}

function InvoiceManager() {
  this.createInvoice = function (items) {
    // logic to create invoice
    return {};
  };

  this.notifyCustomerOfFailure = function (invoice) {
    // logic to notify customer
  };

  this.updateInvoicePaymentDetails = function (paymentResult) {
    // logic to update invoice after payment attempt
  };
}

function PaymentProcessor() {
  this.processPayment = function (invoice) {
    // logic to initiate and process payment
    return {};
  };
}

function WarehouseManager() {
  this.prepareForShipping = function (items, invoice) {
    // logic to prepare the items to be shipped
  };
}

// This is where facade comes in. You create an additional interface on top of your
// existing interfaces to define the business logic clearly. This interface exposes
// very simple, high-level methods for the calling environment.
function OnlineStore() {
  this.name = "Online Store";

  this.placeOrder = function () {
    let cartManager = new CartManager();
    let items = cartManager.getItems();

    let invoiceManager = new InvoiceManager();
    let invoice = invoiceManager.createInvoice(items);

    let paymentResult = new PaymentProcessor().processPayment(invoice);
    invoiceManager.updateInvoicePaymentDetails(paymentResult);

    if (paymentResult.status === "success") {
      new WarehouseManager().prepareForShipping(items, invoice);
      cartManager.clearCart();
    } else {
      invoiceManager.notifyCustomerOfFailure(invoice);
    }
  };
}

// The calling environment is unaware of what goes on when somebody clicks a button to
// place the order. You can easily change the underlying business logic without breaking
// your calling environment.
function run() {
  let onlineStore = new OnlineStore();

  onlineStore.placeOrder();
}
