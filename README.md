# Singleton

```The Singleton pattern is one of the most commonly used design patterns across the software development industry. The problem that it aims to solve is to maintain only a single instance of a class. This can come in handy when instantiating objects that are resource-intensive, such as database handlers.```

# Factory Method

```The Factory method is also one of the most popular design patterns. The problem that the Factory method aims to solve is creating objects without using the conventional constructor. Instead, it takes in the configuration (or description) of the object that you want and returns the newly created object.```


# Abstract Factory

```The Abstract Factory takes the Factory method up a level by making factories abstract and thus replaceable without the calling environment knowing the exact factory used or its internal workings. The calling environment only knows that all the factories have a set of common methods that it can call to perform the instantiation action.```


# Builder

```The Builder pattern is one of the most complex yet flexible creational JavaScript design patterns. It allows you to build each feature into your product one by one, providing you full control over how your object is built while still abstracting away the internal details. In the intricate example below, you’ll see the Builder design pattern in action along with Director to help make Pizzas!```

# Prototype

```The Prototype design pattern is a quick and simple way of creating new objects from existing objects by cloning them.A prototype object is first created, which can be cloned multiple times to create new objects. It comes in handy when directly instantiating an object is a more resource-intensive operation compared to creating a copy of an existing one.In the example below, you’ll see how you can use the Prototype pattern to create new documents based on a set template document```

# Adapter

```A common problem when building apps is allowing collaboration between incompatible classes.A good example to understand this is while maintaining backward compatibility. If you write a new version of a class, you’d naturally want it to be easily usable in all places where the old version worked. However, if you make breaking changes like removing or updating methods that were crucial to the functioning of the old version, you might end up with a class that needs all of its clients to be updated in order to be run.In such cases, the Adapter design pattern can help.The Adapter design pattern provides you with an abstraction that bridges the gap between the new class’s methods and properties and the old class’s methods and properties. It has the same interface as the old class, but it contains logic to map old methods to the new methods to execute similar operations. This is similar to how a power plug socket acts as an adapter between a US-style plug and a European-style plug.```

# Bridge

```Expanding upon the Adapter pattern, the Bridge design pattern provides both the class and the client with separate interfaces so that they may both work even in cases of incompatible native interfaces.It helps in developing a very loosely coupled interface between the two types of objects. This also helps in enhancing the extensibility of the interfaces and their implementations for maximum flexibility.```

# Composite 

```The Composite design pattern helps you structure and manage similar objects and entities easily. The basic idea behind the Composite pattern is that the objects and their logical containers can be represented using a single abstract class (that can store data/methods related to the object and references to itself for the container).It makes the most sense to use the Composite pattern when your data model resembles a tree structure. However, you shouldn’t try to turn a non-tree data model into a tree-like data model just for the sake of using the Composite pattern, as doing so can often take away a lot of flexibility.In the example below, you’ll see how you can use the Composite design pattern to construct a packaging system for ecommerce products that can also calculate the total order value per package```

# Decorator

```The Decorator pattern helps you add new features to existing objects by simply wrapping them up inside a new object. It’s similar to how you can wrap an already-wrapped gift box with new wrapping paper as many times as you want: Each wrap allows you to add as many features as you’d like, so it’s great on the flexibility front.From a technical perspective, no inheritance is involved, so there’sgreater freedom when designing business logic.In the example below, you’ll see how the Decorator pattern helps to add more features to a standard Customer class```

# Facade

```When building most real-world applications, the business logic usually turns out to be quite complex by the time you are done. You might end up with multiple objects and methods being involved in executing core operations in your app. Maintaining track of their initializations, dependencies, the correct order of method execution, etc., can be quite tricky and error-prone if not done correctly.The Facade design pattern helps you create an abstraction between the environment that invokes the above-mentioned operations and the objects and methods involved in completing those operations. This abstraction houses the logic for initializing the objects, tracking their dependencies, and other important activities. The calling environment has no information on how an operation is executed. You can freely update the logic without making any breaking changes to the calling client.```

# Flyweight

```The Flyweight pattern helps you solve problems that involve objects with repeating components in memory-efficient ways by helping you reuse the common components of your object pool. This helps reduce the load on the memory and results in faster execution times as well.In the example below, a large sentence is stored in the memory using the Flyweight design pattern. Instead of storing each character as it occurs, the program identifies the set of distinct characters that have been used to write the paragraph and their types (number or alphabet) and builds reusable flyweights for each character that contains details of which character and type are stored.Then the main array just stores a list of references to these flyweights in the order that they occur in the sentence instead of storing an instance of the character object whenever it occurs.This reduces the memory taken by the sentence by half. Bear in mind that this is a very basic explanation of how text processors store text.```

