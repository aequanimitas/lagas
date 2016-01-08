const testsContext = require.context('./components', true, /Spec$/);
testsContext.keys().forEach(testsContext);
