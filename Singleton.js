function Singleton() {
    let fooInstance  = null;
    let count = 0;
    function printCount() {
        console.log("Number of instance: "+count);
    }
    function init() {
        count++;
        return{}
    }
    function createInstance() {
        if (fooInstance==null) {
            fooInstance = init()
        }return fooInstance
    }
    function closeInstance() {
        count--;
        fooInstance=null;
    }
    return{
        initialize: createInstance,
        close: closeInstance,
        printCount: printCount
    }
}

let foo = Singleton();
foo.printCount()
foo.initialize()
foo.printCount()
foo.initialize()
foo.printCount()
foo.initialize()
foo.close()
foo.printCount()