# Proxy

```The Proxy pattern helps you substitute an object for another object. In other terms, proxy objects can take the place of actual objects (that they’re a proxy of) and control access to the object. These proxy objects can be used to perform some actions before or after an invocation request is passed on to the actual object.In the example below, you’ll see how access to a database instance is controlled via a proxy that performs some basic validation checks on the requests before allowing them through```

# Chain of Responsibility

```The Chain of Responsibility pattern is one of the simplest behavioral design patterns. It comes in handy when you are designing logic for operations that can be handled by multiple handlers.Similar to how issue escalation works in support teams, the control is passed through a chain of handlers, and the handler responsible for taking action completes the operation. This design pattern is often used in UI design, where multiple layers of components can handle a user input event, such as a touch or a swipe.Below you will see an example of a complaint escalation using the Chain of Responsibility pattern. The complaint will be handled by the handlers on the basis of its severity```

# Iterator

```The Iterator pattern is quite simple and is very commonly used in almost all modern object-oriented languages. If you find yourself faced with the task of going through a list of objects that aren’t all the same type, then normal iteration methods, such as for loops, can get quite messy — especially if you’re also writing business logic inside them.The Iterator pattern can help you isolate the iteration and processing logic for your lists from the main business logic.Here’s how you can use it on a rather basic list with multiple types of elements```


# Mediator

```Your application design may sometimes require you to play around with a large number of distinct objects that house various kinds of business logic and often depend on one another. Handling the dependencies can sometimes get tricky as you need to keep track of how these objects exchange data and control between them.The Mediator design pattern is aimed at helping you solve this problem by isolating the interaction logic for these objects into a separate object by itself.This separate object is known as the mediator, and it is responsible for getting the work done by your lower-level classes. Your client or the calling environment will also interact with the mediator instead of the lower-level classes.```

# Memento

```Versioning objects is another common problem that you’ll face when developing apps. There are a lot of use cases where you need to maintain the history of an object, support easy rollbacks, and sometimes even support reverting those rollbacks. Writing the logic for such apps can be tough.The Memento design pattern is meant to solve this problem easily.A memento is considered to be a snapshot of an object at a certain point in time. The Memento design pattern makes use of these mementos to preserve snapshots of the object as it is changed over time. When you need to roll back to an old version, you can simply pull up the memento for it.```


# Observer

```The Observer pattern provides an alternate solution to the multi-object-interaction problem (seen before in the Mediator pattern).Instead of allowing each object to communicate with one another through a designated mediator, the Observer pattern allows them to observe each other. Objects are designed to emit events when they are trying to send out data or control, and other objects that are “listening” to these events can then receive them and interact based on their contents.```

# State

```The State design pattern is one of the most used design patterns across the software development industry. Popular JavaScript frameworks like React and Angular heavily rely on the State pattern to manage data and app behavior based on that data.Put simply, the State design pattern is helpful in situations where you can define definitive states of an entity (which could be a component, a page, an app, or a machine), and the entity has a predefined reaction to the state change.Let’s say you’re trying to build a loan application process. Each step in the application process can be defined as a state.While the customer usually sees a small list of simplified states of their application (pending, in review, accepted, and rejected), there can be other steps involved internally. At each of these steps, the application will be assigned to a distinct person and can have unique requirements.The system is designed in such a way that at the end of processing in a state, the state is updated to the next one in line, and the next relevant set of steps is started.```

# Strategy

```Also known as the Policy pattern, the Strategy pattern aims to help you encapsulate and freely interchange classes using a common interface. This helps maintain a loose coupling between the client and the classes and allows you to add as many implementations as you’d like.The Strategy pattern is known to help immensely in situations where the same operation is needed using different methods/algorithms, or where massive switch blocks need to be replaced with more human-friendly code.```

# Visitor

```The Visitor pattern aims to help you make your code extensible.The idea is to provide a method in the class that allows objects of other classes to make changes to objects of the current class easily. The other objects visit the current object (also called the place object), or the current class accepts the visitor objects, and the place object handles the visit of each external object appropriately.```