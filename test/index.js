const testsContext = require.context('./js/components', true, /Spec$/);
testsContext.keys().forEach(testsContext);
