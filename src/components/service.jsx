 var getNumSatisfiedPrinciples = function getNumSatisfiedPrinciples(principles, password) {
     let satisfiedCount = principles.map( 
         p => p.predicate( password ) ).reduce(( count, satisfied ) =>
             count + ( satisfied ? 1 : 0 )
         , 0
     );
     
     return satisfiedCount;
 }
     
exports.getNumSatisfiedPrinciples = getNumSatisfiedPrinciples;